<template>

  <article class="Home Projects container">
    <Header/>

    <section class="container body">

    <h1 class="Orgs-title title">
      Projects
    </h1>

    buildatl is a project in its very infancy. Currently we only work with [LifeLine Animal Project](https://lifelineanimal.org), but we welcome more organizations.

    Send an email to <a href="mailto:hello@buildatl.com">hello@buildatl.com</a>

    <div class="list-container">
      <ul>
        <li v-for="org in orgs" v-if="org.fields.isPublished" :key="org.id">
          <div>
            {{org.fields.Name}}
          </div>
        </li>
      </ul>
    </div>

    <Message/>

    </section>
    <Footer/>
  </article>
</template>




<script>

import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Message from '~/components/Message.vue'

import {fetchCytosis} from '~/assets/helpers.js'


export default {

  components: {
    Header,
    Footer,
    Message
  },

  data: function () {
    return {
      projects: this.$store.state.Projects,
      content: this.$store.state.Content,
      orgs: this.$store.state.Organizations,
      tags: this.$store.state.Tags,
      blog: this.$store.state.Blog,
    }
  },

  async fetch({ store, params }) {
    return fetchCytosis(store, params)
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
