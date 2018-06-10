<template>
  <section class="container">
    <div>
      <h1 class="title">
        HEEEELLLOOOOO ??? {{ params.name }}
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>

    </div>
  </section>
</template>

<script>

import Cytosis from 'cytosis'

export default {

  components: {
    
  },
  data () {
    console.log(this.$route, this.$route.params)
    return { params: this.$route.params }
  },

  // async asyncData({ params }) {
  //   console.log('pages/hello asyncData')

  //   // let { data } = await axios.get(`https://my-api/posts/${params.id}`)
  //   // return { title: data.title }
  //   // console.log('???', Cytosis)
  //   let cytosis = new Cytosis({
  //     airtableApiKey: 'keyAe6M1KoPfg25aO',
  //     airtableBase: {id: 'appDUqchYZnImgQoU'}
  //   })
  //   let airtables = {}, result
  //   console.log('starting cytosis:', cytosis)
  //   await cytosis.initConfig()
  //   console.log('cytosis:', cytosis)
  //   // let tables = await cytosis.getTables()


  //   // // result = await cytosis.find("British Shorthair", tables)
  //   // // console.log('Result 1:', result)

  //   // // result = await cytosis.find("Dog", tables)
  //   // // console.log('Result 2:', result)

  //   // // result = await cytosis.find("Norwegian Forest Cat.Dog", tables)
  //   // // console.log('Result 3:', result)

  //   // // result = await cytosis.find("Tags.Dog", tables)
  //   // // console.log('Result 4:', result)

  //   // result = await cytosis.find("Animals.CatDog.Tags", tables)
  //   // console.log('Result 5:', result)
  // }

}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>



