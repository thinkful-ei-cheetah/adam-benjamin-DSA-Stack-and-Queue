'use strict';

class _Node {
  constructor(data, next){
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(data){
    if( this.top === null){
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop(){
    const node = this.top; 
    this.top = node.next;
    return node.data;
  }
}

function peek(stack){
  return stack.top.data;
}
function isEmpty(stack){
  if(stack.top === null){
    return true;
  }
  return false;
}
function display(stack){
  let currentTop = stack.top;

  while(currentTop !== null){
    console.log(currentTop.data);
    currentTop = currentTop.next;
  }
}



function main(){
  let starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  // console.log(peek(starTrek));
  // console.log(isEmpty(starTrek));
  // console.log(display(starTrek));

}

main();

function is_palindrome(s){
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  let newStack = new Stack();
  let newWord = '';

  for(let i = 0; i < s.length; i++){
    newStack.push(s[i]);
  }
  for(let i = 0; i < s.length; i++){
    newWord = newWord + newStack.pop();
  }
  console.log(newWord);

  if(newWord === s){
    return true;
  }
  return false;
}

// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));