/*** APP JS ***/

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue, dynamic text example!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

Vue.component('link-item', {
  props: ['link'],
  template: '<a v-bind:href="link.url" class="list-group-item" target="_blank">{{ link.text }}</a>'
})
var appSidebar = new Vue({
  el: '#app-sidebar',
  data: {
    linkList: [
      { text: 'Awesome A-Frame', url: 'https://github.com/aframevr/awesome-aframe' },
      { text: 'Three.js examples', url: 'https://threejs.org/examples' },
      { text: 'Another link', url: '/' }
    ]
  }
})

var body = document.body;
var date1991 = document.getElementById("date-1991");
var date2011 = document.getElementById("date-2011");
var date2017 = document.getElementById("date-2017");

date2011.addEventListener('click', function() {
  body.classList.remove("bootstrap4");
  body.classList.add("bootstrap1");
}, false);

date2017.addEventListener('click', function() {
  body.classList.remove("bootstrap1");
  body.classList.add("bootstrap4");
}, false);