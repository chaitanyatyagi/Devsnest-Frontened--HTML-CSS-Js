const FoodCard=(props)=>{
    const {foodName,cal}=props;
    return(
        <div className="card">
            <div className="title">
                {foodName}
            </div>
            <div className="content">
                You have consumed {cal} cals today
            </div>
        </div>
    )
}

export default FoodCard;