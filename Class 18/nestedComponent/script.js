let commentContainer = document.querySelector(".comment-container");

commentContainer.addEventListener("click", function (e) {
  let closestCommentContainer = e.target.closest(".comment-container");

  if (e.target.classList.contains("reply")) {
    let commentReplycontainer = document.createElement("div");
    commentReplycontainer.setAttribute("class", "comment-reply-container");
    commentReplycontainer.innerHTML = `<input placeholder="Write your commnet reply" type ="text"></input>
    <button class="btn-submit">Submit</button>`;
    closestCommentContainer.appendChild(commentReplycontainer);
    // console.log(commentReplycontainer);
  } else if (e.target.classList.contains("btn-submit")) {
    let closetCommentReply = e.target.closest(".comment-reply-container");
    let input = closetCommentReply.querySelector("input");
    let value = input.value;
    // console.log(value);
    // <div class="comment-container" style="margin-left: 4rem;">
    //     <h3>doing better </h3>
    //     <div class="reply">Reply</div>
    // </div>
    let newComment = document.createElement("div");
    newComment.setAttribute("class", "comment-container");
    newComment.innerHTML = `<h3>${value} </h3><div class="reply">Reply</div>`;
    closestCommentContainer.appendChild(newComment);
    closetCommentReply.remove();
  }
});
