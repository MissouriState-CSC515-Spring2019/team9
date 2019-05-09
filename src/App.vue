<template>
  <div id="app">
    <header>
      <!--<h1>Vue.js SPA</h1>-->
    </header>
    <main>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">Home</a>
        </div>
          <ul class="nav navbar-nav">
          <li><a href="/randomcat">Random Cat</a></li>
          <li><a href="/video">Cat vids</a></li>
          </ul>
        </div>
    </nav>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>


<style>
body{background: black}
</style>
