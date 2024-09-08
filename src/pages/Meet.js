import Navbaring from '../Components/Nav';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Meet.css';

const Meet = () => {
    return (  
        <div>
            <Navbaring />
            
            <Container className="my-4">
                <header className="text-center mb-4">
                    <h1>Execom</h1>
                </header>
                
                <Row>
                    <Col md={3}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/Mohit (Chairperson).jpg" alt="Team Member 1" className="team-image" />
                            <Card.Body>
                                <Card.Title>Mohit Poddar</Card.Title>
                                <Card.Text>Chairperson</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/Disha (Vice Chairperson).jpeg" alt="Team Member 2" className="team-image" />
                            <Card.Body>
                                <Card.Title>Disha Lohia</Card.Title>
                                <Card.Text>Vice Chairperson</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/Tejas(Treasurer).jpg" alt="Team Member 3" className="team-image" />
                            <Card.Body>
                                <Card.Title>Tejas</Card.Title>
                                <Card.Text>Treasurer</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/Hardik(Joint Treasurer).png" alt="Team Member 4" className="team-image" />
                            <Card.Body>
                                <Card.Title>Hardik Jain</Card.Title>
                                <Card.Text>Joint Treasurer</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={4}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/Suhas (Secretary).jpg" alt="Team Member 5" className="team-image" />
                            <Card.Body>
                                <Card.Title>Suhas Shenoy Udyavara</Card.Title>
                                <Card.Text>Secretary</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/SriKrishna Pejathaya P S (Joint Secretary).jpg" alt="Team Member 6" className="team-image" />
                            <Card.Body>
                                <Card.Title>Srikrishna Pejatheya PS</Card.Title>
                                <Card.Text>Joint Secretary</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/Vignesh(Joint Secretary).png" alt="Team Member 7" className="team-image" />
                            <Card.Body>
                                <Card.Title>Vignesh B</Card.Title>
                                <Card.Text>Joint Secretary</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <header className="text-center my-4">
                    <h1>SAC</h1>
                </header>
                
                <Row>
                    <Col md={3}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="path_to_image_1" alt="Team Member 1" className="team-image" />
                            <Card.Body>
                                <Card.Title>John Doe</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="path_to_image_2" alt="Team Member 2" className="team-image" />
                            <Card.Body>
                                <Card.Title>Jane Smith</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="path_to_image_3" alt="Team Member 3" className="team-image" />
                            <Card.Body>
                                <Card.Title>Mike Johnson</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="path_to_image_4" alt="Team Member 4" className="team-image" />
                            <Card.Body>
                                <Card.Title>Emily Davis</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={4}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="path_to_image_5" alt="Team Member 5" className="team-image" />
                            <Card.Body>
                                <Card.Title>Sarah Brown</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="path_to_image_6" alt="Team Member 6" className="team-image" />
                            <Card.Body>
                                <Card.Title>David Wilson</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="path_to_image_7" alt="Team Member 7" className="team-image" />
                            <Card.Body>
                                <Card.Title>Rachel Green</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Meet;
