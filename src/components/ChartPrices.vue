<template>
  <div id="chart">
    <apexcharts type="line" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
const csvData =  require('../../data/monthlyPrices.csv')


export default {
  name: 'Chart',
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: 'Oil Prices'
        },
        xaxis: {
          type: 'datetime',
          categories: csvData.map(item => item.date)
        },
      },
      series: [{
        name: 'Price',
        data: csvData.map(item => item.price)
      }]
    }
  }
}
</script>
<style>
 #chart{
   margin: auto;
   margin-top: 100px;
   width: 800px;
   height: 600px;
 }
</style>