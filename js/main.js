function load(){
   let input1 = document.getElementById("input1"),
   input2 = document.getElementById("input2"),
   input3 = document.getElementById("input3"),
   input4 = document.getElementById("input4");

 function deciToAll() {
   let valInput1 = parseInt(input1.value, 10),
     valInput2 = parseInt(input2.value, 2),
     valInput3 = parseInt(input3.value, 8),
     valInput4 = parseInt(input4.value, 16);

   input2.value = valInput1.toString(2).toUpperCase();
   input3.value = valInput1.toString(8).toUpperCase();
   input4.value = valInput1.toString(16).toUpperCase();
 }

 function octToAll() {
   let valInput1 = parseInt(input1.value, 10),
     valInput2 = parseInt(input2.value, 2),
     valInput3 = parseInt(input3.value, 8),
     valInput4 = parseInt(input4.value, 16);

   input1.value = valInput3.toString(10).toUpperCase();
   input2.value = valInput3.toString(2).toUpperCase();
   input4.value = valInput3.toString(16).toUpperCase();
 }

 function hexaToAll() {
   let valInput1 = parseInt(input1.value, 10),
     valInput2 = parseInt(input2.value, 2),
     valInput3 = parseInt(input3.value, 8),
     valInput4 = parseInt(input4.value, 16);

   input1.value = valInput4.toString(10).toUpperCase();
   input2.value = valInput4.toString(2).toUpperCase();
   input3.value = valInput4.toString(8).toUpperCase();
 }

 input1.addEventListener("keyup", function () {
   deciToAll();
   character();
 });
 input1.addEventListener("change", function () {
   deciToAll();
   character();
 });

 input2.addEventListener("keyup", function () {
   let valInput1 = parseInt(input1.value, 10),
     valInput2 = parseInt(input2.value, 2),
     valInput3 = parseInt(input3.value, 8),
     valInput4 = parseInt(input4.value, 16);

   input1.value = valInput2.toString(10).toUpperCase();
   input3.value = valInput2.toString(8).toUpperCase();
   input4.value = valInput2.toString(16).toUpperCase();
 });

 input3.addEventListener("keyup", function () {
   octToAll();
 });

 input3.addEventListener("change", function () {
   octToAll();
 });

 input4.addEventListener("keyup", function () {
   hexaToAll();
 });

 input4.addEventListener("change", function () {
   hexaToAll();
 });
}window.addEventListener("load",load)

number = 0;
var animations = ['img/binary.gif',
    'img/binary.gif',
    'img/binary.gif'
];

function character() {
    image = document.getElementById('gif');
    image.src = animations[number];
}
