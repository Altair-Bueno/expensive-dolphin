import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button'

export { PriceTable };

function PriceTable() {
    return <Table striped bordered hover variant="dark">
        <thead>
            <tr>
                <th>Shop</th>
                <th>Current Price</th>
                <th>Deal</th>
                <th>Retail Price</th>
                <th>Link</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Steam</td>
                <td>$4'5</td>
                <td>11%</td>
                <td>$19'99</td>
                <td><Button variant="primary">Go to website</Button>{' '}</td>
            </tr>
            <tr>
                <td>Direct2Drive</td>
                <td>$4'8</td>
                <td>9%</td>
                <td>$19'99</td>
                <td><Button variant="primary">Go to website</Button>{' '}</td>
            </tr>
            <tr>
                <td>amazon.com</td>
                <td>$5'1</td>
                <td>2%</td>
                <td>$19'99</td>
                <td><Button variant="primary">Go to website</Button>{' '}</td>
            </tr>
        </tbody>
    </Table>;
}
