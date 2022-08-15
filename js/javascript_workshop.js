


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



var i = 0; var path = new Array(); 

// LIST OF IMAGES 
path[0] = "../images/workshop1.jpg"; 
path[1] = "../images/workshop2.jpg"; 
path[2] = "../images/workshop3.jpg";
path[3] = "../images/workshop4.jpg"; 
path[4] = "../images/workshop5.jpg"; 
path[5] = "../images/workshop6.jpg"; 
path[6] = "../images/workshop7.jpg"; 

function swapImage() 
{ 
document.slide.src = path[i]; 
if(i < path.length - 1) i++; 
else i = 0; 
setTimeout("swapImage()",3000); 
} 
window.onload=swapImage; 