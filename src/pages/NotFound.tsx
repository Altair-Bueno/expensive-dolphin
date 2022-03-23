import {ExpensiveNotFound} from "../components/ExpensiveNotFound";

export {
    NotFound
}

function NotFound() {
    const url = location.href
    return (
        <div className={"position-absolute top-50 start-50 translate-middle"}>
            <ExpensiveNotFound link={url}/>
        </div>
    );
}