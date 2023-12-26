<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-box">
        <router-link to="/" class="footer-logo logo">
          <img src="./../assets/img/logo.png" alt="logo" />
        </router-link>

        <nav class="footer-nav">
          <ul>
            <li><router-link to="/rest">Ресторанам</router-link></li>
            <li><router-link to="/rest">Курьерам</router-link></li>
            <li><router-link to="/rest">Пресс-центр</router-link></li>
            <li><router-link to="/rest">Контакты</router-link></li>
          </ul>
        </nav>

        <div class="footer-social">
          <img src="./../assets/img/social/inst.svg" alt="instagram" />
          <img src="./../assets/img/social/facebook.svg" alt="facebook" />
          <img src="./../assets/img/social/vk.svg" alt="vkontacte" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  padding: 60px 0;
  display: flex;
  align-items: center;
  min-height: 156px;
}

.footer-box {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 36px;
}

.footer-nav {
  flex-grow: 1;
}

.footer-nav ul {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 15px;
  flex-wrap: wrap;
}

.footer-nav ul li {
  color: #595959;
  font-size: 18px;
  font-weight: 400;
}

.footer-nav ul li a {
  color: #595959;
  text-decoration: none;
}

.footer-social {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}
</style>
