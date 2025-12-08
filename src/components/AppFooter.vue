<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <img
          src="@/assets/images/logo.png"
          alt="中碳赋能"
          class="footer-logo"
        />
        <p class="footer-desc">
          打造集“平台工具 + 专业服务 +
          生态链接”于一体的综合性双碳解决方案服务商。
        </p>
      </div>
      <div>
        <h4>快速链接</h4>
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/service">业务模块</router-link></li>
          <li><router-link to="/news">新闻动态</router-link></li>
          <li><router-link to="/about">关于我们</router-link></li>
        </ul>
      </div>
      <div id="contact">
        <h4>联系我们</h4>
        <p>电话：111111111111111</p>
        <p>邮箱：2222222222222222</p>
        <p>地址： xxxxxxxxxxxxxxxxxxxx 号</p>
      </div>
    </div>
    <div class="footer-bottom">
      © 2025 中碳赋能（湖北）科技有限公司 | 鄂ICP备12345678号
    </div>
  </footer>
</template>
