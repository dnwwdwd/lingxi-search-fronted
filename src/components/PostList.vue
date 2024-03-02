<template>
  帖子列表
  <a-list item-layout="horizontal" :data-source="props.postList">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta :description="item.content">
          <template #title>
            <a href="https://blog.hejiajun.icu/">{{ item.title }}</a>
          </template>
            <template #avatar>
              <a-avatar src="https://th.bing.com/th/id/R.0cc96a8e86dd1813b9435622bedb63be?rik=086fo0mQBJSUjA&pid=ImgRaw&r=0" />
            </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>
<script setup lang="ts">
import {defineProps, withDefaults, toRefs} from "vue";

interface Props {
  postList: any
}

const props = withDefaults(defineProps<Props>(), {
  postList: () => [],
});

</script>

<style scoped>

</style>