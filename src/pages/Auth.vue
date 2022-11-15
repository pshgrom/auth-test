<template>
  <div class="card">
    <div class="card__body">
      <h2>Авторизация</h2>
      <form @submit.prevent>
        <CustomInput
          v-model="email"
          :placeholder="'Введите ваш email...'"
          :type="'email'"
        />
        <CustomInput
          v-model="password"
          :placeholder="'Введите ваш пароль...'"
          :type="'password'"
        />
        <div>
          <button type="submit" class="card__btn" @click="authUser">
            Войти
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import CustomInput from "@/components/CustomInput.vue";
import { useRouter } from "vue-router";
import { login } from "@/api/user";
import { useStore } from "vuex";

export default {
  name: "Auth1",
  components: {
    CustomInput,
  },
  setup() {
    const email = ref("");
    const router = useRouter();
    const password = ref("");
    const store = useStore();

    const authUser = async () => {
      if (email.value && password.value) {
        try {
          const data = await login(email.value, password.value);
          await store.dispatch("setCurrentUser", data.user);
          await store.dispatch("setAuth", true);
          await router.push("/profile");
        } catch (e) {
          alert(e.response.data.message);
        }
      } else alert("Поля email и пароль не должны быть пустыми");
    };

    return {
      email,
      password,
      authUser,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ced4da;
  border-radius: 4px;
  padding: 40px;

  h2 {
    text-align: center;
    font-size: 32px;
    color: #555;
    margin-bottom: 16px;
  }

  &__body {
    padding: 15px;
  }

  &__btn {
    background: #198754;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    width: 100%;
    border: none;
    border-radius: 8px;
    padding: 10px 12px;
    transition: opacity 0.15s ease-in;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
