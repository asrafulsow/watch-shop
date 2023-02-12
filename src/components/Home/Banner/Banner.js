import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/N2b4Tx2/watch2.jpg"
                        style={{ height: '650px' }}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="carousel-des">
                            <h3>Best Watch For The Sports Lover</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quia neque laborum temporibus cumque minima dicta rem repellat perspiciatis vel!</p>
                            <Button variant="primary">Explore More</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/dGb8vqv/watch3.jpg"
                        style={{ height: '650px' }}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="carousel-des">
                            <h3>Best Watch For The Sports Lover</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quia neque laborum temporibus cumque minima dicta rem repellat perspiciatis vel!</p>
                            <Button variant="primary">Explore More</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/RvySWpn/watch1.jpg"
                        style={{ height: '650px' }}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="carousel-des">
                            <h3>Best Watch For The Sports Lover</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quia neque laborum temporibus cumque minima dicta rem repellat perspiciatis vel!</p>
                            <Button variant="primary">Explore More</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;