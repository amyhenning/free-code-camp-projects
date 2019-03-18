function telephoneCheck(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

telephoneCheck("555-555-5555"); // true
telephoneCheck("1 555 555 5555"); // true
telephoneCheck("1 (555) 555-5555"); // true
telephoneCheck("(275)76227382"); // false
telephoneCheck("(555)5(55?)-5555"); // false
telephoneCheck("-1 (757) 622-7382"); // false
telephoneCheck("1 555-555-5555"); // true