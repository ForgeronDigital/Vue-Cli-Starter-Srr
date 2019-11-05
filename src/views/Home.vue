<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="$t('message.hello')" class="redText" />
  </div>
</template>

<script>
// @ is an alias to /src
// import { window } from "../App.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import scrollmagic from "scrollmagic";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted: () => {
    // console.log(window);
  }
};
</script>
