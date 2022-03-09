<template>
  <n-icon size="30" class="icon" @click="changeIcon">  
    <template v-if="$store.state.menuShow"> 
      <menu-icon />
    </template>
    <template v-else>
      <close-sharp />
    </template>
  </n-icon>
</template>

<script setup>
import { NIcon } from "naive-ui";
import { Menu as MenuIcon, CloseSharp } from "@vicons/ionicons5";
import {ref} from "vue"
import { useStore } from "vuex"

const store = useStore()
const changeIcon = () => {
  store.commit("changeMenuShow")
}
</script>

<style>
.icon {
  cursor: pointer;
}
</style>
