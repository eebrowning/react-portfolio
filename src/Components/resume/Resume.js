import './resume.css'
import filePDF from './resume.pdf'

const Resume = () => {


    return (
        <div id='outer-resume'>
            <embed id='resume' src={filePDF} type="application/pdf"></embed>
        </div>
    )
}

export default Resume
