import { Link } from "react-router-dom";
import { shirts } from "../data/db.json";

export const Shirts = () => {
  const shirtsfive = [shirts[0], shirts[1], shirts[2], shirts[3], shirts[4]];
  return (
    <div>
      <h1 className="head" id="shirts">Shirts</h1>
      <div className="cardone main-Content">
        {shirtsfive.map((product) => (
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
        
      </div>
    </div>
  );
};
