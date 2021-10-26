<template>
  <div class="triangles-bg fill-height d-flex justify-center">
    <v-sheet color="transparent" class="">
      <v-container class="py-6 py-lg-12">
        <h4 class="text-h3 text-lg-h2 mb-6 text-center">You're 30 seconds away from a quote!</h4>
        <v-row align="center">
          <v-col cols="12" md="5">
            <p class="text-h5">
              Complete the form below for custom quotes designed to meet your unique needs. You're
              only one step away from enrolling today!
            </p>
            <v-form class="pr-6">
              <v-text-field solo hide-details class="" label="Email">
                <template #prepend-inner>
                  <v-icon class="mr-1">mdi-email-outline</v-icon>
                </template>
              </v-text-field>

              <v-text-field solo hide-details class="mt-2" label="Date of birth">
                <template #prepend-inner>
                  <v-icon class="mr-1">mdi-calendar-outline</v-icon>
                </template>
              </v-text-field>

              <v-select solo hide-details class="mt-2" label="Gender">
                <template #prepend-inner>
                  <v-icon class="mr-1">mdi-human-male-female</v-icon>
                </template>
              </v-select>

              <div class="text-center mt-3">
                <v-btn class="px-4" large block height="48" color="primary">Get quotes</v-btn>
              </div>
            </v-form>
          </v-col>

          <v-col cols="12" md="6">
            <v-img :src="img" contain class="ml-6"></v-img>
          </v-col>
        </v-row>

        <!-- <v-row align="center" justify="center">
          <v-col cols="12" md="5"> </v-col>

          <v-col cols="12" md="7"> </v-col>
        </v-row> -->

        <div class="mt-6 text-caption">
          By submitting this form, you authorize VelaPoint, LLC, and/or its affiliates to contact
          you at the e-mail address and phone number provided (even if the number you provided is on
          a state or National Do Not Call registry). This contact may include providing you with
          insurance quotes, policy and benefit information, and/or marketing information. The
          company may contact you using live operators, auto-dialers, pre-recorded messages, text
          messages,and/or emails. You acknowledge that you are not required to consent to contact as
          a condition of receiving services and that you may revoke consent at any time.
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import img from '@/assets/health-picture.png'
export default {
  name: 'HealthInsurance',
  data() {
    return {
      img,
    }
  },
}
</script>

<style lang="scss" scoped></style>
