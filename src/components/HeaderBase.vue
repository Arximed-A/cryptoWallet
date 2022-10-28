<template>
  <header class="header">
    <div class="header__logo logo">
      <img class="logo__img" src="../assets/icons/logo.svg" alt="logotip" />
      <h1 class="logo__name">
        <span class="logo__name logo__name_bold">Crypt</span>fest
      </h1>
    </div>
    <span class="header__hello">Welcome Back, {{ name }}</span>
    <div class="header__actions actions">
      <div class="actions__search">
        <input type="text" class="actions__search" placeholder="Search" />
      </div>
      <div class="actions__notification">
        <img src="../assets/icons/notification.svg" alt="" />
        <div v-show="alert" class="actions__alert">{{ alertNumber }}</div>
      </div>
    </div>
    <div class="header__user user">
      <span class="user__name">{{ name }}</span>
      <div class="user__profile">
        <img
          src="../assets/Ellipse1.png"
          alt="profile's picture"
          class="user__img"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderBase",
  data() {
    return {
      name: "Arkhan",
      alert: true,
      alertNumber: 6,
    };
  },
};
</script>

<style lang="scss">
.header {
  height: 126px;
  display: flex;
  align-items: center;
  padding: 0px 41px;
  &__logo {
    flex: 0 0 151px;
    margin: 0px 115px 0px 0px;
  }
  &__hello {
    font-family: "Roboto";
    font-size: 24px;
    font-weight: 700;
    flex: 0 0 250px;
    margin: 0px 10px 0px 0px;
  }
  &__actions {
    flex: 1 1 auto;
  }
  &__user {
    flex: 0 0 320px;
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
  &__search {
    // background-color: black;
  }
  &__notification {
  }
  &__img {
  }
  &__alert {
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
