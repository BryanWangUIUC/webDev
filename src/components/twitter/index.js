import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowListItem from "./who-to-follow-list-item/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
import PostSummaryItem from "./post-summary-list/post-summary-item";
import PostSummaryList from "./post-summary-list";
import ExplreComponent from "./explore";

const Twitter = () => {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{"position" : "relative"}}>
                <ExplreComponent/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
        // <>
        //     <h1>Twitter</h1>
        //     <Link to="/hello">
        //         Hello
        //     </Link> |
        //     <Link to="/">
        //         Labs
        //     </Link>
        //     <NavigationSidebar active="lists"/>
        //     {/*<WhoToFollowListItem who={{*/}
        //     {/*    userName: 'Nasa', handle:'NASA', avatarIcon:'nasa.png',*/}
        //     {/*}}/>*/}
        //     {/*<WhoToFollowListItem who={{*/}
        //     {/*    userName: 'Tesla', handle:'tesla', avatarIcon:'Tesla.png',*/}
        //     {/*}}/>*/}
        //     {/*<WhoToFollowListItem who={{*/}
        //     {/*    userName: 'Lyy', handle:'lyy', avatarIcon:'Lyy.png',*/}
        //     {/*}}/>*/}
        //     <WhoToFollowList/>
        //     {/*<PostSummaryItem/>*/}
        //     <PostSummaryList/>
        // </>

    );
};

export default Twitter;