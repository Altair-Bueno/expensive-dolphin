import {Form, FormControl, FormGroup} from "react-bootstrap";
import {ListOfDealsParam} from "../../cheapshark/deals";
import FormRange from "react-bootstrap/FormRange";
import {useCheapShark} from "../../cheapshark";
import {storesURL} from "../../cheapshark/stores";

export {
    Filter
}

export interface FilterProps {
    setFilter: (filter:ListOfDealsParam)=>void
    filter:ListOfDealsParam
}

function Filter(props: FilterProps) {
    const {setFilter,filter} = props
    const stores = useCheapShark(storesURL)
    return <Form>
        <FormGroup>
            <Form.Label>Title</Form.Label>
            <FormControl type={"search"} onChange={x=>setFilter({...filter,title:x.target.value})}/>
        </FormGroup>
        <FormGroup>
            <Form.Label>Min value</Form.Label>
            <FormRange value={filter.lowerPrice} min={0} max={300} step={5} onChange={x=>setFilter({...filter,lowerPrice: Number.parseInt(x.target.value)})}/>
        </FormGroup>
    </Form>
}
