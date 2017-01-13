let GenericParser	= require('./core/generic-parser');
let CSharpParser	= require('./fs/csharp-parser');
let MetadataBuffer	= require('./core/metadata-buffer');

class Main {

	constructor() {
		this.Buffer = new MetadataBuffer();
		this.Parser = new GenericParser(CSharpParser, this.Buffer);
		this.Parser.on('allFilesParsed', () => { console.log(this.Buffer.buffer); })
		this.Parser.parse("examples/**/*.cs");
	}
}

let app = new Main();
