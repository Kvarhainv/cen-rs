<template>
 <HeaderVue></HeaderVue>
</template>
<style>
  @import './AppStyle.scss';
</style>

<script>
  import { ref } from 'vue'
  import HeaderVue from './components/header/Header.vue'

  export default {
    components: {
      HeaderVue
    },

    mounted() {
      console.log(this.count) // 0
    }
  }
</script>

