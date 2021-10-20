<template>
  <div class="d">
    <div class="background">
      <b-row align="center">
        <h1>قیمت رسمی طلا و مسکوکات بانکی</h1>
      </b-row>

      <b-row align="center">
        <h2>تاریخ امروز</h2>
      </b-row>
      <br />

      <b-row>
        <b-col cols="3"> </b-col>

        <b-col cols="6">
          <v-card align="right" elevation="21" outlined shaped>
            <h3>: هر گرم طلا 18 عیار</h3>
          </v-card>

          <br />

          <v-card align="right" elevation="14" outlined shaped>
            <h3>: هر گرم طلا 24 عیار</h3>
          </v-card>
          <br />

          <b-card
            text-align="right"
            bg-variant="secondary"
            text-variant="white"
            class="text-center"
          >
            <b-card-text align="right"> : تمام سکه 86 </b-card-text>
          </b-card>

          <br />

          <b-card
            text-align="right"
            bg-variant="dark"
            text-variant="white"
            class="text-center"
          >
            <b-card-text align="right"> : یک مثقال طلای 17 عیار </b-card-text>
          </b-card>
          <br />

          <b-card
            text-align="right"
            bg-variant="secondary"
            text-variant="white"
            class="text-center"
          >
            <b-card-text align="right"> : ربع سکه 86 </b-card-text>
          </b-card>
          <br />

          <b-card
            text-align="right"
            bg-variant="dark"
            text-variant="white"
            class="text-center"
          >
            <b-card-text align="right"> : سکه یک گرمی </b-card-text>
          </b-card>

          <br />

          <b-card
            text-align="right"
            bg-variant="secondary"
            text-variant="white"
            class="text-center"
          >
            <b-card-text align="right"> : نیم سکه 86 </b-card-text>
          </b-card>
          <br />

          <b-card
            text-align="right"
            bg-variant="dark"
            text-variant="white"
            class="text-center"
          >
            <b-card-text align="right"> : انس جهانی طلا به دلار </b-card-text>
          </b-card>
        </b-col>

        <b-col cols="3"> </b-col>
      </b-row>
    </div>

    <!-- <img
      class="mt-0 mb-0 pt-0 pb-0"
      src="@/assets/background1.jpg"
      alt="طلاگرام"
    /> -->

    <!-- <b-row> 
        <h1> قیمت رسمی طلا و مسکوکات بانکی </h1>
            <b-row><h2> تاریخ امروز </h2> </b-row>
    </b-row> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.d {
  width: 100%;
  height: 100%;
}
.background {
  background-image: url("~@/assets/background1.jpg");
  height: 100%;
  width: 100%;
}
</style>