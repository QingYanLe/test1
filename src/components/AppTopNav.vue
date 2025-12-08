<template>
  <header class="top-nav">
    <div class="container nav-inner">
      <img
        src="@/assets/images/logo.png"
        alt="中碳赋能"
        class="logo"
        @click="$router.push('/')"
      />
      <ul class="nav-menu">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/service">业务模块</router-link></li>
        <li><router-link to="/news">新闻动态</router-link></li>
        <li><router-link to="/about">关于我们</router-link></li>
      </ul>
      <a class="contact-btn" href="#contact">联系我们</a>
    </div>
  </header>
</template>
