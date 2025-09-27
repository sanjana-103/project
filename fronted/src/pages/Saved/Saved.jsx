import { useContext, useEffect, useState } from "react";
import { FoodContext } from "../../context/FoodContext";
import { MdDelete } from "react-icons/md";
import "./Saved.css";

const Saved = () => {
  const { products, savedItems, updateQuantity } = useContext(FoodContext);
  const [saveData, setSaveData] = useState([]);

  useEffect(() => {
    if (products.length === 0) return;

    if (!savedItems || typeof savedItems !== "object") {
      setSaveData([]);
      return;
    }

    const tempData = Object.entries(savedItems)
      .filter(([, quantity]) => quantity > 0)
      .map(([itemId, quantity]) => ({
        _id: itemId,
        quantity,
      }));

    setSaveData(tempData);
  }, [savedItems, products]);

  return (
    <>
      <div><h2>Saved Items</h2></div>
      <div className="checkout-container">
        {saveData.length === 0 ? (
          <p>No saved items found.</p>
        ) : (
          saveData.map((items, index) => {
            const productData = products.find(product => product._id === items._id);
            if (!productData) {
              return null;
            }

            return (
              <div className="saved-item" key={index}>
                <div>
                  <img
                    src={productData.image}
                    alt={productData.name}
                    className="product-saved-image"
                  />
                  <div className="product-details-saved">
                    <p className="card-product-name">{productData.name}</p>
                  </div>
                </div>

                <input
                  type="number"
                  min={1}
                  defaultValue={items.quantity}
                  className="quantity-input"
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(items._id, parseInt(e.target.value))
                  }
                />

                <MdDelete
                  className="delete-icon"
                  onClick={() => updateQuantity(items._id, 0)}
                />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Saved;
