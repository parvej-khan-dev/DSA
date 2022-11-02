// check annagram string

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  let counter = {};
  for (let letter of string1) {
    // console.log(letter);
    counter[letter] = (counter[letter] || 0) + 1;
    // console.log(counter[letter]);
  }
  //   console.log(counter);

  for (let item of string2) {
    if (!counter[item]) {
      return false;
    }
    counter[item] -= 1;
    console.log(counter[item]);
    return true;
  }
}

let check = isAnagram("madam", "madam");
console.log(check);

//time coomplixity o(n)

// another method for anagram

function anagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let Obj1 = {};
  let Obj2 = {};

  for (let i = 0; i < s.length; i++) {
    Obj1[s[i]] = Obj1[s[i]] + 1 || 1;
    Obj2[t[i]] = Obj2[t[i]] + 1 || 1;
  }
  console.log("sobj", Obj2);
  console.log("tobj", Obj2);

  for (let key in Obj1) {
    if (Obj1[key] !== Obj2[key]) {
      return false;
    }
  }
  return true;

  //method 3

  // let res = Object.keys(Obj1).every((key) => Obj1[key] === Obj2[key]);
  // return res;
}

// Time Complixty also O(n)
