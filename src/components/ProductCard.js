import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div class='col-lg-4 col-md-6'>
      <div class='card'>
        <img src={data.images[0]} class='card-img-top' alt='Product Image' />
        <div class='card-body'>
          <h5 class='card-title'>{data.title}</h5>
          <p class='card-text'>{data.description}</p>
          <p class='card-text price'>Rs. {data.price}</p>
          <a href='#' class='btn btn-primary'>
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
