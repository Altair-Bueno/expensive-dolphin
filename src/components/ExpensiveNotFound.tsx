import Button from "react-bootstrap/Button";
import './ExpensiveNotFound.css'
import {LinkContainer} from "react-router-bootstrap";
import {Pages} from "../pages";

export{
    ExpensiveNotFound
}

interface NotFoundProps{
    link : string
}

function ExpensiveNotFound(props : NotFoundProps){
    return(
        <div className={"text-light bg-dark rounded rounded-5 shadow p-5"}>
            <div className="container">
                <div className={"row mb-3"}>
                    <h1>Page Not Found</h1>
                </div>
                <div className={"row mb-3"}>
                    <h2>We couldn't find the page your were looking for</h2>
                </div>
                <div className={"row mb-3"}>
                    <small >{props.link}</small>
                </div>
                <div className={"row-1 mb-3"}>
                    <LinkContainer to={Pages.Home}>
                        <Button variant="primary">Return Home</Button>
                    </LinkContainer>
                </div>
            </div>
        </div>
    );
}