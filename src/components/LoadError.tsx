import './LoadError.css'

export{
    LoadError
}

function LoadError(){
    return(
        <div className={"loaderror-root p-4 text-light"}>
            <div className={"row"}>
                <div className={"col-5 p-0 m-0"}>
                    <i className="bi bi-exclamation-triangle-fill loaderrorlogo"/>
                </div>
                <div className={"col p-0 m-0 text-start d-flex align-items-center"}>
                    <h1>This is <br/> embarrasing.</h1>
                </div>
            </div>
        </div>

    )
}