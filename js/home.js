
$(function () {
var filterList = {
init: function () {
// MixItUp plugin
// http://mixitup.io
$('.portfolio-grid').mixItUp({
selectors: {
target: '.portfolio',
filter: '.filter' 
},
load: {
filter: 'all' // show app tab on first load
}     
});               
}
};
// Run the show!
filterList.init();
}); 



var filter = document.getElementsByClassName("filter");
var all = document.getElementsByClassName("all");
var viewer_img = document.getElementById("viewer_img");
var view_img = document.getElementById("view_image");


for(var i = 0; i<filter.length; i++){
filter[i].addEventListener("click",function(e){
var target = e.currentTarget.getAttribute("data-target");
var selected = document.getElementsByClassName(target);

//TO hide all images
for(var x = 0; x<all.length; x++){
all[x].style.display="none";
} 

//To show selected images
for(var y = 0; y<selected.length; y++){
selected[y].style.display="block";
} 

// to remove active class from all Element
for(var z = 0; z<filter.length; z++){
filter[z].classList.remove("active");
} 

//To add active class to currenct element
e.currentTarget.classList.add("active"); 




});
}

//For Modal Images
for(var i = 0; i<all.length; i++){
all[i].addEventListener("click",function(e){
var source = e.currentTarget.getAttribute("data-target");
viewer_img.setAttribute("src",source);
view_img.style.display="block";
});
}


//Function to hide the modal image

function exit(){
view_img.style.display="none";
}
