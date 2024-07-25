window.onload=function(){
	console.log("cc")
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
			getImgURL(){
				const fs = require('fs');  
				const path = require('path');  
				  
				function traverseDirectory(dir, callback) {  
				    fs.readdir(dir, (err, files) => {  
				        if (err) {  
				            return console.error(err);  
				        }  
				  
				        files.forEach(file => {  
				            const fullPath = path.join(dir, file);  
				            fs.stat(fullPath, (err, stats) => {  
				                if (err) return console.error(err);  
				  
				                if (stats.isDirectory()) {  
				                    // 如果是目录，则递归调用  
				                    traverseDirectory(fullPath, callback);  
				                } else {  
				                    // 如果是文件，则执行回调函数  
				                    callback(fullPath);  
				                }  
				            });  
				        });  
				    });  
				} 
			}
		}
	}).mount('#app')
	
	
}