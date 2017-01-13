class MetadataBuffer {

	constructor() {
		this.buffer = {};
	}

	add(metadata) {
		let auxBuffer = [];
		this.buffer[metadata.class] = auxBuffer;

		for (var i in metadata.attributes) {
			let attribute = {};
			attribute[metadata.attributes[i].name] = metadata.attributes[i].type;
			auxBuffer.push(attribute);
		}
	}

	get(className) {
		return this.buffer[className];
	}
}

module.exports = MetadataBuffer;