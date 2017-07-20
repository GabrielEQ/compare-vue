<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ heading }}</h1>
          <div class="is-two-thirds column is-paddingless">
            <h2 class="subtitle">{{ subheading }}</h2>
          </div>
          <a href="" class="button is-large is-primary" id="learn">Learn more</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data (){
      return {
        heading: 'Soaring to new hights',
        subheading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, quas.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import '../nq'

.hero
  background: url(../assets/v017.jpg)
  height: 700px
  background-size: cover
  background-position: center center
</style>
