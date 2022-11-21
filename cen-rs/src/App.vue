<template>
  <CenRsHeaderVue></CenRsHeaderVue>
  <CenRsTelaConsultaVue></CenRsTelaConsultaVue>
</template>
<style>
@import "./AppStyle.scss";
</style>

<script>
import CenRsHeaderVue from "./components/header/Header.vue";
import CenRsTelaConsultaVue from "./components/tela-consulta/TelaConsulta.vue";

export default {
  components: {
    CenRsHeaderVue,
    CenRsTelaConsultaVue,
  },
};
</script>
