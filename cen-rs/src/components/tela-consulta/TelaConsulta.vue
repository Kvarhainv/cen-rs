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
        <div class="col-1 rounded bg-gray p-2 m-2" @click="showFilters()">
          <p class="fw-bold text-center">Filtros</p>
        </div>
      </div>
    </div>
  </div>

  <div v-if="displayFiltersModal" id="modal-template">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header"> default header </slot>
            </div>

            <div class="modal-body">
              <slot name="body"> default body </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                default footer
                <button class="modal-default-button" @click="$emit('close')">
                  OK
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
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
    };
  },
  mounted() {
    axios
      .get("http://localhost:2512/cen-rs/entidades", {
        headers: { "Access-Control-Allow-Origin": "*" },
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
  methods: {
    mountEntity(entidade) {
      this.ENTIDADE = entidade;
      console.log(entidade);
    },
    showFilters() {
      this.displayFiltersModal = true;
    },
    filterEntity() {},
  },
};
</script>
