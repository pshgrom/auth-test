<template>
  <Navbar />
  <RouterView />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { onMounted } from "vue";
import router from "@/router";
export default {
  components: { Navbar },
  setup() {
    const checkUser = () => {
      const token = localStorage.getItem("token");
      if (!token) router.push("/login");
    };

    onMounted(() => {
      checkUser();
    });
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Fira Code Medium", sans-serif;
}

.container {
  width: 100%;
  padding: 0 15px;
  margin: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
}
</style>
