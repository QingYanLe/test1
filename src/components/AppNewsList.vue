<template>
  <section class="section news">
    <div class="container">
      <h2 class="section-title">新闻动态</h2>
      <div class="news-grid">
        <div v-for="n in newsLimit" :key="n.id" class="news-card">
          <img src="@/assets/images/news-thumb.jpg" alt="news" />
          <div class="news-card-body">
            <div class="date">{{ n.date }}</div>
            <h4>{{ n.title }}</h4>
            <p>{{ n.summary }}</p>
          </div>
        </div>
      </div>
      <div class="text-center mt-10">
        <button class="btn-primary" @click="showAll = !showAll">
          {{ showAll ? "收起" : "查看更多" }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
const showAll = ref(false);
const news = ref([
  {
    id: 1,
    date: "2025-12-08",
    title: "中碳赋能入选国家级“双碳”试点示范企业",
    summary: "国家发展和改革委员会公布最新试点名单...",
  },
  {
    id: 2,
    date: "2025-12-08",
    title: "新一代碳监测系统正式发布，精度提升30%",
    summary: "公司自主研发碳监测平台亮相 2025 双碳技术峰会...",
  },
  {
    id: 3,
    date: "2025-12-08",
    title: "与 XX 大学共建“双碳”人才培养基地",
    summary: "校企联合，每年培养 500+ 双碳专业人才...",
  },
]);
const newsLimit = computed(() =>
  showAll.value ? news.value : news.value.slice(0, 2)
);
</script>
