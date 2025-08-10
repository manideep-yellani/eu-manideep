// 1. WAP to reverse a string
// 	input:- 'sachin'
// 	output:- 'nihcas'

let gg="abcdef"
gg=gg.split('')
gg=gg.reverse()
gg=gg.join('')
console.log(gg)
// 2. WAP to reverse words
// 	input:- 'This is javascript class'
// 	output:- 'class javascript is this'

let input='This is javascript class'
let a = input.split(' ')
a.reverse()
let b=a.join(' ')
console.log(b)


// 3. WAP to print the first non-repeated character in a string
//    input:- 'entertainment'
//    output:- r
   gg='entertainment'
   a=''
   for(let c of gg){
    if(gg.lastIndexOf(c)==gg.indexOf(c)){
      a+=c
    }
   }
   console.log(a)
// 4. WAP to print a string in title case
// 	input:- 'this is javascript class'
//    output:- 'This Is Javascript Class'
   let str='this is javascript class'
   let mod=''; //new string for storing it
   let new_str=str.split(' '); //split for each word
   for(let char of new_str){
    if(char.length>0){
        mod+=char.charAt(0).toUpperCase()+char.slice(1)+' '; 
        //slice prints from 2nd letter to end of that, and we add  a blank space
    }

   }
   console.log(mod);
// 5. WAP to find longest word in a sentence
// 	input:- 'this is javascript class'
//     output:- javascript
 a = 'this is javascript class';
a = a.split(' ');
let m = 0;
let pl = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i].length > pl) {
    pl = a[i].length;
    m = i;
  }
}

console.log(a[m]);

// 6. WAP to print Account number
   input= '12345678987'
//    output:- '12*******87'
   let f= input.slice(0,2)
   let l=input.slice(-2)
   a=''
   for(let i=0;i<input.length-4;i++){
    a+='*'
   }
   a=f+a+l
   console.log(a)
// 7. WAP to print Credit-card number
//    input:- '1111222233334444'
//    output:- '1111-2222-3333-4444'

   
// 8. WAP to check if 2 strings are anagram or not
// 	'listen' - 'silent'    anagram(every char of str1 should be there in str2)

a='listen'
b='silent'
let i
for(i of b){
  if(!b.includes(i)){
    console.log('not an anagram')
    return;
  }
}
console.log('yes it is')
	
// 9. WAP to remove special character from a string
//    input:- 'hello@#hi&'
//    output:- 'hellohi'
   input='hellAo@#hi&'
  let result=[]
   for(let i=0;i<input.length;i++){
    if((input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122 )||( input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) ){
      result.push(input[i])
    }
   }
   console.log(result.join(''))

// 10. WAP to move all the special characters to the end of the string
// 	input:- 'hello@#hi&'
//    output:- 'hellohi@#&'
	 
    