<template>
  <div class="products">
    <h1>Products</h1>
    <div v-for="product in products" class="card product">
      <span>{{ product.name }}</span>
    </div>
  </div>
</template>

<script>
  import { getProducts } from '../services/products'

  export default {
    name: 'products',
    data () {
      return {
        products: []
      }
    },
    methods: {
      fetchProducts () {
        return getProducts()
          .then(products => { this.products = products })
      }
    },
    mounted () {
      this.fetchProducts()
      console.log(this.products)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
