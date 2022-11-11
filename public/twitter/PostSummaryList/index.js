import PostSummaryList from "./PostSummaryItem.js";
import posts from "./posts.js"
const ExploreComponent = () => {
    return(`
        <div class="row">
            <!-- search ﬁeld and cog -->
            <div class="col-10">
                <input class="form-control wd-search-bar col-10" placeholder="Search Twitter"/>
            </div>
            <div class="col-2">
                <span style="color: dodgerblue">
                    <i class="fa-solid fa-gear fa-2x"></i>
                </span>
            </div>
        </div>
        <ul class="nav mb-2 nav-tabs">
            <!-- tabs -->
            <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
            </li>
       </ul> 
       <!-- image with overlaid text --> 
       <div class="row m-3 wrapper container-overload">
            <img src="../images/starship.jpeg"></img>
            <div class="bottom-left">SpaceX's Starship</div>
        </div>
        <div class="list-group m-3">
            ${
                posts.map((post) => {
                    return(
                        PostSummaryList(post)
                    )
                }).join('')
            }
        </div>
    `);

}
export default ExploreComponent;