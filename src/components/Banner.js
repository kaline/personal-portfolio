import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my portfolio</span>
                    <h1 >{`Hi I'm webdecoded`}<span className="wrap">Web developer</span></h1>
                    <p>Lorem ipsum </p>
                    <button onClick={() => console.log('connet')}>Let's connect <ArrowRightCircle size={25}>
                        </ArrowRightCircle></button>
                    </Col>
                    <Col  xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="header Img"></img>
                    </Col>
                </Row>
            </Container>
             
        </section>
    )
}

export default Banner;