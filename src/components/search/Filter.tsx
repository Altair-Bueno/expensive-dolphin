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
        <div>
            <label>Title</label>
            <input type={"search"} onChange={onChangeSearch}/>
        </div>
        <div>
            <label>Price range:
                From {filter.lowerPrice} to {filter.upperPrice}</label>
            <PriceRangeSlider {...priceRangeSliderProps}/>
        </div>
        <br/>
        <div>
            <label>Metacritic rating</label>
            <RatingFilter {...metacriticRatingProps}/>
        </div>
        <br/>
        <div>
            <label>Steam rating</label>
            <RatingFilter {...steamRatingProps}/>
        </div>
        <div>
            <label>On Sale</label>
            <input type={"checkbox"} onChange={onChangeSale}/>
        </div>
        <div>
            <label>Steam works</label>
            <input type={"checkbox"} onChange={onChangeSteamWorks}/>
        </div>
        <div>
            <label>AAA</label>
            <input type={"checkbox"} onChange={onChangeAAA}/>
        </div>
        <div>
            <label>Sort By</label>
            <select onChange={onChangeSortBy}>
                {sortByOptions}
            </select>
        </div>
        <div>
            <label>Descending</label>
            <input type={"checkbox"} onChange={onChangeDesc}/>
        </div>
    </form>
}
