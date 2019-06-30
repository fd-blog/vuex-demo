<!-- 页面说明 -->
<template>
  <div>
    <h3>list-one</h3>
    <ul>
      <li v-for="(product, index) in saleProducts" :key="index">
        <span>{{product.name}}</span>
        <span style="margin-left:20px;">{{product.value}}</span>
      </li>
    </ul>
    <button @click="priceProducts(4)">商品3秒后降价</button>
    <button @click="add(4)">商品立即涨价</button>
    <div></div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
  components: {},
  filters: { /* 自定义过滤器 */ },
  directives: { /* 自定义指令 */ },
  data() {
    return {

    };
  },
  computed: {
    ...mapState({
      products:state => state.products
    }),
    ...mapGetters([
      'saleProducts'
    ])
  },
  watch: {

  },
  methods:{
    ...mapMutations([
      'add'
    ]),
    ...mapActions([
      'priceProducts'
    ])
  },

  created() {

  },
  mounted() {

  },
  beforeDestroy() {

  },
}
</script>
