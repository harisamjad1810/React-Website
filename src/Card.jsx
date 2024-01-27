import React from 'react'
import web from "../src/images/img.webp";

function Card(props) {
  return (
    <>

     <div className="col-md-4 col-10 mx-auto">
        <div className="card">
            <img src={props.imgsrc} className="card-img-top" alt="image" />
            <div className="card-body">
            <h5 className='card-title fw-bold'>{props.title}</h5>
                <p className='card-text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit
                </p>
                <a href="" className='btn btn-primary'>
                    Checkout
                </a>
            </div>
        </div>
     </div>

    </>
  )
}

export default Card
