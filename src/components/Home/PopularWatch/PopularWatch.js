import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, Col, Row } from 'react-bootstrap';
import 'swiper/css';
import './PopularWatch.css';

const PopularWatch = () => {
    return (
        <div className='popular-watch-area'>
            <div className="container">
                <div className="popular-watch">
                    <div className="watch-top">
                        <h4 className='mb-4'>Popular <span style={{ color: 'red' }}>Watch</span></h4>
                    </div>
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
                                            <Card.Img variant="top" src="https://i.ibb.co/j4025Mt/casio.jpg" />
                                            <Card.Body>
                                                <Card.Title>Harry Winston</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                </Col>
                                <Col xs={1} md={2}>
                                    <SwiperSlide>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://i.ibb.co/Vwcw05f/casio1.jpg" />
                                            <Card.Body>
                                                <Card.Title>Blancpain</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                </Col>
                                <Col xs={1} md={2}>
                                    <SwiperSlide>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://i.ibb.co/GHSP1zX/casio2.jpg" />
                                            <Card.Body>
                                                <Card.Title>Longines</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                </Col>
                                <Col xs={1} md={2}>
                                    <SwiperSlide>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://i.ibb.co/xGdFnPb/casio3.jpg" />
                                            <Card.Body>
                                                <Card.Title>Tudor</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                </Col>
                                <Col xs={1} md={2}>
                                    <SwiperSlide>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="https://i.ibb.co/XZxPm7h/casio4.jpg" />
                                            <Card.Body>
                                                <Card.Title>Omega</Card.Title>
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

export default PopularWatch;