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
            :items="places"
            label="انتخاب اول"
            :item-text="'name'"
            :item-value="'id'"
            v-model="placeId"
            dense
            outlined
          ></v-select>
          <v-text-field
            label=" قیمت اول"
            v-model="agencyName"
            outlined
            dense
          ></v-text-field>
        
        </b-col>

        <b-col class="mr-15 ml-15" dir="ltr">
          <v-select
            :items="places"
            label="انتخاب دوم"
            :item-text="'name'"
            :item-value="'id'"
            v-model="placeId"
            dense
            outlined
          ></v-select>
          <v-text-field
            label=" قیمت دوم"
            v-model="agencyName"
            outlined
            dense
          ></v-text-field>
          
        </b-col>
      </b-row>
      <b-row class="but">
        <v-text-field
            label=" قیمت انس"
            v-model="agencyName"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            label=" قیمت دلار"
            v-model="agencyName"
            outlined
            dense
          ></v-text-field>
        <v-btn  color="#bea44d" elevation="5" rounded x-large>محاسبه حباب</v-btn>
      </b-row>
      <br />
      <br />

      <b-row class= " mr-15 ml-15">
        <b-col class=" mr-15 ml-15">
          <v-text-field
            label=" قیمت حباب اول"
            v-model="agencyName"
            outlined
            dense
          ></v-text-field>
        </b-col>
        <b-col class="mr-15 ml-15">
          <v-text-field
            label=" قیمت حباب دوم"
            v-model="agencyName"
            outlined
            dense
          ></v-text-field>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      options: ["list", "of", "options"],

      firstSelection: [],
      value1: 0,
      selected: null,
    };
  },
};
</script>

<style scoped>
.first {
  padding: 0px !important;
  margin: 0px !important;
}
.but{
  /* margin-left: 60%; */
  margin-right: 40% !important; 
  margin-left: 40% !important; 


}
</style>
