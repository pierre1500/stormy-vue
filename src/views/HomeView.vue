<template>
  <div class="home">
    <h1 :class="classUser">Hello {{ username }} {{ titleOfUser }} 🥉</h1>
     <search-location></search-location>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import SearchLocation from "@/components/search-location";
export default {
  name: 'HomeView',
  components: {
    SearchLocation

  },
  data(){
    return {
      message: undefined,
      username: 'Ark',
    }
  },
  computed: {
    titleOfUser() {
      if(this.username === "Ark"){
        return 'dieu du code';
      }
      return 'sale bronze';
    },
    classUser() {
      if(this.username === "Ark"){
        return 'h1';
      }
      return 'h4';
    }
  },
  mounted(){
    setTimeout(() => {
      this.message = navigator.userAgent;
    }, 1500)
  }
}
</script>
