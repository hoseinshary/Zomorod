<template>
  <div class="home">
    <div id="nav">
      <b-card-group deck class="mr-2">
        <b-card>
          <template #header>
            <div style="text-align: center">
              <b>
                <b class="mb-0">نرخ های امروز</b>
                {{ today }}
              </b>
            </div>
          </template>
          <b-row>
            <b-col cols="1"> </b-col>
            <b-col cols="10">
              <b-card-text>
                <b-row class="mb-4" dir="rtl">
                  
                  <div class="background container mr-2 ">
                    <b>
                      <b>
                        <v-icon style="font-size: 20px; color: silver"
                          >attach_money</v-icon
                        >

                        نرخ دلار :</b
                      >

                      {{ numberWithCommas(dollar) }}
                    </b>
                  </div>

                  <div class="background container mr-3">
                    <b>
                      <b>
                        <v-icon style="font-size: 20px; color: silver"
                          >crop_7_5</v-icon
                        >

                        نرخ انس :</b
                      >
                      {{ ons }}
                    </b>
                  </div>

                  <div class="background container mr-3">
                    <b>
                      <b>
                        <v-icon style="font-size: 18px; color: silver"
                          >radio_button_unchecked</v-icon
                        >

                        نرخ نقره :</b
                      >
                      {{ numberWithCommas(silver) }}
                    </b>
                  </div>
                </b-row>
              </b-card-text>

              <b-row>
                <b-col>
                  <b-card-group dir="rtl">
                    <b-card border-variant="dark">
                      <template #header>
                        <div style="text-align: center">
                          <b class="mb-0">صندوق طلا</b>
                        </div>
                      </template>

                      <div class="container">
                        <b-card-text>
                          <b-row class="test1" dir="rtl">
                            <b class="mr-0">
                              <v-icon style="font-size: 20px; color: #120e0c"
                                >inventory_2</v-icon
                              >

                              صندوق پشتوانه طلای لوتوس (طلا)
                            </b>
                            <br />

                            <b class="mr-16"> قیمت پایانی :</b>
                            <p dir="ltr">
                              {{ numberWithCommas(talaLotusPriceOpen) }}
                            </p>
                          </b-row>

                          <b-row class="test mr-8">
                            <div class="test d-flex justify-content-start">
                              <v-btn
                                color="#7575a3"
                                @click="showHobabLoutosDetails"
                                icon
                                large
                              >
                                <v-icon style="font-size: 30px"
                                  >keyboard_arrow_down</v-icon
                                >
                                <b> جزئیات </b>
                              </v-btn>
                            </div>
                          </b-row>

                          <div class="mt-2 mr-16" v-show="showHobabLoutos">
                            <b> حباب نسبت به طلای خام سكه :</b>
                            <p dir="ltr">{{ HobabTalaLotusSeke }}%</p>

                            <b> حباب نسبت به NAV :</b>
                            <p dir="ltr">{{ HobabTalaLotusNav }}%</p>

                            <b> مقدار NAV ابطال:</b>
                            <p dir="ltr">
                              {{ numberWithCommas(talaLotusPricePrevious) }}
                            </p>
                          </div>

                          <hr />

                          <b-row dir="rtl">
                            <b class="mr-0">
                              <v-icon style="font-size: 20px; color: #120e0c"
                                >inventory_2</v-icon
                              >

                              صندوق پشتوانه طلای مفید (عیار)</b
                            >
                            <br />

                            <b class="mr-16"> قیمت پایانی :</b>
                            <p dir="ltr">
                              {{ numberWithCommas(talaAyarPriceOpen) }}
                            </p>
                          </b-row>

                          <b-row class="test mr-8">
                            <div class="test d-flex justify-content-start">
                              <v-btn
                                color="#7575a3"
                                @click="showHobabEyarDetails"
                                icon
                                large
                              >
                                <v-icon style="font-size: 30px"
                                  >keyboard_arrow_down</v-icon
                                >
                                <b> جزئیات </b>
                              </v-btn>
                            </div>
                          </b-row>

                          <div class="mt-2 mr-16" v-show="showHobabEyar">
                            <b> حباب نسبت به طلای خام سكه :</b>
                            <p dir="ltr">{{ HobabTalaAyarSeke }}%</p>

                            <b> حباب نسبت به NAV :</b>
                            <p dir="ltr">{{ HobabTalaAyarNav }}%</p>

                            <b> مقدار NAV ابطال:</b>
                            <p dir="ltr">
                              {{ numberWithCommas(talaAyarPricePrevious) }}
                            </p>
                          </div>

                          <hr />

                          <b-row dir="rtl">
                            <b>
                              <v-icon style="font-size: 20px; color: #120e0c"
                                >inventory_2</v-icon
                              >

                              صندوق پشتوانه طلای زر (زر)</b
                            >
                            <br />

                            <b class="mr-16"> قیمت پایانی :</b>
                            <p dir="ltr">
                              {{ numberWithCommas(talaZarPriceOpen) }}
                            </p>
                          </b-row>

                          <b-row class="test mr-8">
                            <div class="test d-flex justify-content-start">
                              <v-btn
                                color="#7575a3"
                                @click="showHobabZarDetails"
                                icon
                                large
                              >
                                <v-icon style="font-size: 30px"
                                  >keyboard_arrow_down</v-icon
                                >
                                <b> جزئیات </b>
                              </v-btn>
                            </div>
                          </b-row>

                          <div class="mt-2 mr-16" v-show="showHobabZar">
                            <b> حباب نسبت به طلای خام سكه :</b>
                            <p dir="ltr">{{ HobabTalaZarSeke }}%</p>

                            <b> حباب نسبت به NAV :</b>
                            <p dir="ltr">{{ HobabTalaZarNav }}%</p>

                            <b> مقدار NAV ابطال:</b>
                            <p dir="ltr">
                              {{ numberWithCommas(talaZarPricePrevious) }}
                            </p>
                          </div>

                          <hr />

                          <b-row dir="rtl">
                            <b>
                              <v-icon style="font-size: 20px; color: #120e0c"
                                >inventory_2</v-icon
                              >

                              صندوق پشتوانه طلای کیان (گوهر)</b
                            >
                            <br />

                            <b class="mr-16"> قیمت پایانی :</b>

                            <p dir="ltr">
                              {{ numberWithCommas(talaGoharPriceOpen) }}
                            </p>
                          </b-row>

                          <b-row class="test mr-8">
                            <div class="test d-flex justify-content-start">
                              <v-btn
                                color="#7575a3"
                                @click="showHobabGoharDetails"
                                icon
                                large
                              >
                                <v-icon style="font-size: 30px"
                                  >keyboard_arrow_down</v-icon
                                >
                                <b> جزئیات </b>
                              </v-btn>
                            </div>
                          </b-row>

                          <div class="mt-2 mr-16" v-show="showHobabGohar">
                            <b> حباب نسبت به طلای خام سكه :</b>
                            <p dir="ltr">{{ HobabTalaGoharSeke }}%</p>

                            <b> حباب نسبت به NAV :</b>
                            <p dir="ltr">{{ HobabTalaGoharNav }}%</p>

                            <b> مقدار NAV ابطال:</b>
                            <p dir="ltr">
                              {{ numberWithCommas(talaGoharPricePrevious) }}
                            </p>
                          </div>
                        </b-card-text>
                      </div>
                    </b-card>
                  </b-card-group>
                </b-col>

                <b-col>
                  <b-card-group>
                    <b-card dir="rtl" border-variant="dark">
                      <template #header>
                        <div style="text-align: center">
                          <b class="mb-0">سکه بورسی</b>
                        </div>
                      </template>

                      <div class="container">
                        <b-card-text>
                          <b-row dir="rtl">
                            <b>
                              <v-icon style="font-size: 30px; color: #fef478"
                                >lens</v-icon
                              >

                              سکه یک روزه بانک رفاه
                            </b>
                            <br />

                            <b class="mr-16"> قیمت پایانی :</b>
                            <p class="mb-0" dir="ltr">
                              {{ numberWithCommas(sekeRefahPrice) }}
                            </p>
                          </b-row>

                          <b-row class="test mr-10">
                            <div class="test d-flex justify-content-start">
                              <v-btn
                                color="#7575a3"
                                @click="showHobabRefahDetail"
                                icon
                                large
                              >
                                <v-icon style="font-size: 30px"
                                  >keyboard_arrow_down</v-icon
                                >
                                <b> جزئیات </b>
                              </v-btn>
                            </div>
                          </b-row>

                          <div class="mt-2 mr-16" v-show="showHobabRefah">
                            <b> حباب نسبت به بازار آزاد :</b>
                            <p dir="ltr">{{ HobabRefahCoinFree }}%</p>

                            <b> حباب نسبت به طلای خام سكه :</b>
                            <p dir="ltr">{{ HobabRefahCoinSekeRiyal }} %</p>
                          </div>

                          <hr />

                          <b-row dir="rtl">
                            <b>
                              <v-icon style="font-size: 30px; color: #fef478"
                                >lens</v-icon
                              >

                              سکه یک روزه بانک صادرات
                            </b>
                            <br />

                            <b class="mr-16"> قیمت پایانی :</b>

                            <p dir="ltr">
                              {{ numberWithCommas(sekeSaderatPrice) }}
                            </p>
                          </b-row>

                          <b-row class="test mr-10">
                            <div class="test d-flex justify-content-start">
                              <v-btn
                                color="#7575a3"
                                @click="showHobabSaderatDetail"
                                icon
                                large
                              >
                                <v-icon style="font-size: 30px"
                                  >keyboard_arrow_down</v-icon
                                >
                                <b> جزئیات </b>
                              </v-btn>
                            </div>
                          </b-row>

                          <div class="mt-2 mr-16" v-show="showHobabSaderat">
                            <b-row>
                              <b> حباب نسبت به بازار آزاد :</b>
                              <p dir="ltr">{{ HobabSaderatCoinFree }} %</p>
                            </b-row>

                            <b-row>
                              <b> حباب نسبت به طلای خام سكه :</b>
                              <p dir="ltr">{{ HobabSaderatCoinSekeRiyal }} %</p>
                            </b-row>
                          </div>
                          <hr />

                          <b-row dir="rtl">
                            <b>
                              <v-icon style="font-size: 30px; color: #fef478"
                                >lens</v-icon
                              >

                              سکه یک روزه بانک ملت
                            </b>
                            <br />

                            <b class="mr-16"> قیمت پایانی :</b>
                            <p dir="ltr">
                              {{ numberWithCommas(sekeMellatPrice) }}
                            </p>
                          </b-row>

                          <b-row class="test mr-10">
                            <div class="test d-flex justify-content-start">
                              <v-btn
                                color="#7575a3"
                                @click="showHobabMelatDetail"
                                icon
                                large
                              >
                                <v-icon style="font-size: 30px"
                                  >keyboard_arrow_down</v-icon
                                >

                                <b> جزئیات </b>
                              </v-btn>
                            </div>
                          </b-row>

                          <div class="mt-2 mr-16" v-show="showHobabMelat">
                            <b-row>
                              <b> حباب نسبت به بازار آزاد :</b>
                              <p dir="ltr">{{ HobabMellatCoinFree }} %</p>
                            </b-row>

                            <b-row>
                              <b> حباب نسبت به طلای خام سكه :</b>
                              <p dir="ltr">{{ HobabMellatCoinSekeRiyal }} %</p>
                            </b-row>
                          </div>
                          <hr />

                          <b-row dir="rtl">
                            <b>
                              <v-icon style="font-size: 30px; color: #fef478"
                                >lens</v-icon
                              >

                              سکه یک روزه بانک سامان
                            </b>
                            <br />

                            <b class="mr-16"> قیمت پایانی :</b>
                            <p dir="ltr">
                              {{ numberWithCommas(sekeSamanPrice) }}
                            </p>
                          </b-row>

                          <b-row class="test mr-10">
                            <div class="test d-flex justify-content-start">
                              <v-btn
                                color="#7575a3"
                                @click="showHobabSamanDetail"
                                icon
                                large
                              >
                                <v-icon style="font-size: 30px"
                                  >keyboard_arrow_down</v-icon
                                >

                                <b> جزئیات </b>
                              </v-btn>
                            </div>
                          </b-row>

                          <div class="mt-2 mr-16" v-show="showHobabSaman">
                            <b-row>
                              <b> حباب نسبت به بازار آزاد :</b>
                              <p dir="ltr">{{ HobabSamanCoinFree }} %</p>
                            </b-row>

                            <b-row>
                              <b> حباب نسبت به طلای خام سكه :</b>
                              <p dir="ltr">{{ HobabSamanCoinSekeRiyal }} %</p>
                            </b-row>
                          </div>
                        </b-card-text>
                      </div>
                    </b-card>
                  </b-card-group>
                </b-col>

                <b-col >
                  <b-card-group dir="rtl">
                    <b-card border-variant="dark">
                      <template #header>
                        <div style="text-align: center">
                          <b class="mb-0">نرخ طلا و سكه</b>
                        </div>
                      </template>

                      <div>
                        <b-row>
                          <b>
                            <v-icon style="font-size: 30px; color: #fef478"
                              >invert_colors</v-icon
                            >

                            آبشده:</b
                          >
                          <p dir="ltr">{{ numberWithCommas(mesghalPrice) }}</p>
                        </b-row>

                        <b-row class="mr-10">
                          <div class="d-flex justify-content-start">
                            <v-btn
                              color="#7575a3"
                              @click="showHobabmesghalDetails"
                              icon
                              large
                            >
                              <v-icon style="font-size: 30px"
                                >keyboard_arrow_down</v-icon
                              >
                              <b> جزئیات </b>
                            </v-btn>
                          </div>

                          <div class="mt-2" v-show="showHobabmesghal">
                            <b> حباب آبشده :</b>
                            <p dir="ltr">{{ HobabAbshode }}%</p>
                          </div>
                        </b-row>
                      </div>

                      <hr />
                      <b-row>
                        <b>
                          <v-icon style="font-size: 30px; color: #fef478"
                            >lens</v-icon
                          >

                          سكه امامی:</b
                        >
                        <p dir="ltr">{{ numberWithCommas(sekePrice) }}</p>
                      </b-row>

                      <b-row class="mr-10">
                        <div class="d-flex justify-content-start">
                          <v-btn
                            color="#7575a3"
                            @click="showHobabSekeDetails"
                            icon
                            large
                          >
                            <v-icon style="font-size: 30px"
                              >keyboard_arrow_down</v-icon
                            >
                            <b> جزئیات </b>
                          </v-btn>
                        </div>

                        <div class="mt-2" v-show="showHobabSeke">
                          <b> حباب سكه امامی :</b>
                          <p dir="ltr">{{ HobabSeke }}%</p>
                        </div>
                      </b-row>

                      <hr />

                      <b-row>
                        <b>
                          <v-icon style="font-size: 30px; color: #fef478"
                            >lens</v-icon
                          >

                          سكه بهار آزادی:</b
                        >
                        <p dir="ltr">{{ numberWithCommas(sekeGhadimPrice) }}</p>
                      </b-row>

                      <b-row class="mr-10">
                        <div class="d-flex justify-content-start">
                          <v-btn
                            color="#7575a3"
                            @click="showHobabGhadimDetails"
                            icon
                            large
                          >
                            <v-icon style="font-size: 30px"
                              >keyboard_arrow_down</v-icon
                            >
                            <b> جزئیات </b>
                          </v-btn>
                        </div>

                        <div class="mt-2" v-show="showHobabGhadim">
                          <b-row>
                            <b> حباب سكه بهار آزادی :</b>
                            <p dir="ltr">{{ HobabSekeGhadim }}%</p>
                          </b-row>
                        </div>
                      </b-row>

                      <hr />

                      <b-row>
                        <b>
                          <v-icon style="font-size: 30px; color: #fef478"
                            >contrast</v-icon
                          >

                          سکه نیم :</b
                        >
                        <p dir="ltr">{{ numberWithCommas(nimPrice) }}</p>
                      </b-row>

                      <b-row class="mr-10">
                        <div class="d-flex justify-content-start">
                          <v-btn
                            color="#7575a3"
                            @click="showHobabNimDetails"
                            icon
                            large
                          >
                            <v-icon style="font-size: 30px"
                              >keyboard_arrow_down</v-icon
                            >
                            <b> جزئیات </b>
                          </v-btn>
                        </div>

                        <div class="mt-2" v-show="showHobabNim">
                          <b-row>
                            <b> حباب نیم سكه :</b>
                            <p dir="ltr">{{ HobabNim }}%</p>
                          </b-row>
                        </div>
                      </b-row>

                      <hr />

                      <b-row>
                        <b>
                          <v-icon style="font-size: 30px; color: #fef478"
                            >donut_small</v-icon
                          >

                          سکه ربع :</b
                        >
                        <p dir="ltr">{{ numberWithCommas(robPrice) }}</p>
                      </b-row>

                      <b-row class="mr-10">
                        <div class="d-flex justify-content-start">
                          <v-btn
                            color="#7575a3"
                            @click="showHobabRobDetails"
                            icon
                            large
                          >
                            <v-icon style="font-size: 30px"
                              >keyboard_arrow_down</v-icon
                            >
                            <b> جزئیات </b>
                          </v-btn>
                        </div>

                        <div class="mt-2" v-show="showHobabRob">
                          <b-row>
                            <b> حباب ربع سكه :</b>
                            <p dir="ltr">{{ HobabRob }}%</p>
                          </b-row>
                        </div>
                      </b-row>

                      <hr />

                      <b-row>
                        <b>
                          <v-icon style="font-size: 30px; color: #fef478"
                            >lens</v-icon
                          >

                          سکه گرمی :</b
                        >
                        <p dir="ltr">{{ numberWithCommas(sekeGeramiPrice) }}</p>
                      </b-row>

                      <b-row class="mr-10">
                        <div class="d-flex justify-content-start">
                          <v-btn
                            color="#7575a3"
                            @click="showHobabGeramiDetails"
                            icon
                            large
                          >
                            <v-icon style="font-size: 30px"
                              >keyboard_arrow_down</v-icon
                            >
                            <b> جزئیات </b>
                          </v-btn>
                        </div>

                        <div class="mt-2" v-show="showHobabGerami">
                          <b-row>
                            <b> حباب سكه گرمی :</b>
                            <p dir="ltr">{{ HobabGerami }}%</p>
                          </b-row>
                        </div>
                      </b-row>

                      <hr />

                      <b-row>
                        <b>
                          <v-icon style="font-size: 30px; color: #fef478"
                            >18mp</v-icon
                          >
                          نرخ طلای 18:</b
                        >

                        <p dir="ltr">{{ geramTalaPrice }}</p>
                      </b-row>

                      <hr />
                      <b-row>
                        <b>
                          <v-icon style="font-size: 30px; color: #fef478"
                            >24mp</v-icon
                          >

                          نرخ طلای 24:</b
                        >
                        <p dir="ltr">{{ gram24TalaPrice }}</p>
                      </b-row>

                      <hr />

                      <b-row>
                        <b>
                          <v-icon style="font-size: 30px; color: #fef478"
                            >invert_colors</v-icon
                          >
                          ارزش طلای آبشده :</b
                        >
                        <p dir="ltr">{{ mesghalRiyal }}%</p>
                      </b-row>
                      <hr />

                      <b-row>
                        <b>
                          <v-icon style="font-size: 30px; color: #e6e600"
                            >lens</v-icon
                          >

                          ارزش طلای خام سكه تمام :</b
                        >
                        <p dir="ltr">{{ sekeRiyal }}%</p>
                      </b-row>

                      <hr />

                      <b-row>
                        <b>
                          <v-icon style="font-size: 30px; color: silver"
                            >crop_7_5</v-icon
                          >
                          نرخ انس نقره:</b
                        >

                        <p dir="ltr">{{ silverPrice }}</p>
                      </b-row>
                    </b-card>
                  </b-card-group>
                </b-col>
              </b-row>
            </b-col>

            <b-col cols="1"> </b-col>
          </b-row>
        </b-card>
      </b-card-group>

      <br /><br />

      <br /><br />

      <!-- <div class="chart" ref="chart1"></div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config";

// import { createChart } from "lightweight-charts";
//  import { LightweightCharts } from "lightweight-charts";

export default {
  name: "App",
  data() {
    return {
      url1: `${config.paseUrl}` +"api/v1/CurrentPrice/GetTalagram",
      // url2: `${config.paseUrl}` +"api/v1/ArchivedPrice/GetSekeByTimeFrame/?timeframe=5",

      //navbar
      isCollapseOpen: false,
      chart: null,
      chartData: [],
      // nerkhha
      dollar: 0,
      silver: 0,
      ons: 0,
      silverPrice: 0,
      mesghalPrice: 0,
      sekePrice: 0,
      sekeGhadimPrice: 0,
      HobabAbshode: 0,
      HobabSeke: 0,
      HobabSekeGhadim: 0,
      HobabNim: 0,
      HobabRob: 0,
      HobabGerami: 0,
      mesghalRiyal: 0,
      sekeRiyal: 0,
      geramTalaPrice: 0,
      gram24TalaPrice: 0,
      nimPrice: 0,
      robPrice: 0,
      sekeGeramiPrice: 0,
      sekeRefahPrice: 0,
      HobabRefahCoinFree: 0,
      HobabRefahCoinSekeRiyal: 0,
      sekeSaderatPrice: 0,
      HobabSaderatCoinFree: 0,
      HobabSaderatCoinSekeRiyal: 0,
      sekeMellatPrice: 0,
      HobabMellatCoinFree: 0,
      HobabMellatCoinSekeRiyal: 0,
      sekeSamanPrice: 0,
      HobabSamanCoinFree: 0,
      HobabSamanCoinSekeRiyal: 0,
      talaLotusPriceOpen: 0,
      HobabTalaLotusSeke: 0,
      HobabTalaLotusNav: 0,
      talaLotusPricePrevious: 0,
      talaAyarPriceOpen: 0,
      HobabTalaAyarSeke: 0,
      HobabTalaAyarNav: 0,
      talaAyarPricePrevious: 0,
      talaZarPriceOpen: 0,
      HobabTalaZarSeke: 0,
      HobabTalaZarNav: 0,
      talaZarPricePrevious: 0,
      talaGoharPriceOpen: 0,
      HobabTalaGoharSeke: 0,
      HobabTalaGoharNav: 0,
      talaGoharPricePrevious: 0,
      showHobabRefah: false,
      showHobabSaderat: false,
      showHobabMelat: false,
      showHobabSaman: false,
      showHobabLoutos: false,
      showHobabEyar: false,
      showHobabZar: false,
      showHobabGohar: false,
      showHobabmesghal: false,
      showHobabSeke: false,
      showHobabGhadim: false,
      showHobabNim: false,
      showHobabRob: false,
      showHobabGerami: false,
      //date
      today: 0,
    };
  },
  components: {},
  mounted() {},
  methods: {
    //chart
    resize(width, height) {
      this.chart.resize(width, height);
    },
    //nrkhha
    showHobabRefahDetail() {
      this.showHobabRefah = !this.showHobabRefah;
    },
    showHobabSaderatDetail() {
      this.showHobabSaderat = !this.showHobabSaderat;
    },
    showHobabMelatDetail() {
      this.showHobabMelat = !this.showHobabMelat;
    },
    showHobabSamanDetail() {
      this.showHobabSaman = !this.showHobabSaman;
    },
    showHobabLoutosDetails() {
      this.showHobabLoutos = !this.showHobabLoutos;
    },
    showHobabEyarDetails() {
      this.showHobabEyar = !this.showHobabEyar;
    },
    showHobabZarDetails() {
      this.showHobabZar = !this.showHobabZar;
    },
    showHobabGoharDetails() {
      this.showHobabGohar = !this.showHobabGohar;
    },
    showHobabmesghalDetails() {
      this.showHobabmesghal = !this.showHobabmesghal;
    },
    showHobabSekeDetails() {
      this.showHobabSeke = !this.showHobabSeke;
    },
    showHobabGhadimDetails() {
      this.showHobabGhadim = !this.showHobabGhadim;
    },
    showHobabNimDetails() {
      this.showHobabNim = !this.showHobabNim;
    },
    showHobabRobDetails() {
      this.showHobabRob = !this.showHobabRob;
    },
    showHobabGeramiDetails() {
      this.showHobabGerami = !this.showHobabGerami;
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  async created() {
    //date
    this.today = new Date().toLocaleDateString("fa-IR");
    await axios
      .get(this.url1, {
        // headers: {
        //   "Access-Control-Allow-Origin": "*",
        // },
      })
      .then((response) => {
        this.dollar = response.data.Data.usdPrice;
        this.ons = response.data.Data.onsPrice;
        this.silver = response.data.Data.silverPrice;
        this.geramTalaPrice = response.data.Data.geramTalaPrice;
        this.gram24TalaPrice = response.data.Data.gram24TalaPrice;
        this.nimPrice = response.data.Data.nimPrice;
        this.robPrice = response.data.Data.robPrice;
        this.sekeGeramiPrice = response.data.Data.sekeGeramiPrice;
        this.sekeRefahPrice = response.data.Data.sekeRefahPrice;
        this.HobabRefahCoinFree = response.data.Data.HobabRefahCoinFree;
        this.HobabRefahCoinSekeRiyal =
          response.data.Data.HobabRefahCoinSekeRiyal;
        this.sekeSaderatPrice = response.data.Data.sekeSaderatPrice;
        this.HobabSaderatCoinFree = response.data.Data.HobabSaderatCoinFree;
        this.HobabSaderatCoinSekeRiyal =
          response.data.Data.HobabSaderatCoinSekeRiyal;
        this.sekeMellatPrice = response.data.Data.sekeMellatPrice;
        this.HobabMellatCoinFree = response.data.Data.HobabMellatCoinFree;
        this.HobabMellatCoinSekeRiyal =
          response.data.Data.HobabMellatCoinSekeRiyal;
        this.sekeSamanPrice = response.data.Data.sekeSamanPrice;
        this.HobabSamanCoinFree = response.data.Data.HobabSamanCoinFree;
        this.HobabSamanCoinSekeRiyal =
          response.data.Data.HobabSamanCoinSekeRiyal;
        this.talaLotusPriceOpen = response.data.Data.talaLotusPriceOpen;
        this.HobabTalaLotusSeke = response.data.Data.HobabTalaLotusSeke;
        this.HobabTalaLotusNav = response.data.Data.HobabTalaLotusNav;
        this.talaLotusPricePrevious = response.data.Data.talaLotusPricePrevious;
        this.talaAyarPriceOpen = response.data.Data.talaAyarPriceOpen;
        this.HobabTalaAyarSeke = response.data.Data.HobabTalaAyarSeke;
        this.HobabTalaAyarNav = response.data.Data.HobabTalaAyarNav;
        this.talaAyarPricePrevious = response.data.Data.talaAyarPricePrevious;
        this.talaZarPriceOpen = response.data.Data.talaZarPriceOpen;
        this.HobabTalaZarSeke = response.data.Data.HobabTalaZarSeke;
        this.HobabTalaZarNav = response.data.Data.HobabTalaZarNav;
        this.talaZarPricePrevious = response.data.Data.talaZarPricePrevious;
        this.talaGoharPriceOpen = response.data.Data.talaGoharPriceOpen;
        this.HobabTalaGoharSeke = response.data.Data.HobabTalaGoharSeke;
        this.HobabTalaGoharNav = response.data.Data.HobabTalaGoharNav;
        this.talaGoharPricePrevious = response.data.Data.talaGoharPricePrevious;
        this.silverPrice = response.data.Data.silverPrice;
        this.mesghalPrice = response.data.Data.mesghalPrice;
        this.sekePrice = response.data.Data.sekePrice;
        this.sekeGhadimPrice = response.data.Data.sekeGhadimPrice;
        this.HobabAbshode = response.data.Data.HobabAbshode;
        this.HobabSeke = response.data.Data.HobabSeke;
        this.HobabSekeGhadim = response.data.Data.HobabSekeGhadim;
        this.HobabNim = response.data.Data.HobabNim;
        this.HobabRob = response.data.Data.HobabRob;
        this.HobabGerami = response.data.Data.HobabGerami;
        this.sekeRiyal = response.data.Data.sekeRiyal;
        this.mesghalRiyal = response.data.Data.mesghalRiyal;
      })
      .catch((e) => {
        this.errors.push(e);
      });
    await axios
      .get(
        `http://localhost:8080/api/v1/ArchivedPrice/GetSekeByTimeFrame/?timeframe=5`,
        {
          // headers: {
          //   "Access-Control-Allow-Origin": "*",
          // },
        }
      )
      .then((response1) => {
        this.chartData = response1.data.Data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
    // var chart = createChart(document.body, {
    //   width: 600,
    //   height: 300,
    //   timeScale: {
    //     timeVisible: true,
    //     borderColor: "#D1D4DC",
    //   },
    //   rightPriceScale: {
    //     borderColor: "#D1D4DC",
    //   },
    //   layout: {
    //     backgroundColor: "#ffffff",
    //     textColor: "#000",
    //   },
    //   grid: {
    //     horzLines: {
    //       color: "#F0F3FA",
    //     },
    //     vertLines: {
    //       color: "#F0F3FA",
    //     },
    //   },
    // });
    // var series = chart.addCandlestickSeries({
    //   upColor: "rgb(38,166,154)",
    //   downColor: "rgb(255,82,82)",
    //   wickUpColor: "rgb(38,166,154)",
    //   wickDownColor: "rgb(255,82,82)",
    //   borderVisible: false,
    // });
    // var data = [
    //   {
    //     time: { year: 2018, month: 9, day: 22 },
    //     open: 29.630237296336794,
    //     high: 35.36950035097501,
    //     low: 26.21522501353531,
    //     close: 30.734997177569916,
    //   },
    //   {
    //     time: { year: 2018, month: 9, day: 23 },
    //     open: 32.267626500691215,
    //     high: 34.452661663723774,
    //     low: 26.096868360824704,
    //     close: 29.573918833457004,
    //   },
    //   {
    //     time: { year: 2018, month: 9, day: 24 },
    //     open: 27.33996760497746,
    //     high: 35.8060364835531,
    //     low: 27.33996760497746,
    //     close: 33.06283432964511,
    //   },
    //   {
    //     time: { year: 2018, month: 9, day: 25 },
    //     open: 31.1654368745013,
    //     high: 31.97284477478497,
    //     low: 26.766743287285593,
    //     close: 27.364979322283386,
    //   },
    //   {
    //     time: { year: 2018, month: 9, day: 26 },
    //     open: 29.5901452337888,
    //     high: 32.147919593347474,
    //     low: 27.53289219709677,
    //     close: 29.202912415085272,
    //   },
    //   {
    //     time: { year: 2018, month: 9, day: 27 },
    //     open: 27.561741523265923,
    //     high: 35.11649043301526,
    //     low: 25.20035866163233,
    //     close: 31.14520649627546,
    //   },
    //   {
    //     time: { year: 2018, month: 9, day: 28 },
    //     open: 31.925975006823798,
    //     high: 31.925975006823798,
    //     low: 28.998500720406675,
    //     close: 29.87723790403876,
    //   },
    //   {
    //     time: { year: 2018, month: 9, day: 29 },
    //     open: 30.826956088992475,
    //     high: 34.79463130873015,
    //     low: 25.291546123273097,
    //     close: 28.994812708315987,
    //   },
    //   {
    //     time: { year: 2018, month: 9, day: 30 },
    //     open: 31.202920145287838,
    //     high: 33.19178819590413,
    //     low: 23.94419012923956,
    //     close: 31.47253745770869,
    //   },
    // ];
    // console.log("data", data);
    // series.setData(data);
    // var datesForMarkers = [data[data.length - 19], data[data.length - 39]];
    // var indexOfMinPrice = 0;
    // for (var i = 1; i < datesForMarkers.length; i++) {
    //   if (datesForMarkers[i].high < datesForMarkers[indexOfMinPrice].high) {
    //     indexOfMinPrice = i;
    //   }
    // }
    // var markers = [];
    // for (var j = 0; j < datesForMarkers.length; j++) {
    //   if (j !== indexOfMinPrice) {
    //     markers.push({
    //       time: datesForMarkers[j].time,
    //       position: "aboveBar",
    //       color: "#e91e63",
    //       shape: "arrowDown",
    //       text: "Sell @ " + Math.floor(datesForMarkers[j].high + 2),
    //     });
    //   } else {
    //     markers.push({
    //       time: datesForMarkers[j].time,
    //       position: "belowBar",
    //       color: "#2196F3",
    //       shape: "arrowUp",
    //       text: "Buy @ " + Math.floor(datesForMarkers[j].low - 2),
    //     });
    //   }
    // }
    // markers.push({
    //   time: data[data.length - 48].time,
    //   position: "aboveBar",
    //   color: "#f68410",
    //   shape: "circle",
    //   text: "D",
    // });
    // series.setMarkers(markers);
  },
};
</script>

<style scope>
.chart {
  position: absolute;
  width: 100%;
  height: 300px;
}
.test {
  text-align: right !important;
  margin: 0 px;
  padding-bottom: 0% !important;
}
.test1 {
  margin-bottom: 0% !important;
}

p {
  padding: 0%;
  margin: 0%;
  margin-bottom: 0% !important;
}
.background {
  margin: 0% !important;
  padding: 0% !important;
  background-color: #f0f0f5;
  width: 10rem;
}
</style>
