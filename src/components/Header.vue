<template>
  <div class="header">
      Header 
<!-- ЕСЛИ ТРУ ПОКАЗЫВАТЬ БЛОК, ЕСЛИ ФОЛС СКРЫВАЕМ -->
<div v-if="GET_STATE_TOGGLE" class="header-popup">popup</div>

<!-- ОТРИСОВКА ДАННЫХ ИЗ СТОРА -->
<div v-for="(item,index) in GET_STATE_ARRAY" :key="index">{{item}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
computed: {
    ...mapGetters( ['GET_STATE_TOGGLE', 'GET_STATE_ARRAY'
    ] )
}
}
</script>

<style>
.header {
    background: pink;
    height: 100px;
}
.header-popup {
    width: 100px;
    height: 100px;
    background: red;
}
</style>