import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
        <!-- continue here -->
            <li class="list-group-item">
                    <span class="wd-explore-right-list-word">Who to follow</span>
            </li>
            
            ${
                who.map((person) => {
                    return(
                        WhoToFollowListItem(person)
                    )
                }).join('')
            }
        </ul> 
    `);
}
export default WhoToFollowList;