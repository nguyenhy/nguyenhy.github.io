<template>
  <div class="level-left">
    <div class="level-item is-inline-flex is-justify-content-flex-start">
      <span class="icon">
        <i class="hyni-user"></i>
      </span>
      <span class="text is-size-7">
        <a :href="`/tag/${author}/`">{{ author }}</a>
      </span>
    </div>
    <div class="level-item is-inline-flex is-justify-content-flex-start">
      <span class="icon">
        <i class="hyni-calendar"></i>
      </span>
      <span class="text is-size-7">
        <a :href="`/tag/y${date.year}/`">{{ date.year }}</a>
        <span>/</span>
        <a :href="`/tag/m${date.month}/`">{{ date.month }}</a>
        <span>/</span>
        <a :href="`/tag/d${date.day}/`">{{ date.day }}</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
    },
    date: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: inherit;
}
.level-item {
  .text {
    margin-top: 3px;
  }
}
</style>
