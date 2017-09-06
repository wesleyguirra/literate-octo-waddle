<template>
  <div class="products">
    <h1>Products</h1>
    <div v-for="product in products" class="card product">
      <h3>{{ product.name }}</h3>
      <span>{{ product.slug }}</span>
      <p>{{ product.description }}</p>
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

  .card {
    padding: 20px;
    max-width: 300px;
    margin: 10px auto;
    text-align: left;
    -webkit-box-shadow: 0px 17px 36px -35px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 17px 36px -35px rgba(0,0,0,0.75);
    box-shadow: 0px 17px 36px -35px rgba(0,0,0,0.75);
  }

  .product {
    background: #212121;
    color: #fff;
  }
</style>
