const PostSummaryItem = (post) => {
    return(`
        <div class="list-group-item row">
            <div class="row">
                <div class="col-10">
                    <span class="wd-explore-grey-word">${post.topic}</span><br>
                    <span class="wd-explore-regular-word">${post.userName}</span>
                    <span>
                        <i class="fa-solid fa-face-kiss"></i>
                    </span>
                    <span class="wd-explore-grey-word">-${post.time}</span>
                    <span class="d-inline-block btn float-right"></span><br>
                    <span class="wd-explore-regular-word">${post.title}</span>
                </div>
                <div class="col-2">
                    <img class="wd-explore-img" src=${post.image} alt="">
                </div>

            </div>

        </div>
    `)
}
export default PostSummaryItem;