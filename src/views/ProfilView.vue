<template>
  <div class="profilView">
    <profil-editor></profil-editor>
  </div>
</template>

<script>
import ProfilEditor from "@/components/profile-editor";

export default {
  name: "profilView",
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
  components: {ProfilEditor},
  beforeUnmount() {
  }
}
</script>

<style scoped>

</style>