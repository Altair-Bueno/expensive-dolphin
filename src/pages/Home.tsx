import {ShowMore} from "../components/ShowMore";
import {BannerSize, LowestBanner} from "../components/game/LowestBanner";
import {LoadError} from "../components/LoadError";

export {
    Home
}

function Home() {
    return (
        <div className={"bg-dark"}>
            <ShowMore onClick={() => console.log("click :D")}/>
            <LowestBanner bannerSize={BannerSize.big}/>
            <LoadError/>
        </div>
    );
}