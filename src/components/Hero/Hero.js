import { Button, Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'

export const Hero = () => {

    return (
        <Container style={{ height: '100vh' }} className='bg-dark ps-5 pt-5' fluid>
            <Row style={{ height: '100%' }} className='d-flex align-content-center flex-wrap pb-5'>
                <Col md={6} >
                    <Card className='bg-dark text-white border-0'>
                        <Card.Body>
                            <Card.Title className='display-3'>Hello! My name is Ivaylo</Card.Title>
                            <Card.Subtitle className="my-3 display-6">I'm a front-end developer</Card.Subtitle>
                            {/* <Card.Text className=''>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            <Button className='my-3'>Contact me!</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}