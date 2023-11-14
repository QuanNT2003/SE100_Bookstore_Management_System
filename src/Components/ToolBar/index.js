import React from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaListUl } from 'react-icons/fa6'
import { FaCirclePlus } from 'react-icons/fa6'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ToolBar/ToolBar.css'
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
        <div className='ToolBar'>

            {
                arraybtn.map(btn => (

                    <NavLink to={btn.link} className="btn bg-primary navlink-toolbar" >
                        {
                            btn.type === 1 ? (
                                <FaListUl className='me-2' />
                            ) : (
                                <FaCirclePlus className='me-2' />
                            )
                        }
                        {btn.title}
                    </NavLink>







                ))
            }




        </div>
    );
}

export default ToolBar;