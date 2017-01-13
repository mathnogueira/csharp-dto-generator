let filesystem = require('fs');

class FileReader {
	constructor() {}

	read(filename, callback) {
		filesystem.readFile(filename, 'utf-8', (err, data) => {
			if (err)
				throw new Error(filename + " could not be read!");
			let nixText = _transformText(data);
			callback(nixText);
		});
	}

	
}

function _transformText(text) {
	return text.replace("\r\n", "\r");
}

module.exports = FileReader;