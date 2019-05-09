<template>
  <div id="app">
    <header>
      <!--<h1>Vue.js SPA</h1>-->
    </header> 
      <div>
        <img src="src/Images/Bannertxtwhite.png" alt="Banner" style="max-width:100%; height:auto; border-style: solid none solid none; border-color: #296AAB; background:#3D5C7C" ></img>
      </div>
    <Nav></Nav>
    <main>

      <img src="src/Images/PawBorder.png" alt="border" style="max-width:100%; height:auto;"></img>
      <div class="content">
        <router-view></router-view>
      </div>
      <img src="src/Images/PawBorder.png" alt="border" style="max-width:100%; height:auto;"></img>
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
  body{background: #24374A}
</style>
