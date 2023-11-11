import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFilePen } from 'react-icons/fa6'
import { FaPrint } from 'react-icons/fa6'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
Input_Output.propTypes = {

};

function Input_Output(props) {
    return (

        <div className='d-flex'>
            <Button variant="primary" className='me-3 mb-2 w-50 text-start'>
                <FaFilePen className='me-2' />
                Nhập file
            </Button>


            <Button variant="primary" className='me-3  mb-2 w-50 text-start'>
                <FaPrint className='me-2' />
                Xuất file
            </Button>
        </div>


    );
}

export default Input_Output;