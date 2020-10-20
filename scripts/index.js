const axios = require('axios')
const { createObjectCsvWriter } = require('csv-writer')

const APIKEY = '4803588b326265fdef50becfb8eedbdd'
const PATH = '../data/monthlyPrices.csv'

/**
 *
 * @param {String} key - APIKEY to be used to fetch file information
 * Using axios to fetch data and return the value of request information
 * as a JSON formart
 */
async function fetchData(key) {
  try {
    const response = await axios.get(
      `http://api.eia.gov/series/?api_key=${key}&series_id=NG.RNGWHHD.M`
    )
    return response.data.series[0].data
  } catch (error) {
    throw new Error('Error On Fetch Information.')
  }
}

/**
 *
 * @param {Array} array - JSON array of prices to be parsed
 * This method will map the values and split the date and price
 * and return them to be used on csv format
 */
function parserArrayInformation(array) {
  return array.map(value => ({
    date: `${value[0].slice(0, 4)}-${value[0].slice(4, 6)}`,
    price: value[1]
  }))
}

/**
 *
 * @param {Array} data - List of prices to be saved as csv file
 * The default path is thee PATH value on main scope
 */
function createCSV(data) {
  const writeCSV = createObjectCsvWriter({
    path: PATH,
    header: [
      { id: 'date', title: 'date' },
      { id: 'price', title: 'price' }
    ]
  })

  writeCSV.writeRecords(data)
}