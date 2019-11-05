<template>
  <div class="home">
    <HelloMe msg="toi" />
  </div>
</template>

<script>
// @ is an alias to /src
// import { window } from "../App.vue";
import scrollmagic from "scrollmagic";
import HelloMe from "@/components/HelloMe.vue";

export default {
  name: "me",
  components: {
    HelloMe
  },
  mounted: () => {
    // console.log(window);
  }
};
</script>
