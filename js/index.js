window.onload=function(){
	console.log("cc")	
}
	const { createApp } = Vue
	createApp({
	    data() {
	      return {
	        message: '世界灿烂盛大，welcom go home'
	      }
	    },
		methods:{
			test(){
				console.log("ccc");
			},
			
		}
	}).mount('#app')