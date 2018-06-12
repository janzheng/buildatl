
<template>
  <section class="Header container">
    <div class="_grid-2-xs _align-vertically">
      <div>
        <router-link to='/' class="logo-link _border-none-i"><img class="logo" src="~/static/atl.png"/></router-link>
      </div>

      <div class="_right">
        <span class="_margin-right-2">
          <router-link to='/' class="--border-none">Projects</router-link>
        </span>
        <span class="_margin-right-2">
          <router-link to='/orgs' class="Header-orgs --border-none">Orgs</router-link>
        </span>
        <span>
          <router-link to='/about' class="--border-none">Mission</router-link>
        </span>
      </div>
        <!-- <span><a href=""><i class="fa fas far fa-email"></i></a>hello@buildatl.com</span>
        <span><a href=""><i class="fa fas far fa-twitter"></i></a>@buildatl</span>
      </span> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>

.logo {
  width: 80px;
  // height: 100%;
}

</style>
