import ListGroup from 'react-bootstrap/ListGroup';

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) => <li>{eachPackage}</li>)

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" active>{displayPackages}</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}