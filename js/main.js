function load(){
   // Global Variables
   let input1 = document.getElementById("input1"),
   input2 = document.getElementById("input2"),
   input3 = document.getElementById("input3"),
   input4 = document.getElementById("input4");

 function deciToAll() {
   // Local Variables for the value of input fields
   let valInput1 = parseInt(input1.value, 10),
     valInput2 = parseInt(input2.value, 2),
     valInput3 = parseInt(input3.value, 8),
     valInput4 = parseInt(input4.value, 16);

   // Generate result
   input2.value = valInput1.toString(2).toUpperCase();
   input3.value = valInput1.toString(8).toUpperCase();
   input4.value = valInput1.toString(16).toUpperCase();
 }

 function octToAll() {
   // Local Variables for the value of input fields
   let valInput1 = parseInt(input1.value, 10),
     valInput2 = parseInt(input2.value, 2),
     valInput3 = parseInt(input3.value, 8),
     valInput4 = parseInt(input4.value, 16);

   // Generate result
   input1.value = valInput3.toString(10).toUpperCase();
   input2.value = valInput3.toString(2).toUpperCase();
   input4.value = valInput3.toString(16).toUpperCase();
 }

 function hexaToAll() {
   // Local Variables for the value of input fields
   let valInput1 = parseInt(input1.value, 10),
     valInput2 = parseInt(input2.value, 2),
     valInput3 = parseInt(input3.value, 8),
     valInput4 = parseInt(input4.value, 16);

   // Generate result
   input1.value = valInput4.toString(10).toUpperCase();
   input2.value = valInput4.toString(2).toUpperCase();
   input3.value = valInput4.toString(8).toUpperCase();
 }
 // End of Global Functions

 // Made changes on key up
 input1.addEventListener("keyup", function () {
   deciToAll();
 });
 // Made changes on any value change
 input1.addEventListener("change", function () {
   deciToAll();
 });

 // Start Converting on Key Up in the binary input fields
 input2.addEventListener("keyup", function () {
   // Local Variables for the value of input fields
   let valInput1 = parseInt(input1.value, 10),
     valInput2 = parseInt(input2.value, 2),
     valInput3 = parseInt(input3.value, 8),
     valInput4 = parseInt(input4.value, 16);

   // Generate result
   input1.value = valInput2.toString(10).toUpperCase();
   input3.value = valInput2.toString(8).toUpperCase();
   input4.value = valInput2.toString(16).toUpperCase();
 });

 // Start Converting on Key Up in the octal input fields

 // Made changes on key up
 input3.addEventListener("keyup", function () {
   octToAll();
 });

 // Made changes on any value change
 input3.addEventListener("change", function () {
   octToAll();
 });

 // Start Converting on Key Up in the hexadecimal input fields

 // Made changes on key up
 input4.addEventListener("keyup", function () {
   hexaToAll();
 });

 // Made changes on any value change
 input4.addEventListener("change", function () {
   hexaToAll();
 });
}window.addEventListener("load",load)