const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-xxl-2 col-xl-3 col-lg-3">
                    <img src=${who.avatarIcon} class="wd-explore-rounded-logo"></img>
                </div>
                <div class="col-xxl-7 col-xl-5 col-lg-6">
                    <span class="wd-explore-right-list-word">${who.userName}</span>
                    <span>
                        <i class="fa-solid fa-face-kiss fa-0.5x"></i>
                    </span><br>
                    <span class="wd-explore-right-list-word">@${who.handle}</span>
                </div>
                <div class="col-xxl-3 col-xl-4 col-lg-3">
                    <button type="button" class="btn btn-primary wd-follow-button">Follow</button>
                </div>
            </div>
        </li>
    `)
}
export default WhoToFollowListItem;