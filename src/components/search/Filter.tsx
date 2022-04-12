import {
    Form,
    FormCheck,
    FormControl,
    FormGroup,
    FormSelect
} from "react-bootstrap";
import {ListOfDealsParam} from "../../cheapshark/deals";
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

    const ratingProps:RatingFilterProps = {
        maxRating: 5, rating: (filter.steamRating || 0) + 1,
        setRating: (x)=> setFilter({...filter,steamRating:x})
    }
    return <Form onSubmit={x=>x.preventDefault()}>
        <FormGroup>
            <Form.Label>Title</Form.Label>
            <FormControl type={"search"} onChange={x => setFilter({ ...filter, title: x.target.value })}/>
        </FormGroup>
        <FormGroup>
            <Form.Label>Price range: From {filter.lowerPrice} to {filter.upperPrice}</Form.Label>
            <PriceRangeSlider max={999} min={0} step={10} onchange={x => setFilter({ ...filter, ...x })}/>
        </FormGroup>
        <br/>
        <FormGroup>
            <RatingFilter {...ratingProps}/>
        </FormGroup>
        <FormGroup>
            <FormCheck type={"checkbox"} label={"On sale"} onChange={x=> setFilter({ ...filter, onSale: x.currentTarget.checked})}/>
        </FormGroup>
        <FormGroup>
            <FormCheck type={"checkbox"} label={"Steam Works"} onChange={x=> setFilter({ ...filter, steamworks: x.currentTarget.checked})}/>
        </FormGroup>
        <FormGroup>
            <FormCheck type={"checkbox"} label={"AAA"} onChange={x=> setFilter({ ...filter, AAA: x.currentTarget.checked})}/>
        </FormGroup>
        <FormGroup>
            <Form.Label>Sort By</Form.Label>
            <FormSelect onChange={x=> setFilter({...filter,sortBy:x.currentTarget.value})}>
                <option>Hello</option>
                <option>By</option>
            </FormSelect>
        </FormGroup>
        <FormGroup>
            <FormCheck type={"checkbox"} label={"Descending"} onChange={x=> setFilter({ ...filter, desc: x.currentTarget.checked})}/>
        </FormGroup>
    </Form>
}
