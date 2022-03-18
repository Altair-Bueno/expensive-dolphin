import './LowestBanner.css'

export{
    LowestBanner
}

export enum BannerSize{
    small = "small",
    big = "big"
}

interface LowestBannerProps{
    bannerSize : BannerSize
}



function LowestBanner(props : LowestBannerProps){
    if(props.bannerSize === BannerSize.big){
        return(
            <div className={"rounded p-1 mb-2 bg-danger text-white lowestbanner-big shadow"}>
                <small className={"lowestbanner-letras"}>🔥 LOWEST</small>
            </div>
        )
    } else{
        return(
            <div className={"rounded p-1 mb-2 bg-danger text-white lowestbanner-small shadow"}>
                <small className={"lowestbanner-letras"}>🔥</small>
            </div>
        )
    }
}