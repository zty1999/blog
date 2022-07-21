<template>

  <div class="" :class="[$style[shadow + '-shadow'], $style['blog-card']]">
    <div :class="$style['card-header']">
      <h1 :class="$style.title">{{ blog.title }}</h1>
    </div>
    <div :class="$style['card-content']">
      <p :class="$style.desc">
        {{ blog.desc }}
      </p>
    </div>
    <div :class="$style['card-footer']">
      <span :class="$style.tags">
        <tags-text :tags="blog.tags"></tags-text>
      </span>
      <span :class="$style.date">发表于 {{ blog.createdAt }}</span>
      <span :class="$style.views">
        {{ blog.views }}
        <!-- <i-ep-Bicycle /> -->
      </span>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent, Ref, ref, computed } from "vue";
export default defineComponent({
  props: {
    shadow: {
      type: String,
      default: 'never'
    },
    blog: {
      type: Object,
      default: {}
    }
  },
  setup(props) {
    const loading = ref(true)
    let show: Ref<boolean> = ref(true);
    let blog = computed(() => props.blog);
    return {
      show,
      blog,
      loading
    };
  },
});
</script>

<style lang="scss" module>
// @use 'src/assets/styles/base.scss' as *;

.blog-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 20px 20px;
  margin-bottom: 10px;
  min-height: 200px;
  border-radius: 6px;
  background-color: $sectionBgColor;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: $cursorPointer;
}

.title {
  font-size: 22px;
}

.card-content {
  flex: 1;
  padding-top: 20px;
  color: $textSecondaryColor;
}

.card-footer {
  text-align: right;
  font-size: 12px;
  color: grey;

  span {
    margin: 6px;
  }

  .date {}

  .tags {}

  .views {}
}



.always-shadow {
  @extend .shadow-light;
}

.hover-shadow {
  &:hover {
    @extend .shadow-light;
  }
}
</style>