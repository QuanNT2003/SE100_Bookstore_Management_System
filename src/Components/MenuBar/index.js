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
import 'bootstrap/dist/css/bootstrap.min.css';

Menubar.propTypes = {
    id: PropTypes.string.isRequired
};

function Menubar({ id }) {
    useEffect(() => {
        console.log(id)
    }

    )
    return (
        <div className="MenuBar">

            <div className='d-flex align-items-center ps-4 '>
                <img src={logo} alt="" class="my-icon "></img>
                <p className='name'> Triple K</p>
            </div>




            <p class="btn text-wrap ms-2 m-0 p-0 pe-2 w-100" href='#'>
                <NavLink to="/overview" className={(navData) => navData.isActive ?
                    'w-100 btn bg-primary text-white' :
                    'w-100 btn'} >
                    <Row>
                        <Col xs md={2}>
                            <FaHouse />
                        </Col>

                        <Col xs md={10} className='ps-1 accor-header'>
                            Tổng quan
                        </Col>
                    </Row>

                </NavLink>



            </p>

            <div>
                <Accordion alwaysOpen defaultActiveKey={id}>

                    <Accordion.Item eventKey="0">
                        <Accordion.Header><Row className='w-100'>
                            <Col xs md={2}>
                                < FaCartShopping />
                            </Col>

                            <Col xs md={10} className='accor-header'>
                                Đơn hàng
                            </Col>


                        </Row>
                        </Accordion.Header>
                        <Accordion.Body className='p-0 w-100'>
                            <NavLink to="/1" className={(navData) => navData.isActive ?
                                'btn bg-primary text-white w-100' :
                                'btn w-100'}>
                                <li className='my-navlink'>Nhập hàng</li>
                            </NavLink>

                            <NavLink to="/2" className={(navData) => navData.isActive ?
                                'btn bg-primary text-white w-100' :
                                'btn w-100'}>
                                <li className='my-navlink'>Nhập hàng</li>
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="1" >
                        <Accordion.Header><Row className='w-100'>
                            <Col xs md={2}>
                                < FaBuffer />
                            </Col>

                            <Col xs md={10} className='accor-header'>
                                Sản phẩm
                            </Col>


                        </Row>
                        </Accordion.Header>
                        <Accordion.Body className='p-0 w-100' >
                            <NavLink to="/product" className={(navData) => navData.isActive ?
                                'w-100 btn bg-primary text-white' :
                                'w-100 btn'} >
                                <li className='my-navlink'>Danh sách sản phẩm</li>

                            </NavLink>
                            <NavLink to="/3" className={(navData) => navData.isActive ?
                                'w-100 btn bg-primary text-white' :
                                'w-100 btn'}>
                                <li className='my-navlink'>Quản lý kho</li>
                            </NavLink>
                            <NavLink to="/4" className={(navData) => navData.isActive ?
                                'w-100 btn bg-primary text-white' :
                                'w-100 btn '}>
                                <li className='my-navlink'>Nhập hàng</li>

                            </NavLink>
                            <NavLink to="/5" className={(navData) => navData.isActive ?
                                'w-100 btn bg-primary text-white' :
                                'w-100 btn '}>
                                <li className='my-navlink'>Kiểm hàng</li>

                            </NavLink>
                            <NavLink to="/6" className={(navData) => navData.isActive ?
                                'w-100 btn bg-primary text-white' :
                                'w-100 btn '}>
                                <li className='my-navlink'>Nhà cung cấp</li>

                            </NavLink>



                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header><Row className='w-100'>
                            <Col xs md={2}>
                                < FaUser />
                            </Col>

                            <Col xs md={10} className='accor-header'>
                                Khách hàng
                            </Col>


                        </Row>
                        </Accordion.Header>
                        <Accordion.Body className='p-0 w-100'>
                            <NavLink to="/7" className={(navData) => navData.isActive ?
                                'btn bg-primary text-white w-100' :
                                'btn w-100'}>
                                <li className='my-navlink'>Nhập hàng</li>
                            </NavLink>
                            <NavLink to="/8" className={(navData) => navData.isActive ?
                                'btn bg-primary text-white w-100' :
                                'btn w-100'}>
                                <li className='my-navlink'>Nhập hàng</li>
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header><Row className='w-100'>
                            <Col xs md={2}>
                                < FaWallet />
                            </Col>

                            <Col xs md={10} className='accor-header'>
                                Sổ quỹ
                            </Col>


                        </Row>
                        </Accordion.Header>
                        <Accordion.Body className='p-0 w-100'>
                            <NavLink to="/9" className={(navData) => navData.isActive ?
                                'btn bg-primary text-white w-100' :
                                'btn w-100'}>
                                <li className='my-navlink'>Nhập hàng</li>
                            </NavLink>
                            <NavLink to="/10" className={(navData) => navData.isActive ?
                                'btn bg-primary text-white w-100' :
                                'btn w-100'}>
                                <li className='my-navlink'>Nhập hàng</li>
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header><Row className='w-100'>
                            <Col xs md={2}>
                                < FaChartSimple />
                            </Col>

                            <Col xs md={10} className='accor-header'>
                                Báo cáo
                            </Col>


                        </Row>
                        </Accordion.Header>
                        <Accordion.Body className='p-0 w-100'>
                            <NavLink to="/11" className={(navData) => navData.isActive ?
                                'btn bg-primary text-white w-100' :
                                'btn w-100'}>
                                <li className='my-navlink'>Nhập hàng</li>
                            </NavLink>
                            <NavLink to="/12" className={(navData) => navData.isActive ?
                                'btn bg-primary text-white w-100' :
                                'btn w-100'}>
                                <li className='my-navlink'>Nhập hàng</li>
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                        <Accordion.Header><Row className='w-100'>
                            <Col xs md={2}>
                                < FaBuffer />
                            </Col>

                            <Col xs md={10} className='accor-header'>
                                Quản lý khuyến mãi
                            </Col>


                        </Row>
                        </Accordion.Header>
                        <Accordion.Body className='p-0 w-100'>
                            <NavLink to="/13" className={(navData) => navData.isActive ?
                                'btn bg-primary text-white w-100' :
                                'btn w-100'}>
                                <li className='my-navlink'>Nhập hàng</li>
                            </NavLink>
                            <NavLink to="/14" className={(navData) => navData.isActive ?
                                'btn bg-primary text-white w-100' :
                                'btn w-100'}>
                                <li className='my-navlink'>Nhập hàng</li>
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                        <Accordion.Header><Row className='w-100'>
                            <Col xs md={2}>
                                < FaUsers />
                            </Col>

                            <Col xs md={10} className='accor-header'>
                                Quản lý nhân viên
                            </Col>


                        </Row>
                        </Accordion.Header>
                        <Accordion.Body className='p-0 w-100'>
                            <NavLink to="/15" className={(navData) => navData.isActive ?
                                'btn bg-primary text-white w-100' :
                                'btn w-100'}>
                                <li className='my-navlink'>Nhập hàng</li>
                            </NavLink>
                            <NavLink to="/16" className={(navData) => navData.isActive ?
                                'btn bg-primary text-white w-100' :
                                'btn w-100'}>
                                <li className='my-navlink'>Nhập hàng</li>
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7">
                        <Accordion.Header><Row className='w-100'>
                            <Col xs md={2} className='pe-0'>
                                < FaBusinessTime />
                            </Col>

                            <Col xs md={10} className='accor-header'>
                                Nhật ký hoạt động
                            </Col>


                        </Row>
                        </Accordion.Header>
                        <Accordion.Body className='p-0 w-100'>
                            <NavLink to="/17" className={(navData) => navData.isActive ?
                                'btn bg-primary text-white w-100' :
                                'btn w-100'}>
                                <li className='my-navlink'>Nhập hàng</li>
                            </NavLink>
                            <NavLink to="/18" className={(navData) => navData.isActive ?
                                'btn bg-primary text-white w-100' :
                                'btn w-100'}>
                                <li className='my-navlink'>Nhập hàng</li>
                            </NavLink>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>

        </div>

    );
}

export default Menubar;
