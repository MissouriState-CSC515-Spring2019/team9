<template>
  <div id="app">
    <header>
      <!--<h1>Vue.js SPA</h1>-->
    </header>
    <Nav></Nav>
    <main>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  import Nav from './components/Nav.vue'
  export default{
    name: 'app',
    components:{
      'Nav':Nav
    }
  }
</script>

<style>
body{background: black}
</style>
