import React from 'react'
import './image.css';
import Aurora from '../../Images/auroa.jpg';
import Belle from '../../Images/belle.jpg';
import Elsa from '../../Images/elsa.jpg';
import Jasmine from '../../Images/jasmine.jpg';
import Meg from '../../Images/meg.jpg';
import Merida from '../../Images/merida.jpg';
import Mulan from '../../Images/mulan.jpg';
import Rapunzel from '../../Images/rapunzel.jpg';
import Snow from '../../Images/snow.jpg';
import Tiana from '../../Images/tiana.jpg';
import Tink from '../../Images/tink.jpg';
import Wendy from '../../Images/wendy.jpg';

const imgs = [Aurora, Belle, Elsa, Jasmine, Meg, Merida, Mulan, Rapunzel, Snow, Tiana, Tink, Wendy];

function Image(props) {
    return (
        <img className="img mr-3 mt-2" src={imgs[props.src]} onClick={props.click} alt="princess"></img>
    )
}

export default Image;
