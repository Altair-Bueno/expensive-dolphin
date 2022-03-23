import Button from "react-bootstrap/Button";

export{
    ShowMore
}

interface ButtonProps{
    onClick: ()=>void
}

function ShowMore(p : ButtonProps){
    const content = 'Show More'
    const icon = <i className={"bi bi-arrow-down-square-fill small"}/>

    return(
        <Button variant={"outline-light"} >
            {icon}{' '}{content}
        </Button>
    )
}