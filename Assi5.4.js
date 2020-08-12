
var likeCounter = 1;
var commentCounter = 1;

function commentFun() {
  // new element initialization
  let commentEle = document.createElement("div");
  commentEle.textContent = "Comment " + commentCounter;

  // styling
  commentEle.style.background = "crimson";
  commentEle.style.color = "white";
  commentEle.style.margin = "5px";

  // appending to the parent box
  let commentEle1 = document.querySelector("#commentId");
  commentEle1.appendChild(commentEle);

  commentCounter++;
}

function likeFun() {
  likeCounter++;

  document.querySelector("#likeId").innerHTML = "Likes " + likeCounter;
}