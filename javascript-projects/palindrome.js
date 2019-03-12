// Return true if the given string is a palindrome. Otherwise, return false.
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

function palindrome(str) {
  var regex = /[^0-9a-z]/gi; 
  var onlyLetters = str.replace(regex, '').toLowerCase();
  var onlyLettersReversed = onlyLetters.split('').reverse().join('');
  return onlyLetters === onlyLettersReversed ? true : false;
}

palindrome("eye");
palindrome("_eye");
palindrome("My age is 0, 0 si ega ym.");
palindrome("A man, a plan, a canal. Panama");