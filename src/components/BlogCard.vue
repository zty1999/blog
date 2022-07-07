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
      <span :class="$style.tag">标签</span>
      <span :class="$style.date">发表于 {{ blog.createdAt }}</span>
      <span :class="$style.views">阅读量</span>
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

    let show: Ref<boolean> = ref(true);
    let blog = computed(() => {
      console.log(props.blog);
      return props.blog
    });
    return {
      show,
      blog
    };
  },
});
</script>

<style lang="scss" module>
@use 'src/assets/styles/base.scss' as *;

.blog-card {
  display: flex;
  flex-direction: column;
  width: 50vw;
  max-width: 1200px;
  padding: 40px 20px 20px;
  margin-bottom: 10px;
  min-height: 200px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

.card-content {
  flex: 1;
}

.card-footer {
  text-align: right;
  font-size: 12px;

  span {
    margin: 6px;
  }

  .date {}

  .tag {}

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