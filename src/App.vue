<template>
  <v-app>
    <div id="app">
      <b-row>
        <p>header</p>
      </b-row>

      <b-card-group deck class="mr-2">
        <b-card header="نرخ ها">
          <b-card-text>
            <b-row>
              <b-col>
                <b> نرخ نقره :</b>
                {{ silver }}
              </b-col>

              <b-col>
                <b> نرخ انس :</b>
                {{ ons }}
              </b-col>

              <b-col>
                <b> نرخ دلار :</b>

                {{ dollar }}
              </b-col>
            </b-row>
          </b-card-text>

          <b-row>
            <b-col class="mr-2">
              <b-card-group deck>
                <b-card header="صندوق طلا" title="Title">
                  <b-card-text> </b-card-text>
                </b-card>
              </b-card-group>
            </b-col>

            <b-col>
              <b-card-group deck>
                <b-card header="سكه بورسي" title="Title">
                  <b-card-text> </b-card-text>
                </b-card>
              </b-card-group>
            </b-col>

            <b-col>
              <b-card-group deck>
                <b-card header="نرخ طلا و سكه" title="Title">
                  <b-card-text> </b-card-text>
                </b-card>
              </b-card-group>
            </b-col>
          </b-row>

          <b-row>
            <p>ارشیو ها</p>
          </b-row>
        </b-card>
      </b-card-group>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "App",

  components: {},

  data: () => ({
    dollar: 50,
    silver: 70,
    ons: 80,
  }),
  async created() {
    await axios
      .get(`http://95.217.131.10/api/v1/CurrentPrice/GetTalagram`)
      .then((response) => {
        this.dollar = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>
