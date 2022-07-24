import React, { useState, useEffect } from 'react';
import '../components/Products.css';
import { NavLink } from 'react-router-dom';
const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState([]);
   


    let componentMounted = true;
   


    useEffect(() => {
        const getImage = async () => {
            const response = await fetch('https://api.unsplash.com/photos/?client_id=PDcmKiNCw00ymyR37BRSSmTgxnLGdJJYMqxlpnyoerI');

            setImage(await response.json());
        }
        getImage();
    })
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://carolineolds-strapi-dev.q.starberry.com/properties?_limit=50');
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);

            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])
    const Loading = () => {
        return <>
            ...Loading
        </>
    }

    const ShowProducts = () => {
        return (
            <>

                <h1>Property of Sale</h1>

                {filter.map((product, i) => {

                    return (
                        <> 
                            <div className="col-md-4">

                                <div class="card mt-5 d-flex align-items-center" key={product.id}>
                                    <img className='images mt-3' />
                                    <div class="card-body text-center">
                                        <h5 class="card-title">{product.Title}</h5>
                                        <p class="card-text">{product.Bedrooms} bedroom {product.Building_Type} for sale</p>
                                        <NavLink to={`/Products/${product.id}`} className='card-text'>{product.Price}</NavLink>
                                    </div>
                                </div>

                            </div>
                        </>
                    )
                })}
            </>
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
};

export default Products;