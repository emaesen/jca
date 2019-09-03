<template>
  <div class="calendar-filters">
    <div class="calendar-filter-categories">
      <button 
        v-for="category in eventCategories" 
        :key="category" 
        :class="'btn_cat-' + category"
        @mouseover.passive="onCatMouseOver(category)"
        @mouseleave.passive="onCatMouseLeave(category)"
        @click="onCatClick(category)"
      >
        <category-icon :category="category"/>
        {{ category }}
      </button>
    </div>
    <div class="calendar-filter-types">
      <button 
        v-for="type in eventTypes" 
        :key="type"
        :class="'btn_type-' + type"
        @mouseover.passive="onTypeMouseOver(type)"
        @mouseleave.passive="onTypeMouseLeave(type)"
        @click="onTypeClick(type)"
      >
        {{ type }}
      </button>
    </div>
  </div>
</template>

<script>
import CategoryIcon from '@/components/CategoryIcon.vue';

export default {
  name: "CalendarFilters",
  components: {
    CategoryIcon,
  },
  props: {
    eventCategories: {
      type: Array,
    },
    eventTypes: {
      type: Array,
    },
  },
  data() {
    return {
    };
  },
  created() {
  },
  computed: {
  },
  methods: {
    onCatMouseOver(cat) {
      console.log("onCatMouseOver " + cat);
    },
    onCatMouseLeave(cat) {
      console.log("onCatMouseLeave " + cat);
    },
    onCatClick(cat) {
      console.log("onCatClick " + cat);
    },
    onTypeMouseOver(type) {
      console.log("onTypeMouseOver " + type);
    },
    onTypeMouseLeave(type) {
      console.log("onTypeMouseLeave " + type);
    },
    onTypeClick(type) {
      console.log("onTypeClick " + type);
    },
  },
  watch: {
  }
};
</script>

<style lang="less" scoped>
.calendar-filters {
  background-color: #1e1d21;
  border: 1px solid #383247;
  border-radius: 25px;
  padding: 5px;
  button {
    font-size: 75%;
    margin: 5px;
  }
}
</style>