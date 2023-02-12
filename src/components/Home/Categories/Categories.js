import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, Col, Row } from 'react-bootstrap';

// Import Swiper styles
import 'swiper/css';
import './Categories.css'

const Categories = () => {

    return (
        <div>
            <div className="categories-top">
                <div className="container fluid">
                    <h4 className='mb-4'>Top Sell <span style={{ color: 'red' }}>Watch</span></h4>
                    <div className="flex swiper-categoris">
                        <Swiper
                            spaceBetween={40}
                            slidesPerView={4}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <Row>
                                <Col xs={1} md={2}>
                                    <SwiperSlide>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://i.ibb.co/n8wDRdR/clock1.jpg" />
                                            <Card.Body>
                                                <Card.Title>Jaeger-LeCoultre</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                </Col>
                                <Col xs={1} md={2}>
                                    <SwiperSlide>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://i.ibb.co/gzXNLqQ/clock2.jpg" />
                                            <Card.Body>
                                                <Card.Title>Audemars Piguet</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                </Col>
                                <Col xs={1} md={2}>
                                    <SwiperSlide>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://i.ibb.co/CVn8Wjw/clock3.jpg" />
                                            <Card.Body>
                                                <Card.Title>Frédérique Constant</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                </Col>
                                <Col xs={1} md={2}>
                                    <SwiperSlide>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://i.ibb.co/N2b4Tx2/clock4.jpg" />
                                            <Card.Body>
                                                <Card.Title>Piaget</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                </Col>
                                <Col xs={1} md={2}>
                                    <SwiperSlide>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://i.ibb.co/gJkfkJ9/clock.jpg" />
                                            <Card.Body>
                                                <Card.Title>Cartier</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                </Col>
                            </Row>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;