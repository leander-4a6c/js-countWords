function countWords(){
	var words =  document.getElementById('woorden').value;
	var karakters = words.length;
	var array = words.split(" ");

	document.getElementById('result').innerHTML = "het aantal karakters zijn: " + karakters + "<br>" + "het aantal woorden zijn: " + array.length;

	getLongestWord(array);

	console.log(wordfrequentie(array));

}
function showWords(){

	var words =  document.getElementById('woorden').value;
	var array = words.split(" ");

	

	for(i=0; i< array.length; i++){
	    array[i] = upperCaseWord(array[i]);

	}

	console.log(array);
	// word.join(" ");

	function upperCaseWord(item) {
		
		var word = item.split("");
		for(i=0; i<word.length; i++){
			if (i == 0) {
				word[0] = word[0].toUpperCase();
			}
		}

		return word.join("");
		// console.log(word.join(""));
	}


}
function getLongestWord(array){
	var length = 0;
	var longest;

	for(i=0; i<array.length; i++){

		if (array[i].length > length) {
			length = array[i].length;
			longest = array[i];
		}
	}
	document.getElementById('result2').innerHTML = "het langste woord: " + longest;
}
function wordfrequentie(array){

    var freq = {};
    for (var i=0; i<array.length;i++) {
        var character = array.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};	



// langste woord filter en toon dat.