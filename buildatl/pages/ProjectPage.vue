<template>

  <article class="ProjectPage container">

    <div class="loading" v-if="!project">
      <div class="_loader --circular"></div>
    </div>

    <div v-if="project">
      <Header/>

      <section class="copy">

        <div class="menu">
          <router-link to="/">Projects</router-link> / {{project.fields.Name}}
        </div>

        <div class="_grid-2-1 _width-content-max _padding-left-none">

          <div class="_dash" >
            <div class="ProjectPage-image-container" v-if="project.fields.Image">
              <img :src="project.fields.Image[0].thumbnails.large.url" class="ProjectPage-image" />
            </div>
            <h3 class="ProjectPage-title title">
              <!-- {{ getOrg() }} -->
              {{project.fields.Name}}
            </h3>

            <div class="ProjectPage-link _padding-bottom">
              <a target="_blank" :href="project.fields.URL">{{project.fields.URL}}</a>
            </div>

            <div class="ProjectPage-tags" v-if="project">
              <span>{{getTags()}}</span>
            </div>

            <div class="ProjectPage-description" v-if="project" v-html="$md.render(project.fields.Description)">
            </div>
          </div>

          <div class="ProjectPage-sidebar _font-sans" >
            <div class="ProjectPage-contact _dash --half" v-if="project.fields.Contact">
              <h6 class="ProjectPage-sidebar-header">Contact</h6>
              <div v-html="$md.render(project.fields.Contact)"></div>
            </div>
            <div class="ProjectPage-contact _dash --half" v-if="project.fields.Projects">
              <h6 class="ProjectPage-sidebar-header">Projects</h6>
              <div v-for="project in getProjects()" :key="project.id" v-if="project.fields.isPublished">
                <p><router-link :to="{ path: `/orgs/${project.fields.slug}`}">{{project.fields.Name}}</router-link></p>
              </div>
            </div>
            
          </div>

        </div>

        <Message/>

      </section>
      <Footer/>
    </div>

  </article>

</template>

<script>

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
      orgs: this.$store.state.Organizations,
      projects: this.$store.state.Projects,
      tags: this.$store.state.Tags,
      params: this.$route.params,
      project: undefined, //  {fields: ''}, // undefined initially 
    }
  },

  async fetch({ store, params }) {
    return fetchCytosis(store, params)
  },

  mounted: function () {
    const projName = unescape(this.$route.params.id)
    // console.log('projName:', projName, ' projects:' , this.projects, ' params: ', this.$route.params)
    this.project = getCytosis().find(projName, [this.projects], ['Name', 'slug'])[0]
  },

  methods: {
    getOrg: function() {
      return unescape(this.$route.params.id)
    },
    getProjects: function() {
      if(this.org && this.org.fields.Projects) {
        const projects = getCytosis().getLinkedRecords(this.org.fields.Projects, this.projects, true)
        // const projects = getCytosis().getLinkedRecords(this.org.fields.Projects, this.projects)
        // getLinkedRecords: function(recordIds, linkedTable
        // console.log('projects:' , projects)
        return projects
      }
    },
    getTags: function() {
      if(this.org && this.org.fields.Tags) {
        const tags = getCytosis().getLinkedRecords(this.org.fields.Tags, this.tags)
        // const projects = getCytosis().getLinkedRecords(this.org.fields.Projects, this.projects)
        // getLinkedRecords: function(recordIds, linkedTable
        // console.log('projects:' , projects)
        return tags
      }
    }
  }

}
</script>

<style lang="scss" scoped>

.logo-sm {
  width: 80px;
  height: 100%;
  vertical-align: middle;
  padding-bottom: 6px;
}

</style>

