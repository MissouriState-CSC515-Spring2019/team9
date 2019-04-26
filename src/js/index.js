 const router = new VueRouter({
    routes: [
      // dynamic segments start with a colon
      { path: '/restaurant/:id', component: Restaurant }
    ]
  })