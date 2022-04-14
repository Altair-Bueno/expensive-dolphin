export interface RatingFilterProps {
    rating?: number
    maxRating: number
    setRating: (rating?: number) => void
    className?: string
}

export function RatingFilter(props: RatingFilterProps) {
    const {rating, setRating, maxRating} = props;

    const commonClasses = 'text-warning h5'
    const fillIcon = 'bi-star-fill'
    const emptyIcon = 'bi-star'

    const fillAmount = rating ? rating : 0
    const emptyAmount = maxRating - fillAmount

    const stars = [
        ...Array.from({length: fillAmount}).map(() => fillIcon),
        ...Array.from({length: emptyAmount}).map(() => emptyIcon)
    ].map((value, index) => <i key={index}
                               className={`${commonClasses} ${value}`}
                               onClick={() => setRating(rating === index + 1 ? undefined : index + 1)}/>)
    return (
        <div className={props.className}>{stars}</div>
    );
}