import Card from 'react-bootstrap/Card';

export default function About() {
    return (
        <div className="aboutpage">
            <div className="aboutHeader">
                <h1>About Us</h1>
            </div>

            <Card>
                <Card.Body>
                    <Card.Text>
                        When returning from a spritual journey through the Earth, Monty McMansions decided to dedicate some of his fortune to offering spritiual wellness for others back in his hometown.
                        As the heir of the industrious McMansions fortune, Monty was never satisfied with the material wealth that provided him everything he desired.
                        <p>Monty decided to travel around the world to find peace and happiness.
                            Upon his return, he dedicated about 1% of his wealth to open this Mineral SPA to bring joy and spiritual happiness to others
                        </p>
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src="hotsprings.jpg" alt="hotsprings" />
                <br/>
            </Card>
        </div>
    )
}
