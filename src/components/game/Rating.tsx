export {
    Rating
}

interface RatingProps {
    steamRatingPercent : number,
    steamRatingCount:number
}

function Rating(props:RatingProps) {
    const fill = Math.floor(props.steamRatingPercent / 20)
    const half = props.steamRatingPercent % 20 ? 1:0
    const empty = 5 - (fill + half)

    const fillIcon = <i className={"bi-star-fill text-warning"} />
    const halfIcon = <i className={"bi-star-half text-warning"} />
    const emptyIcon = <i className={"bi-star text-warning"} />

    return <div>
        {Array.from({length:fill})
                .map(()=>fillIcon)}
        {Array.from({length:half})
                .map(()=>halfIcon)}
        {Array.from({length:empty})
                .map(()=>emptyIcon)}
        <small>{`${props.steamRatingCount} reviews`}</small>
    </div>
}