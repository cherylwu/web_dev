var name = "keep on", time = 3, result = true;
var target = Array(4);
target[0] = "javaScript";
target[1] = "linux";
target[2] = "performance testing";
target[3] = ["ali", 3, 13, "wangyi", "tencent", true];

alert("hello");

//alert(target[3][4]);
//Object
var cheryl = Object();
cheryl.name = "cheryl\'s mac";
cheryl.age = 26;
cheryl.idol = "hg";
cheryl.dream = target;

//alert(cheryl.dream);
//Object and array 
var info = Array();
info["time"] = "3m";
info["skill"] = "JavaScript";
info["advance"] = "LR&linux";
var beatles = {};
beatles.vocalist = info;
//alert(beatles.vocalist.time);

var a = 10 + "20";
var b = 10 + 20;
var c = a + b;
var d = 1 - 2;
//alert( a + "\n" + b + ","+ c + "," + d );

/*
var year = 2016;
var message = "This year is ";
message += year;
//alert(message);

//comparing operation
var my_mood = "happy";
var my_status = "hard";
if(my_mood = my_status){
    alert("this is assignment.");
}
if(my_mood == my_status){
    alert("this is comparing.");
}

var m = false;
var n = "";
if(m == n){
    alert("m equals n someway.")
} 
if(m === n){
    alert("m is the same with n");
}else if(m !== n){
    alert("m isn\'t the same with n.");
}
//b = 10 + 20
if( b >= 5 && b <=30){
    alert("The number is in the right range.");
}
if( b >30 || b < 5){
    alert("The number isn\'t in the right range.");
}else if( !( b >30 || b <5)){
    alert(b);
}
if( !(b > 30)){
    alert("It\'s right.");
}
*/

/*
//while
var count = 1;
while (count < 3) {
    alert(count);
    count++;
}

//do,only when the condition in while is true, it will excute do again.
var k = 0;
do{
    alert("k = " + k);
    k++;
}while(k<2);

do{
    alert("what is k :" + k)
}while(k<0)

//for
for(var i = 0; i<target.length; i++){
    alert(target[i]);
}
*/
//function name(params) {
function multiply(x, y) {
    var salary = x * y;
    //    alert(temp);
    return salary;
}
var salary = 160000;
var money = multiply(15, 12000);
//alert("Your hoped salary is "+ salary);

var num = 12.3435;
var num = Math.round(num);
//alert(num);

var current_date = new Date();
var current_month = current_date.getMonth();

var current_day = current_date.getDay(); //week
//alert("current_day is " + current_day);
var today = current_date.getDate(); //month
//alert("today is " + today);
alert("The current date is " + current_date);

var current_time = current_date.getTime();
//alert("The current_time is " + current_time);

var current_hour = current_date.getHours();
//alert("The current hour is " + current_hour);

var current_minute = current_date.getMinutes();
//alert("The current date is " + current_month + "-" + today + "-" + current_hour + "-" + current_minute + "." );

//alert(typeof document.getElementById(""));