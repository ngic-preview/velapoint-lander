<template>
  <div>
    <img :src="blue" style="width: 100%" />
  </div>
</template>

<script>
import blue from '@/assets/wave-blue.svg'
export default {
  data() {
    return {
      blue,
    }
  },
}
</script>
