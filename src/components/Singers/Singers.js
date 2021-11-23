import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Singers.css';

const Singers = (props) => {
    //destructuring
    const {img,name,born,country,occupation,salary}=props.singer;
    //using fontawesome shopping-cart icon
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
     <div>
         <div className="">
            <div className="col singer shadow rounded">
                <div className="card">
                    <img src={img} class="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title fs-5"><span className="text-color">Name:</span> {name}</h5>
                        <h5 className="card-text fs-6 fw-regular"><span className="text-color">Born:</span> {born}</h5>
                        <h5 className="card-text fs-6 fw-regular"><span className="text-color">Country: </span>{country}</h5>
                        <h5 className="card-text fs-6 fw-regular"><span className="text-color">Occupation: </span>{occupation}</h5>
                        <h5 className="card-text fs-6 fw-regular"><span className="text-color">Salary: </span>${salary}</h5><br/>
                    </div>
                    <div className="card-bottom">
                        <button
                        className="btn-regular"
                        onClick={()=>props.handleAddToCart(props.singer)}
                        >{cartIcon} Add to Concert</button>
                    </div>
                </div>
            </div>
        </div>
     </div>
    );
};

export default Singers;