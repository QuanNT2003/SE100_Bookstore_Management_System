import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../MenuBar/Menubar.css';
import { FaHouse } from 'react-icons/fa6'
import { FaBuffer } from 'react-icons/fa6'
import { FaWallet } from 'react-icons/fa6'
import { FaChartSimple } from 'react-icons/fa6'
import { FaBusinessTime } from 'react-icons/fa6'
import { FaCartShopping } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa6'
import { FaUsers } from 'react-icons/fa6'
import Accordion from 'react-bootstrap/Accordion';
import logo from '../../Assets/images/logo.png';
import { Route, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';


Menubar.propTypes = {
    id: PropTypes.string.isRequired
};

function Menubar({ id }) {
    useEffect(() => {
        console.log(id)
    }

    )
    return (
        <div>
            <div className="MenuBar">

                <div className='d-flex align-items-center ms-4'>
                    <img src={logo} alt="" class="my-icon "></img>
                    <p className='name'> Triple K</p>
                </div>




                <p class="btn text-wrap m-0 p-0 w-100" href='#'>
                    <NavLink to="/overview" className={(navData) => navData.isActive ?
                        'w-100 btn text-start bg-primary text-white my-navlink' :
                        'w-100 btn text-start my-navlink'} >
                        <Row>
                            <Col xs md={2} className='pe-0'>
                                <FaHouse />
                            </Col>

                            <Col xs md={10} className='text-start ps-0'>
                                Tổng quan
                            </Col>
                        </Row>

                    </NavLink>



                </p>

                <div>
                    <Accordion alwaysOpen defaultActiveKey={id}>

                        <Accordion.Item eventKey="0">
                            <Accordion.Header><Row>
                                <Col xs md={3}>
                                    < FaCartShopping />
                                </Col>

                                <Col xs md={9} className='text-start ps-2 pe-0'>
                                    Đơn hàng
                                </Col>


                            </Row>
                            </Accordion.Header>
                            <Accordion.Body className='p-0 w-100'>
                                <NavLink to="/1" className={(navData) => navData.isActive ?
                                    'w-100 btn text-start bg-primary text-white' :
                                    'w-100 btn text-start'}>
                                    <li className='ps-3'>Nhập hàng</li>
                                </NavLink>

                                <NavLink to="/2" className={(navData) => navData.isActive ?
                                    'w-100 btn text-start bg-primary text-white' :
                                    'w-100 btn text-start'}>
                                    <li className='ps-3'>Nhập hàng</li>
                                </NavLink>
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="1" >
                            <Accordion.Header><Row>
                                <Col xs md={3}>
                                    < FaBuffer />
                                </Col>

                                <Col xs md={9} className='text-start ps-2 pe-0'>
                                    Sản phẩm
                                </Col>


                            </Row>
                            </Accordion.Header>
                            <Accordion.Body className='p-0 w-100' >
                                <NavLink to="/product" className={(navData) => navData.isActive ?
                                    'w-100 btn text-start bg-primary text-white' :
                                    'w-100 btn text-start'} >
                                    <li className='ps-3'>Danh sách sản phẩm</li>

                                </NavLink>
                                <NavLink to="/3" className={(navData) => navData.isActive ?
                                    'w-100 btn text-start bg-primary text-white' :
                                    'w-100 btn text-start'}>
                                    <li className='ps-3'>Quản lý kho</li>
                                </NavLink>
                                <NavLink to="/4" className={(navData) => navData.isActive ?
                                    'w-100 btn text-start bg-primary text-white' :
                                    'w-100 btn text-start'}>
                                    <li className='ps-3'>Nhập hàng</li>

                                </NavLink>
                                <NavLink to="/5" className={(navData) => navData.isActive ?
                                    'w-100 btn text-start bg-primary text-white' :
                                    'w-100 btn text-start'}>
                                    <li className='ps-3'>Kiểm hàng</li>

                                </NavLink>
                                <NavLink to="/6" className={(navData) => navData.isActive ?
                                    'w-100 btn text-start bg-primary text-white' :
                                    'w-100 btn text-start'}>
                                    <li className='ps-3'>Nhà cung cấp</li>

                                </NavLink>



                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header><Row>
                                <Col xs md={3}>
                                    < FaUser />
                                </Col>

                                <Col xs md={9} className='text-start ps-2 pe-0'>
                                    Khách hàng
                                </Col>


                            </Row>
                            </Accordion.Header>
                            <Accordion.Body className='p-0 w-100'>
                                <NavLink to="/7" className={(navData) => navData.isActive ?
                                    'w-100 btn text-start bg-primary text-white' :
                                    'w-100 btn text-start'}>
                                    <li className='ps-3'>Nhập hàng</li>
                                </NavLink>
                                <NavLink to="/8" className={(navData) => navData.isActive ?
                                    'w-100 btn text-start bg-primary text-white' :
                                    'w-100 btn text-start'}>
                                    <li className='ps-3'>Nhập hàng</li>
                                </NavLink>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header><Row>
                                <Col xs md={4}>
                                    < FaWallet />
                                </Col>

                                <Col xs md={8} className='text-start ps-2 pe-0'>
                                    Sổ quỹ
                                </Col>


                            </Row>
                            </Accordion.Header>
                            <Accordion.Body className='p-0 w-100'>
                                <NavLink to="/9" className={(navData) => navData.isActive ?
                                    'w-100 btn text-start bg-primary text-white' :
                                    'w-100 btn text-start'}>
                                    <li className='ps-3'>Nhập hàng</li>
                                </NavLink>
                                <NavLink to="/10" className={(navData) => navData.isActive ?
                                    'w-100 btn text-start bg-primary text-white' :
                                    'w-100 btn text-start'}>
                                    <li className='ps-3'>Nhập hàng</li>
                                </NavLink>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header><Row>
                                <Col xs md={3}>
                                    < FaChartSimple />
                                </Col>

                                <Col xs md={9} className='text-start ps-2 pe-0'>
                                    Báo cáo
                                </Col>


                            </Row>
                            </Accordion.Header>
                            <Accordion.Body className='p-0 w-100'>
                                <NavLink to="/11" className={(navData) => navData.isActive ?
                                    'w-100 btn text-start bg-primary text-white' :
                                    'w-100 btn text-start'}>
                                    <li className='ps-3'>Nhập hàng</li>
                                </NavLink>
                                <NavLink to="/12" className={(navData) => navData.isActive ?
                                    'w-100 btn text-start bg-primary text-white' :
                                    'w-100 btn text-start'}>
                                    <li className='ps-3'>Nhập hàng</li>
                                </NavLink>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5">
                            <Accordion.Header><Row>
                                <Col xs md={2}>
                                    < FaBuffer />
                                </Col>

                                <Col xs md={10} className='text-start ps-1 pe-0'>
                                    Quản lý khuyến mãi
                                </Col>


                            </Row>
                            </Accordion.Header>
                            <Accordion.Body className='p-0 w-100'>
                                <NavLink to="/13" className={(navData) => navData.isActive ?
                                    'w-100 btn text-start bg-primary text-white' :
                                    'w-100 btn text-start'}>
                                    <li className='ps-3'>Nhập hàng</li>
                                </NavLink>
                                <NavLink to="/14" className={(navData) => navData.isActive ?
                                    'w-100 btn text-start bg-primary text-white' :
                                    'w-100 btn text-start'}>
                                    <li className='ps-3'>Nhập hàng</li>
                                </NavLink>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="6">
                            <Accordion.Header><Row>
                                <Col xs md={2}>
                                    < FaUsers />
                                </Col>

                                <Col xs md={10} className='text-start ps-2 pe-0'>
                                    Quản lý nhân viên
                                </Col>


                            </Row>
                            </Accordion.Header>
                            <Accordion.Body className='p-0 w-100'>
                                <NavLink to="/15" className={(navData) => navData.isActive ?
                                    'w-100 btn text-start bg-primary text-white' :
                                    'w-100 btn text-start'}>
                                    <li className='ps-3'>Nhập hàng</li>
                                </NavLink>
                                <NavLink to="/16" className={(navData) => navData.isActive ?
                                    'w-100 btn text-start bg-primary text-white' :
                                    'w-100 btn text-start'}>
                                    <li className='ps-3'>Nhập hàng</li>
                                </NavLink>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="7">
                            <Accordion.Header><Row>
                                <Col xs md={2} className='pe-0'>
                                    < FaBusinessTime />
                                </Col>

                                <Col xs md={10} className='text-start ps-2 pe-0'>
                                    Nhật ký hoạt động
                                </Col>


                            </Row>
                            </Accordion.Header>
                            <Accordion.Body className='p-0 w-100'>
                                <NavLink to="/17" className={(navData) => navData.isActive ?
                                    'w-100 btn text-start bg-primary text-white' :
                                    'w-100 btn text-start'}>
                                    <li className='ps-3'>Nhập hàng</li>
                                </NavLink>
                                <NavLink to="/18" className={(navData) => navData.isActive ?
                                    'w-100 btn text-start bg-primary text-white' :
                                    'w-100 btn text-start'}>
                                    <li className='ps-3'>Nhập hàng</li>
                                </NavLink>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>

            </div>
        </div>
    );
}

export default Menubar;
