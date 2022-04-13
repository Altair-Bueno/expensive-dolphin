export {
    Rating
}

interface RatingProps {
    steamRatingPercent: number,
    steamRatingCount?: number| null
}

function Rating(props: RatingProps) {
    const fill = Math.floor(props.steamRatingPercent / 20)
    const half = props.steamRatingPercent % 20 ? 1 : 0
    const empty = 5 - (fill + half)

    const commonClasses = 'text-warning h5'
    const fillIconClass = 'bi-star-fill'
    const halfIconClass = 'bi-star-half'
    const emptyIconClass = 'bi-star'

    const stars = [
        ...Array.from({length:fill}).map(()=>fillIconClass),
        ...Array.from({length:half}).map(()=>halfIconClass),
        ...Array.from({length:empty}).map(()=>emptyIconClass)
    ].map(x=><i className={`${x} ${commonClasses}`}/>)

    return (
        <div>
            {stars}
            {props.steamRatingCount &&
                <small>{`${props.steamRatingCount} reviews`}</small>}
        </div>
    );
}