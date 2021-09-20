<template>

<section class="todoapp">

    <h1>{{ title }}</h1>

<header>
    
    <input type="text" class="new-todo" v-model="newTodo" placeholder="add task" @keyup.enter="addTodo" />
  
</header>

   <div class="main">

       <input type="checkbox" class="toggle" v-model="allDone" style="transform: translateY(-42px);" />

       <ul class="todo-list">
         
         <li class="todo" :key="todo" v-for='todo in filtredTodo' :class="{completed : todo.completed, editing : todo===editing }">
             <div class="view">

                <input type="checkbox" v-model="todo.completed" class="toggle" />
                 <label @dblclick="editTodo(todo)">
                     {{todo.name}}
                 </label>

                 <button class="destroy" @click.prevent="deleteTodo(todo)"></button>

             </div>

             <input type="text" class="edit" v-model="todo.name"  v-directiveFocus="todo===editing" @keyup.enter="doneEdit" @blur="doneEdit"  @keyup.esc="cancelEdit"/>
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

    <button class="clear-completed" v-show="doneTodo" @click.prevent="clearCompleted">clear</button>
   </footer>
</section> 


</template>

<script>
import Vue from 'vue';
/**
 * Filter sur trois conditions : "all", 'todo','done'
 */

export default {

    props:[
        "title"
    ],

  data(){
    return {
        todos:[],  
        newTodo:'',
        filter : 'all',
        editing : null,
        oldTodo: ""
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

          this.todos = this.todos.filter(item => item !== todo);
      },

      clearCompleted()
      {

            this.todos = this.todos.filter(todo => !todo.completed)

      },

      editTodo(todo)
      {

            this.editing = todo;
            this.oldTodo = todo.name;

      },

      doneEdit()
      {
          this.editing = null;
      },

      cancelEdit()
      {
          this.editing.name = this.oldTodo;
          
          this.doneEdit();

      }

    
  },

  /**
   * ForEach , map , sort , filter , reduce  
   */

computed:
{

    doneTodo()
    {
         //donetodo = entier donetodo = 0

         return this.todos.filter(todo => todo.completed).length

    },

    allDone:
    {
          get(){
             
               return this.remaining === 0; //true
          },

          set(value)
          {


               this.todos.forEach(todo => {

                   todo.completed = value;
               })

          }

    },

    hasTodo(){
             return this.todos.length > 0
             
             
    },
    
    remaining(){
        return this.todos.filter(todo => !todo.completed).length //entier
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
},

  directives:{

      directiveFocus(el,value)
      {
          if(value)
          {
              Vue.nextTick(() => {

                      el.focus();

              })
          }
      }
  }





}

</script>


<style src="./todos.css">

</style>