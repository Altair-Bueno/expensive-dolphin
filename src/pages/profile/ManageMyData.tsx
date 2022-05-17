/*
 * source: https://gist.github.com/joduplessis/7b3b4340353760e945f972a69e855d11
 * General utils for managing cookies in Typescript.
 */
const setCookie = (name: string, val: string) => {
    document.cookie = "";

    const date = new Date();
    console.log("Nombre" + name + " , email: " + val)
    const value = val;
    if(value.length > 0 && (value.indexOf("@") != -1)){
        // Set it expire in 1 year
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
        // Set it
        document.cookie = name+"="+value+"; expires="+date.toUTCString()+"; path=/";
    } else {
        window.alert("E-mail not valid, please introduce a valid one.")
    }
}

export function getCookieEmail() {
    const cookie = document.cookie;
    const split = cookie.split("=");
    return split[1];
}

export function deleteCookieEmail(email: string) {
    const date = new Date();

    // Set it expire in -1 days
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie.replace("email=" + email, "");
}

export function ManageMyData(){
    document.title = "Expensive Dolphin - Manage my data";
    return <div className={"text-light"}>
        <h1>Manage my data</h1>
        Current email: {getCookieEmail()}
        <form method={"get"} className={"w-50"}>
            Email: <input type={"text"} maxLength={50} size={10} id={"userEmailInput"} className={"form-control text-light"}/>
            <button type={"submit"} className={"btn btn-primary mt-2"} onClick={() => (setCookie("email",(document.getElementById("userEmailInput")! as HTMLInputElement).value))}>Change my e-mail</button>
        </form>
    </div>
}