<template>
  <header class="header">
    <div class="container">
      <div class="header-box">
        <router-link to="/" class="header-logo logo">
          <img src="./../assets/img/logo.png" alt="logo" />
        </router-link>

        <div class="header-controls">
          <button class="btn btn-primary">
            <img src="./../assets/img/icon/user.svg" alt="user" />Войти
          </button>
          <button id="cart-button" class="btn btn-outline" @click="openModal()">
            <img src="./../assets/img/icon/cart.svg" alt="cart" />Корзина
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits(["toggleModal"]);
const openModal = () => {emit("toggleModal");};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  min-height: 124px;
}

.header-box {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-logo {
  display: flex;
  align-items: center;
}

.header-controls {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
}
</style>
