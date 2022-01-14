<template>
  <div id="app">
    <Drawer :show.sync="showContent" @navigate="onNavigate"></Drawer>
    <div class="content">
      <div class="container">
        <div class="level">
          <div class="level-left">
            <button
              aria-label="menu button"
              class="button is-dark"
              @click="onClickToggleMenu"
            >
              <span class="icon">
                <i class="hyni-menu"></i>
              </span>
            </button>
          </div>
        </div>
        <router-view
          class="component"
          :show.sync="showContent"
          @navigate="onNavigate"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./App.vue.ts"></script>
<style lang="scss" src="./App.global.vue.scss"></style>
<style lang="scss" scoped src="./App.vue.scss"></style>
