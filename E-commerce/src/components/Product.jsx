import React, { useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './ProductStyle.css';
import star from './images/star-512.png';
import cart from './images/cart.png';
import refresh from './images/refresh.png';
import rupee from './images/rupee.png';
import arrow from './images/arrow.png';

const Product = () => {
  const { cartProducts } = useSelector((state) => state.cartReducer);
  const quantity = 1;
  // const [isClicked, setIsClicked] = useState(false);
  // console.log("isclicked", isClicked);
  


  const { id } = useParams();

  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productReducer);

  const inCart = cartProducts.find((pr) => pr.id === id);

  useEffect(() => {
    dispatch({ type: 'PRODUCT', id });
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className="product-container">
      <div className="row1">
        <div className="col-5">
          <div className="product-img">
            <img src={product.url} alt="" />
          </div>
        </div>
        <div className="col-6 pd-l">
          <div className="p-company">{product.title}</div>
          <div className="p-name">{product.description}</div>
          <div className="p-price">Rs. {product.price}</div>
          <div className="xyz">inclusive of all taxes</div>
          <div className="review-rating">
            <span>
              <div className="star">
                4.7
                <img src={star} alt="" />
              </div>
            </span>
            <span className="num">15728 ratings and 3491 reviews</span>
          </div>
          <div className="add-btn">
            {inCart ? (
              <Link to={`/cart`}>
                <button>
                  <div className="go">Go To Cart</div>
                  <div>
                    <img src={arrow} alt="" />
                  </div>
                </button>
              </Link>
            ) : (
              <button
                onClick={() => {
                  // setIsClicked(!isClicked);
                  dispatch({
                    type: 'ADD_TO_CART',
                    payload: { product, quantity },
                  });
                }}
              >
                <div>
                  <img src={cart} alt="" />
                </div>
                <div className="add">Add To Cart</div>
              </button>
            )}
          </div>
          <div className="seller">
            <div>
              Seller:<span className="name">Cloudtail India</span>
              <span>
                <div className="rating">
                  4.5
                  <img src={star} alt="" />
                </div>
              </span>
            </div>
            <div className="return">
              <span>
                <img src={refresh} alt="" />
              </span>
              <span>30 Day Return Policy</span>
            </div>
            <div className="cod">
              <span>
                <img src={rupee} alt="" />
              </span>
              <span>Cash on Delivery Available</span>
            </div>
          </div>
          <div className="res">
            <div className="res-title">What Customers Said</div>
            <div>
              <div className="property">
                <div className="hdg">Fit</div>
                <div className="ans">
                  <div className="fill">
                    <div className="ans-fill-1"></div>
                  </div>
                  <div className="caption">As Expected (77%)</div>
                </div>
              </div>
              <div className="property">
                <div className="hdg">Length</div>
                <div className="ans">
                  <div className="fill">
                    <div className="ans-fill-2"></div>
                  </div>
                  <div className="caption">As Expected (84%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
