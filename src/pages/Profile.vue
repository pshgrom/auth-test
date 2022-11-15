<template>
  <div class="profile">
    <div class="profile__card">
      <div class="profile__card-bg">
        <div class="profile__card-photo">
          <div class="profile__card-photo__wrap">
            <img :src="placeholder" alt="" />
          </div>
        </div>
        <div class="profile__card-name">
          {{ currentUser.name }}
        </div>
        <div class="profile__card-create">
          Профиль создан - {{ currentUser.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import placeholder from "../assets/images/placeholder.jpg";
import store from "@/store";

export default {
  name: "Profile",
  setup() {
    const currentUser = computed(() => store.getters.currentUser);

    return {
      currentUser,
      placeholder,
    };
  },
};
</script>

<style lang="scss" scoped>
.profile {
  position: absolute;
  width: 320px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -100%);

  &__card {
    padding-top: 81px;

    &-name {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      line-height: 1.6;
    }

    &-create {
      margin-top: 8px;
      font-size: 14px;
    }

    &-bg {
      max-width: 320px;
      position: relative;
      background: linear-gradient(180deg, #3d739e 0, #285b84 83.96%);
      box-shadow: 0 6px 29px rgb(201 201 201 / 25%);
      border-radius: 8px;
      text-align: center;
      color: #fff;
      padding: 108px 24px 40px;
    }

    &-photo {
      position: absolute;
      left: 50%;
      top: -81px;
      transform: translateX(-50%);

      &__wrap {
        position: relative;
        width: 175px;
        height: 175px;
        overflow: hidden;
        border: 5px solid #fff;
        border-radius: 100%;
        background-size: 58px;
        background-color: #d9d9d9;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
}
</style>
