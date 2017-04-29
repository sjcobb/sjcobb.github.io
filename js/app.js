/*** APP JS ***/

//http://jsonplaceholder.typicode.com
//http://cpv2api.com/
//http://cpv2api.com/pens/showcase/sjcobb
var apiURL = 'https://api.github.com/repositories/11730342/commits?per_page=5&sha=';

// Vue Axios Call
new Vue({
  el: '#penList',
  data: {
    list: null
  },
  methods: {
    getUsers: function() {
      var vm = this;
      //axios.get('https://jsonplaceholder.typicode.com/users').then(function(response) {
      axios.get('http://cpv2api.com/pens/showcase/sjcobb').then(function(response) {

        var pen_data = response.data;
        console.log(pen_data.data);
        
        vm.list = pen_data.data;
        //vm.list = response.data;

      }, function(error) {
        console.log(error.statusText);
      });
    }
  },
  mounted: function() {
    this.getUsers();
  }
});


/*** SIDEBAR ***/
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

/*** TESTING ***/
/*var app5 = new Vue({
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
})*/