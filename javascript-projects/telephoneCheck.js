function telephoneCheck(str) {
  // regex patterns for each valid format (6 of them) - but maybe consolidate them with optional characters
  // 1. 555-555-5555

  // 2. (555)555-5555

  // 3. (555) 555-5555

  // 4. 555 555 5555

  // 5. 5555555555

  // 6. 1 555 555 5555

  let regex = /1?\w?\(?[0-9]{3}\)?\w?\-?[0-9]{3}\w?\-?[0-9]{4}/g;
  return str.match(regex) ? true : false
  // try to match the string to each valid format
}

telephoneCheck("555-555-5555");
telephoneCheck("1 555 555 5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("(275)76227382");
telephoneCheck("(555)5(55?)-5555");
telephoneCheck("-1 (757) 622-7382");