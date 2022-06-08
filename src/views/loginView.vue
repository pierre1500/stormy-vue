<template>
  <div class="LoginView">
    <div class="row justify-content-center">
      <div class="col-6">
        <login-form></login-form>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/loginForm";

export default {
  name: "loginView",
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
  components: {LoginForm},
  beforeUnmount() {
  }
}
</script>

<style scoped>

</style>