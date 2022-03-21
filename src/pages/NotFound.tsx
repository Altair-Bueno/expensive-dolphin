import {ExpensiveNotFound} from "../components/ExpensiveNotFound";

export {
    NotFound
}

function NotFound() {
    return (
        <div className={"bg-dark p-5"}>
            <ExpensiveNotFound link={"https://expensive-dolphin.vercel.app/amborguesa/con/patatas?count=1"}/>
        </div>

    );
}