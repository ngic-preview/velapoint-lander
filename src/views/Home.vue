<template>
  <div class="triangles-bg" style="height: 100%">
    <v-sheet color="transparent">
      <v-container class="py-4 py-lg-6">
        <v-row align="center" justify="space-between">
          <v-col cols="12" md="7">
            <h4 class="text-lg-h1 text-sm-h4 mb-4">
              A better way to find personalized
              <span class="secondary--text">health insurance</span>
            </h4>

            <p class="text-h6 mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ex facilis ad atque
              natus tenetur debitis qui quisquam iure amet amet consectetur adipisicing elit.
            </p>

            <v-alert
              colored-border
              border="left"
              color="primary"
              width="50%"
              class="text-center glass"
            >
              <div class="text-h5 font-weight-medium mb-2">Monthly pricing starting at</div>
              <div class="d-flex justify-center">
                <div class="font-weight-regular text-h5 mr-1" style="margin-top: 4px">$</div>
                <div class="text-h2">$95.75<sup class="font-weight-regular text-h5">*</sup></div>
              </div>
            </v-alert>
          </v-col>

          <v-col cols="12" md="5" class="px-4 px-lg-8">
            <div class="text-h6 text-center text-lg-h5 font-weight-medium mb-2">
              Get a <span class="primary--text">free</span> health insurance quote
            </div>
            <v-form v-model="valid" lazy-validation>
              <v-text-field
                v-model="formData.firstName"
                class="my-2"
                solo
                hide-details
                label="First name"
              >
              </v-text-field>

              <v-text-field
                v-model="formData.lastName"
                class="my-2"
                solo
                hide-details
                label="Last name"
              >
              </v-text-field>

              <v-text-field
                v-model="formData.zipCode"
                class="my-2"
                solo
                hide-details
                label="Zip code"
              >
              </v-text-field>

              <v-text-field
                v-model="formData.phoneNumber"
                v-mask="'(###) ###-####'"
                class="my-2"
                solo
                hide-details
                label="Phone number"
              >
              </v-text-field>

              <v-select
                v-model="formData.insuranceType"
                solo
                required
                label="Insurance type"
                :items="['Major Medical/ACA', 'Short Term Medical', 'Medicare']"
              ></v-select>
            </v-form>
            <div class="d-flex">
              <v-btn
                block
                class="ml-auto"
                color="primary text-none"
                height="48"
                @click.prevent="submitLandingForm"
                >Get quotes</v-btn
              >
            </div>
          </v-col>
        </v-row>
        <div class="mt-4 text-caption">
          By submitting this form, you authorize VelaPoint, LLC, and/or its affiliates to contact
          you at the e-mail address and phone number provided (even if the number you provided is on
          a state or National Do Not Call registry). This contact may include providing you with
          insurance quotes, policy and benefit information, and/or marketing information. The
          company may contact you using live operators, auto-dialers, pre-recorded messages, text
          messages,and/or emails. You acknowledge that you are not required to consent to contact as
          a condition of receiving services and that you may revoke consent at any time.
          <br />

          <sup>*</sup> Sample rate is based on the monthly premium for Short Term Medical Value plan
          for a male 29, non-smoker, zip code 750--, $25,000 deductible, 80/20 coinsurance. Rates
          may be subject to change. For a customized quote, please input information above or call
          in.
        </div>
      </v-container>
    </v-sheet>

    <TriangleDivider color="gray" />

    <v-sheet color="glass">
      <v-container class="py-4 py-lg-10">
        <div class="text-center">
          <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">Shop with us</div>

          <h2 class="text-h3 text-lg-h2">Get the health coverage that's right for you</h2>

          <v-responsive max-width="1200" class="mx-auto">
            <div class="text-h6 text-lg-h5 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore
              doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni
              omnis ea incidunt amet voluptate dignissimos!
            </div>
          </v-responsive>
        </div>

        <v-row class="mt-4">
          <v-col cols="12" md="6">
            <div class="d-flex">
              <div class="mr-2">
                <v-sheet class="pa-2 rounded grey lighten-4">
                  <v-icon>mdi-heart-outline</v-icon>
                </v-sheet>
              </div>
              <div>
                <div class="text-h5">Personalized Benefits</div>
                <div class="text-h6 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam
                  aliquam. Autem assumenda
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="d-flex">
              <div class="mr-2">
                <v-sheet class="pa-2 rounded grey lighten-4">
                  <v-icon>mdi-heart-outline</v-icon>
                </v-sheet>
              </div>
              <div>
                <div class="text-h5">Fast, Free Quotes</div>
                <div class="text-h6 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam
                  aliquam. Autem assumenda
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="d-flex">
              <div class="mr-2">
                <v-sheet class="pa-2 rounded grey lighten-4">
                  <v-icon>mdi-heart-outline</v-icon>
                </v-sheet>
              </div>
              <div>
                <div class="text-h5">Lorem Ipsum</div>
                <div class="text-h6 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam
                  aliquam. Autem assumenda
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="d-flex">
              <div class="mr-2">
                <v-sheet class="pa-2 rounded grey lighten-4">
                  <v-icon>mdi-heart-outline</v-icon>
                </v-sheet>
              </div>
              <div>
                <div class="text-h5">Lorem Ipsum</div>
                <div class="text-h6 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam
                  aliquam. Autem assumenda
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="secondary">
      <v-container class="py-4 py-lg-8">
        <v-row>
          <v-col cols="12" md="6">
            <div class="text-uppercase font-weight-bold body-2 primary--text mb-2 mt-0">
              Coverage for all
            </div>

            <h2 class="text-h3 text-lg-h2 white--text">
              Individual and family health insurance plans
            </h2>

            <div class="text-h6 text-lg-h5 mt-5 white--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore
              doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni
              omnis ea incidunt amet voluptate dignissimos!
            </div>

            <div class="mt-4">
              <v-btn depressed large color="primary" class="text-none">Shop individual plans</v-btn>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <v-img :src="productImg1" class="elevation-6" max-height="400" height="100%" cover />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <WaveDividerBlue class="white" />

    <v-sheet color="white">
      <v-container class="py-4 py-lg-8">
        <v-row>
          <v-col cols="12" md="6">
            <v-img :src="productImg2" class="elevation-6" max-height="400" height="100%" cover />
          </v-col>
          <v-col cols="12" md="6" class="pl-4 pl-lg-8">
            <div class="text-uppercase font-weight-bold body-2 primary--text mb-2 mt-0">
              Flexible term lengths
            </div>

            <h2 class="text-h3 text-lg-h2">Short-term health insurance plans</h2>

            <div class="text-h6 text-lg-h5 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore
              doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni
              omnis ea incidunt amet voluptate dignissimos!
            </div>

            <div class="mt-4">
              <v-btn depressed large color="secondary" class="text-none"
                >Shop short-term plans</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <WaveDividerWhite />

    <v-sheet color="primary" light>
      <v-container class="py-4 py-lg-8">
        <v-row>
          <v-col cols="12" md="6">
            <div class="text-uppercase font-weight-bold body-2 white--text mb-2 mt-0">
              Coverage you need
            </div>

            <h2 class="text-h3 text-lg-h2">Medicare health insurance plans</h2>

            <div class="text-h6 text-lg-h5 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore
              doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni
              omnis ea incidunt amet voluptate dignissimos!
            </div>

            <div class="mt-4">
              <v-btn depressed large color="greybg" class="text-none">Shop individual plans</v-btn>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <v-img :src="productImg3" class="elevation-6" max-height="400" height="100%" cover />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white">
      <v-container class="py-4 py-lg-8">
        <div class="text-center">
          <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
            Shop with confidence
          </div>

          <h2 class="text-h3 text-lg-h2">What our customers are saying</h2>

          <v-responsive class="mx-auto">
            <div class="text-h6 text-lg-h5 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore
              doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni
              omnis ea incidunt amet voluptate dignissimos!
            </div>
          </v-responsive>
        </div>

        <v-carousel height="auto" hide-delimiters continuous cycle class="mt-4 mt-lg-8">
          <template #prev>
            <v-btn icon rounded light>
              <v-icon large>mdi-chevron-left</v-icon>
            </v-btn>
          </template>
          <template #next>
            <v-btn icon rounded light>
              <v-icon large>mdi-chevron-right</v-icon>
            </v-btn>
          </template>
          <v-carousel-item v-for="(testimonial, i) in testimonials" :key="i">
            <v-responsive class="px-8 px-md-10 mx-auto h-full" max-width="1200">
              <div class="d-flex flex-column flex-md-row align-center">
                <div class="mr-md-8 mb-4">
                  <v-avatar height="140" min-width="140" width="140">
                    <v-img :src="testimonial.avatar"></v-img>
                  </v-avatar>
                </div>

                <div>
                  <div class="text-h6 text-lg-h5" style="font-weight: 300">
                    <v-icon color="primary" class="mt-n2 mr-1">mdi-format-quote-open</v-icon
                    >{{ testimonial.quote
                    }}<v-icon color="primary" class="ml-1">mdi-format-quote-close</v-icon>
                  </div>
                  <div class="text-body-1 text-lg-h6 mt-2">
                    {{ testimonial.name }}
                  </div>
                  <div class="text-body-1 grey--text text--darken-2">
                    {{ testimonial.role }}
                  </div>
                </div>
              </div>
            </v-responsive>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </v-sheet>

    <v-sheet class="bg-sheet" dark>
      <v-container class="py-4 py-lg-8">
        <div class="text-center">
          <div class="text-h3 font-weight-medium primary--text">Ready to talk?</div>
          <div class="text-h4 white--text font-weight-regular mt-1">Our team is here to help.</div>
        </div>

        <div class="mt-4 text-center">
          <v-btn
            large
            light
            color="primary"
            class="my-1 v-btn--is-elevated text-none"
            @click="$vuetify.goTo(0, {})"
          >
            Get a quote online
          </v-btn>

          <span class="mx-2"> or </span>
          <v-btn
            large
            light
            color="greybg"
            class="my-1 v-btn--is-elevated text-none"
            :href="`tel:${$store.state.config.phoneNumber}`"
          >
            <v-icon left>mdi-phone-outline</v-icon>{{ $store.state.config.phoneNumberFormatted }}
          </v-btn>
        </div>
        <div class="mt-3"></div>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import TriangleDivider from '@/components/TriangleDivider.vue'
import WaveDividerBlue from '@/components/WaveDividerBlue.vue'
import WaveDividerWhite from '@/components/WaveDividerWhite.vue'
import HealthNetworkService from '@/services/HealthNetworkService.js'
import { VueMaskDirective } from 'v-mask'

import productImg1 from '@/assets/coast-girl.jpg'
import productImg2 from '@/assets/mountain-man.jpg'
import productImg3 from '@/assets/lake-group.jpg'
export default {
  name: 'Home',

  components: {
    TriangleDivider,
    WaveDividerBlue,
    WaveDividerWhite,
  },
  directives: {
    mask: VueMaskDirective,
  },
  data() {
    return {
      productImg1,
      productImg2,
      productImg3,
      valid: false,
      rules: {
        firstName: [(v) => !!v || 'First Name is required.'],
        lastName: [(v) => !!v || 'Last Name is required.'],
        zipCode: [(v) => !!v || /^\d{5}/.test(v) || 'Zip code must be 5 digits.'],
        phoneNumber: [(v) => !!v || v.length === 14 || 'Phone number must be 10 digits.'],
      },
      formData: {
        firstName: '',
        lastName: '',
        zipCode: '',
        phoneNumber: '',
        insuranceType: '',
      },
      testimonials: [
        {
          avatar: 'https://carbon-ui.indielayer.com/images/team/7.jpeg',
          quote:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ipsa quasi quae itaque soluta sapiente.',
          name: 'Ross Tremathack',
          role: 'CEO LeBusinesses',
        },
        {
          avatar: 'https://carbon-ui.indielayer.com/images/team/3.jpeg',
          quote:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ipsa quasi quae itaque soluta sapiente.',
          name: 'Karyn Barszczewski',
          role: 'Found & CEO Company',
        },
      ],
      step: 1,
    }
  },
  computed: {
    localPhoneUnmasked() {
      return this.formData.phoneNumber.replace(/\D/g, '')
    },
  },
  methods: {
    submitLandingForm() {
      if (this.valid) {
        if (this.formData.insuranceType !== 'Medicare') {
          this.formData.phoneNumber = this.localPhoneUnmasked
          return HealthNetworkService.postLandingForm(this.formData)
        }
      }
    },
  },
}
</script>

<style lang="scss">
.glass {
  background-color: rgba(255, 255, 255, 0.4) !important;
}
.v-alert__border {
  border-width: 8px !important;
}
.v-window__next,
.v-window__prev {
  background: none !important;
}
.v-btn--is-elavated {
  box-shadow: 0 3px 10px -2px rgba(85, 85, 85, 0.08), 0 2px 20px 0 rgba(85, 85, 85, 0.06),
    0 1px 30px 0 rgba(85, 85, 85, 0.03);
}
.bg-sheet {
  background: linear-gradient(90deg, #1a3664, #2b5aa7);
}
</style>
