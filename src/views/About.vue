<template>
  <div class="about">
    <b-card>
      <template #header>
        <div style="text-align: center">
          <b class="mb-0">محاسبه قيمت حباب</b>
        </div>
      </template>
      <b-row>
        <b-col cols="2"> </b-col>

        <b-col cols="8">
          <b-row dir="rtl">
            <b-col class="firstcol" align="right" dir="ltr">
              <v-select
                reverse
                class="select"
                :items="showList"
                label="انتخاب اول"
                :item-text="'Name'"
                :item-value="'Value'"
                v-model="setPrice1"
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
                :items="showList"
                label="انتخاب دوم"
                :item-text="'Name'"
                :item-value="'Value'"
                v-model="setPrice2"
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
                :loading="resetLoading"
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
                :loading="hobabLoading"
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
            <b-col cols="1"> </b-col>
            <b-col cols="5" align="left">
              {{ Hobab2 }}
              <b> : حباب دوم </b>
            </b-col>

            <b-col cols="5" align="right">
              {{ Hobab1 }}

              <b> : حباب اول </b>
            </b-col>

            <b-col cols="1"> </b-col>
          </b-row>
        </b-col>

        <b-col cols="2"> </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config";

export default {
  async created() {
    await axios
      .get(this.url1, {})
      .then((response) => {
        this.form.dollar = response.data.Data.usdPrice;
        this.form.ons = response.data.Data.onsPrice;
        this.globalDolar = response.data.Data.usdPrice;
        this.globalOnc = response.data.Data.onsPrice;
      });

    await axios
      .get(this.url2)
      .then((response) => {
        // this.list = response.data.Data;
        this.showList = response.data.Data;
      });
  },

  components: {},
  data() {
    return {
      url1: `${config.paseUrl}` + "api/v1/CurrentPrice/GetTalagram",
      url2: `${config.paseUrl}` + "api/v1/Tools/GetList",
      url3: `${config.paseUrl}` + "api/v1/Tools/GetHobab",




      resetLoading: false,
      hobabLoading: false,

      setPrice1: "",
      setPrice2: "",

      numberRule: (v) => {
        if (!v.trim()) return true;
        if (!isNaN(parseFloat(v)) && v >= 0 && v <= 999999999) return true;
        return "! لطفا عدد وارد کنید";
      },

      globalDolar: "",
      globalOnc: "",
      list: [],
      showList: [],

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

  watch: {
    setPrice1(ProductNameEnum1) {
      if (ProductNameEnum1 != "") {
        for (var item of this.showList) {
          if (item.Value == ProductNameEnum1) {
            this.form.price1 = item.Price;
            this.form.ProductNameEnum1 = ProductNameEnum1;
          }
        }
      }
    },

    setPrice2(ProductNameEnum2) {
      if (ProductNameEnum2 != "") {
        for (var item of this.showList) {
          if (item.Value == ProductNameEnum2) {
            this.form.price2 = item.Price;
            this.form.ProductNameEnum2 = ProductNameEnum2;
          }
        }
      }
    },
  },

  methods: {
    async hobabValue() {
      this.hobabLoading = true;
      await axios

        .post(this.url3, this.form)
        .then((response) => {
          this.Hobab1 = response.data.Data.Hobab1;
          this.Hobab2 = response.data.Data.Hobab2;
        })
        .catch((e) => {
          this.errors.push(e);
        });
      this.hobabLoading = false;
    },

    async reset() {
      // this.showList = [];
      this.resetLoading = true;

      this.form.price1 = "";
      this.form.price2 = "";
      this.form.ons = this.globalOnc;
      this.form.dollar = this.globalDolar;
      this.Hobab1 = "";
      this.Hobab2 = "";

      await axios
        .get(this.url2)
        .then((response) => {
          // this.list = response.data.Data;
          this.showList = response.data.Data;
        });

      this.resetLoading = false;
    },
  },
};
</script>

<style scoped>
.first {
  padding: 0px !important;
  margin: 0px !important;
}

/* .firstcol {
  padding-right: 15%;
}
.secol {
  padding-left: 15%;
} */

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
