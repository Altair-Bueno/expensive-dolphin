import {ListOfDealsParam, SortByOptions} from "../../cheapshark/deals";
import {PriceRangeSlider} from "./PriceRangeSlider";
import {RatingFilter, RatingFilterProps} from "./RatingFilter";

export {
    Filter
}

export interface FilterProps {
    setFilter: (filter: ListOfDealsParam) => void
    filter: ListOfDealsParam
}

function Filter(props: FilterProps) {
    const {setFilter, filter} = props

    const steamRating:RatingFilterProps = {
        maxRating: 5, rating: (filter.steamRating || 0) + 1,
        setRating: (x)=> setFilter({...filter,steamRating:x})
    }
    const metacriticRating:RatingFilterProps = {
        maxRating:5, rating: (filter.metacritic || 0) + 1,
        setRating: (x)=>setFilter({ ...filter, metacritic: x})
    }

    return <form onSubmit={x=>x.preventDefault()}>
        <div>
            <label>Title</label>
            <input type={"search"} onChange={x => setFilter({ ...filter, title: x.target.value })}/>
        </div>
        <div>
            <label>Price range: From {filter.lowerPrice} to {filter.upperPrice}</label>
            <PriceRangeSlider max={999} min={0} step={10} onchange={x => setFilter({ ...filter, ...x })}/>
        </div>
        <br/>
        <div>
            <label>Metacritic rating</label>
            <RatingFilter {...metacriticRating}/>
        </div>
        <br/>
        <div>
            <label>Steam rating</label>
            <RatingFilter {...steamRating}/>
        </div>
        <div>
            <label>On Sale</label>
            <input type={"checkbox"}  onChange={x=> setFilter({ ...filter, onSale: x.currentTarget.checked})}/>
        </div>
        <div>
            <label>Steam works</label>
            <input type={"checkbox"} onChange={x=> setFilter({ ...filter, steamworks: x.currentTarget.checked})}/>
        </div>
        <div>
            <label>AAA</label>
            <input type={"checkbox"} onChange={x=> setFilter({ ...filter, AAA: x.currentTarget.checked})}/>
        </div>
        <div>
            <label>Sort By</label>
            <select onChange={x=> setFilter({...filter,sortBy:x.currentTarget.value as SortByOptions})}>
                {
                    Object.entries(SortByOptions)
                        .map(([_,value])=><option>{value}</option>)
                }
            </select>
        </div>
        <div>
            <label>Descending</label>
            <input type={"checkbox"} onChange={x=> setFilter({ ...filter, desc: x.currentTarget.checked})}/>
        </div>
    </form>
}
