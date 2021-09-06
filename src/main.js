// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'



/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})


books = [
  {id:1,name:"test"},
  {id:2,name:"test"},
  {id:2,name:"test"}
]

/**
 * Spread operators
 * Object destructing
 */

// books.map((book)=> {

//   const {id,name} = {...book}

//   console.log(id);
//   console.log(name);

// })
