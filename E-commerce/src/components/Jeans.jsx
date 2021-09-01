import { jeans } from "../data/db.json";
import { Link } from "react-router-dom";

export const Jeans = () => {
  return (
    <div>
      <h1 className="head">Jeans</h1>
      <div className="cardone main-Content">
        {jeans.map((product) => (
          <div className="inner CC">
            <Link
              to={`/product/${parseInt(product.id)}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="content">
                <img src={product.url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title" style={{ textAlign: "start" }}>
                    {product.title}
                  </h4>
                  <p className="brand-name">{product.description}</p>
                  <h6 className="brand-name">Rs. {product.price}</h6>
                  
                </div>
              </div>
            </Link>
          </div>
        ))}
        {/* <div className="inner">
          <div className="content">
            <img
              src={jeans[0].url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title" style={{textAlign:"start"}}>{jeans[0].title}</h4>
              <h6 className="card-text">Rs. {jeans[0].price}</h6>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <img
              src={jeans[1].url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title" style={{textAlign:"start"}}>{jeans[1].title}</h4>
              <h6 className="card-text">Rs. {jeans[1].price}</h6>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <img
              src={jeans[2].url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title" style={{textAlign:"start"}}>{jeans[2].title}</h4>
              <h6 className="card-text">Rs. {jeans[2].price}</h6>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <img
              src={jeans[3].url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title" style={{textAlign:"start"}}>{jeans[3].title}</h4>
              <h6 className="card-text">Rs. {jeans[3].price}</h6>
            </div>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <img
              src={jeans[4].url}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title" style={{textAlign:"start"}}>{jeans[4].title}</h4>
              <h6 className="card-text">Rs. {jeans[4].price}</h6>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
