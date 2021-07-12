const Card = () =>{
    const Image = () =>{
        return(
            <img src = "https://i.imgflip.com/2kuh6f.jpg" alt=""/>
        );
    };
    return (
        <div className="Card">
            <Image />
            <h2>React Card</h2>
            <p>This is a card.</p>
        </div>
    );
};

export default Card;