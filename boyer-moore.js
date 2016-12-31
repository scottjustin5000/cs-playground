function BoyerMoore() {

	var self = this;

	function getSuffixLength(pattern, index) {

		var len = 0;

      	for (var i = index, j = (pattern.length - 1); (i >= 0 && pattern[i] === pattern[j]); --i, --j) {
         	len += 1;
      	}

      	return len;
	}

	function isPrefix(pattern, index) {

		for (var i = index, j = 0; i < pattern.length; ++i, ++j) {
        	if (pattern[i] !== pattern[j]) {
            	return false;
         	}
      	}
      	return true;
	}

	function getBadCharacters(pattern) {

		var chars = pattern.split('').filter(function(c, index, self) {
			return self.indexOf(c) > -1;
		});

		var previousPositions = {};
		var badCharacters = {};

		for(var i = 0; i < pattern.length; i++) {
			var char = pattern[i];

			chars.forEach(function(c) {
				var previousPosition = previousPositions[c];

				if(c !== char) {

					if(!badCharacters[c]) {
						badCharacters[c] = {};
					}

					badCharacters[c][i] = previousPosition ? (i - previousPosition) : (i + 1);
				}
			});

			previousPositions[char] = i;
		}

		return badCharacters;
	}

	function getGoodSuffixes(pattern) {

		var suffixes = new Uint32Array(pattern.length);
        var lastPrefixPosition = pattern.length;

      	for (var i = (pattern.length - 1); i >= 0; --i) {
      		if (isPrefix(pattern, i + 1)) {
            	lastPrefixPosition = (i + 1);
         	}
        	suffixes[pattern.length - 1 - i] = (lastPrefixPosition - i + pattern.length - 1);
      	}
      	for (var i = 0; i < (pattern.length - 1); ++i) {
        	var suffixLen = getSuffixLength(pattern, i);
        	suffixes[suffixLen] = (pattern.length - 1 - i + suffixLen);
      	}
      
      	return suffixes;
	}

	self.search = function(text, pattern) {

		if(!text || !pattern) {
			return -1;
		}
		var patternLength = pattern.length;
		var textLength = text.length;

		var goodSuffixes = getGoodSuffixes(pattern);
		var badCharacters = getBadCharacters(pattern);

		for (var i = (patternLength - 1); i < textLength;) {
        	
        	var offsetsForChar;
        	var offset;

        	var j = (patternLength - 1);

         	for (j; pattern[j] === text[i]; --i, --j) {
            	if (j === 0) {
               		return i;
            	}
         	}

         	offsetsForChar = badCharacters[text[i]];
         	offset = offsetsForChar ? offsetsForChar[j] : patternLength;
         	
         	i += Math.max(goodSuffixes[patternLength - 1 - j], offset);
      	}

      	return -1;
	}

	return self;
}

module.exports = BoyerMoore;