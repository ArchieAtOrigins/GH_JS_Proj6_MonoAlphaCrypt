// OK! Now we're returning a scrambled alphabet.

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


function createRandStr() {

var randChar = [];
var newArry = [];

while (alphabet.length > 0) {
	randChar = alphabet.splice([Math.random() * alphabet.length],1);

	newArry.push.apply(newArry, randChar);

	document.getElementById('alphabet').innerHTML = "DANGER WILL ROBINSON! DANGER!";
	document.getElementById('cipher').innerHTML = newArry;
	

	console.log(randChar);
	console.log(newArry);
	console.log(alphabet);
	}
}

createRandStr();


