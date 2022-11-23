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
      default: 400,
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
          toNumber(String(entidade.pop_absoluta_total).replaceAll(" ", "")),
          toNumber(
            String(entidade.pop_absoluta_urbana_total).replaceAll(" ", "")
          ),
          toNumber(
            String(entidade.pop_absoluta_urbana_sede).replaceAll(" ", "")
          ),
        ],
      };
      if (dataSets.length < 11) {
        dataSets.push(dataSet);
      } else {
        break;
      }
    }
    console.log("datasets", dataSets);
    const chartData = {
      labels: [
        "pop_absoluta_total",
        "pop_absoluta_urbana_total",
        "pop_absoluta_urbana_sede",
      ],
      datasets: [...dataSets],
    };
    console.log(chartData);
    this.chartData = chartData;
    this.loaded = true;
  },
  methods: {
    async getEntities() {
      let filtros = await inject("filtros").value;
      //   let pop_absoluta_total = await inject("pop_absoluta_total").value;
      //   let pop_absoluta_urbana_total = await inject("pop_absoluta_urbana_total");
      //   console.log(pop_absoluta_urbana_total);
      //   let pop_absoluta_urbana_sede = await inject("pop_absoluta_urbana_sede");
      //   let num_entidades = await inject("num_entidades");
      const response = await axios.get(
        "http://localhost:2512/cen-rs/entidades",
        {
          headers: { "Access-Control-Allow-Origin": "*" },
          params: {
            pop_absoluta_total: filtros.pop_absoluta_total
              ? filtros.pop_absoluta_total
              : "",
            pop_absoluta_urbana_total: filtros.pop_absoluta_urbana_total
              ? filtros.pop_absoluta_urbana_total
              : "",
            pop_absoluta_urbana_sede: filtros.pop_absoluta_urbana_sede
              ? filtros.pop_absoluta_urbana_sede
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
