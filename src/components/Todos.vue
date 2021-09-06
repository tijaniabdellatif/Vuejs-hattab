<template>

<section class="todoapp">

<header>
    <h1>  TODOS </h1>
    <input type="text" class="new-todo" v-model="newTodo" placeholder="add task" @keyup.enter="addTodo" />
</header>

   <div class="main">
       <ul class="todo-list">
         
         <li class="todo" :key="todo" v-for='todo in todos'>
             <div class="view">

                 <label>
                     {{todo.name}}
                 </label>

             </div>
         </li>

       </ul>
   </div>
</section> 
</template>

<script>

export default {

  data(){
    return {
        todos:[],  
        newTodo:''
    }
  },

  methods: {
      addTodo(){

              this.todos.push({
                  completed:false,
                  name:this.newTodo
              })
              this.newTodo = ''
          
      }
  },


}

</script>


<style src="./todos.css">

</style>