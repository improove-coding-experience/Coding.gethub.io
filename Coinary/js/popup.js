// // $(function () {
// //     $("button").click(function () {
// //       $(".cover").fadeIn("300");
// //     });
// //     $(".cover,.close").click(function () {
// //       $(".cover").fadeOut("300");
// //     });
// //     $(".contents").click(function (e) {
// //       e.stopPropagation();
// //     });
// //   });
  
// console.log("Manik");
var btn = document.getElementById('btnX');
btn.addEventListener("click", function(){
  document.getElementById('box').classList.toggle("open-box");
});

function toggleCLass() {
   var myBoxClasses = document.getElementsByClassName('box').classList;
   if (myBoxClasses.contains("box-scale")) {
       myBoxClasses.remove("box-scale");
   } else {
       myBoxClasses.add("box-scale");
   }
}