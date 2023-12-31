import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addItem, delItem } from '../redux/actions/index';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    if (value >= 1) {
      setQuantity(parseInt(value, 10));
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    }
    getProduct();
  }, [id]);

  const dispatch = useDispatch();

  const handleCart = (product, quantity) => {
    const isProductInCart = cartBtn === "Remove From Cart";

    if (isProductInCart) {
      for (let i = 0; i < quantity; i++) {
        dispatch(delItem(product));
      }
      setCartBtn("Add to Cart");
    } else {
      for (let i = 0; i < quantity; i++) {
        dispatch(addItem(product));
      }
      setCartBtn("Remove From Cart");
    }
  };

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  }

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="450px"
            width="450px"
            style={{
              cursor: 'pointer',
              transition: 'transform 0.3s',
            }}
            className="zoomable-image"
          />
          <div>
            <NavLink to="/products" className="btn btn-outline-dark px-4 my-5">
              Back
            </NavLink>
          </div>
        </div>

        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">
            {product.category}
          </h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">
            $ {product.price}
          </h3>
          <p className="lead">{product.description}</p>
          <div className="my-3" style={{ maxWidth: '75px' }} >
            <label htmlFor="quantity" className="form-label" >
              Quantity:
            </label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              tyle={{ width: '50px', padding: '5px' }}
            />
          </div>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => handleCart(product, quantity)}
          >
            {cartBtn}
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-4">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="container py-4">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  )
}

export default Product;
