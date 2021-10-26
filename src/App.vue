<template>
  <v-app>
    <v-app-bar height="82" color="white" fixed app>
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.sm" @click.stop="drawer = !drawer" />
      <router-link to="/">
        <v-img max-height="60" contain :src="logo" max-width="230"></v-img>
      </router-link>

      <v-spacer></v-spacer>

      <div class="d-flex justify-center ml-1">
        <v-btn
          rounded
          large
          text
          color=""
          class="text-none"
          :href="`tel:${$store.state.config.phoneNumber}`"
        >
          <v-icon left class="ml-1" size="16">mdi-phone</v-icon>
          {{ $store.state.config.phoneNumberFormatted }}
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer absolute app color="greybg">
      <v-container class="py-2">
        <div class="d-flex align-center justify-center">
          <v-btn icon rounded color="secondary lighten-3" class="mx-1">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>

          <v-btn icon rounded color="secondary lighten-3" class="mx-1">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>

          <v-btn icon rounded color="secondary lighten-3" class="mx-1">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>

          <v-btn
            icon
            rounded
            color="secondary lighten-3"
            class="mx-1"
            :href="`tel:${$store.state.config.phoneNumber}`"
          >
            <v-icon>mdi-phone</v-icon>
            <!-- {{ $store.state.config.phoneNumberFormatted }} -->
          </v-btn>
        </div>

        <div class="d-flex flex-column flex-sm-row align-center justify-center mt-2 caption">
          A website owned by VelaPoint, LLC, markets products underwritten by National Health
          Insurance Company, Integon National Insurance Company and Integon Indemnity Corporation.
          Velapoint, National Health Insurance Company, Integon National Insurance Company and
          Integon Indemnity Corporation are all related companies under National General Holdings
          Corp.
        </div>

        <div class="d-flex flex-column flex-sm-row align-center justify-center mt-2 overline">
          <div class="mr-1">&copy; {{ new Date().getFullYear() }} VelaPoint</div>
          &#8231;
          <a
            class="text-decoration-none secondary--text text--lighten-2 ml-1"
            href="https://nghcprivacy.com/ca-notice-at-collection"
            >California Consumer Privacy</a
          >
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import logo from '@/assets/velapoint-logo-md.png'
export default {
  name: 'App',

  data: () => ({
    logo,
    drawer: false,
  }),
}
</script>

<style lang="scss">
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: 0 2px 30px -1px rgba(85, 85, 85, 0.08), 0 4px 30px 0 rgba(85, 85, 85, 0.06),
    0 1px 30px 0 rgba(85, 85, 85, 0.03) !important;
}

.v-application .elevation-4 {
  box-shadow: 0 2px 30px -1px rgba(85, 85, 85, 0.08), 0 4px 30px 0 rgba(85, 85, 85, 0.06),
    0 1px 30px 0 rgba(85, 85, 85, 0.03) !important;
}
.v-application .elevation-6 {
  box-shadow: 0 3px 30px -1px rgba(85, 85, 85, 0.08), 0 6px 30px 0 rgba(85, 85, 85, 0.06),
    0 1px 30px 0 rgba(85, 85, 85, 0.03) !important;
}

.v-toolbar__content {
  max-width: 1185px;
  margin: auto;
}
.triangles-bg {
  background-image: url('./assets/triangles-bg.png'),
    linear-gradient(180deg, rgba(131, 186, 64, 0.3), rgba(167, 208, 117, 0.3));
  background-position: 50% 0%, 0 0;
  background-size: 100%;
}
</style>
