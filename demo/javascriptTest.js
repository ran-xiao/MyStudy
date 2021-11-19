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
// let 声明变量
for(let i = 0;i< 2; i++){
  console.log("---------------------------"+i);
}
console.log("----循环体外的let变量-----------"+i); //undefined  let只能作用在当前代码块中，类似于java中的private私有声明，且变量名不能重复声明
for(var i1 = 0;i1< 2; i1++){
  console.log("---------------------------"+i1);
}
console.log("------循环体外的var变量-------------------"+i1);

const c1 = 1;
//c1= 2; const表示不可改动类似java的final
console.log("--------------------------------------"+c1);


// for循环
for (var i = 0; i < 10; i++) {
  console.log(i);
}
//------------------------------------------------------------------------------------------------
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
//------------------------------------------------------------------------------------------------
crr.push("niubi");
crr[1] = "zhongguo";
console.log(crr);
crr.pop();
console.log(crr);
drr.splice(0,1);
console.log(drr);
drr.splice(0,0,5,6,arr);
console.log(drr);
//------------------------------------------------------------------------------------------------
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
//------------------------------------------------------------------------------------------------
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
//------------------------------------------------------------------------------------------------
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
//------------------------------------------------------------------------------------------------
console.log("==============================//题：计算0.2+0.3==================================");
 var a = 0.1;
 var b = 0.2;
 console.log(a+b+"||"); //0.30000000000000004精度缺失
//解决精度缺失，写一个函数来封装对小数进行化整处理
function mathadd(a,b){

   //获取参数中的最小值
   var min = (a<b) ? a : b;
  //转变为string类型
  var a = a.toString();
  var b = b.toString();

  //获取2个数的最大公倍数
  var beishu_num = 0;
  if(a.indexOf(".") != -1){
    var beishua = a.split(".")[1].length;
    var num1 = a.replace(".","");//直接将小数点去掉来化整
  }else{
    beishua = 0;
    num1 = a;
  }
  if(b.indexOf(".") != -1){
    var beishub = b.split(".")[1].length;
    var num2 = b.replace(".","");//直接将小数点去掉来化整
  }else{
    beishub = 0;
    num2 =b;
  }

  if(beishua > beishub){
    beishu_num = beishua - beishub;
  }else if(beishua < beishub){
    beishu_num = beishub - beishua;
  }
 
  if(a = min){
    a = min;
    for(var i = 0 ; i < beishu_num; i++){
      num1 += "0";
    }
  }else{
    for(var i = 0 ; i < beishu_num; i++){
      num2 += "0";
    }
  }
  //运算
  // var result = a*beishu_value + b*beishu_value;1.001*1000也会精度缺失
  //思路：不用乘法，改用replace替换小数点

  var xiaoshuwei = beishua;
  if(beishua > beishub){
    xiaoshuwei = beishua;
  }else if(beishua < beishub){
    xiaoshuwei = beishub;
  }

  var beishu_value = 1;
  for(var i = 0 ; i < xiaoshuwei; i++){
    beishu_value *= 10;
  }


  var result = parseInt(num1) + parseInt(num2);
  return result = result/beishu_value;


}
console.log(mathadd(0.1,0.2));
//------------------------------------------------------------------------------------------------
console.log("==============================//==================================");

