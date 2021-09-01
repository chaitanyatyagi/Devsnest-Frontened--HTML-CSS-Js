import { kids } from "../data/db.json";
import { Link } from "react-router-dom";

const KidsSection = () => {
  return (
    <div className="kids">
      <div className="main-Content">
        {kids.map((product) => (
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

export default KidsSection;
