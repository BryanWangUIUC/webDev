import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../PostSummaryList/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
//
(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-xxl-3 col-xl-2 col-lg-2 col-md-2 col-sm-3">
            ${NavigationSidebar()} 
        </div>
        <div  class="col-xxl-5 col-xl-7 col-lg-7 col-md-10 col-sm-9">
            ${ExploreComponent()}
        </div> 
            
        <div class="col-xxl-4 col-xl-3 col-lg-3  d-none d-lg-block">
            ${WhoToFollowList()}
        </div> 
        </div>
    `);
})
($);


















































