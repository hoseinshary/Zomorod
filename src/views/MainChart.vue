<template>
  <trading-vue :data="chart"
               :toolbar="true"
                :width="this.width"
                :height="this.height"
                :overlays="overlays"
               >
  </trading-vue>
</template>
<script>

import Data from "@/data.json";
import  {DataCube , TradingVue} from "trading-vue-js";
import TestOverlay from './TestOverlay.vue'


export default {
  name: "MainChart",
  components: { TradingVue },

  

  mounted() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
    window.dc = this.chart;
  },

 
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },

  data() {
    return {         
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