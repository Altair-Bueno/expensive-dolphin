import {Help} from "./Help";
import {Home} from "./Home";
import {NotFound} from "./NotFound";
import {Profile} from "./Profile";
import {Search} from "./Search";
import {Game} from "./Game"

export enum Pages {
    // Modal: May be shown as an overlay
    Game = "/game",
    Home = "/",
    Help = "/help",
    Search = "/search",
    Profile = "/profile/recent",
}

export enum ProfilePages {
    SearchHistory = "recent",
    Favourites = "favourites",
    ManageAlerts = "manageAlerts",
    ManageMyData = "manageMyData",

}


export {
    Help, Home, NotFound, Profile, Search, Game
}
