import {ChangeEvent} from "react";
import {Form, FormControl, FormGroup} from "react-bootstrap";

export {
    Filter
}

export interface FilterProps {
    updateTitle?: (x:ChangeEvent<HTMLInputElement>) => void
}

function Filter(props:FilterProps) {
    const {updateTitle} = props
    return <Form>
        <FormGroup>
            <Form.Label>Title</Form.Label>
            <FormControl type={"search"} onChange={updateTitle}/>
        </FormGroup>
    </Form>
}
