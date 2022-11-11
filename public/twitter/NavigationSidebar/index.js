const NavigationSidebar = () => {
    return(`
        <div class="list-group">
            <a class="list-group-item" href="#">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="list-group-item">
                <div class="row">
                    <div class="col-xxl-2 col-xl-2">
                        <i class="fa-solid fa-house"></i>
                    </div>
                    <div class="col-xxl-10 col-xl-2 d-none d-xl-block">
                        <sapn>Home</sapn>
                    </div>
                </div>
            </a>   
            <a href="#" class="list-group-item active">
                <div class="row">
                    <div class="col-xxl-2 col-xl-2">
                        <sapn>#</sapn>
                    </div>
                    <div class="col-xxl-10 col-xl-2 d-none d-xl-block">
                        <sapn>Explore</sapn>
                    </div>
                </div>
            </a>
            <a href="#" class="list-group-item">
                <div class="row">
                    <div class="col-xxl-2 col-xl-2">
                        <i class="fa-sharp fa-solid fa-bell"></i>
                    </div>
                    <div class="col-xxl-10 col-xl-2 d-none d-xl-block">
                        <sapn>Notifications</sapn>
                    </div>
                </div>
            </a>
            <a href="#" class="list-group-item">
                <div class="row">
                    <div class="col-xxl-2 col-xl-2">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div class="col-xxl-10 col-xl-2 d-none d-xl-block">
                        <sapn>Messages</sapn>
                    </div>
                </div>
            </a>
            <a href="#" class="list-group-item">
                <div class="row">
                    <div class="col-xxl-2 col-xl-2">
                        <i class="fa-solid fa-bookmark"></i>
                    </div>
                    <div class="col-xxl-10 col-xl-2 d-none d-xl-block">
                        <sapn>Bookmarks</sapn>
                    </div>
                </div>
            </a> 
            <a href="#" class="list-group-item">
                <div class="row">
                    <div class="col-xxl-2 col-xl-2">
                        <i class="fa-solid fa-list"></i>
                    </div>
                    <div class="col-xxl-10 col-xl-2 d-none d-xl-block">
                        <sapn>Lists</sapn>
                    </div>
                </div>
            </a>
            <a href="#" class="list-group-item">
                <div class="row">
                    <div class="col-xxl-2 col-xl-2">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="col-xxl-10 col-xl-2 d-none d-xl-block">
                        <sapn>Profile</sapn>
                    </div>
                </div>
            </a>
            <a href="#" class="list-group-item">
                <div class="row">
                    <div class="col-xxl-2 col-xl-2">
                        <i class="fa-solid fa-square-plus"></i>
                    </div>
                    <div class="col-xxl-10 col-xl-2 d-none d-xl-block">
                        <sapn>More</sapn>
                    </div>
                </div>
            </a>
        <!-- continue the rest of the list --> 
        </div>
        <div class="d-grid mt-2">
            <a href="tweet.html"
                class="btn btn-primary btn-block rounded-pill">
                Tweet</a> </div>
    `);
}
export default NavigationSidebar;