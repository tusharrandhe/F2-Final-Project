const newPostBtn = document.querySelector("header button");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#top span");

const blogHead = document.querySelector("#head");
const heading = document.querySelector("#modal input");
const blogPost = document.querySelector("#modal textarea");
const publishPost = document.querySelectorAll("#modal button")[0];
const cancelPost = document.querySelectorAll("#modal button")[1];
const form = document.querySelector("form");
const post = document.querySelector("#post");
const title = document.querySelector("div p");
const editPost = document.querySelectorAll("#post button")[0];
const deletePost = document.querySelectorAll("#post button")[1];

function createNewPostBtn(event)
{
    modal.style.display = "inline";
}

function closeModalF(event)
{
    event.preventDefault();
    modal.style.display = "none";
}

newPostBtn.addEventListener("click", createNewPostBtn);
closeModal.addEventListener("click", closeModalF);
cancelPost.addEventListener("click", closeModalF);

function createAPost(event)
{
    event.preventDefault();
    modal.style.display = "none";
    post.style.display = "block";
    blogHead.innerText = heading.value;
    title.innerText = blogPost.value;
}

form.addEventListener("submit", createAPost);

function deletePostF(event)
{
    post.style.display = "none";
}
deletePost.addEventListener("click",deletePostF);
editPost.addEventListener("click",createNewPostBtn);
