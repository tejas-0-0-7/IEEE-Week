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
                <div className="section-1">
                    <header className="text-center mb-4">
                        <h1  className="section-header">Faculty Coordinators</h1>
                    </header>
                </div>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={6} md={4} className="mx-auto">
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/Archana_H_R.jpg" alt="Faculty Coordinator 1" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Dr Archana H R</Card.Title>
                                    <Card.Text className="team-role">Branch Counsellor</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4} className="mx-auto">
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/Gururaj.jpg" alt="Faculty Coordinator 2" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Dr Gururaja H S</Card.Title>
                                    <Card.Text className="team-role">Branch Mentor</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                {/* Executive Committee Section */}
                <div className="section-2">
                    <header className="text-center my-4">
                        <h1  className="section-header">Executive Committee</h1>
                    </header>
                </div>
                    <Row>
                        <Col xs={12} sm={6} md={3}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/mohit.png" alt="Team Member 1" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Mohit Poddar</Card.Title>
                                    <Card.Text className="team-role">Chairperson</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/disha.png" alt="Team Member 2" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Disha Lohia</Card.Title>
                                    <Card.Text className="team-role">Vice Chairperson</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/tejas.png" alt="Team Member 3" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Tejas</Card.Title>
                                    <Card.Text className="team-role">Treasurer</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/hardik.png" alt="Team Member 4" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Hardik Jain</Card.Title>
                                    <Card.Text className="team-role">Joint Treasurer</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={12} sm={6} md={4}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/suhas.png" alt="Team Member 5" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Suhas Shenoy Udyavara</Card.Title>
                                    <Card.Text className="team-role">Secretary</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/sriKrishna.png" alt="Team Member 6" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">SriKrishna Pejathaya P S</Card.Title>
                                    <Card.Text className="team-role">Joint Secretary</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/vignesh.png" alt="Team Member 7" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Vignesh B</Card.Title>
                                    <Card.Text className="team-role">Joint Secretary</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            

                {/* SAC Coordinators Section */}
                <div className="section-3">
                    <header className="text-center my-4">
                        <h1  className="section-header">SAC Coordinators</h1>
                    </header>
                </div>
                    <Row className='team-row'>
                        <Col xs={12} sm={6} md={3}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/aadhya.png" alt="Team Member 1" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Aadhya M</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/nakul.png" alt="Team Member 2" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Nakul N</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/namratha.png" alt="Team Member 3" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Namratha P</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/ninaada.png" alt="Team Member 4" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Ninaada Ranga</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={12} sm={6} md={4}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/shreeya.png" alt="Team Member 5" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Shreeya K</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/sushanth.png" alt="Team Member 6" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Sushanth C</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/uday.png" alt="Team Member 7" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Uday Ramageri</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                {/* Sponsor Section */}
                {/* <header className="text-center my-4 sponsor-header">
                    <h1>Our Sponsors</h1>
                </header>
                <div className="sponsor-marquee my-4">
                    <div className="marquee-inner">
                        <img src="./sponsor1.png" alt="Sponsor 1" className="sponsor-image" />
                        <img src="./sponsor2.png" alt="Sponsor 2" className="sponsor-image" />
                        <img src="./sponsor3.png" alt="Sponsor 3" className="sponsor-image" />
                        <img src="./sponsor4.png" alt="Sponsor 4" className="sponsor-image" />
                    </div>
                </div> */}
            </Container>
            <Footer />
        </div>
    );
}

export default Meet;
