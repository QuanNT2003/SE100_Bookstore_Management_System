import React from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaListUl } from 'react-icons/fa6'
import { FaCirclePlus } from 'react-icons/fa6'
import Button from 'react-bootstrap/Button';
ToolBar.propTypes = {
    array: PropTypes.array.isRequired
};

function ToolBar({ array }) {
    const [arraybtn, Setarraybtn] = useState([])

    useEffect(() => {
        Setarraybtn(array)
        console.log(arraybtn)
    })
    return (
        <div >
            <Container fluid>
                <Row>
                    {
                        arraybtn.map(btn => (
                            <Col key={btn.id} xs md={5} className='p-0 m-0'>

                                <NavLink to={btn.link} className="text-decoration-none text-white btn text-start bg-primary toolbar-navlink" >
                                    {
                                        btn.type === 1 ? (
                                            <FaListUl className='me-2' />
                                        ) : (
                                            <FaCirclePlus className='me-2' />
                                        )
                                    }
                                    {btn.title}

                                </NavLink>



                            </Col>

                        ))
                    }
                </Row>

            </Container>

        </div>
    );
}

export default ToolBar;