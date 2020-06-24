<script>
import { Doughnut } from "vue-chartjs";
// import ChartJsPluginDataLabels from "chartjs-plugin-datalabels";

export default {
  extends: Doughnut,
  props: {
    chartdata: Object
  },
  mounted: function() {
    // this.addPlugin(ChartJsPluginDataLabels);
    this.renderChart(this.chartdata, this.chartdata.options);
  }
};
</script>
<style></style>
