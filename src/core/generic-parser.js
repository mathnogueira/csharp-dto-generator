let EventEmmiter	= require('events');
let glob 			= require('glob');

class GenericParser extends EventEmmiter {

	constructor(concreteParser, buffer) {
		super();
		this.parser = new concreteParser();
		this.buffer = buffer;
	}

	parse(filePattern) {
		this.numberFilesProcessed = 0;
		// Find all *.cs files inside a folder
		glob(filePattern, {}, (err, files) => {
			this.totalFiles = files.length;
			for (let i = 0; i < files.length; i++) {
				this.parseFile(files[i]);
			}
		});
	}

	parseFile(file) {
		this.parser.parse(file, (output) => {
			this.buffer.add(output);
			this.numberFilesProcessed++;
			if (this.totalFiles === this.numberFilesProcessed) {
				this.emit('allFilesParsed');
			}
		});
	}

}

module.exports = GenericParser;