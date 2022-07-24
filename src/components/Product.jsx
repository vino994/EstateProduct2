import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://carolineolds-strapi-dev.q.starberry.com/properties?_limit=50/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, [])
    const Loading = () => {
        return <>
            ...Loading
        </>
    }
    const ShowProducts = () => {
        return (
            <>

                <div className="col-md-6 mt-5">
                    <img src={product.image} height='400px' width='400px' />
                </div>
                <div className="col-md-6 mb-3 mt-4">
                    <div className="row">
                        <h4 className="text-uppercase text-black-50 d-flex justify-content-start">{product.category}</h4>
                        <h1 className="display-5 d-flex justify-content-start">{product.title}</h1>
                        <p className="lead fw-bolder d-flex justify-content-start mt-3">Rating {product.rating && product.rating.rate}
                            <i className='fa fa-star'></i>
                        </p>
                        <h3 className="display-6 fw-bold my-4 d-flex justify-content-start">${product.price}</h3>
                        <p className="lead d-flex justify-content-start text-justify">{product.description}</p>
                        <button className="btn btn-outline-dark">Add to card</button>
                    </div>

                </div>


            </>
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="row justify-content-center">
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default product;