<template>
  <div class="Main">
    <Header/>
    <section class="container">

      <div>
        <h1 class="title">
          buildatl
        </h1>
        <h2 class="subtitle">
          Nuxt.js project
        </h2>

        {{ Projects }}

      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>

import Cytosis from 'cytosis'

import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'



export default {

  components: {
    Header,
    Footer,
  },

  // data () {
  //   console.log("Welcome to BuildATL", this.$route, this.$route.params)
  //   return { params: this.$route.params }
  // },

  async asyncData({ params }) {
    // console.log('pages/index! asyncData')

    let cytosis = new Cytosis({
      airtableApiKey: 'keyAe6M1KoPfg25aO',
      airtableBase: {id: 'app8apL6FHHvS8dl4'}
    })

    let airtables = {}, result
    console.log('starting cytosis:', cytosis)
    await cytosis.initConfig()
    console.log('cytosis:', cytosis)
    let tables = await cytosis.getTables()

    let obj = { cytosis, ...tables }
    return obj


    // // result = await cytosis.find("British Shorthair", tables)
    // // console.log('Result 1:', result)

    // // result = await cytosis.find("Dog", tables)
    // // console.log('Result 2:', result)

    // // result = await cytosis.find("Norwegian Forest Cat.Dog", tables)
    // // console.log('Result 3:', result)

    // // result = await cytosis.find("Tags.Dog", tables)
    // // console.log('Result 4:', result)

    // result = await cytosis.find("Animals.CatDog.Tags", tables)
    // console.log('Result 5:', result)
  },

  data: function () {
    return {
      // count: 0
    }
  },

  mounted: function () {
    const _this = this
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      console.log('Data Loaded: ', _this)
    })
  },

}
</script>

<style>
</style>
