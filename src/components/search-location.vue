<template>
  <div class="search-location">
    <!-- form -->
    <div class="search-wrapper px-2">
      <div class="input-group mb-3">
        <select class="custom-select"
                v-model="type"
                id="inputGroupSelect01">
          <option value="housenumber">Numéro maison</option>
          <option selected value="street">Rue</option>
          <option value="locality">Lieu-dit</option>
          <option value="municipality">Commune</option>
        </select>
        <input type="text" class="form-control"
               @keyup.enter="search"
               :disabled="loading"
               v-model="query"
               :placeholder="defaultPlaceholder"
               :aria-label="defaultPlaceholder">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary"
                  @click="search"
                  type="button">Button</button>
        </div>
      </div>
    </div>
    <!-- loader -->
    <div v-if="loading"
         class="is-loading-wrapper">
      <div class="progress">
        <div class="circle-loader wobble"></div>
      </div>
    </div>
    <!-- results -->
    <div v-if="results !== undefined"
         class="results-wrapper">
      <div class="list-group">
        <a href="#"
           v-for="opt in results"
           :key="opt.properties.id"
           class="list-group-item list-group-item-action flex-column align-items-start active">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ opt.properties.label }}</h5>
            <small>{{ opt.properties.type }}</small>
          </div>
          <p class="mb-1">{{ opt.properties.context }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import GeocodingService from "@/services/GeocodingService";
import {ToastService} from "@/mixins/ToastService";

export default {
  name: "search-location",
  mixins: [ToastService],
  props: {},
  data() {

    return {
      geocoding: GeocodingService,
      query: '',
      limit: 10,
      autocomplete: false,
      lastQuery:'',
      type: 'street' ,
      results: undefined,
      loading: false,
      defaultPlaceholder: 'ex: Rue des Crocodiles'
    }
  },
  watch: {

  },
  computed: {},
  created() {

  },
  mounted() {
  },
  methods: {
    checkQuery()
    {
      this.query = this.query.trim();
     if (this.query.length < 3){
       return false;
     }
     if (this.query === this.lastQuery){
       return false;
     }

     return true;
    },
    search(){
      if(!this.checkQuery()){
        this.AppToast.error('impossible d\'éxecuter la recherche');
        return;
      }
      this.results = undefined;
      this.loading = true;
      this.geocoding.searchLocation(this.query,this.type)
          .then(response => {
            let tempVariable = response?.data?.features;
            if (tempVariable !== null && tempVariable !== undefined && tempVariable.length > 0)
            {
              this.results = tempVariable;
              this.lastQuery = this.query;
              return;
            }
            throw new Error('not meant to be here');
          })
          .catch(err => {
            console.error('error', err);
            this.AppToast.error('ERREUR');
          })
          .finally(() => {
            this.loading = false;
          })
      ;
    }
  },
  components: {},
  beforeUnmount() {
  }
}
</script>

<style scoped>

</style>