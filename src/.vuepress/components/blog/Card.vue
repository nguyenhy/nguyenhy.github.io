<template>
  <div class="blog-item">
    <nav class="level">
      <div class="left pr-6">
        <h4 class="title">
          <a :href="href" :alt="data.title" class="has-text-weight-bold">{{
            data.title
          }}</a>
        </h4>

        <div class="summary">
          <a :href="href" :alt="data.title">
            <p class="is-italic">{{ data.description }}</p>
          </a>
        </div>
      </div>

      <div class="right">
        <a :href="href" :alt="data.title" class="is-inline-block thumb">
          <img
            height="150"
            width="150"
            :src="data.thumb"
            :alt="data.thumbAlt"
          />
        </a>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped src="./Card.vue.scss"></style>
<script>
export default {
  props: {
    item: Object,
  },
  computed: {
    data() {
      return this.item.frontmatter;
    },
    href() {
      return this.item.path;
    },
  },
};
</script>
