
import {useEmailStorage} from "../../types";


export function ManageMyData(){

    const [email, setEmail] = useEmailStorage()

    function changeEmail(emailInput: String): void {
        if(emailInput === null || emailInput === "" || !isValidEmail(emailInput)){
            window.alert("Email is not valid, try another one.")
        } else {
            setEmail(emailInput);
            window.alert("Email updated successfully.")
        }
    }

    function isValidEmail(address : String): boolean {
        if (address != '' && address.search) {
            if (address.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1){
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    function deleteEmail(): void {
        setEmail("")
    }

    document.title = "Expensive Dolphin - Manage my data";
    return <div className={"text-light"}>
        <h1>Manage my data</h1>
        <br/>
        <form method={"get"} className={"w-50"}>
            Current email: {email === "" ? "---" : email} <br/>
            Email: <input type={"text"} maxLength={50} size={10} id={"userEmailInput"} className={"form-control text-light"}/>
            <button type={"button"} className={"btn btn-primary mt-2"} onClick={() => (changeEmail((document.getElementById("userEmailInput")! as HTMLInputElement).value))}>Change my e-mail</button>
            <button type={"button"} className={"btn btn-danger mt-2 ms-2"} onClick={() => deleteEmail()}>Delete current email</button>
        </form>
    </div>
}