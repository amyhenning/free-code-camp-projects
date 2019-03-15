function telephoneCheck(str) {
  // regex patterns for each valid format (6 of them) - but maybe consolidate them with optional characters
  // 1. 555-555-5555
  let regex1 = /1?[0-9]{3}\-[0-9]{3}\-[0-9]{4}/;
  // 2. (555)555-5555
  let regex2 = /1?\([0-9]{3}\)[0-9]{3}\-[0-9]{4}/;
  // 3. (555) 555-5555
  let regex3 = /1?\([0-9]{3}\)\s{1}[0-9]{3}\-{0-9}/;
  // 4. 555 555 5555
  let regex4 = /1?[0-9]{3}\s{1}[0-9]{3}\s{1}[0-9]{4}/;
  // 5. 5555555555
  let regex5 = /1?[0-9]{10}/;
  // 6. 1 555 555 5555
  let regex6 = /1\s{1}[0-9]{3}\s{1}[0-9]{3}\s{1}[0-9]{4}/;

  let regexArr = [regex1, regex2, regex3, regex4, regex5, regex6];

  for (let i = 0; i < regexArr.length; i++) {
    if (!str.match(regexArr[i])) {
      return false;
    }
  }
  return true;
  // let regex = /1?\w?\(?[0-9]{3}\)?\w?\-?[0-9]{3}\w?\-?[0-9]{4}/g;

  // try to match the string to each valid format
}

telephoneCheck("555-555-5555");
telephoneCheck("1 555 555 5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("(275)76227382");
telephoneCheck("(555)5(55?)-5555");
telephoneCheck("-1 (757) 622-7382");