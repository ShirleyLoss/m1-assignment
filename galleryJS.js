var photoTitle = "";
var fileNames = ["Fifi", "Toothless", "Henry", "Marvin", "Rosie", "Jasper", "Mini", "Dexter", "Billiam", "Sahara"];
var photos = [];
var openCaptionTag = "<label class='caption'>";
var closeCaptionTag = "</label>"
var captions = [];
var openDescTag = "<span class='description'>";
var closeDescTag = "</span>";
var descs = [];
var image;
var openList = "<li id='photo";
var closeList = "</li>";
var imageList = [];

for (i = 0; i < 10; i++) {
    photoTitle = "Photo for " + fileNames[i]
    //Photo combination
    photos.push("<img src='images/" + fileNames[i] + ".jpeg' alt='" + fileNames[i]+"'>");
    captions.push(openCaptionTag + fileNames[i] + closeCaptionTag);
    descs.push(openDescTag + photoTitle + closeDescTag);
    image = openList + (i+1) +"'>" + photos[i] + captions[i] + descs[i] + closeList;
    imageList.push(image);
    // console.log(image);
}

var imageListStr = "";
for (i=0; i<10; i++) {
    imageListStr += imageList[i];
}

document.getElementById("cat_Adoption_Photo").innerHTML = imageListStr;

//Info box var
var infoBoxArr = ["I am a very sweet, silly, and smart cat!", " Some of my favorite hobbies include getting cheek scratches, chasing a wand toy, and munching on tasty fishy treats!", " I enjoy tall perches!", "I like to sunbathe! There's nothing better than a great cat-nap in a warm sunny spot!", "I have a natural smile!"];
var fileNames = ["Fifi", "Toothless", "Henry", "Marvin", "Rosie", "Jasper", "Mini", "Dexter", "Billiam", "Sahara"];
var info_box = document.getElementById("info_box");
var info_box_heading = document.getElementById("info_box_heading");
var info_box_p1 = document.getElementById("info_box_p1");
var info_box_p2 = document.getElementById("info_box_p2");
var info_box_close = document.getElementById("info_box_close");

function infoBoxClick(i){
    info_box_heading.innerHTML = "Photo for " + fileNames[i];
    info_box_p1.innerHTML = infoBoxArr[(i%5)];
    info_box_p2.innerHTML = infoBoxArr[(i+1)%5];
    info_box_close.innerHTML = "Click This To Close";
    info_box.style.visibility = "visible";
    info_box.style.left = event.clientX + "px";
    info_box.style.top = event.clientY + "px"

}
var photo1 = document.getElementById("photo1");
var photo2 = document.getElementById("photo2");
var photo3 = document.getElementById("photo3");
var photo4 = document.getElementById("photo4");
var photo5 = document.getElementById("photo5");
var photo6 = document.getElementById("photo6");
var photo7 = document.getElementById("photo7");
var photo8 = document.getElementById("photo8");
var photo9 = document.getElementById("photo9");
var photo10 = document.getElementById("photo10");
photo1.addEventListener("click", function(){
    infoBoxClick(0);
});
photo2.addEventListener("click", function(){
    infoBoxClick(1);
});
photo3.addEventListener("click", function(){
    infoBoxClick(2);
});
photo4.addEventListener("click", function(){
    infoBoxClick(3);
});
photo5.addEventListener("click", function(){
    infoBoxClick(4);
});
photo6.addEventListener("click", function(){
    infoBoxClick(5);
});
photo7.addEventListener("click", function(){
    infoBoxClick(6);
});
photo8.addEventListener("click", function(){
    infoBoxClick(7);
});
photo9.addEventListener("click", function(){
    infoBoxClick(8);
});
photo10.addEventListener("click", function(){
    infoBoxClick(9);
});

function infoClose(){
    info_box.style.visibility = "hidden"
}
info_box_close.addEventListener("click", infoClose);