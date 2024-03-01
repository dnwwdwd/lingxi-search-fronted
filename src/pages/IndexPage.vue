<template>
  <div class="index-page">
    <a-input-search
        v-model:value="searchText"
        placeholder="input search text"
        enter-button="Search"
        size="large"
        @search="onSearch(searchText)"
    />
    <a-tabs v-model:activeKey="activeKey" lefted>
      <a-tab-pane key="1" tab="文章">
        <PostList/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="用户" force-render>
        <UserList/>
      </a-tab-pane>
      <a-tab-pane key="3" tab="图片">
        <PictureList/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import PostList from "@/components/PostList.vue";
import UserList from "@/components/UserList.vue";
import PictureList from "@/components/PictureList.vue";

const searchText = ref('');
const activeKey = ref('1');

const onSearch = (searchText: string) => {
  alert(searchText);
};
</script>
