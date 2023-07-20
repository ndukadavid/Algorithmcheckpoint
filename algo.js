// function farenheith(cel) {
    //    return (cel * 9/5) + 32
    // }
    // console.log(farenheith(20));
    
    // using TYPEOF
    // function bp(p) {
    //     return typeof p === 'boolean' 
    // }
    // console.log(bp(true));
    
    //  let tr = _('hello world').truncate(5);
    //  console.log(tr);
    
    // let short = textEllipsis('a very long text', 10, { textEllipsis: ' END' });
    // console.log(short);
    
    function trun(str, num) {
        if(str.length > num) {
          return str.slice(0, num) + "...";
        }
        return str;
      }
    //  console.log(trun('adedotun', 5))
      

//     function reverseString(str) {
//       let splitStr = str.split("");
//       console.log(splitStr);
//       let reverseArray = splitStr.reverse();
//       console.log(reverseArray);
//       let david = reverseArray.join('')
//       console.log(david);
//     }
// reverseString('starboy')

// putting the whole code on a straight line
function reverseString(str) {
  return str.split('').reverse();
}
console.log(reverseString('loveup'));

// // another way to achieve a similar answer
// function reverse(str) {
//     let revs = ''
//     for (let i = str.length-1; i >= 0; i--){
//       revs += str[i]
//     }
//     console.log(revs);
// }
// reverse('start')

// function mutation(arr) {

//   //first split the arr into the two inputs and convert all to lower case
  
//   var firstArray = arr[0].toLowerCase().split("");
//   var secondArray = arr[1].toLowerCase().split("");
  
//   //now using the code provided by the above comment which is really clean
  
//   var count = 0;
//   for (var i =0; i < secondArray.length; i++) {
//       if(firstArray.indexOf(secondArray[i]) > -1 ) {
//           count++;
//       }
//   }
  
//   if (count == secondArray.length) {
//       return true
//   }
  
//   //changed the code provided above to handle the true/false criteria of the excercise
  
//   else {return false; }
//   } 

  function compare(arr) {
    const tes = arr[1].toLowerCase()
    const test = arr[0].toLowerCase()

    for (let i = 0; i < tes.length; i++) {
        if(test.indexOf(tes[i]) > 0) return false;
    }
    return true
  }
  console.log(compare(['jesus', 'used']));
