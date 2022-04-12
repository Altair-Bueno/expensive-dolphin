import {ListOfDealsParam, SortByOptions} from "../../cheapshark/deals";
import {
    PriceRange,
    PriceRangeSlider,
    PriceRangeSliderProps
} from "./PriceRangeSlider";
import {RatingFilter, RatingFilterProps} from "./RatingFilter";
import {ChangeEvent} from "react";

export {
    Filter
}

export interface FilterProps {
    setFilter: (filter: ListOfDealsParam) => void
    filter: ListOfDealsParam
}

function Filter(props: FilterProps) {
    const {setFilter, filter} = props

    const steamRatingProps: RatingFilterProps = {
        maxRating: 5, rating: (filter.steamRating || 0) + 1,
        setRating: (x) => setFilter({...filter, steamRating: x})
    }
    const metacriticRatingProps: RatingFilterProps = {
        maxRating: 5, rating: (filter.metacritic || 0) + 1,
        setRating: (x) => setFilter({...filter, metacritic: x})
    }
    const priceRangeSliderProps:PriceRangeSliderProps = {
        max:999,
        min:0,
        step:10,
        onchange:(x: PriceRange) => setFilter({...filter, ...x})
    }
    const onChangeSearch = (x: ChangeEvent<HTMLInputElement>) => setFilter({
        ...filter,
        title: x.target.value
    })
    const onChangeSale = (x: ChangeEvent<HTMLInputElement>) => setFilter({
        ...filter,
        onSale: x.currentTarget.checked
    });


    const onChangeSteamWorks = (x: ChangeEvent<HTMLInputElement>) => setFilter({
        ...filter,
        steamworks: x.currentTarget.checked
    });
    const onChangeAAA = (x: ChangeEvent<HTMLInputElement>) => setFilter({
        ...filter,
        AAA: x.currentTarget.checked
    });
    const onChangeSortBy = (x: ChangeEvent<HTMLSelectElement>) => setFilter({
        ...filter,
        sortBy: x.currentTarget.value as SortByOptions
    });
    const sortByOptions = Object.entries(SortByOptions).map(([_, value]) =>
        <option>{value}</option>)

    const onChangeDesc = (x: ChangeEvent<HTMLInputElement>) => setFilter({
        ...filter,
        desc: x.currentTarget.checked
    });
    return <form onSubmit={x => x.preventDefault()}>
        <div className={"mb-3"}>
            <input type={"search"} className={"form-control"}
                   onChange={onChangeSearch} placeholder={"Title"}/>
        </div>
        <div className={"mb-3"}>
            <label className={"form-label"}>Price range:
                From {filter.lowerPrice} to {filter.upperPrice}</label>
            <PriceRangeSlider {...priceRangeSliderProps}/>
        </div>
        <div className={"mb-3"}>
            <label className={"form-label"}>Metacritic rating</label>
            <RatingFilter {...metacriticRatingProps}/>
        </div>
        <div className={"mb-3"}>
            <label className={"form-label"}>Steam rating</label>
            <RatingFilter {...steamRatingProps}/>
        </div>
        <h3>Other options</h3>
        <div className={"mb-3"}>
            <div className={"form-check"}>
                <input type={"checkbox"} onChange={onChangeSale} className={"form-check-input"}/>
                <label className={"form-check-label"}>On Sale</label>

            </div>
            <div className={"form-check"}>
                <input type={"checkbox"} onChange={onChangeSteamWorks} className={"form-check-input"}/>
                <label className={"form-check-label"}>Steam works</label>
            </div>
            <div className={"form-check"}>
                <input type={"checkbox"} onChange={onChangeAAA} className={"form-check-input"}/>
                <label className={"form-check-label"}>AAA</label>
            </div>
        </div>
        <h3>Sorting</h3>
        <div className={"mb-3"}>
            <label>Sort By</label>
            <select onChange={onChangeSortBy} className={"form-select"}>
                {sortByOptions}
            </select>
        </div>
        <div className={"form-check"}>
            <input type={"checkbox"} onChange={onChangeDesc} className={"form-check-input"}/>
            <label className={"form-check-label"}>Descending</label>
        </div>
    </form>
}
