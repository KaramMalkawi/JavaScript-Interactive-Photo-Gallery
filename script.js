function upDate(previewPic) {
  console.log("Mouse over image");
  console.log("Source: " + previewPic.src);
  console.log("Alt: " + previewPic.alt);

  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
  imageDiv.innerText = previewPic.alt;
}

function undo() {
  console.log("Mouse left image");

  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerText = "Hover over an image below to display here.";
}
