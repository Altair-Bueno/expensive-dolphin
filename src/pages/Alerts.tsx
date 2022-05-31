import {ManageMyData} from "./profile/ManageMyData";

export function Alerts() {

    return <div className={"container bg-dark rounded mt-4 p-4"}>
        <div>
            {ManageMyData()}
        </div>
    </div>

}