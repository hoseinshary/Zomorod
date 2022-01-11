<template>
  <trading-vue
    :data="chart"
    :toolbar="true"
    :width="this.width"
    :height="this.height"
    :overlays="overlays"
  >
  </trading-vue>
</template>
<script>
import axios from "axios";
import Data from "@/data.json";
import { DataCube, TradingVue } from "trading-vue-js";
import TestOverlay from "./TestOverlay.vue";
export default {
  name: "MainChart",
  components: { TradingVue },

  async mounted() {
    await axios
      .get(
        `http://localhost:8080//api/v1/ArchivedPrice/GetSekeByTimeFrame/?timeframe=5`,
        {}
      )
      .then((response) => {
        this.form.dollar = response.data.Data.usdPrice;
        this.form.ons = response.data.Data.onsPrice;
        this.globalDolar = response.data.Data.usdPrice;
        this.globalOnc = response.data.Data.onsPrice;
      });
    window.addEventListener("resize", this.onResize);
    this.onResize();
    window.dc = this.chart;
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
  data() {
    return {
      //data
      width: window.innerWidth,
      height: window.innerHeight,
      overlays: [TestOverlay],
      chart: new DataCube(Data),
    };
  },
};
</script>
<style>
</style>