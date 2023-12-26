<template>
  <div class="cart-modal__overlay" :class="{ open: isOpen }" @click.self="closeModal()">
    <div class="cart-modal">
      <div class="cart-modal__header">
        <h2 class="cart-modal__header--title">Корзина</h2>
        <span class="cart-modal__header--close" @click="closeModal()">
          <img src="./../assets/img/icon/close.svg" alt="close" />
        </span>
      </div>

      <div class="cart-modal__body">
        <div class="cart-item">
          <p class="cart-item__title">Ролл угорь стандарт</p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 ₽</div>

            <button class="btn btn-outline">-</button>
            <div class="cart-item__controls--count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>

        <div class="cart-item">
          <p class="cart-item__title">Ролл угорь стандарт</p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 ₽</div>

            <button class="btn btn-outline">-</button>
            <div class="cart-item__controls--count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>

        <div class="cart-item">
          <p class="cart-item__title">Ролл угорь стандарт</p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 ₽</div>

            <button class="btn btn-outline">-</button>
            <div class="cart-item__controls--count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>

        <div class="cart-item">
          <p class="cart-item__title">Ролл угорь стандарт</p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 ₽</div>

            <button class="btn btn-outline">-</button>
            <div class="cart-item__controls--count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>

        <div class="cart-item">
          <p class="cart-item__title">Ролл угорь стандарт</p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 ₽</div>

            <button class="btn btn-outline">-</button>
            <div class="cart-item__controls--count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
      </div>

      <div class="cart-modal__footer">
        <div class="cart-modal__footer--price">1250 ₽</div>

        <div class="cart-modal__footer--controls">
          <button class="btn btn-primary">Оформить заказ</button>
          <button class="btn btn-outline">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { isOpen } = defineProps({ isOpen: Boolean });
const emit = defineEmits(["toggleModal"]);
const closeModal = () => emit("toggleModal");
</script>

<style scoped>
.cart-modal__overlay {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);

  align-items: center;
  justify-content: center;
}

.cart-modal__overlay.open {
  display: flex;
}

.cart-modal {
  padding: 40px 45px;
  width: 100%;
  max-width: 780px;
  border-radius: 5px;
  background-color: #fff;
}

.cart-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 45px;
}

.cart-modal__header--title {
  margin: 0;
  font-size: 36px;
  font-weight: 700;
}

.cart-modal__header--close {
  cursor: pointer;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.cart-item:not(:last-child) {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #d9d9d9;
}

.cart-item__title {
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
}

.cart-item__controls {
  display: flex;
  align-items: center;
}

.cart-item__controls button {
  color: #40a9ff;
  border: 1px solid #40a9ff;
}

.cart-item__controls--price {
  margin-right: 57px;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
}

.cart-item__controls--count {
  margin: 0 15px;
}

.cart-modal__footer {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.cart-modal__footer--price {
  padding: 15px 20px;
  color: #fafafa;
  font-size: 20px;
  font-weight: 700;

  border-radius: 5px;
  background-color: #262626;
}

.cart-modal__footer--controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}
</style>
