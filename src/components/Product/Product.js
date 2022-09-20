import styles from "./Product.module.scss";
import PropTypes from "prop-types";
import { useState } from "react";
import ProductImage from "../ProductImage/ProductImage";
import ProductForm from "../ProductForm/ProductForm";


const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentSizePrice, setCurrentSizePrice] = useState(
    props.sizes[0].additionalPrice
  );

  function getTotalPrice() {
    return props.basePrice + currentSizePrice;
  }

  const shoppingSummary = {
    name: props.title,
    color: currentColor,
    size: currentSize,
    price: getTotalPrice(),
  }
  return (
    <article className={styles.product}>
      <ProductImage name={props.name} children={props.color} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>
            Price: {getTotalPrice()}$
          </span>
        </header>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size, index) => (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => {setCurrentSize(size.name); setCurrentSizePrice(size.additionalPrice)}}
                    className={size.name === currentSize ? styles.active : null}
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <ProductForm colors={props.colors} action={setCurrentColor} currentColor={currentColor} shoppingSummary={shoppingSummary} onClick={props.onClick}/>
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;
