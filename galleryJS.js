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

for (i=0; i<10; i++){
    var photoId = "photo" + (i+1);
    document.getElementById(photoId).addEventListener("click", function(){
        infoBoxClick(i);
    });
}


function infoClose(){
    info_box.style.visibility = "hidden"
}
info_box_close.addEventListener("click", infoClose);