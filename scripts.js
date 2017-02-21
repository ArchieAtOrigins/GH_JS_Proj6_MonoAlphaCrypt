function createRandStr() {
// var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var alphabet2 = "abcdefghijklmnopqrstuvwxyz";

var randStr = '';

for(var i=0; i < alphabet2.length; i++) {
	randStr += alphabet2.charAt(Math.random() * alphabet2.length);
	}
	console.log(randStr);
	console.log(alphabet2);

}

// This does not work as it returns a string with multiple instances of a particular char rather than a scrambling of the alphabet. Try again.
