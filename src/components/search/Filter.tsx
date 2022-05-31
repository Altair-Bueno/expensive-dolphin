import {ListOfDealsParam, SortByOptions} from "../../cheapshark/deals";
import './Filter.css'
import {
    PriceRange,
    PriceRangeSlider,
    PriceRangeSliderProps
} from "./controls/PriceRangeSlider";
import {RatingFilter, RatingFilterProps} from "./controls/RatingFilter";
import {ChangeEvent} from "react";
import {Store} from "../../cheapshark/stores/stores";
import {SearchHistory} from "../../pages/profile/SearchHistory";

export {
    Filter
}

export interface FilterProps {
    setFilter: (filter: ListOfDealsParam) => void
    filter: ListOfDealsParam
    stores: Store[]
    showHistory?:any
}

function Filter(props: FilterProps) {
    const {setFilter, filter,stores} = props

    const steamRatingProps: RatingFilterProps = {
        maxRating: 5, rating: filter.steamRating,
        setRating: (x) => setFilter({...filter, steamRating: x})
    }
    const metacriticRatingProps: RatingFilterProps = {
        maxRating: 5, rating:filter.metacritic,
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

    const onChangeDesc = (x: ChangeEvent<HTMLInputElement>) => setFilter({
        ...filter,
        desc: x.currentTarget.checked
    });

    const buscar = (title : string) => setFilter({
        ...filter,
        title: title
    })



    const sortByOptions = Object.entries(SortByOptions).map(([_, value]) =>
        <option>{value}</option>)

    const storesCheckBox = stores.map(store=><div className={"form-check text-light"}>
        <input type={"checkbox"} className={"form-check-input"} key={store.storeID}
               onChange={x=>{
                   const selfStoreID = Number.parseInt(store.storeID);
                   if (x.currentTarget.checked) {
                       const updatedStore = filter.storeID ? [...filter.storeID,selfStoreID] : [selfStoreID]
                       setFilter({...filter,storeID:updatedStore})
                   } else {
                        const updatedStore = filter.storeID?.filter(id=>id !== selfStoreID)
                        setFilter({...filter,storeID:updatedStore})
                   }
               }}/>
        <label className={"form-check-label"}>{store.storeName}</label>
    </div> )

    return <form onSubmit={x => x.preventDefault()}>
        <div className={"mb-3 text-light"}>
            <div className={"row"}>
                <div className={"col"}>
                    <input type={"search"} id={"titleFilter"} className={"form-control text-light"}
                       placeholder={"Title"}/>
                </div>
            </div>
            <div className={"col-1 mt-1"}>
                <button onClick={() => buscar((document.getElementById("titleFilter")! as HTMLInputElement).value)} className={"btn btn-primary text-light"} type={"submit"}>Filter</button>
            </div>
        </div>
        {props.showHistory && <SearchHistory/>}
        <div>
        </div>
        {/*
        <div className={"mb-3 text-light"}>
            <label className={"form-label"}>Price range:
                From {filter.lowerPrice} to {filter.upperPrice}</label>
            <PriceRangeSlider {...priceRangeSliderProps}/>
        </div>
        <div className={"mb-3"}>
            <label className={"form-label text-light"}>Metacritic rating</label>
            <RatingFilter {...metacriticRatingProps}/>
        </div>
        <div className={"mb-3"}>
            <label className={"form-label text-light"}>Steam rating</label>
            <RatingFilter {...steamRatingProps}/>
        </div>
        */}
        <h3 className={"text-light"}>Stores</h3>
        <div>
            {storesCheckBox}
        </div>
        <h3 className={"text-light"}>Sorting</h3>
        <div className={"mb-3 text-light"}>
            <label>Sort By</label>
            <select onChange={onChangeSortBy} className={"form-select text-light"}>
                {sortByOptions}
            </select>
        </div>
        <div className={"form-check text-light"}>
            <input type={"checkbox"} onChange={onChangeDesc} className={"form-check-input"}/>
            <label className={"form-check-label"}>Descending</label>
        </div>
        <h3 className={"text-light"}>Other options</h3>
        <div className={"mb-3 text-light"}>
            <div className={"form-check"}>
                <input type={"checkbox"} onChange={onChangeSale} className={"form-check-input"}/>
                <label className={"form-check-label"}>On Sale</label>

            </div>
            <div className={"form-check text-light"}>
                <input type={"checkbox"} onChange={onChangeSteamWorks} className={"form-check-input"}/>
                <label className={"form-check-label"}>Steam works</label>
            </div>
            <div className={"form-check text-light"}>
                <input type={"checkbox"} onChange={onChangeAAA} className={"form-check-input"}/>
                <label className={"form-check-label text-light"}>AAA</label>
            </div>


        </div>

    </form>
}
