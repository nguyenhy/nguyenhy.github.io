<template>
  <div class="tags">
    <span
      v-for="(item, index) in list"
      :key="index"
      class="tag is-rounded my-1 mr-1 is-inline-flex"
      :class="{
        'ml-0': index === 0,
        'ml-1': index !== 0,
      }"
    >
      <a :href="`/tag/${item}/`">{{ item }}</a>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    list() {
      return this.data.filter((item) => {
        return item && item !== this.author && !/^[ydm0-9/]*$/g.test(item);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.tags {
  .tag {
    background-color: transparent;
    border: 1px solid;
    a {
      color: inherit;
    }
  }
}
</style>

