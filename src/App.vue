<template>
  <div id="app">
  <div class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
      <a href="#" class="nav-item">My company</a>
      
      </div>
      <span class="nav-toggle" v-on:click="toggleNav" v-bind:class="{'is-active': isActive}">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu" v-bind:class="{'is-active': isActive}">
      
        <router-link to="/" class="nav-item r-item">Home</router-link>
        <router-link to="/" class="nav-item r-item">Features</router-link>
        <router-link to="/" class="nav-item r-item">About</router-link>
        <router-link to="/" class="nav-item r-item">FAQ</router-link>

        <div class="nav-item">
          <p class="control">
            <a href="" class="button is-primary is-outlined">
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
              <span>Baixe agora</span>
            </a>
          </p>
          
        </div>
      </div>
    </div>
    </div>
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>

    <footer class="footer is-primary">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p>&copy; 2017 - Copyright</p>
          </div>
          <div class="column has-text-right">
            <a href="#" class="icon"><i class="fa fa-facebook"></i></a>
            <a href="#" class="icon"><i class="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
  
</template>

<script>
export default {
  name: 'app',
  data: function(){
    return{
      isActive: false
    }
  },
  methods: {
    toggleNav: function(){
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'nq'
  
.nav
  background-color: #383838
  &:hover
    color: grey

.nav-left a
  color: #FFF !important
  font-weght: bold

.nav-item a, a.nav-item
  color: rgba(255,255,255,0.80)
  transition: all 300ms
  &:hover
    color: rgba(255,255,255,1)

.a.r-item
  color: #c1c1c1
  padding: 0.5rem 1.75rem
  +mobile
    color: grey
    &:hover
      background-color: #F1F1F1

.nav-toggle span
  background-color: #c1c1c1

footer
  background-color: $primary !important
  color: #FFF

.icon
  color: #FFF
  margin-left: 10px
</style>
