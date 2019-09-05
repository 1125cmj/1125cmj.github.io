
import Vue from 'vue'
import app from './app.vue'
require('./index.html')
//require('./index.css')
//box.innerHTML='hellohhhhh'


new Vue({
	el:'#box',
	components:{
		app
	}
})