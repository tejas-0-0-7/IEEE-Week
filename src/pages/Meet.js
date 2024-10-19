import Navbaring from '../Components/Nav';
import Footer from '../Components/Foot';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Meet.css';

const Meet = () => {
    return (  
        <div>
            <Navbaring />
            
            <Container className="my-4">
                {/* Faculty Coordinators */}
                <header className="text-center mb-4">
                    <h1>Faculty Coordinators</h1>
                </header>
                
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4} className="mx-auto">
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/Archana_H_R.jpg" alt="Faculty Coordinator 1" className="team-image" />
                            <Card.Body>
                                <Card.Title>Dr Archana H R</Card.Title>
                                <Card.Text>Branch Counsellor</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} className="mx-auto">
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/Gururaj.jpg" alt="Faculty Coordinator 2" className="team-image" />
                            <Card.Body>
                                <Card.Title>Dr Gururaja H S</Card.Title>
                                <Card.Text>Branch Mentor</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Execom Section */}
                <header className="text-center my-4">
                    <h1>Execom</h1>
                </header>
                
                {/* Execom Cards */}
                <Row>
                    {/* First row */}
                    <Col xs={12} sm={6} md={3}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/Mohit (Chairperson).jpg" alt="Team Member 1" className="team-image" />
                            <Card.Body>
                                <Card.Title>Mohit Poddar</Card.Title>
                                <Card.Text>Chairperson</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/Disha (Vice Chairperson).jpeg" alt="Team Member 2" className="team-image" />
                            <Card.Body>
                                <Card.Title>Disha Lohia</Card.Title>
                                <Card.Text>Vice Chairperson</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/Tejas.jpg" alt="Team Member 3" className="team-image" />
                            <Card.Body>
                                <Card.Title>Tejas</Card.Title>
                                <Card.Text>Treasurer</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
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
                    <Col xs={12} sm={6} md={4}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/Suhas (Secretary).jpg" alt="Team Member 5" className="team-image" />
                            <Card.Body>
                                <Card.Title>Suhas Shenoy Udyavara</Card.Title>
                                <Card.Text>Secretary</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/SriKrishna Pejathaya P S (Joint Secretary).jpg" alt="Team Member 6" className="team-image" />
                            <Card.Body>
                                <Card.Title>Srikrishna Pejatheya PS</Card.Title>
                                <Card.Text>Joint Secretary</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/vignesh.jpg" alt="Team Member 7" className="team-image" />
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
                    <Col xs={12} sm={6} md={3}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/aadhya.jpg" alt="Team Member 1" className="team-image" />
                            <Card.Body>
                                <Card.Title>Aadhya M</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/nakul.jpg" alt="Team Member 2" className="team-image" />
                            <Card.Body>
                                <Card.Title>Nakul N</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/Namratha.jpg" alt="Team Member 3" className="team-image" />
                            <Card.Body>
                                <Card.Title>Namratha P</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/Ninaada Ranga.JPG" alt="Team Member 4" className="team-image" />
                            <Card.Body>
                                <Card.Title>Ninaada Ranga</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col xs={12} sm={6} md={4}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/Shreeya K.jpg" alt="Team Member 5" className="team-image" />
                            <Card.Body>
                                <Card.Title>Shreeya K</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/sushanth.jpg" alt="Team Member 6" className="team-image" />
                            <Card.Body>
                                <Card.Title>Sushanth C</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card className="team-card">
                            <Card.Img variant="top" src="/images/uday.jpg" alt="Team Member 7" className="team-image" />
                            <Card.Body>
                                <Card.Title>Uday Ramageri</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                 {/* Sponsor Section */}
                 <header className="text-center my-4 sponsor-header">
                    <h1>Our Sponsors</h1>
                </header>

                <div className="sponsor-marquee my-4">
                    <div className="marquee-inner">
                        <img src="./sponsor1.png" alt="Sponsor 1" className="sponsor-image" />
                        <img src="./sponsor1.png" alt="Sponsor 2" className="sponsor-image" />
                        <img src="./sponsor1.png" alt="Sponsor 3" className="sponsor-image" />
                        <img src="./sponsor1.png" alt="Sponsor 4" className="sponsor-image" />
                    </div>
                </div>
            </Container>
            <Footer/>
        </div>
    );
}

export default Meet;
