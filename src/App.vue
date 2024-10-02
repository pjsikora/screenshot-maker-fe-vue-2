<script setup lang="ts">
import { usePointsStore } from '@/stores/points'

const store = usePointsStore()

function addPoint(e) {
  store.addPoint(e.pageX, e.pageY, 'dNEW')
}

</script>

<template>
  <nav class="fixed">
    <h2>List of points</h2>
      <ul>
        <li v-for="item in store.points">
          {{ item.x }} {{ item.y }} {{ item.d }}
        </li>
      </ul>
  </nav>
  <div class="wrapper">
    <div @click="addPoint">
      <img src="@/assets/s1.png" alt="">
      <div
        v-for="item in store.points"
        class="point"
        :style="{top: item.y + 'px', left: item.x +'px'}"></div>
    </div>
  </div>

</template>

<style scoped>
.point {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: red;
  position: absolute;
}
nav {
  position: fixed;
  //display: none;
  background-color: #fff;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

</style>
