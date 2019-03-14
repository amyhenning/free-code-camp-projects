function telephoneCheck(str) {
  // regex patterns for each valid format (6 of them)

  // try to match the string to each valid format
}

telephoneCheck("555-555-5555"); // should return true
telephoneCheck("1 555 555 5555"); // should return false
telephoneCheck("1 (555) 555-5555"); // should return true
telephoneCheck("(275)76227382"); // should return false
telephoneCheck("(555)5(55?)-5555"); // should return false
telephoneCheck("-1 (757) 622-7382"); // should return false