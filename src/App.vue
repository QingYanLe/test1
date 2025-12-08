<template>
  <AppTopNav />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <AppFooter />
</template>

<script setup>
import AppTopNav from "@/components/AppTopNav.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>
