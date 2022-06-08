<template>
  <div class="mb-3">
    <label class="form-label" for="name_user">Nickname</label>
    <input id="name_user" class="form-control"
           placeholder="ex : Macacos" type="text">
  </div>
  <div class="d-flex justify-content-center">
    <button class="btn btn-primary">Sign-in</button>
  </div>
</template>

<script>
export default {
  name: "loginForm",
  props: {},
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