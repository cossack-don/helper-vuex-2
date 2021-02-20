import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 0
  state: {
    // TAGGLE
    toggle: true,

    // array
    arr: [
      { text: 'item - 1' },
      { text: 'item - 2' },
      { text: 'item - 3' },
      { text: 'item - 4' }
    ],

    // POSTS test
    posts: []
  },

  // 2
  mutations: {
    MUTATION_STATE_TOGGLE(state) {
      state.toggle = !state.toggle;
    },


    // POSTS JSON
    MUTATION_STATE_POSTS(state, posts) {
      state.posts = posts
    }


  },

  // 3
  actions: {
    MAKE_MUTATION_STATE_TOGGLE({ commit }) {
      commit('MUTATION_STATE_TOGGLE');
    },


    // POSTS JSON
    async GET_DATA_WITH_FETCH({ commit }) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4');
      const posts = await response.json();
      console.log(posts)
      // ТУТ ПЕРЕДАЕМ 1-М ПАРАМЕТРОМ МУТАЦИЮ,ВТОРЫМ ЧТО ПОЛУЧИЛИ С БЭКА
      // ВНАЧАЛЕ ПОЛУЧИЛИ ДАННЫЕ , ПОТОМ ДЕЛАЕМ МУТАЦИЮ(ЗАПИСЫВАЕМ ИХ ТУДА)
      commit('MUTATION_STATE_POSTS', posts)
    }

  },


  // 1 
  getters: {
    // toggle
    GET_STATE_TOGGLE(state) {
      return state.toggle;
    },

    // array
    GET_STATE_ARRAY(state) {
      return state.arr.map(item => item.text)
    },


    // POSTS JSON
    GET_STATE_POSTS(state) {
      return state.posts
    }
  }
})

// 1 ПОЛУЧАЕМ СОСТОЯНИЕ СТЕЙТА - GETTERS 
// 2. ИЗМЕНЯЕМ СОСТОЯНИЕ С ПОМОЩЬЮ МУТАЦИИ 
// 3.Вызываем мутацию через ACTIONS для АСИНХРОННОСТИ

// GETTERS => COMPUTED - РАЗДЕЛ
// ACTIONS => METHODS - РАЗДЕЛ


// пробовать называть функции по стандарту
//  вначале слова писать, геттер,экшен, а потом название функции, что делает
//  НАПРИМЕР

// GETTERS - GETTER_STATE_TOGGLE
// ACTION - ACTION_GET_POSTS_WITH_BACKEND
// MUTATION - MUTATION_CHANGE_VALUE