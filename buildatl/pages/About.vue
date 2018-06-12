<template>

  <article class="About container">
    <Header/>

    <section class="container body">

    <h1 class="Orgs-title title">
      Mission
    </h1>

    <div class="About-title _padding-bottom">
      <span class="buildatl"><span class="build">build</span><img class="logo-sm" src="~/static/atl.png"/></span>
      <span>is about keeping Atlanta <span class="awesome">awesome.</span></span>
    </div>


    <!-- {{ }} -->
    <!-- Atlanta’s economy is booming, but we have many [growing](http://www.aecf.org/blog/as-atlantas-economy-thrives-many-residents-of-color-are-left-behind/) [pains](http://www.businessinsider.com/atlanta-is-the-most-unequal-city-in-america--heres-why-2015-3). Fortunately, we’re fighters, and we have a a burning desire to see Atlanta be the best it can be.

    Our goal is to match mission-driven nonprofits, startups, and projects around the city with skilled professionals who desire to give back, and create social impact around the city. -->

    <div v-html="$md.render(getContent('About-Intro'))"></div>

    <Message/>

    </section>
    <Footer/>
  </article>

</template>

<script>

import Cytosis from 'cytosis'

import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Message from '~/components/Message.vue'

import {fetchCytosis, getCytosis} from '~/assets/helpers.js'


export default {

  components: {
    Header,
    Footer,
    Message
  },

  // data () {
  //   console.log("Welcome to BuildATL", this.$route, this.$route.params)
  //   return { params: this.$route.params }
  // },


  data: function () {
    return {
      content: this.$store.state.Content,
    }
  },

  async asyncData({ app, store, params }) {
    let cytosis = await fetchCytosis(store, params)
    return {
      cytosis: cytosis
    }
  },

  mounted: function () {
    const _this = this
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      console.log('Data Loaded: ', _this.cytosis)
    })
  },


  methods: {
    getContent: function(findStr) {
      const _this = this
      const obj = getCytosis().find(findStr, [this.content])[0]['fields']['Markdown']
      // console.log('obj', obj)
      return obj
    },
  }

}
</script>

<style lang="scss" scoped>

.logo-sm {
  width: 80px;
  // height: 100%;
  vertical-align: middle;
  padding-bottom: 6px;
}

</style>

