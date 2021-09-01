export const Slider = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a href="#shirts">
            <img
              src="https://images-ext-1.discordapp.net/external/5C-IB4zb2juKb-K9hP8pGXFDyWzw3g5_BWlCaFyMQDE/https/assets.myntassets.com/f_webp%2Cw_980%2Cc_limit%2Cfl_progressive%2Cdpr_2.0/assets/images/2021/8/19/e93e4bd7-7a60-4fa9-87cd-54847c8fec481629381866851-Pre-Buzz-Main-Banner_Starts-Midnight.gif?width=1025&height=269"
              className="d-block w-100 "
              alt="..."
            />
          </a>
        </div>
        <div className="carousel-item">
          <a href="#shoes">
            <img
              src="https://images-ext-1.discordapp.net/external/VY2KRsTOvGRXXL8PTGLQ4yXz_aO4WQxkyVDoSOLt8sg/https/assets.myntassets.com/f_webp%2Cw_980%2Cc_limit%2Cfl_progressive%2Cdpr_2.0/assets/images/2021/8/18/80511a52-8ad2-4d9c-817b-bceab6f775151629305477852-Sports-Shoes_Desk.jpg?width=1025&height=269"
              className="d-block w-100"
              alt="..."
            />
          </a>
        </div>
        <div className="carousel-item">
          <a href="#tshirts">
            <img
              src="https://images-ext-1.discordapp.net/external/c7yWU5i01gsvjUCgA2VYYh47mbQQBdAfCyGDNaBH_74/https/assets.myntassets.com/f_webp%2Cw_980%2Cc_limit%2Cfl_progressive%2Cdpr_2.0/assets/images/2021/8/18/c0bd3911-7cc0-4cd2-885a-1e3f0337580e1629305477834-T-Shirts_Desk.jpg?width=1025&height=269"
              className="d-block w-100"
              alt="..."
            />
          </a>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
