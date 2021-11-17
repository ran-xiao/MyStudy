// 数据类型
/**
 * String 字符型
 * number 数字型
 * boolean 布尔
 * null 空值
 * undefined 未定义
 * null
 * object 对象
 */
var a = "中国人"; // String 字符型
var b = 10; // number 数字型
var c = true; // 布尔型
var d = null;
var e = undefined;
console.log(a, b, c, d, e);
console.log(typeof a, typeof b, typeof c, typeof d, typeof e);

// for循环
for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log("==============================数组的四种定义==================================");// 数组的四种定义
var arr = ["first","second","third"];
console.log(arr);

var brr = new Array();
console.log(brr);

var crr = new Array(8);
console.log(crr);

var drr = new Array("1","2","3");
console.log(drr);
console.log("==============================//数组的push()、pop()、splice()方法==================================");

crr.push("niubi");
crr[1] = "zhongguo";
console.log(crr);
crr.pop();
console.log(crr);
drr.splice(0,1);
console.log(drr);
drr.splice(0,0,5,6,arr);
console.log(drr);


console.log("==============================//函数创建以及作用域==================================");
test();
function test() {
  console.log("the function was used");
}

test();

var fun = function(){
  console.log("The seconde function was used");
}
fun();

var a = 1;
function test1(){
  var a;

  function inner(){
    console.log(a+b);
  }

  inner();

}

test1(); //undefined
console.log("==============================//函数之参数==================================");
function f1(a,b,c){
  console.log(arguments);
  var sum = a+b+c;
  console.log(sum,arguments[3]);
}
f1(1,2,3,4);

// 用arguments实现累加函数
function fadd(){
  var sum = 0;
  for (var index = 0 ; index < arguments.length ; index++ ){
     sum+=arguments[index];
  }
  return sum;
}
var a = fadd(-1,-2,4);
console.log("累加函数值:"+a);

console.log("==============================//函数之闭包==================================");
/**
 * 1、在函数内还有一个函数
 * 2、函数内部的函数用到了外部函数的局部变量
 */
function f2(){
  var a = 0 ;
  return function(b){
     a += b;
     return a;
  }
}

var code = f2();
console.log(code(2));
// git 更改项目文件

var rr = 100;
console.log(rr);