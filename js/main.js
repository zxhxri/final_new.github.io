var typed=new Typed('#typed',{stringsElement:'#typed-strings',startDelay:100,backSpeed:40,typeSpeed:40,backDelay:7000});dragElement(document.getElementById("logo"));dragElement(document.getElementById("draggable-vereia"));function dragElement(elmnt){var pos1=0,pos2=0,pos3=0,pos4=0;if(document.getElementById(elmnt.id)){document.getElementById(elmnt.id).onmousedown=dragMouseDown}else{elmnt.onmousedown=dragMouseDown}
function dragMouseDown(e){e=e||window.event;e.preventDefault();pos3=e.clientX;pos4=e.clientY;document.onmouseup=closeDragElement;document.onmousemove=elementDrag}
function elementDrag(e){e=e||window.event;e.preventDefault();pos1=pos3-e.clientX;pos2=pos4-e.clientY;pos3=e.clientX;pos4=e.clientY;elmnt.style.top=(elmnt.offsetTop-pos2)+"px";elmnt.style.left=(elmnt.offsetLeft-pos1)+"px"}
function closeDragElement(){document.onmouseup=null;document.onmousemove=null}}
function toggle1(){$(".info").not("#hidethis_one").hide();$("#hidethis_one").toggle()};function toggle2(){$(".info").not("#hidethis_two").hide();$("#hidethis_two").toggle()};function toggle3(){$(".info").not("#hidethis_three").hide();$("#hidethis_three").toggle()};function toggle4(){$(".info").not("#hidethis_four").hide();$("#hidethis_four").toggle()};function toggle5(){$(".info").not("#hidethis_five").hide();$("#hidethis_five").toggle()};function toggle6(){$(".info").not("#hidethis_six").hide();$("#hidethis_six").toggle()};function toggle7(){$(".info").not("#hidethis_seven").hide();$("#hidethis_seven").toggle()};function toggle8(){$(".info").not("#hidethis_eight").hide();$("#hidethis_eight").toggle()};function toggle9(){$(".info").not("#hidethis_nine").hide();$("#hidethis_nine").toggle()};function toggle10(){$(".info").not("#hidethis_ten").hide();$("#hidethis_ten").toggle()};function toggle11(){$(".info").not("#hidethis_eleven").hide();$("#hidethis_eleven").toggle()};function toggle12(){$(".info").not("#hidethis_twelve").hide();$("#hidethis_twelve").toggle()};function toggle13(){$(".info").not("#hidethis_thirteen").hide();$("#hidethis_thirteen").toggle()};function toggle14(){$(".info").not("#hidethis_forteen").hide();$("#hidethis_forteen").toggle()};function toggle15(){$(".info").not("#hidethis_fifteen").hide();$("#hidethis_fifteen").toggle()};function toggle16(){$(".info").not("#hidethis_sixteen").hide();$("#hidethis_sixteen").toggle()};function toggle17(){$(".info").not("#hidethis_seventeen").hide();$("#hidethis_seventeen").toggle()}var typed = new Typed('#typed', {
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
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
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



//function toggle1() {
//    if (document.getElementById("hidethis_one").style.display == 'none') {
//        document.getElementById("hidethis_one").style.display = 'table-row';
//        // set to table-row instead of an empty string
//    } else {
//        document.getElementById("hidethis_one").style.display = 'none';
//    }
//}
//
//function toggle2() {
//    if (document.getElementById("hidethis_two").style.display == 'none') {
//        document.getElementById("hidethis_two").style.display = 'table-row';
//        // set to table-row instead of an empty string
//    } else {
//        document.getElementById("hidethis_two").style.display = 'none';
//    }
//}
//
//function toggle3() {
//    if (document.getElementById("hidethis_three").style.display == 'none') {
//        document.getElementById("hidethis_three").style.display = 'table-row';
//        // set to table-row instead of an empty string
//    } else {
//        document.getElementById("hidethis_three").style.display = 'none';
//    }
//}
//
//function toggle4() {
//    if (document.getElementById("hidethis_four").style.display == 'none') {
//        document.getElementById("hidethis_four").style.display = 'table-row';
//        // set to table-row instead of an empty string
//    } else {
//        document.getElementById("hidethis_four").style.display = 'none';
//    }
//}
//
//function toggle5() {
//    if (document.getElementById("hidethis_five").style.display == 'none') {
//        document.getElementById("hidethis_five").style.display = 'table-row';
//        // set to table-row instead of an empty string
//    } else {
//        document.getElementById("hidethis_five").style.display = 'none';
//    }
//}
//
//function toggle6() {
//    if (document.getElementById("hidethis_six").style.display == 'none') {
//        document.getElementById("hidethis_six").style.display = 'table-row';
//        // set to table-row instead of an empty string
//    } else {
//        document.getElementById("hidethis_six").style.display = 'none';
//    }
//}
//
//function toggle7() {
//    if (document.getElementById("hidethis_seven").style.display == 'none') {
//        document.getElementById("hidethis_seven").style.display = 'table-row';
//        // set to table-row instead of an empty string
//    } else {
//        document.getElementById("hidethis_seven").style.display = 'none';
//    }
//}
//
//function toggle8() {
//    if (document.getElementById("hidethis_eight").style.display == 'none') {
//        document.getElementById("hidethis_eight").style.display = 'table-row';
//        // set to table-row instead of an empty string
//    } else {
//        document.getElementById("hidethis_eight").style.display = 'none';
//    }
//}
//
//function toggle9() {
//    if (document.getElementById("hidethis_nine").style.display == 'none') {
//        document.getElementById("hidethis_nine").style.display = 'table-row';
//        // set to table-row instead of an empty string
//    } else {
//        document.getElementById("hidethis_nine").style.display = 'none';
//    }
//}
//
//function toggle10() {
//    if (document.getElementById("hidethis_ten").style.display == 'none') {
//        document.getElementById("hidethis_ten").style.display = 'table-row';
//        // set to table-row instead of an empty string
//    } else {
//        document.getElementById("hidethis_ten").style.display = 'none';
//    }
//}
//
//function toggle11() {
//    if (document.getElementById("hidethis_eleven").style.display == 'none') {
//        document.getElementById("hidethis_eleven").style.display = 'table-row';
//        // set to table-row instead of an empty string
//    } else {
//        document.getElementById("hidethis_eleven").style.display = 'none';
//    }
//}
//
//function toggle12() {
//    if (document.getElementById("hidethis_twelve").style.display == 'none') {
//        document.getElementById("hidethis_twelve").style.display = 'table-row';
//        // set to table-row instead of an empty string
//    } else {
//        document.getElementById("hidethis_twelve").style.display = 'none';
//    }
//}
//
//function toggle13() {
//    if (document.getElementById("hidethis_thirteen").style.display == 'none') {
//        document.getElementById("hidethis_thirteen").style.display = 'table-row';
//        // set to table-row instead of an empty string
//    } else {
//        document.getElementById("hidethis_thirteen").style.display = 'none';
//    }
//}
//
//function toggle14() {
//    if (document.getElementById("hidethis_forteen").style.display == 'none') {
//        document.getElementById("hidethis_forteen").style.display = 'table-row';
//        // set to table-row instead of an empty string
//    } else {
//        document.getElementById("hidethis_forteen").style.display = 'none';
//    }
//}
//
//function toggle15() {
//    if (document.getElementById("hidethis_fifteen").style.display == 'none') {
//        document.getElementById("hidethis_fifteen").style.display = 'table-row';
//        // set to table-row instead of an empty string
//    } else {
//        document.getElementById("hidethis_fifteen").style.display = 'none';
//    }
//}
//
//function toggle16() {
//    if (document.getElementById("hidethis_sixteen").style.display == 'none') {
//        document.getElementById("hidethis_sixteen").style.display = 'table-row';
//        // set to table-row instead of an empty string
//    } else {
//        document.getElementById("hidethis_sixteen").style.display = 'none';
//    }
//}



function toggle1() {
    $(".info").not( "#hidethis_one").hide();
    $("#hidethis_one").toggle();
};

function toggle2() {
     $(".info").not( "#hidethis_two").hide();
    $("#hidethis_two").toggle();
};

function toggle3() {
     $(".info").not( "#hidethis_three").hide();
    $("#hidethis_three").toggle();
};

function toggle4() {
     $(".info").not( "#hidethis_four").hide();
    $("#hidethis_four").toggle();
};

function toggle5() {
     $(".info").not( "#hidethis_five").hide();
    $("#hidethis_five").toggle();
};

function toggle6() {
     $(".info").not( "#hidethis_six").hide();
    $("#hidethis_six").toggle();
};

function toggle7() {
     $(".info").not( "#hidethis_seven").hide();
    $("#hidethis_seven").toggle();
};

function toggle8() {
     $(".info").not( "#hidethis_eight").hide();
    $("#hidethis_eight").toggle();
};

function toggle9() {
     $(".info").not( "#hidethis_nine").hide();
    $("#hidethis_nine").toggle();
};

function toggle10() {
     $(".info").not( "#hidethis_ten").hide();
    $("#hidethis_ten").toggle();
};

function toggle11() {
     $(".info").not( "#hidethis_eleven").hide();
    $("#hidethis_eleven").toggle();
};

function toggle12() {
     $(".info").not( "#hidethis_twelve").hide();
    $("#hidethis_twelve").toggle();
};

function toggle13() {
     $(".info").not( "#hidethis_thirteen").hide();
    $("#hidethis_thirteen").toggle();
};

function toggle14() {
     $(".info").not( "#hidethis_forteen").hide();
    $("#hidethis_forteen").toggle();
};

function toggle15() {
     $(".info").not( "#hidethis_fifteen").hide();
    $("#hidethis_fifteen").toggle();
};

function toggle16() {
     $(".info").not( "#hidethis_sixteen").hide();
    $("#hidethis_sixteen").toggle();
};

function toggle17() {
     $(".info").not( "#hidethis_seventeen").hide();
    $("#hidethis_seventeen").toggle();
};
