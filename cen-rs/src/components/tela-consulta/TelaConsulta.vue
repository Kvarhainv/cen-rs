<template>
  <div class="row">
    <div class="col-3 m-3 scrollable">
      <ul class="remove-bullets">
        <li class="bg-dark p-2 text-center rounded-top">Selecione a cidade</li>
        <li
          class="bg-gray p-2 border-bottom border-5"
          v-for="entidade in ENTIDADES"
          :key="entidade.cod_entidade"
          @click="mountEntity(entidade)"
        >
          {{ entidade.nom_entidade }}
        </li>
      </ul>
    </div>

    <div class="col">
      <div class="row justify-content-between">
        <div class="col-3 rounded-2 p-2 m-2 bg-gray">
          <p class="fw-bold text-center">{{ ENTIDADE.nom_entidade }}</p>
        </div>
        <div
          class="col-1 rounded bg-gray p-2 m-2"
          @click="displayFiltersModal = true"
        >
          <p class="fw-bold text-center">Filtros</p>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="displayFiltersModal"
    style="
      position: fixed;
      z-index: 9998;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: table;
      transition: opacity 0.3s ease;
    "
  >
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="row border-bottom p-2 mb-3 border-dark">
          <p class="fw-bold text-center">Filtros</p>
        </div>

        <div class="row">
          <div class="col-4">
            <label for="pop_absoluta_total">Pop. Absoluta Total</label>
            <input
              v-model="pop_absoluta_total"
              type="number"
              name="pop_absoluta_total"
              placeholder="População Absoluta Total"
            />
          </div>
          <div class="col-4">
            <label for="pop_absoluta_urbana_total"
              >Pop. Absoluta Urbana Total</label
            >
            <input
              v-model="pop_absoluta_urbana_total"
              type="number"
              name="pop_absoluta_urbana_total"
              placeholder="População Absoluta Urbana Total"
            />
          </div>

          <div class="col-4">
            <label for="pop_absoluta_urbana_sede"
              >Pop. Absoluta Urbana na Sede</label
            >
            <input
              v-model="pop_absoluta_urbana_sede"
              type="number"
              name="pop_absoluta_urbana_sede"
              placeholder="População Absoluta Urbana sede"
            />
          </div>
        </div>
        <button class="modal-default-button" @click="filterEntity()">OK</button>
      </div>
    </div>
  </div>
</template>

<style>
@import "./TelaConsultaStyle.scss";
</style>

<script>
import axios from "axios";
import EntidadeModel from "../../models/EntidadeModel";

export default {
  name: "CenRsTelaConsulta",
  data() {
    return {
      ENTIDADES: [],
      ENTIDADE: EntidadeModel,
      displayFiltersModal: false,
      pop_absoluta_total: 0,
      pop_absoluta_urbana_total: 0,
      pop_absoluta_urbana_sede: 0,
      num_entidades: 0,
    };
  },
  mounted() {
    this.getEntities();
  },
  methods: {
    mountEntity(entidade) {
      this.ENTIDADE = entidade;
      console.log(entidade);
    },
    filterEntity() {
      this.displayFiltersModal = false;
      this.getEntities();
    },
    getEntities() {
      axios
        .get("http://localhost:2512/cen-rs/entidades", {
          headers: { "Access-Control-Allow-Origin": "*" },
          params: {
            pop_absoluta_total:
              this.pop_absoluta_total > 0 ? this.pop_absoluta_total : "",
            pop_absoluta_urbana_total:
              this.pop_absoluta_urbana_total > 0
                ? this.pop_absoluta_urbana_total
                : "",
            pop_absoluta_urbana_sede:
              this.pop_absoluta_urbana_sede > 0
                ? this.pop_absoluta_urbana_sede
                : "",
            num_entidades: 10,
          },
        })
        .then((response) => {
          this.ENTIDADES = response.data;
          this.mountEntity(this.ENTIDADES[0]);
          console.log(this.ENTIDADES);
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>
