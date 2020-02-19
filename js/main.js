var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    startDelay: 100,
    backSpeed: 40,
    typeSpeed: 40,
    //    @property {number} backDelay 

    backDelay: 7000
});

// Make the DIV element draggable:
dragElement(document.getElementById("logo"));
dragElement(document.getElementById("draggable-vereia"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//function showDiv() {
//    div = document.getElementById('draggable-vereia');
//    div.style.display = "block";
//}

function toggle1() {
 if( document.getElementById("hidethis_one").style.display=='none' ){
   document.getElementById("hidethis_one").style.display = 'table-row';
// set to table-row instead of an empty string
 } else {
   document.getElementById("hidethis_one").style.display = 'none';
 }
}

function toggle2() {
 if( document.getElementById("hidethis_two").style.display=='none' ){
   document.getElementById("hidethis_two").style.display = 'table-row';
// set to table-row instead of an empty string
 }else{
   document.getElementById("hidethis_two").style.display = 'none';
 }
}

function toggle3() {
 if( document.getElementById("hidethis_three").style.display=='none' ){
   document.getElementById("hidethis_three").style.display = 'table-row';
// set to table-row instead of an empty string
 }else{
   document.getElementById("hidethis_three").style.display = 'none';
 }
}

function toggle4() {
 if( document.getElementById("hidethis_four").style.display=='none' ){
   document.getElementById("hidethis_four").style.display = 'table-row';
// set to table-row instead of an empty string
 }else{
   document.getElementById("hidethis_four").style.display = 'none';
 }
}

function toggle5() {
 if( document.getElementById("hidethis_five").style.display=='none' ){
   document.getElementById("hidethis_five").style.display = 'table-row';
// set to table-row instead of an empty string
 }else{
   document.getElementById("hidethis_five").style.display = 'none';
 }
}

function toggle6() {
 if( document.getElementById("hidethis_six").style.display=='none' ){
   document.getElementById("hidethis_six").style.display = 'table-row';
// set to table-row instead of an empty string
 }else{
   document.getElementById("hidethis_six").style.display = 'none';
 }
}

function toggle7() {
 if( document.getElementById("hidethis_seven").style.display=='none' ){
   document.getElementById("hidethis_seven").style.display = 'table-row';
// set to table-row instead of an empty string
 }else{
   document.getElementById("hidethis_seven").style.display = 'none';
 }
}

function toggle8() {
 if( document.getElementById("hidethis_eight").style.display=='none' ){
   document.getElementById("hidethis_eight").style.display = 'table-row';
// set to table-row instead of an empty string
 }else{
   document.getElementById("hidethis_eight").style.display = 'none';
 }
}

function toggle9() {
 if( document.getElementById("hidethis_nine").style.display=='none' ){
   document.getElementById("hidethis_nine").style.display = 'table-row';
// set to table-row instead of an empty string
 }else{
   document.getElementById("hidethis_nine").style.display = 'none';
 }
}

function toggle10() {
 if( document.getElementById("hidethis_ten").style.display=='none' ){
   document.getElementById("hidethis_ten").style.display = 'table-row';
// set to table-row instead of an empty string
 }else{
   document.getElementById("hidethis_ten").style.display = 'none';
 }
}

function toggle11() {
 if( document.getElementById("hidethis_eleven").style.display=='none' ){
   document.getElementById("hidethis_eleven").style.display = 'table-row';
// set to table-row instead of an empty string
 }else{
   document.getElementById("hidethis_eleven").style.display = 'none';
 }
}

function toggle12() {
 if( document.getElementById("hidethis_twelve").style.display=='none' ){
   document.getElementById("hidethis_twelve").style.display = 'table-row';
// set to table-row instead of an empty string
 }else{
   document.getElementById("hidethis_twelve").style.display = 'none';
 }
}

function toggle13() {
 if( document.getElementById("hidethis_thirteen").style.display=='none' ){
   document.getElementById("hidethis_thirteen").style.display = 'table-row';
// set to table-row instead of an empty string
 }else{
   document.getElementById("hidethis_thirteen").style.display = 'none';
 }
}

function toggle14() {
 if( document.getElementById("hidethis_forteen").style.display=='none' ){
   document.getElementById("hidethis_forteen").style.display = 'table-row';
// set to table-row instead of an empty string
 }else{
   document.getElementById("hidethis_forteen").style.display = 'none';
 }
}

function toggle15() {
 if( document.getElementById("hidethis_fifteen").style.display=='none' ){
   document.getElementById("hidethis_fifteen").style.display = 'table-row';
// set to table-row instead of an empty string
 }else{
   document.getElementById("hidethis_fifteen").style.display = 'none';
 }
}

function toggle16() {
 if( document.getElementById("hidethis_sixteen").style.display=='none' ){
   document.getElementById("hidethis_sixteen").style.display = 'table-row';
// set to table-row instead of an empty string
 }else{
   document.getElementById("hidethis_sixteen").style.display = 'none';
 }
}