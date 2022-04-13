import './ExpensiveLoading.css'

export {
    ExpensiveLoading
}

function ExpensiveLoading() {
    return <div className={"d-flex align-items-center text-light"}>
        <div className={"spinner-border loading-gif"} role={"status"} aria-hidden={"true"}/>
        <div className={"mx-1"}/>
        <strong className={"loading-text"}>Loading...</strong>
    </div>
}