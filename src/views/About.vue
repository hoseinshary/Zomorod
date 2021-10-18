<template>
  <div class="about">
    <b-card class="first">
      <template #header>
        <div style="text-align: center">
          <b class="mb-0">محاسبه قيمت حباب</b>
        </div>
      </template>

      <b-row dir="rtl">
        <b-col class="mr-15 ml-15" dir="ltr">
          <v-select
            :items="ProductNamelist1"
            label="انتخاب اول"
            :item-text="'name'"
            :item-value="'id'"
            v-model="ProductNameEnum1"
            dense
            outlined
          ></v-select>
          <v-text-field
            label=" قیمت اول"
            v-model="price1"
            outlined
            dense
          ></v-text-field>
        </b-col>

        <b-col class="mr-15 ml-15" dir="ltr">
          <v-select
            :items="ProductNamelist2"
            label="انتخاب دوم"
            :item-text="'name'"
            :item-value="'id'"
            v-model="ProductNameEnum2"
            dense
            outlined
          ></v-select>
          <v-text-field
            label=" قیمت دوم"
            v-model="price2"
            outlined
            dense
          ></v-text-field>
        </b-col>
      </b-row>
      <b-row class="but">
        <v-text-field
          label=" قیمت انس"
          v-model="ons"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          label=" قیمت دلار"
          v-model="dollar"
          outlined
          dense
        ></v-text-field>
        <v-btn
          color="#bea44d"
          elevation="4"
          rounded
          x-large
          @click="hobabValue()"
          >محاسبه حباب</v-btn
        >
      </b-row>
      <br />
      <br />

      <b-row class=" mr-15 ml-15">
        <b-col class="mr-15 ml-15">
          <v-text-field
            label=" قیمت حباب دوم"
            v-model="nav2"
            outlined
            dense
          ></v-text-field>
        </b-col>
        <b-col class=" mr-15 ml-15">
          <v-text-field
            label=" قیمت حباب اول"
            v-model="nav1"
            outlined
            dense
          ></v-text-field>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import axios from  "axios";

export default {
  components: {},
  data() {
    return {
      ProductNamelist1: ["list", "of", "options"],
      ProductNamelist2: ["list", "of", "options"],

      MesghalGoldShirazApi: "",
      Seke86GoldShirazApi: "",
      price1: "",
      price2: "",
      ons: "",
      dollar: "",
      nav1: "",
      nav2: "",
    };
  },

  methods: {
    async hobabValue() {
      await axios
        .post(`http://localhost:8080/api/v1/Tools/GetHobab`, {
          // headers: {
          //   "Access-Control-Allow-Origin": "*",
          // },
        })
        .then(() => {


        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>

<style scoped>
.first {
  padding: 0px !important;
  margin: 0px !important;
}
.but {
  /* margin-left: 60%; */
  margin-right: 40% !important;
  margin-left: 40% !important;
}
</style>
