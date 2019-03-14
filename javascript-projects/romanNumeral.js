// Convert the given number into a roman numeral.

function convertToRoman(num) {
  // set arrays equal to roman numeral increments and the "odd" ones, such as 40, 4, 9, 900, etc.
  var romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  // set an empty string as the converted value
  var converted = "";

  // loop through the decimals array
  for (var i = 0; i < decimals.length; i++) {
      // compare the value at index i of the decimals array with num. While it's less than the num...
      while (decimals[i] <= num) {
          // add the appropriate roman numeral to the converted string
          converted += romanNumerals[i];
          // subtract the number at index i of the decimals array from the original num - thus decrementing num
          num -= decimals[i];
      };
  };
  return converted;
}

convertToRoman(36);  
