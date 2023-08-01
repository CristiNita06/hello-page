import Button from 'react-bootstrap/Button'

import './Photo.css'
import photo from '../../images/profPhoto.png'

const Photo = () => {
    return ( <div>
        <div className='photoSectionContainer'>
            <div>
                <div className='photoContainer'>
                    <img src={photo}></img>
                </div>
                <div className='buttonsContainer'>
                    <div>
                        {/* <Button variant='primary' size='sm' className='contactButton'>LinkedIn</Button>
                        <Button variant='primary' size='sm' className='contactButton'>Email Me</Button> */}
                        <button className='contactButton'>LinkedIn</button>
                        <button className='contactButton'>Email Me</button>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    </div> );
}
 
export default Photo;