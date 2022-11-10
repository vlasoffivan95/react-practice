import React, {Component} from "react";
function Product(props) {
  const {name, price, description, quantity} = props;
  return (
    <>
    <div>
      <h1>{name ? name : "default"}</h1>
      <h2>{price || '0$'}</h2>
      <h2>{description || 'no description'}</h2>
      <h3>{quantity || 'not found'}</h3>
    </div>
  </>
  );
}

class ProductClass extends Component {
  render() {
    const {name, price, description, quantity} = this.props;
    return (
      <>
        <div>
          <h1>{name ? name : "default"}</h1>
          <h2>{price || '0$'}</h2>
          <h2>{description || 'no description'}</h2>
          <h3>{quantity || 'not found'}</h3>
        </div>
      </>
    );
  }
}

// export default Product;
export default ProductClass;
