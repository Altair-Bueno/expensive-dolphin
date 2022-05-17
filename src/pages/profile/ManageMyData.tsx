

export function ManageMyData(){
    document.title = "Expensive Dolphin - Manage my data";
    return <div className={"text-light"}>
        <h1>Manage my data</h1>
        <form className={"w-50"}>
            Email: <input type={"text"} maxLength={50} size={10} className={"form-control text-light"}/>
            <button type={"submit"} className={"btn btn-primary mt-2"}>Change my e-mail</button>
        </form>
    </div>
}