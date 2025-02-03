/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
  return "up2211093";
}

function fn() {
  return 'Gabriel';
}

function sn() {
  return 'Tendelski';
}

function add(a, b) {
  // replace this example with
  // your first function then
  // add more below as necessary.
  return a + b;

}

function subtract(a, b){
  return a - b;
}

function checkObject(obj){
  obj.checked = true;
}

function checkObjectInside(obj){
  if (obj.data) {
    obj.data.checked = true;
  }
}

function arraySet(arr, i, n){
  if(Number.isInteger(i)){
    if(arr.length > i){
      arr[i] = n;
    }
  }
}

function addAll(arr){
  if(Array.isArray(arr)){
    let totalArr = 0;
    arr.forEach(num => {
      totalArr += num;
    })
    return totalArr;
  }
}

function larger(a, b){
  return a > b ? a : b;
}

function largest(arr){
  if(Array.isArray(arr) && arr.length > 0){
    return Math.max(...arr);
  }
  return null;
}

function compare(a, b){
  if(a.length === b.length){
    for(let i = 0; i < a.length; i++){
      if (a[i] != b[i]){
        return false;
      }
    }
    return true;
  }
  return false;
  
}

function addToAll(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += n;
  }
  return arr;
}

let remembered;

function rememberThis(keepsake){
  remembered = keepsake;
}

function nArray(n){
  let arr = [];
  for(let i = 0; i < n; i++){
    arr[i] = i+1;
  }
  return arr;
}

function addAllOpt(arr){
  if(Array.isArray(arr) && arr.length > 0){
    return arr.reduce((sum, num) => sum + num, 0);
  }
  return 0;
}

function divisors(arr, div){
  let arrDiv = []
  for (const num of arr){
    if (Number.isInteger(num / div)){
      arrDiv.push(num);
    }
  }
  return arrDiv;
}

function multiples(n, m){
  let arr = [];
  for(let i = 0; i < n; i++){
    arr[i] = (i+1)*m;
  }
  return arr;
}