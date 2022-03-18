export{
    ShowMore
}

interface ButtonProps{
    onClick: ()=>void
}

function ShowMore(p : ButtonProps){
    return(
        <div className={"text-light"}>
            <h1 className="bi bi-arrow-down-square-fill" onClick={p.onClick}>  Show More</h1>
        </div>
    )
}