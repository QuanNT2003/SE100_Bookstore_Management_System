import React from 'react';

import { FaFilePen } from 'react-icons/fa6'
import { FaPrint } from 'react-icons/fa6'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Input_Output_File/Input_Output.css'
Input_Output.propTypes = {

};

function Input_Output(props) {
    return (

        <div className='d-flex Input_Output'>
            <Button variant="primary" className='me-3 mb-2 Input_Output-btn'>
                <FaFilePen className='me-2' />
                Nhập file
            </Button>


            <Button variant="primary" className='me-3 mb-2 Input_Output-btn'>
                <FaPrint className='me-2' />
                Xuất file
            </Button>
        </div>


    );
}

export default Input_Output;