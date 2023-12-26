<template>
  <section class="products">
    <div class="container">
      <div id="goods-container" class="products-wrapper">

        <router-link
           class="product-card"
           v-for="goods in goodsArray"
          :key="goods.id"
          :to="`/?id=${goods.id}`"
        >

          <div class="product-card__img">
            <img :src="getUrl(goods.img)" alt="ell" />
          </div>
          <div class="product-card__description">
            <div class="product-card__description-row">
              <h5 class="product-card__description--name">
                {{goods.name}}
              </h5>
            </div>

            <div class="product-card__description-row">
              <p class="product-card__description--text">
                {{goods.description}}
              </p>
            </div>

            <div class="product-card__description-row">
              <div class="product-card__description-controls">
                <button class="btn btn-primary">
                  В корзину
                  <img src="./../assets/img/icon/goods-cart.svg" alt="user" />
                </button>
                <span class="product-card__description-controls--price"
                  >{{goods.price}} ₽</span
                >
              </div>
            </div>
          </div>
        </router-link> 
      </div>
    </div>
  </section>
</template>

<script setup>
  import {goodsArray} from './../constants/rests'

  const getUrl = (name) => {
  return new URL(`../assets/img/goods/${name}`, import.meta.url)
};
</script>

