import { useDispatch} from "react-redux";

import {Link} from "react-router-dom"


const Search = () => {
    const dispatch = useDispatch()
    let val = "";


    return (
      <div className="search-container">
        <input
          type="text"
                onChange={(e) => {
                    val = e.target.value.toLowerCase();
                    console.log(val);

                    dispatch({
                        type: "SEARCH",
                        payload: val,
                      });
                    
                }}
        />
        <Link to="/search">
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </Link>
      </div>
    );
}

export default Search;