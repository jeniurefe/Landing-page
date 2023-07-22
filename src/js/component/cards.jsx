import React from "react";

const Cards = () => {
    return (
        <div className="card container-fluid justify-content-center" style={{width: "18rem"}}>
            <img src="https://th.bing.com/th/id/OIP.ta9jURVXO6O7DXFEn9LD4gHaE8?pid=ImgDet&rs=1" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>

        </div>

    )
}
export default Cards;