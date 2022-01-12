<template>
  <div id="app">
    <Drawer :show.sync="showContent" @navigate="onNavigate"></Drawer>
    <div class="content">
      <router-view :show.sync="showContent" @navigate="onNavigate" />
    </div>
  </div>
</template>

<script lang="ts" src="./App.vue.ts"></script>
<style lang="scss" src="./App.global.vue.scss"></style>
<style lang="scss" scoped src="./App.vue.scss"></style>
