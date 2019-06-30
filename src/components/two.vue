<!-- 页面说明 -->
<template>
  <div>
    <h3>list-two</h3>
    <ul>
      <li v-for="(product, index) in saleProducts" :key="index">
        <span>{{product.name}}</span>
        <span style="margin-left:20px;">{{product.value}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex';
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
      products: state => state.products
    }),
    ...mapGetters([
      'saleProducts'
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
