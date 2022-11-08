<template>
  <header class="header">
    <div class="header__logo logo">
      <img class="logo__img" src="../assets/icons/logo.svg" alt="logotip" />
      <h1 class="logo__name">
        <span class="logo__name logo__name_bold">Crypt</span>fest
      </h1>
    </div>
    <span class="header__hello">Welcome Back, {{ userName }}</span>
    <div class="header__actions actions">
      <div class="actions__wrapper">
        <input type="text" class="actions__search" placeholder="Search" />
      </div>
      <a href="#" class="actions__notification">
        <img src="../assets/icons/notification.svg" alt="" />
        <div v-show="alert" class="actions__alert">{{ notification }}</div>
      </a>
    </div>
    <div class="header__user user">
      <span class="user__name">{{ userName }}</span>
      <a href="#" class="user__profile">
        <img
          src="../assets/Ellipse1.png"
          alt="profile's picture"
          class="user__img"
        />
      </a>
    </div>
    <a href="#" class="header__menu">---</a>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HeaderBase",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      userName: (state) => state.userName,
      notification: (state) => state.notification,
      alert: (state) => state.alert,
    }),
  },
};
</script>

<style lang="scss" scoped>
$md4: 576px;
$md3: 768px;
$md2: 992px;
$md1: 1200px;
.header {
  height: 126px;
  display: flex;
  align-items: center;

  &__logo {
    flex: 0 0 151px;
    margin: 0px 8.46% 0px 0px;
  }
  &__hello {
    font-family: "Roboto";
    font-size: 24px;
    font-weight: 700;
    flex: 1 1 auto;
    margin: 0px 10px 0px 0px;
  }
  &__actions {
    flex: 0 1 327px;
  }
  &__user {
    flex: 1 1 auto;
  }
  &__menu {
    display: none;
    text-decoration: none;
  }
  @media (max-width: $md1) {
    &__logo {
      flex: 1 0 auto;
    }
    &__hello {
      display: none;
    }
  }
  @media (max-width: $md2) {
    &__menu {
      display: block;
    }
    &__actions {
      display: none !important;
      // width: 1000px;
    }
    &__user {
      display: none !important;
    }
  }
}
.logo {
  display: flex;
  align-items: center;
  &__img {
    height: 28px;
    width: 28px;
    margin: 0px 12px 0px 0px;
  }
  &__name {
    font-family: "Urbanist";
    font-size: 26px;
    &_bold {
      font-weight: 700;
    }
  }
}
.actions {
  display: flex;
  // justify-content: flex-end;
  align-items: center;
  margin: 0px 10px 0px 0px;
  &__wrapper {
    position: relative;
    flex: 0 0 281px;
    &::before {
      content: "";
      display: block;
      width: 24px;
      height: 24px;
      position: absolute;
      top: 12px;
      left: 16px;
      background: url("../assets/icons/search.svg");
    }
  }
  &__search {
    // width: 200px;
    width: 78.65%;
    height: 48px;
    border: none;
    outline: none;
    background: #1c1f2599;
    border-radius: 16px;
    padding: 0px 10px 0px 60px;
  }
  &__notification {
    //добавить анимацию при клике
    margin: 0px 0px 0px 20px;
    position: relative;
  }
  &__img {
    width: 24px;
    height: 24px;
  }
  &__alert {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: #fc0a0a;
    font-size: 8px;
    font-weight: 700;
    position: absolute;
    top: -4px;
    right: -4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.user {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &__name {
    font-size: 18px;
    font-weight: 500;
    margin: 0px 24px 0px 0px;
  }
  &__profile {
    height: 48px;
    width: 48px;
    border-radius: 50%;
  }
  &__img {
  }
}
</style>
