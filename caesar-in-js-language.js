// Caesars Cipher Project

// Function that returns the decrypted string
function rot13(str) {
	let encryptedStr = str;
	let decryptedStr = "";
	let key = 13;

	for (let i=0; i<encryptedStr.length; i++){
		// Decrypt each letter using reverse caesar encryption..
		let encryptLetter = encryptedStr[i];
		let indexOfencLet = 0;
		let decryptLetter = "";

		// Check for the letter case
		// If it is a lowercase or a largercase
		let codeEncryptLetter = encryptLetter.charCodeAt(0);
		let codeALetter = "A".charCodeAt(0); // 65 ASCII CODE
		let codeaLetter = "a".charCodeAt(0); // 97 ASCII CODE
		let codeDecriptLetter = 42;
		let calc = 0;

		// Chec if the character is an Alphabetical character
		let regexAlphabetic = new RegExp("[a-zA-Z]", "i");
		if ( regexAlphabetic.test(encryptLetter) != true ) {
			// The character is not Alphabetic
			decryptedStr = decryptedStr.concat(encryptLetter);

		} else {
			// The character is Alphabetic
			if (codeEncryptLetter >= codeaLetter){
				// I deal with lowercase letter
				indexOfencLet = codeEncryptLetter - codeaLetter;
				calc = (indexOfencLet + key)%26;
				codeDecriptLetter = codeaLetter + calc;
				decryptLetter = String.fromCharCode(codeDecriptLetter);
				decryptedStr = decryptedStr.concat(decryptLetter);
			} else {
				// I deal with uppercase letter
				indexOfencLet = codeEncryptLetter - codeALetter;
				calc = (indexOfencLet + key)%26;
				codeDecriptLetter = codeALetter + calc;
				decryptLetter = String.fromCharCode(codeDecriptLetter);
				decryptedStr = decryptedStr.concat(decryptLetter);
			}



		}



		// console.log("encryptLetter=", encryptLetter);
		// console.log("codeEncryptLetter=", codeEncryptLetter);
		// console.log("indexOfencLet=", indexOfencLet);
		// console.log("decryptLetter=", decryptLetter);
		// console.log("decryptedStr=", decryptedStr);
	}


	console.log("Encripted string=", encryptedStr);
	console.log("Decripted string=", decryptedStr);

return decryptedStr;
}


//Testing
rot13("SERR PBQR PNZC");
//Waiting: rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
//rot13("E") // should get "R"
//rot13("Z") // should get "A"
//rot13("cd");
//rot13("FREE CODE CAMP");
//rot13("44553!£$%^&*()")
