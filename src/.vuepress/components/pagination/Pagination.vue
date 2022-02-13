<template>
  <nav class="pagination" role="navigation" aria-label="pagination">
    <a class="has-text-light pagination-previous" @click="onClickPrev"
      >Previous</a
    >
    <a class="has-text-light pagination-next" @click="onClickNext">Next page</a>
    <ul class="pagination-list" :data-active="activeIndex">
      <li v-for="item in list" :key="item">
        <a
          class="has-text-light pagination-link has-text-centered is-block"
          :class="{
            'is-current': item === activeIndex,
          }"
          :data-item="item"
          :aria-label="`Goto page ${item}`"
          @click="onClickItem(item)"
          >{{ item + 1 }}</a
        >
      </li>
    </ul>
  </nav>
</template>


<script>
import { parsePagination } from "./Pagination.service";

export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      offset: this.value,
    };
  },
  computed: {
    pagination() {
      return parsePagination(this.offset, this.total, this.limit);
    },
    list() {
      return this.pagination.list.length <= 1 ? [] : this.pagination.list;
    },
    activeIndex() {
      return this.pagination.currentPage;
    },
    lastIndex() {
      return this.pagination.numberOfPages - 1;
    },
  },
  watch: {
    value: {
      handler() {
        this.offset = this.value;
      },
    },
  },
  mounted() {
    console.log(this);
  },

  methods: {
    onClickItem(index) {
      this.offset = index * this.limit;
      this._emitValue();
    },
    onClickPrev() {
      if (this.activeIndex <= 0) {
        return;
      }
      const prevIndex =
        this.offset - this.limit <= 0 ? 0 : this.offset - this.limit;
      this.offset = prevIndex;
      this._emitValue();
    },
    onClickNext() {
      if (this.activeIndex >= this.lastIndex) {
        return;
      }
      const nextIndex =
        this.offset + this.limit >= this.total
          ? this.total
          : this.offset + this.limit;
      this.offset = nextIndex;
      this._emitValue();
    },

    _emitValue() {
      return this.$emit("input", this.offset);
    },
  },
};
</script>
