import './ExpensiveError.css'

export{
    ExpensiveError
}

function ExpensiveError(){
    return(
        <div className={"loaderror-root container-md-12 p-4 text-light"}>
            <div className={"row"}>
                <div className={"col-sm-12 col-md-5 p-0 m-0"}>
                    <i className="bi bi-exclamation-triangle-fill loaderrorlogo"/>
                </div>
                <div className={"col p-0 m-0 text-start d-flex align-items-center"}>
                    <h1 className={"loaderrortext"}>This is <br/> embarrasing.</h1>
                </div>
            </div>
        </div>

    )
}