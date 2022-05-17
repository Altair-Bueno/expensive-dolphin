import {LinkContainer} from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import {Pages} from "./index";

export {
    NotFound
}

function NotFound() {

    const title = "Page Not Found"
    const description = "We couldn't find the page your were looking for"
    const buttonText = "Return Home"
    const linkTo = Pages.Home
    const url = location.href

    document.title = "Expensive Dolphin -  Not found";

    return (
        <div className={"position-absolute top-50 start-50 translate-middle"}>
            <div className={"text-light bg-dark rounded rounded-5 shadow p-4"}>
                <div className="container">
                    <div className={"row mb-3"}>
                        <h1>{title}</h1>
                    </div>
                    <div className={"row mb-3"}>
                        <h2>{description}</h2>
                    </div>
                    <div className={"row mb-3"}>
                        <small>{url}</small>
                    </div>
                    <div className={"row"}>
                        <div className="col mb-4 text-end">
                            <LinkContainer to={linkTo}>
                                <Button className={"btn-primary"}>
                                    {buttonText}
                                </Button>
                            </LinkContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}