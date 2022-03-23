import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export{
    ExpensiveHelp
}

function ExpensiveHelp(){
    return(
        <div className={"container text-light bg-dark rounded rounded-5 mt-4 p-4"}>
            <div className="row">
                <div className={"row-md-12"}>
                    <h1>Need some help? <i>You're in the right place!</i></h1>
                </div>

                <div className="row text-center">
                    <div className="col-lg-4 col-md-12 justify-content-end">
                        <Card className={"bg-light text-dark m-2"} style={{ width: '18rem' }}>
                            {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                            <Card.Body>
                                <Card.Title>Read the F.A.Qs</Card.Title>
                                <Card.Text>
                                    In most cases, someone has experienced the same problem as you, what about reading the FAQs
                                    before bothering the coders?
                                </Card.Text>
                                <Button variant="primary">Go to FAQs yourself</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <Card className={"bg-light text-dark m-2 "} style={{ width: '18rem' }}>
                            {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                            <Card.Body>
                                <Card.Title>Send a message to our coders</Card.Title>
                                <Card.Text>
                                    It seems you've already read our FAQs, don't you? Okay... now that you don't have found
                                    what you were searching, go ahead!
                                </Card.Text>
                                <Button variant="primary">Contact us</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <Card className={"bg-light text-dark m-2"} style={{ width: '18rem' }}>
                            {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                            <Card.Body>
                                <Card.Title>Join our Discord Server</Card.Title>
                                <Card.Text>
                                    Are you an outgoing person? Don't wanna bother our coders with your nerd-stupid
                                    questions? You can hang out with another nerd-stupid people like you!
                                </Card.Text>
                                <Button variant="primary">Join us!</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>


            </div>

        </div>
    );
}