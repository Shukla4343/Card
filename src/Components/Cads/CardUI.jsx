import React from "react";
import img2 from "../assets/img1.jpg";

const Card = props=>{
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src="{./assets./img1.jpg}" alt="Image does not appear" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">
                    <p className="card-text text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis assumenda rem 
                        nam quo nulla harum sunt minus perspiciatis, necessitatibus suscipit deleniti recusandae sit! Commodi, asperiores. Beatae earum alias adipisci cum est dolorem qui excepturi illum consequatur 
                        harum nobis dolorum voluptatum illo nemo repellendus distinctio aperiam impedit aliquam perspiciatis, porro quos!
                    </p>
                    <a href="#" className="btn btn-outline-success" >go anywhere</a>
                </h4>
            </div>
        </div>
    )
}
export default Card;