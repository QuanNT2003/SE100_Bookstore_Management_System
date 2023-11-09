import React from 'react';
import PropTypes from 'prop-types';
import '../Header/Header.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { FaBell } from 'react-icons/fa6'
import { FaAngleLeft } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
Header.propTypes = {
    info: PropTypes.element.isRequired
};

function Header(info) {
    let navigate = useNavigate();
    useEffect(() => {

        console.log(info.info)
    })
    return (
        <div className='header w-100'>

            <Row className='w-100'>
                <Col xs md={8} className='text-start mt-2'>
                    {
                        info.info.title === 'Quay lại' ? (
                            <a className='title-return text-start pt-2' href='#' onClick={() => navigate(-1)}>
                                <FaAngleLeft className='me-2' />
                                Quay lại
                            </a>
                        ) : (
                            <p className='title pt-2 text-start'>
                                {info.info.title}
                            </p>
                        )
                    }

                </Col>
                <Col xs md={4} className='d-flex align-items-center'>
                    <Row >
                        <Col xs md={6} className='text-end d-flex justify-content-end align-items-center'>
                            <FaBell className='header-icon' />
                        </Col>
                        <Col xs md={6} >
                            <Row className='text-end'>
                                <Col xs md={4}>
                                    <Image src={info.info.img} roundedCircle fluid className='avatar p-1' />
                                </Col >
                                <Col xs md={8} className='text-start d-flex align-items-center'>
                                    {info.info.name}
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>



        </div>
    );
}

export default Header;