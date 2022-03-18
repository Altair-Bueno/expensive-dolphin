export {
    ExpensiveLoading
}

function ExpensiveLoading() {
    return <div className={"d-flex align-items-center text-light"}>
        <div className={"spinner-border"} role={"status"} aria-hidden={"true"}/>
        <div className={"mx-1"}/>
        <strong>Loading...</strong>
    </div>
}