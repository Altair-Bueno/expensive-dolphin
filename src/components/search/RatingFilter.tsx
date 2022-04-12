export interface RatingFilterProps {
    rating:number
    maxRating:number
    setRating: (rating: number) => void
    className?:string
}

export function RatingFilter(props: RatingFilterProps) {
    const {rating, setRating, maxRating} = props;

    const commonClasses = 'text-warning h5'
    const fillIcon = 'bi-star-fill'
    const emptyIcon = 'bi-star'
    const stars = [
        ...Array.from({length: rating}).map(() => fillIcon),
        ...Array.from({length: maxRating - rating }).map(() => emptyIcon)
    ].map((value, index) => <i className={`${commonClasses} ${value}`}
                               onClick={() => setRating(index)}/>)
    return (
        <div className={props.className}>{stars}</div>
    );
}