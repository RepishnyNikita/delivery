<template>
  <section class="banner">
    <div class="container">
      <div class="banner-item">
        <h2 class="banner-item--title">
          Онлайн-сервис<br />доставки еды на дом
        </h2>
        <p class="banner-item--subtitle">
          Блюда из любимого ресторана привезет курьер в перчатках, маске и с
          антисептиком
        </p>
      </div>
    </div>
  </section>

  <section class="products">
    <div class="container">
      <div class="products-header">
        <h3 class="products-header--title">Рестораны</h3>

        <input
          type="text"
          class="products-header--search"
          placeholder="Поиск блюд и ресторанов"
        />
      </div>

      <div id="rests-container" class="products-wrapper">
        <router-link
          class="product-card"
          v-for="rest in restArray"
          :key="rest.id"
          :to="`/rest?id=${rest.id}`"
        >
          <div class="product-card__img">
            <img :src="getUrl(rest.img)" alt="pizza-plus" />
          </div>
          
          <div class="product-card__description">
            <div class="product-card__description-row">
              <h4 class="product-card__description--title">{{ rest.title }}</h4>
              <div class="product-card__description-badge">{{ rest.time }}</div>
            </div>

            <div class="product-card__description-row">
              <div class="product-card__description-info">
                <div class="product-card__description-info--rairing">
                  <img src="./../assets/img/icon/star.svg" alt="star" />
                  {{ rest.rating }}
                </div>

                <div class="product-card__description-info--price">
                  {{ rest.price }} ₽
                </div>

                <div class="product-card__description-info--gruop">
                  {{ rest.type }}
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import {restArray} from './../constants/rests'
const getUrl = (name) => {
  return new URL(`../assets/img/rest/${name}`, import.meta.url)
};
</script>
