<template>
  <div class="fill-height d-flex justify-center">
    <v-sheet class="ty-bg">
      <v-container class="fill-height">
        <v-sheet class="glass pa-4 mx-auto">
          <h6 class="text-h3 text-lg-h2">Thank you your quote request</h6>
          <p class="text-h6">
            In order to find you the perfect Medicare plan, we will have a VelaPoint representative
            will be reaching out to you by phone directly.
          </p>
        </v-sheet>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: 'ThankYou',
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.ty-bg {
  background: url('../assets/mesh-gradient.jpg');
  width: 100%;
}
.glass {
  backdrop-filter: blur(12px) saturate(175%) !important;
  -webkit-backdrop-filter: blur(12px) saturate(175%) !important;
  background-color: rgba(255, 255, 255, 0.8) !important;
  border-radius: 12px !important;
  border: 1px solid rgba(209, 213, 219, 0.3) !important;
}
</style>
