function createRandStr() {

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var randChar = [];
var newArry = [];
document.getElementById('alphabet').innerHTML = alphabet;
while (alphabet.length > 0) {
	randChar = alphabet.splice([Math.random() * alphabet.length],1);

	newArry.push.apply(newArry, randChar);

	
	document.getElementById('cipher').innerHTML = newArry;
	}

	console.log(randChar);
	console.log(newArry);
	console.log(alphabet);

	//When I concatenate the array to a string does it change it's type to a string?
	console.log(newArry + " •••• Am I now a string?")
}

createRandStr();


