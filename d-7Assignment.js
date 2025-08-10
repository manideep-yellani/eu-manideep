// 1. Print the occurrence of each character in a string
// input: 'entertainment'
// output: { e: 3, n: 2, t: 3, r: 1, a: 1, i: 1, m: 1 }
let temp = 'entertainment';
let res = {};
for (let ch of temp) {
    res[ch] = (res[ch] || 0) + 1;
}
console.log(res);

// 2. Print the character which is repeated max no of times
// input: 'hello world'
// output: 'L'
let str = 'hello world';
let freq = {};
let ans = str[0];
let maxCount = 1;

for (let ch of str) {
    if (ch !== ' ') {
        freq[ch] = (freq[ch] || 0) + 1;
        if (freq[ch] > maxCount) {
            maxCount = freq[ch];
            ans = ch;
        }
    }
}
console.log(ans.toUpperCase());

// 3. Swap The case for Each Character in a string 
// input: 'Hello World'
// output: 'hELLO wORLD'
let input = 'Hello World';
let newAns = '';
for (let i = 0; i < input.length; i++) {
    let ch = input[i];
    if (ch >= 'A' && ch <= 'Z') {
        newAns += ch.toLowerCase();
    } else if (ch >= 'a' && ch <= 'z') {
        newAns += ch.toUpperCase();
    } else {
        newAns += ch;
    }
}
console.log(newAns);

// 4. Print the Abbreviation for a string
// input: 'Rabindra Nath Tagore'
// output: 'R. N. tagore'
let full = 'Rabindra Nath Tagore';
let words = full.split(' ');
let output = '';

for (let i = 0; i < words.length - 1; i++) {
    output += words[i][0].toUpperCase() + '. ';
}
output += words[words.length - 1].toLowerCase();
console.log(output);

// 5. Shift the characters by the next character
// input: 'abcxyz'
// output: 'bcdyza'
let original = 'abcxyz';
let shifted = '';
for (let ch of original) {
    if (ch === 'z') {
        shifted += 'a';
    } else if (ch === 'Z') {
        shifted += 'A';
    } else {
        shifted += String.fromCharCode(ch.charCodeAt(0) + 1);
    }
}
console.log(shifted);

// 6. Ask user to enter a sequence of parantheses and validate 
// input: '([{ }])'
// output: true
let parens = '([{ }])';
let stack = [];
let match = { '(': ')', '[': ']', '{': '}' };
let ok = true;

for (let ch of parens) {
    if (match[ch]) {
        stack.push(ch);
    } else if (ch === ')' || ch === ']' || ch === '}') {
        if (stack.length === 0 || match[stack.pop()] !== ch) {
            ok = false;
            break;
        }
    }
}
if (stack.length !== 0) ok = false;
console.log(ok);

// 7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters
// input: 'ABC'
// output: ABC , ACB , BAC , BCA , CAB , CBA
let comboInput = 'ABC';
function permute(s) {
    if (s.length <= 1) return [s];
    let result = [];

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        let left = s.slice(0, i) + s.slice(i + 1);
        let rest = permute(left);
        for (let p of rest) {
            result.push(ch + p);
        }
    }
    return result;
}
let combos = permute(comboInput);
console.log(combos.join(' , '));

// 8. Ask user to enter a number and convert that to Roman value
// input: 9, 12
// output: IX, XII
let a = 9, b = 12;
let val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
let sym = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

function toRoman(n) {
    let result = '';
    for (let i = 0; i < val.length; i++) {
        while (n >= val[i]) {
            result += sym[i];
            n -= val[i];
        }
    }
    return result;
}
console.log(toRoman(a), toRoman(b));

// 9. Ask user to enter a roman string and convert that to integer value
// input: 'IX', 'XII'
// output: 9, 12
let romanA = 'IX';
let romanB = 'XII';
let romanMap = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

function fromRoman(str) {
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        if (i + 1 < str.length && romanMap[str[i]] < romanMap[str[i + 1]]) {
            total -= romanMap[str[i]];
        } else {
            total += romanMap[str[i]];
        }
    }
    return total;
}
console.log(fromRoman(romanA), fromRoman(romanB));
