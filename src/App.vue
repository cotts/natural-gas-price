<template>
  <div id="app">
    <h3 id="title">Henry Hub Natural Gas Spot Price</h3>
    <Chart />
  </div>
</template>

<script>
import Chart from './components/ChartPrices.vue'

export default {
  name: 'app',
  components: {
    Chart
  },
}
</script>
<style>
  #title {
  padding-top: 20px;
  text-align: center;
  margin: auto;
}
</style>
