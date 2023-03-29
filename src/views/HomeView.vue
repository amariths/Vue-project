<script setup>
import apiComps from "../components/apicomp.vue";
import navbar from "../components/navbar.vue";
import annons from "../components/annons.vue";
</script>

<template>
  <annons> </annons>

  <div id="search">
    <form id="newsearch" class="d-flex" role="search" @submit.prevent="getData">
      <input
        v-model="search"
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-primary" type="submit">Search</button>
    </form>
    <p v-if="search !== ''">{{ message }}</p>
  </div>

  <div id="offer">
    <api-comps
      v-for="comp in comps"
      :key="comp.id"
      :comp="comp"
      @addedproduct="addname"
    />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      search: "",
      message: "",
      comps: [],
      compsdata: null,
    };
  },

  components: { "api-comps": apiComps },

  mounted() {
    this.fetchData();
  },

  methods: {
    addname(value) {
      alert("du har lagt till " + value);
    },

    async fetchData() {
      const response = await axios.get("spa.json");
      const result = await response.data;
      this.comps = result;
      this.compsdata = result;
    },

    getData() {
      if (this.search !== "") {
        this.comps = this.filtercomp;
        this.message = "du har sökt på " + this.search;
      } else if (this.search === "") {
        this.comps = this.compsdata;
        this.message = null;
      }
    },
  },

  computed: {
    filtercomp() {
      return this.comps.filter((comp) => comp.kategori.includes(this.search));
    },
  },

  watch: {
    search(news) {
      console.log(news);
    },
  },
};
</script>

<style>
#offer {
  display: grid;
  grid-template-columns: auto auto auto;
  margin-left: 50px;
  margin-right: 50px;
  row-gap: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
}

#search {
  margin-left: 350px;
  margin-right: 400px;
}

#newbutton {
  width: 160px;
  margin-left: 10px;
  position: relative;
  bottom: 38px;
  left: 860px;
}

#annons {
  background-color: black;

  position: relative;
  text-align: center;
  bottom: 10px;
  margin-left: auto;
  margin-right: auto;

  width: auto;
  height: 500px;
}
</style>
