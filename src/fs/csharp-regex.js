class CSharpRegex {

	constructor() {}

	getClassName() { 
		return /([ \t]*)public (partial )?class (.+)/gm;
	}

	getAttributesBlock() {
		return /(.*)\/\/ Attributes(.|\n)*\/\/ EndAttributes/gm;
	}

	getAttribute() {
		return /public (virtual )?(.+) (.+) {/gi;
	}
}

module.exports = CSharpRegex;