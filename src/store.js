import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      { name: 'Apple', value: 100 },
      { name: 'orange', value: 70 },
      { name: 'pear', value: 1 },
    ]
  },
  getters: {
    saleProducts (state) {
      return state.products.map(products => {
        return {
          name: '**' + products.name + '**',
          value: products.value / 2
        }
      })
    }
  },
  mutations: {
    price (state,num) {
      state.products.forEach(element => {
        element.value -= num;
      });
    },
    add (state,num) {
      state.products.forEach(element => {
        element.value += num;
      });
    }
  },
  actions: {
    priceProducts (context,num) {
      setTimeout(() => {
        context.commit('price',num)
      }, 3000)

    }
  }
})
