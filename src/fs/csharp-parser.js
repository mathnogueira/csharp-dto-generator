let FileReader 		= require('./file-reader');
let CSharpRegex		= require('./csharp-regex');

class CSharpParser {
	constructor() {
		this.$$fileReader = new FileReader();
		this.output = {};
	}

	/**
	 * Parse a source code file and find all needed information.
	 * 
	 * @param {string} filename name of the file
	 * @param {function} callback function that will be called when the parse is done.
	 */
	parse(filename, callback) {
		// Open the source code
		this.$$fileReader.read(filename, (source) => { 
			console.log("Source do arquivo " + filename);
			_parseSource(source, this.output);
			callback(this.output);
		});
	}
}

let regexBuilder = new CSharpRegex();

function _parseSource(source, output) {
	let classHeader = regexBuilder.getClassName().exec(source);
	if (!classHeader) throw new Error("Class not found in file");
	output.class = classHeader[3];
	let attributeBlock = regexBuilder.getAttributesBlock().exec(source);
	if (!attributeBlock) throw new Error("Attributes block not found. (Did you put // Attributes and // EndAttributes ?)");
	let attributes = _extractAttributes(attributeBlock[0]);
	output.attributes = attributes;
}

function _extractAttributes(block) {
	let regex = regexBuilder.getAttribute();
	let attributes = [];
	let extractedAttrs;
	let type;
	let name;

	while((extractedAttrs = regex.exec(block))) {
		type = extractedAttrs[2];
		name = extractedAttrs[3];
		attributes.push({
			type: type,
			name: name,
		});
	}
	return attributes;
}

module.exports = CSharpParser;