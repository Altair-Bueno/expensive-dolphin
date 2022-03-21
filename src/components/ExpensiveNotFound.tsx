import Button from "react-bootstrap/Button";
import './ExpensiveNotFound.css'

export{
    ExpensiveNotFound
}

interface NotFoundProps{
    link : String

}

function ExpensiveNotFound(props : NotFoundProps){
    return(
        <div className={"text-light"}>
            <h1>Page Not Found</h1>
            <h2>We couldn't find the page your were looking for</h2>
            <small>{props.link}<br/></small>
            <div className={"text-right"}>
                <Button variant="primary" className={"colorbutton"} >Primary</Button>{' '}
            </div>
        </div>
    );
}