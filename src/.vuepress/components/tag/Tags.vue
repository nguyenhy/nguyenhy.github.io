<template>
  <div>
    <span
      v-for="(item, index) in list"
      :key="index"
      class="tag is-rounded m-1 is-inline-flex"
    >
      <a :href="`/tag/${item}`">{{ item }}</a>
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
      return this.$frontmatter.tag.filter((item) => {
        return item && item !== this.author && !/^[ydm0-9/]*$/g.test(item);
      });
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style lang="scss" scoped>
.tag {
  background-color: transparent;
  border: 1px solid;
}
</style>

