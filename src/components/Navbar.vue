<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar__wrapper">
        <a class="navbar__logo" href="#">
          <RouterLink class="navbar__logo" :to="isAuth ? '/profile' : '/login'">
            Test auth
          </RouterLink>
        </a>
        <button v-if="isAuth" class="navbar__btn" @click="logout()">
          Выйти
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from "vue";
import store from "@/store";

export default {
  name: "Navbar",
  setup() {
    const isAuth = computed(() => store.getters.isAuth);

    const logout = () => {
      store.dispatch("logout");
    };

    return {
      isAuth,
      logout,
    };
  },
};
</script>

<style lang="scss">
.navbar {
  height: 56px;
  background: #212529;
  display: flex;
  align-items: center;

  &__logo {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__btn {
    background: #fff;
    border: none;
    border-radius: 4px;
    padding: 6px 12px;
    font-size: 16px;
    transition: opacity 0.15s ease-in;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
