<template>
  <div class="main">Main

      <!-- КНОПКА ТАГГЛЕ -->
      <button @click="changeToggle" class="btn-main">open popup</button>
      <br>
      <br>
      <!-- ПОЛУЧАЮ ПОСТЫ -->
      <button @click="getPosts">get posts with jsonplaseholder</button>

<!-- ОТРИСОВКА ВСЕХ ПОСТОВ ЦИКЛОМ  mapGetters-->
    <div class="post" v-for="(post, index) in GET_STATE_POSTS" :key="index">
    <h2>{{post.title}}</h2>
    <p>{{post.id}}</p>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {

    computed: {
        ...mapGetters( ['GET_STATE_TOGGLE', 'GET_STATE_POSTS'] )
    },

    methods: {
        ...mapActions( ['MAKE_MUTATION_STATE_TOGGLE', 'GET_DATA_WITH_FETCH'] ),


        // ИЗМЕНЯЮ КНОПКУ-ТАГЛ mapActions
        changeToggle() {
            this.MAKE_MUTATION_STATE_TOGGLE()
        },


        // ПОЛУЧАЮ ПОСТЫ ИЗ БЕКА ПО КЛИКУ НА КНОПКУ ИЗ mapActions
        getPosts() {
        this.GET_DATA_WITH_FETCH()
        }

    },

    // перед загрузкой приложения вставляю данные
    // async mounted() {
        // this.GET_DATA_WITH_FETCH()
    // }

}
</script>

<style>
.main {
    background: yellow;
    margin-top: 40px;
    height: 100vh;
}
.btn-main {
    background: red;
    width: 200px;
    height: 30px;
    cursor: pointer;
}
</style>