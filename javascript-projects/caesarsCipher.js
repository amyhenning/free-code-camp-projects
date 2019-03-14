// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

function rot13(str) { // LBH QVQ VG!
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let splitStr = str.split("");
    let decoded = "";
    let regex = /[A-Z]/gi;
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i].match(regex)) {
            let originalIndex = alpha.indexOf(splitStr[i]) - 13;
            if (originalIndex < 0) {
                decoded += alpha[alpha.indexOf(splitStr[i]) + 13];
            } else {
                decoded += alpha[originalIndex];
            };
        } else {
            decoded += splitStr[i];
        };
    };
    return decoded;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC"); // should decode to FREE CODE CAMP
rot13("SERR CVMMN!"); // should decode to FREE PIZZA!
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.