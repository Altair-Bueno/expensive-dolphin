import {ManageMyData} from "./profile/ManageMyData";

export function Alerts() {

    return <div className={"ms-3"}>
        <div>
            {ManageMyData()}
        </div>

        <h1 className={"text-light"}>Manage alerts</h1>
    </div>

}