import './resume.css'
import filePDF from './resume.pdf'
import React, { useEffect, useState } from 'react'

const Resume = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();

        setToggle(!toggle);
    }

    return (
        <div id='resume-toggle'>
            <button id='resume-button' onClick={handleClick}>{toggle ? "Close Resume" : "Show Resume"}</button>
            <div id='outer-resume' >
                <embed style={{ display: toggle ? 'block' : 'none' }} id='resume' src={filePDF} type="application/pdf"></embed>
            </div>
        </div>
    )
}

export default Resume
