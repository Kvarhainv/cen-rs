<template>
  <div class="container">
    <Bar v-if="loaded" :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>
<script>
import { toNumber } from "@vue/shared";
import axios from "axios";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { inject } from "vue";
import { Bar } from "vue-chartjs";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "AbsoluteChartComponent",
  data: () => ({
    loaded: false,
    chartData: null,
    chartOptions: { responsive: true, maintainAspectRatio: false },
    num_entidades: null,
  }),
  components: {
    Bar,
  },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 390,
    },
    cssClasses: {
      default: "",
      type: String,
    },
  },
  async mounted() {
    const entidades = this.getEntities();
    var dataSets = [];
    for (let entidade of await entidades) {
      let dataSet = {
        label: entidade.nom_entidade,
        backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
          16
        )}`,
        data: [
          toNumber(String(entidade.area_total).replaceAll(" ", "")),
          toNumber(String(entidade.densidade_demografica).replaceAll(" ", "")),
        ],
      };
      if (dataSets.length < this.num_entidades) {
        dataSets.push(dataSet);
      } else {
        break;
      }
    }
    const chartData = {
      labels: ["area_total", "densidade_demografica"],
      datasets: [...dataSets],
    };
    this.chartData = chartData;
    this.loaded = true;
  },
  methods: {
    async getEntities() {
      let filtros = await inject("filtros").value;
      this.num_entidades = filtros.num_entidades;
      const response = await axios.get(
        "http://localhost:2512/cen-rs/entidades",
        {
          headers: { "Access-Control-Allow-Origin": "*" },
          params: {
            area_total: filtros.area_total ? filtros.area_total : "",
            densidade_demografica: filtros.densidade_demografica
              ? filtros.densidade_demografica
              : "",
            num_entidades: filtros.num_entidades ? filtros.num_entidades : 1,
          },
        }
      );
      return response.data;
    },
  },
};
</script>
