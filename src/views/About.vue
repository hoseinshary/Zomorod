<template>
  <div class="about">
    <b-card>
      <template #header>
        <div style="text-align: center">
          <b class="mb-0">محاسبه قيمت حباب</b>
        </div>
      </template>

      <b-row dir="rtl">
        <b-col class="firstcol" align="right" dir="ltr">
          <v-select
            reverse
            class="select"
            :items="list"
            label="انتخاب اول"
            :item-text="'Name'"
            :item-value="'Value'"
            v-model="form.ProductNameEnum1"
            dense
            outlined
          ></v-select>

          <v-text-field
           :rules="[numberRule]"
            reverse
            class="select"
            label=" قیمت اول"
            v-model="form.price1"
            outlined
            dense
          ></v-text-field>
        </b-col>

        <b-col class="secol" align="left" dir="ltr">
          <v-select
            reverse
            class="select"
            :items="list"
            label="انتخاب دوم"
            :item-text="'Name'"
            :item-value="'Value'"
            v-model="form.ProductNameEnum2"
            dense
            outlined
          ></v-select>
          <v-text-field
            :rules="[numberRule]"
            reverse
            class="select"
            label=" قیمت دوم"
            v-model="form.price2"
            outlined
            dense
          ></v-text-field>
        </b-col>
      </b-row>

      <b-row>
        <b-col align="center">
          <v-text-field
          :rules="[numberRule]"
            reverse
            class="select"
            label=" قیمت انس"
            v-model="form.ons"
            outlined
            dense
          ></v-text-field>
        </b-col>
      </b-row>

      <b-row>
        <b-col align="center">
          <v-text-field
          :rules="[numberRule]"
            reverse
            class="select"
            label=" قیمت دلار"
            v-model="form.dollar"
            outlined
            dense
          ></v-text-field>
        </b-col>
      </b-row>

      <br />

      <b-row>
        <b-col align="center">
          <v-btn
            class="select2"
            color="#bea44d"
            elevation="3"
            rounded
            x-large
            outlined
            @click="reset()"
            >تنظیم مجدد</v-btn
          >
          <v-btn
            class="btnsize ml-1"
            color="#bea44d"
            elevation="5"
            rounded
            x-large
            @click="hobabValue()"
            >محاسبه حباب</v-btn
          >
        </b-col>
      </b-row>

      <br />
      <br />
      <hr />

      <b-row>
        <b-col align="left" class="hobab2">
          {{ Hobab2 }}
          <b> :حباب دوم </b>
        </b-col>
        <b-col align="right" class="hobab1">
          {{ Hobab2 }}
          <b> : حباب اول </b>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";



export default {
  async created() {

     await axios
      .get(`http://localhost:8080/api/v1/CurrentPrice/GetTalagram`, {
     
      })
      .then((response) => {
        this.form.dollar = response.data.Data.usdPrice;
        this.form.ons = response.data.Data.onsPrice;
        this.globalDolar = response.data.Data.usdPrice;
        this.globalOnc = response.data.Data.onsPrice;
      })




    await axios
      .get(`http://localhost:8080/api/v1/Tools/GetList`)
      .then((response) => {
        this.list = response.data.Data;
      });
  },

  components: {},
  data() {
    return {
         numberRule: v  => {
      if (!v.trim()) return true;
      if (!isNaN(parseFloat(v)) && v >= 0 && v <= 9999999) return true;
      return '!عدد وارد کنید';
    },
      
      globalDolar: "",
      globalOnc: "",
      list: [],
      ProductNamelist1: ["MesghalGoldShirazApi", "of", "options"],
      ProductNamelist2: ["Seke86GoldShirazApi", "of", "options"],
      Hobab1: "",
      Hobab2: "",

      form: {
        ProductNameEnum1: "",
        ProductNameEnum2: "",
        price1: "",
        price2: "",
        ons: "",
        dollar: "",
      },
    };
  },

  methods: {
    async hobabValue() {
      await axios
        .post(`http://localhost:8080/api/v1/Tools/GetHobab`, this.form)
        .then((response) => {
          this.Hobab1 = response.data.Data.Hobab1;
          this.Hobab2 = response.data.Data.Hobab2;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },

    reset() {
      this.form.ProductNameEnum1 = "";
      this.form.ProductNameEnum2 = "";
      this.form.MesghalGoldShirazApi = "";
      this.form.Seke86GoldShirazApi = "";
      this.form.price1 = "";
      this.form.price2 = "";
      this.form.ons = this.globalOnc;
      this.form.dollar = this.globalDolar;
      this.Hobab1 = "";
      this.Hobab2 = "";
    },
  },
};
</script>

<style scoped>


.first {
  padding: 0px !important;
  margin: 0px !important;
}

.firstcol {
   padding-right: 15%;
}
.secol {
  padding-left: 15%;
}

.hobab2 {
  margin-left: 20%;
}

.hobab1 {
  margin-right: 20%;
}

.select {
  width: 350px !important;
}
.select2 {
  width: 110px !important;
}
.btnsize {
  width: 200px;
}
</style>
