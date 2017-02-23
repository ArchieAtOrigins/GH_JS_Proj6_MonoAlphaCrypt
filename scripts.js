var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function createRandStr() {

var randChar = '';
var newArry = [];
while (alphabet.length > 0) {
	randChar = alphabet.splice([Math.random() * alphabet.length],1);
	newArry.push(randChar);

	console.log(randChar);
	console.log(newArry);
	console.log(alphabet);
	}
	
}

createRandStr();