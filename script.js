function firstWord(s) {
  // your code here
	let arr=s.split(" ");
	let ans= String(arr[0]);
      return ans;

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
