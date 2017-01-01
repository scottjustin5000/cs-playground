var path = require('path');
var fs=require('fs');
module.exports = {

	find: function(startPath, filter) {

		return new Promise(function(resolve, reject) {
			
			if (!fs.existsSync(startPath)){
				return Promise.resolve();
			}

			var files = fs.readdirSync(startPath);
			for(var i = 0; i < files.length; i++) {
				var filename=path.join(startPath,files[i]);
				var stat = fs.lstatSync(filename);
				if (stat.isDirectory()){
					this.find(filename,filter,callback); //recurse
				}
				else if (filter.test(filename)) {
					return Promise.resolve(filename);
				} 
			}
		});
	} 
}