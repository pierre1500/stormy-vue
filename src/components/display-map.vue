<template>

  <div class="display-map">
  </div>
</template>

<script>
import {ToastService} from "@/mixins/ToastService";

export default {
  name: "display-map",
  mixins: [ToastService],
  props: {
    lat: {},
    lon: {},
    zoom: {
      type: Number,
      default: 3,
    }
  },
  data() {
    return {
      d: null,
    }
  },
  watch: {},
  computed: {},
  created() {
  },
  mounted() {
  },
  methods: {},
  components: {},
  beforeUnmount() {
  }
}
</script>

<style scoped>

</style>