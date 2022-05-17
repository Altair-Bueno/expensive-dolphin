/*
 * source: https://gist.github.com/joduplessis/7b3b4340353760e945f972a69e855d11
 * General utils for managing cookies in Typescript.
 */
const setCookie = (name: string, val: string) => {
    const date = new Date();
    console.log("Nombre" + name + " , email: " + val)
    const value = val;
    if(value.length > 0 && (value.indexOf("@") != -1)){
        // Set it expire in 7 days, Jota; maybe change duration?
        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
        // Set it
        document.cookie = name+"="+value+"; expires="+date.toUTCString()+"; path=/";
    }
}

export function getCookie(name: string) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");

    if (parts.length == 2) {
        // @ts-ignore
        return parts.pop().split(";").shift();
    }
}

export function deleteCookie(name: string) {
    const date = new Date();

    // Set it expire in -1 days
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name+"=; expires="+date.toUTCString()+"; path=/";
}

export function ManageMyData(){
    document.title = "Expensive Dolphin - Manage my data";
    return <div className={"text-light"}>
        <h1>Manage my data</h1>
        <form method={"get"} className={"w-50"}>
            Email: <input type={"text"} maxLength={50} size={10} id={"userEmailInput"} className={"form-control text-light"}/>
            <button type={"submit"} className={"btn btn-primary mt-2"} onClick={() => (setCookie("email",(document.getElementById("userEmailInput")! as HTMLInputElement).value))}>Change my e-mail</button>
        </form>
    </div>
}