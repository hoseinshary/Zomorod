<template>
  <div class="home">
    <div id="nav">
      <b-card-group deck class="mr-2">
        <br />
        <div style="text-align: center">
          <b>
            <b class="mb-0" style="color: #0d5671;"
              >نرخ های امروز {{ today }}
            </b>
          </b>
        </div>
        <br />
        <b-row>
          <b-col cols="1"> </b-col>
          <b-col cols="10">
            <b-row class="mb-4" dir="rtl">
              <b-col cols="4"> </b-col>
              <b-col cols="7">
                <b-row>
                  <b-row class="background container mr-2">
                    <b-col  cols="7" > <b> دلار: </b> </b-col>

                    <b-col  cols="5">
                      <b style="color: black">
                        {{ numberWithCommas(dollar) }}
                      </b>
                    </b-col>
                  </b-row>

                  <b-row class="background container mr-2">
                    <b-col cols="7"> <b> انس طلا: </b> </b-col>

                    <b-col cols="5">
                      <b style="color: black"> {{ ons }} $ </b>
                    </b-col>
                  </b-row>

                  <b-row class="background  mr-2">
                    <b-col cols="7"> <b style="font-size:13px"> انس نقره: </b> </b-col>

                    <b-col cols="5">
                      <b style="color: black">
                        {{ numberWithCommas(silver) }} $
                      </b>
                    </b-col>
                  </b-row>

                </b-row>
              </b-col>

              <b-col cols="1"> </b-col>
            </b-row>

            <b-row dir="rtl">
              <b-col>
                <b-card-group dir="rtl">
                  <b-card style="border-radius: 20px;" class="shadow">
                    <template #header >
                      <div style="text-align: center;  " >
                        <b class="mb-0" style="color: #ffffff; text-shadow: 3px 3px 7px black; ">نرخ طلا و سكه</b>
                      </div>
                    </template>

                    <div>
                      <b-row>
                        <b>
                          <v-icon
                            class="mb-2"
                            style="font-size: 15px; color: #f5d438"
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
                        <v-icon
                          class="mb-2"
                          style="font-size: 15px; color: #f5d438"
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
                        <v-icon
                          class="mb-2"
                          style="font-size: 15px; color: #f5d438"
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
                        <v-icon
                          class="mb-2"
                          style="font-size: 15px; color: #f5d438"
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
                        <v-icon
                          class="mb-2"
                          style="font-size: 15px; color: #f5d438"
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
                        <v-icon
                          class="mb-2"
                          style="font-size: 15px; color: #f5d438"
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
                        <v-icon
                          class="mb-2"
                          style="font-size: 15px; color: #f5d438"
                          >18mp</v-icon
                        >
                        نرخ طلای 18:</b
                      >

                      <p dir="ltr">{{ geramTalaPrice }}</p>
                    </b-row>

                    <hr />
                    <b-row>
                      <b>
                        <v-icon
                          class="mb-2"
                          style="font-size: 15px; color: #f5d438"
                          >24mp</v-icon
                        >

                        نرخ طلای 24:</b
                      >
                      <p dir="ltr">{{ gram24TalaPrice }}</p>
                    </b-row>

                    <hr />

                    <b-row>
                      <b>
                        <v-icon
                          class="mb-2"
                          style="font-size: 15px; color: #f5d438"
                          >invert_colors</v-icon
                        >
                        ارزش طلای آبشده :</b
                      >
                      <p dir="ltr">{{ mesghalRiyal }}</p>
                    </b-row>
                    <hr />

                    <b-row>
                      <b>
                        <v-icon
                          class="mb-2"
                          style="font-size: 15px; color: #f5d438"
                          >lens</v-icon
                        >

                        ارزش طلای خام سكه تمام :</b
                      >
                      <p dir="ltr">{{ sekeRiyal }}</p>
                    </b-row>

                    <hr />

                    <b-row>
                      <b>
                        <v-icon
                          class="mb-2"
                          style="font-size: 15px; color: #f5d438"
                          >crop_7_5</v-icon
                        >
                        نرخ انس نقره:</b
                      >

                      <p dir="ltr">{{ silverPrice }}</p>
                    </b-row>
                  </b-card>
                </b-card-group>
              </b-col>

              <b-col>
                <b-card-group>
                  <b-card dir="rtl"  style="border-radius: 20px ;" class="shadow">
                    <template #header>
                      <div style="text-align: center" class="head1">
                        <b class="mb-0" style="color: #ffffff; text-shadow: 3px 3px 7px black;">سکه بورسی</b>
                      </div>
                    </template>

                    <div class="container">
                      <b-card-text>
                        <b-row dir="rtl">
                          <b>
                            <v-icon
                              class="mb-2"
                              style="font-size: 15px; color: #f5d438"
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
                            <v-icon
                              class="mb-2"
                              style="font-size: 15px; color: #f5d438"
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
                            <v-icon
                              class="mb-2"
                              style="font-size: 15px; color: #f5d438"
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
                            <v-icon
                              class="mb-2"
                              style="font-size: 15px; color: #f5d438"
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

              <b-col>
                <b-card-group dir="rtl">
                  <b-card  style="border-radius: 20px ;" class="shadow">
                    <template #header>
                      <div style="text-align: center">
                        <b class="mb-0" style="color: #ffffff; text-shadow: 3px 3px 7px black;">صندوق طلا</b>
                      </div>
                    </template>

                    <div class="container" style="background-color: Light">
                      <b-card-text>
                        <b-row class="test1" dir="rtl">
                          <b class="mr-0">
                            <v-icon
                              class="mb-2"
                              style="font-size: 15px; color: #f5d438"
                              >lens</v-icon
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
                            <v-icon
                              class="mb-2"
                              style="font-size: 15px; color: #f5d438"
                              >lens</v-icon
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
                            <v-icon
                              class="mb-2"
                              style="font-size: 15px; color: #f5d438"
                              >lens</v-icon
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
                            <v-icon
                              class="mb-2"
                              style="font-size: 15px; color: #f5d438"
                              >lens</v-icon
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

            </b-row>
          </b-col>

          <b-col cols="1"> </b-col>
        </b-row>
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
      url1: `${config.paseUrl}` + "api/v1/CurrentPrice/GetTalagram",
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

      .get(`http://localhost:8080/api/v1/CurrentPrice/GetTalagram`, {})

      // .get(this.url1, {
      // })
      .then((response) => {
        this.dollar = response.data.Data.usdPrice;
        this.ons = response.data.Data.onsPrice.toLocaleString();
        this.silver = response.data.Data.silverPrice;
        this.geramTalaPrice =
          response.data.Data.geramTalaPrice.toLocaleString();
        this.gram24TalaPrice =
          response.data.Data.gram24TalaPrice.toLocaleString();
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
        this.sekeRiyal = response.data.Data.sekeRiyal.toLocaleString();
        this.mesghalRiyal = response.data.Data.mesghalRiyal.toLocaleString();
      })
      .catch((e) => {
        this.errors.push(e);
      });
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
  margin: 0.5% !important;
  padding: 0.3%;
  width: 10em;
  border-radius: 20px;
  border-style: solid;
  color: #0486a2;

  border-color: rgb(253, 250, 250);
}

.card-header {
  background-color: #0486a2;
}

div.card-header{
border-top-left-radius: 19px !important;
border-top-right-radius: 19px !important;

}
</style>
