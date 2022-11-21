<template>
  <ul id="demo">
    <li v-for="entidade in ENTIDADES" :key="entidade.cod_entidade">
      {{ entidade.nom_entidade }}
    </li>
  </ul>
</template>
<script>
import axios from "axios";

export default {
  name: "CenRsTelaConsulta",
  data() {
    return {
      ENTIDADES: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:2512/cen-rs/entidades")
      .then((response) => {
        this.ENTIDADES = response.data;
        console.log(this.ENTIDADES);
      })
      .catch((error) => {
        alert(error);
      });
  },
};
</script>
