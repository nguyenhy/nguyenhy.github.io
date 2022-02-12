<template>
  <div>
    <span>{{ item.title }}</span>
  </div>
</template>

<style lang="scss" scoped src="./Card.vue.scss"></style>
<script>
export default {
  props: {
    item: Object
  }
};
</script>
