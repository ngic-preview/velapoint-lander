<template>
  <div style="font-size: 0;">
    <img v-if="color === 'gray'" :src="gray" style="width: 100%" />
    <!-- <img v-else :src="blue" style="width: 100%" /> -->
  </div>
</template>

<script>
import gray from '@/assets/triangle-divider.svg'
import blue from '@/assets/triangle-divider-blue.svg'
export default {
  props: {
    color: {
      type: String,
      default: 'gray',
    },
    flipped: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      gray,
      blue,
    }
  },
}
</script>
