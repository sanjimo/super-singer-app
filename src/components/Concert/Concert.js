import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singers from '../Singers/Singers';
import './Concert.css';
import List from '../List/List';

const Concert = () => {
    //using useState
    const [singers,setSingers] = useState([]);
    const [cart,setCart]=useState([]);

    //using useEffect for fetch data
    useEffect(()=>{
        fetch('./singers.JSON')
        .then(res=>res.json())
        .then(data=>setSingers(data))
    },[]);

    //using handleAddToCart function for onClick handling
    const handleAddToCart=(singer)=>{
        const newCart=[...cart,singer];
        setCart(newCart);
    }
    return (
        <div className="concert-container">
            <div className="singer-container">
            {
                    singers.map(singer=><Singers
                        key={singer.key}
                        singer={singer}
                        handleAddToCart={handleAddToCart}
                    >
                    </Singers>)
            }
            </div>
            <div className="cart-container">
                <div>
                    <Cart cart={cart}></Cart>
                </div>
                <div>
                    {
                        cart.map(singer=><List
                             key={singer.key}
                             name={singer.name}
                             >
                             </List>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Concert;