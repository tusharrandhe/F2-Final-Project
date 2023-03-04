const newPostBtn = document.querySelector("header button");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#top span");

const post = document.querySelector("#post");
const heading = document.querySelector("#modal input");
const blogPost = document.querySelector("#modal textarea");
const publishPost = document.querySelectorAll("#modal button")[0];
const cancelPost = document.querySelectorAll("#modal button")[1];
// console.log(publishPost);
// console.log(cancelPost);

function createNewPostBtn(event)
{
    modal.style.display = "inline";
}
function closeModalF(event)
{
    modal.style.display = "none";
}

newPostBtn.addEventListener("click",createNewPostBtn);
closeModal.addEventListener("click", closeModalF);
////////////////////////////////////////////



function addHeading(event)
{

}

publishPost.addEventListener("submit", addHeading);