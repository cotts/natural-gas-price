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