<template>
  <div class="row">
    <div class="col-3 m-3 scrollable">
      <ul class="remove-bullets">
        <li class="bg-dark p-2 text-center rounded-top">Cidades</li>
        <li
          class="bg-gray p-2 border-bottom border-5"
          v-for="entidade in ENTIDADES.slice(0, this.num_entidades)"
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
          class="col-1 rounded bg-gray p-2 m-2 me-5"
          @click="displayFiltersModal = true"
        >
          <p class="fw-bold text-center">Filtros</p>
        </div>
      </div>
      <div class="row">
        <AbsoluteChartComponent
          class="col-10"
          v-if="displayGraphs == true"
        ></AbsoluteChartComponent>
      </div>
      <div class="row">
        <RelativeChartComponent
          class="col-6"
          v-if="displayGraphs == true"
        ></RelativeChartComponent>
        <ExtraChartComponent
          class="col-6"
          v-if="displayGraphs == true"
        ></ExtraChartComponent>
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
      <div class="modal-container d-flex flex-column justify-content-between">
        <div>
          <div class="row m-2">
            <div class="col-4 p-2 d-flex flex-column">
              <label class="pb-1 text-center" for="pop_absoluta_total"
                >População Absoluta Total</label
              >
              <input
                class="border-1 border-secondary"
                v-model="pop_absoluta_total"
                type="number"
                name="pop_absoluta_total"
                placeholder="População Absoluta Total"
              />
            </div>
            <div class="col-4 p-2 d-flex flex-column">
              <label class="pb-1 text-center" for="pop_absoluta_urbana_total"
                >Pop. Absoluta Urbana Total</label
              >
              <input
                class="border-1 border-secondary"
                v-model="pop_absoluta_urbana_total"
                type="number"
                name="pop_absoluta_urbana_total"
                placeholder="População Absoluta Urbana Total"
              />
            </div>
            <div class="col-4 p-2 d-flex flex-column">
              <label class="pb-1 text-center" for="pop_absoluta_urbana_sede"
                >Pop. Absoluta Urbana na Sede</label
              >
              <input
                class="border-1 border-secondary"
                v-model="pop_absoluta_urbana_sede"
                type="number"
                name="pop_absoluta_urbana_sede"
                placeholder="População Absoluta Urbana sede"
              />
            </div>
          </div>
          <div class="row m-2">
            <div class="col-4 p-2 d-flex flex-column">
              <label class="pb-1 text-center" for="pop_relativa_urbana_total"
                >População Relativa Urbana Total</label
              >
              <input
                class="border-1 border-secondary"
                v-model="pop_relativa_urbana_total"
                type="number"
                name="pop_relativa_urbana_total"
                placeholder="População Relativa Urbana Total"
              />
            </div>
            <div class="col-4 p-2 d-flex flex-column">
              <label class="pb-1 text-center" for="pop_relativa_urbana_sede"
                >Pop. Absoluta Relativa Urbana Sede</label
              >
              <input
                class="border-1 border-secondary"
                v-model="pop_relativa_urbana_sede"
                type="number"
                name="pop_relativa_urbana_sede"
                placeholder="População Relativa Urbana Sede"
              />
            </div>
            <div class="col-4 p-2 d-flex flex-column">
              <label class="pb-1 text-center" for="area_total"
                >Área Total</label
              >
              <input
                class="border-1 border-secondary"
                v-model="area_total"
                type="number"
                name="area_total"
                placeholder="Área Total"
              />
            </div>
          </div>
          <div class="row m-2">
            <div class="col-4 p-2 d-flex flex-column">
              <label class="pb-1 text-center" for="densidade_demografica"
                >Densidade Demográfica</label
              >
              <input
                class="border-1 border-secondary"
                v-model="densidade_demografica"
                type="number"
                name="densidade_demografica"
                placeholder="Densidade Demográfica"
              />
            </div>

            <div class="col-4 p-2 d-flex flex-column">
              <label class="pb-1 text-center" for="num_entidades"
                >Número de Entidades</label
              >
              <select
                class="border-1 border-secondary"
                v-model="num_entidades"
                name="densidade_demografica"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-end">
          <button class="btn btn-dark m-2" @click="close()">Cancelar</button>
          <button class="btn btn-dark m-2" @click="filterEntity()">
            Filtrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "./TelaConsultaStyle.scss";
</style>

<script>
import axios from "axios";
import { computed } from "vue";
import EntidadeModel from "../../models/EntidadeModel";
import AbsoluteChartComponent from "../chart/AbsoluteChartComponent.vue";
import ExtraChartComponent from "../chart/ExtraChartComponent.vue";
import RelativeChartComponent from "../chart/RelativeChartComponent.vue";

export default {
  name: "CenRsTelaConsulta",
  components: {
    AbsoluteChartComponent,
    RelativeChartComponent,
    ExtraChartComponent,
  },
  data() {
    return {
      ENTIDADES: [],
      ENTIDADE: EntidadeModel,
      displayFiltersModal: false,
      displayGraphs: true,
      pop_absoluta_total: 0,
      pop_absoluta_urbana_total: 0,
      pop_absoluta_urbana_sede: 0,
      pop_relativa_urbana_total: 0,
      pop_relativa_urbana_sede: 0,
      area_total: 0,
      densidade_demografica: 0,
      num_entidades: 1,
    };
  },
  provide() {
    return {
      ENTIDADES: this.ENTIDADES,
      filtros: computed(() => {
        return {
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
          pop_relativa_urbana_total:
            this.pop_relativa_urbana_total > 0
              ? this.pop_relativa_urbana_total
              : "",
          pop_relativa_urbana_sede:
            this.pop_relativa_urbana_sede > 0
              ? this.pop_relativa_urbana_sede
              : "",
          area_total: this.area_total > 0 ? this.area_total : "",
          densidade_demografica:
            this.densidade_demografica > 0 ? this.densidade_demografica : "",
          num_entidades: this.num_entidades,
        };
      }),
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
    close() {
      this.displayFiltersModal = false;
    },
    getEntities() {
      this.displayGraphs = false;
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
            pop_relativa_urbana_total:
              this.pop_relativa_urbana_total > 0
                ? this.pop_relativa_urbana_total
                : "",
            pop_relativa_urbana_sede:
              this.pop_relativa_urbana_sede > 0
                ? this.pop_relativa_urbana_sede
                : "",
            area_total: this.area_total > 0 ? this.area_total : "",
            densidade_demografica:
              this.densidade_demografica > 0 ? this.densidade_demografica : "",
            num_entidades: 10,
          },
        })
        .then((response) => {
          this.displayGraphs = true;
          this.ENTIDADES = response.data;
          this.mountEntity(this.ENTIDADES[0]);
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>
