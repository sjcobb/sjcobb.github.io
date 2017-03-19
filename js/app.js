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

var html = document.documentElement;
var date1999 = document.getElementById("date-1999");
var date2011 = document.getElementById("date-2011");
var date2017 = document.getElementById("date-2017");

date1999.addEventListener('click', function() {
  html.classList.remove("d2011", "d2017");
  html.classList.add("d1999");
}, false);

date2011.addEventListener('click', function() {
  html.classList.remove("d1999", "d2017");
  html.classList.add("d2011");
}, false);

date2017.addEventListener('click', function() {
  html.classList.remove("d1999", "d2011");
  html.classList.add("d2017");
}, false);

