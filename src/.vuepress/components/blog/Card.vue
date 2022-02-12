<template>
  <div class="blog-item">
    <div class="title">
      <h4>
        <a :href="item.href" :alt="item.title" class="has-text-weight-bold">{{
          item.title
        }}</a>
      </h4>
    </div>
    <div class="meta"></div>
    <div class="thumb-desc">
      <div class="thumb">
        <a :href="item.href" :alt="item.title">
          <img
            height="350"
            width="800"
            :src="item.thumb"
            :alt="item.thumbAlt"
          />
        </a>
      </div>
      <div class="description has-background-grey-dark px-2">
        <span class="has-text-grey-light">Description</span>
        <p>{{ item.description }}</p>
      </div>
    </div>
    <div class="summary has-background-grey-dark px-2">
      <p class="is-italic">{{ item.summary }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./Card.vue.scss"></style>
<script>
export default {
  props: {
    item: Object,
  },
};
</script>
