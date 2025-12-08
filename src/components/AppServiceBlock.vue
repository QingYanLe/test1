<template>
  <section class="section service">
    <div class="container">
      <h2 class="section-title">业务模块</h2>
      <div class="service-grid">
        <div v-for="s in services" :key="s.title" class="service-card">
          <!-- 关键：用 require 返回字符串 -->
          <img :src="require(`@/assets/images/${s.img}`)" :alt="s.title" />
          <div class="service-card-body">
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    img: "service1.jpg",
    title: "零碳项目",
    desc: "系统性实现项目运营阶段净零碳排放",
  },
  {
    img: "service2.jpg",
    title: "数字化",
    desc: "融合大数据、人工智能、区块链等前沿技术",
  },
  {
    img: "service3.jpg",
    title: "ESG",
    desc: "展示其为利益相关方和社会带来的价值",
  },
  {
    img: "service4.jpg",
    title: "双碳法务",
    desc: "提供碳排放权交易合规、碳资产合规管理",
  },
  {
    img: "service5.jpg",
    title: "双碳认证",
    desc: "碳排放核算、减排措施权威性评估与认证",
  },
  {
    img: "service6.jpg",
    title: "双碳培训",
    desc: "提供双碳政策、碳管理、碳交易等体系化培训",
  },
];
</script>
