<template>

<section class="todoapp">

<header>
    <h1>  TODOS </h1>
    <input type="text" class="new-todo" v-model="newTodo" placeholder="add task" @keyup.enter="addTodo" />
</header>

   <div class="main">
       <ul class="todo-list">
         
         <li class="todo" :key="todo" v-for='todo in filtredTodo' :class="{completed : todo.completed}">
             <div class="view">

                <input type="checkbox" v-model="todo.completed" class="toggle" />
                 <label>
                     {{todo.name}}
                 </label>

             </div>
         </li>

       </ul>
   </div>

   <footer class="footer" v-show="hasTodo">

       <span class="todo-count">
             <strong> {{remaining}} </strong> Task to do
       </span>

       <ul class="filters">

           <li>
               <a href="#" :class="{selected : filter === 'all'}" @click.prevent="filter = 'all'">All Tasks</a>
           </li>
           <li>
               <a href="#" :class="{selected : filter === 'todo'}" @click.prevent="filter = 'todo'">Task to do</a>
           </li>
           <li>
               <a href="#" :class="{selected : filter === 'done'}" @click.prevent="filter = 'done'">Tasks done</a>
           </li>


       </ul>

   </footer>
</section> 


</template>

<script>
/**
 * Filter sur trois conditions : "all", 'todo','done'
 */

export default {

  data(){
    return {
        todos:[],  
        newTodo:'',
        filter : 'all'
    }
  },

  methods: {
      addTodo(){

              this.todos.push({
                  completed:false,
                  name:this.newTodo
              })
              this.newTodo = ''
            
          
      },

      deleteTodo(todo){


      },
      
      deleteCompleted(){


      },

      updateTodo(todo)
      {


      }
  },

  /**
   * ForEach , map , sort , filter , reduce  
   */

computed:
{

    hasTodo(){
             return this.todos.length > 0;
    },
    remaining(){
        return this.todos.filter(todo => !todo.completed).length
    },

    filtredTodo(){
       
             if(this.filter === 'todo')
             {
                 return this.todos.filter(todo=> !todo.completed)
             }

             else if(this.filter === 'done')
             {
                  return this.todos.filter(todo=> todo.completed)
             }

             return this.todos
    }
}



}

</script>


<style src="./todos.css">

</style>