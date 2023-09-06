import { useState } from "react";
import { ProductCard, ProductImage } from "../components";
import { ProductCounter } from "../components/ProductCounter";
import { Products, onChangeArgs } from "../interfaces/interfaces";
import { ContainerShoppingCard, SoppingCard } from "../styleComponents";
// import stylesImage from "../styles/product-styles.css";
import "../styles/product-styles.css";
// control props
const product = {
  id: "1",
  title: "computadora",
  image: "/computadora.png",
};

const product2 = {
  id: "2",
  title: "laptop",
  image: "/laptop.jpeg",
};

const productsAll: Products[] = [product, product2];

interface ProductInCardCounter extends Products {
  count: number;
}

export const ShopingCard = () => {
  const [shoppingCard, setShoppingCard] = useState<{
    [key: string]: ProductInCardCounter;
  }>({
    // "id": {...product, count: 0}
  });

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCard((currentValue) => {
      const productInCartVariable: ProductInCardCounter = currentValue[
        product.id
      ] || { ...product, count: 0 };

      if (Math.max(productInCartVariable.count + count, 0) > 0) {
        productInCartVariable.count += count;
        return { ...currentValue, [product.id]: productInCartVariable };
      }
      const { [product.id]: toDelete, ...result } = currentValue;

      return { ...result };
    });

    // shoppingCard[product.id] = { ...product, count };

    // setShoppingCard((currentValue) => {
    //   if (count === 0) {
    //     const { [product.id]: toDelete, ...rest } = currentValue;
    //     return { ...rest };
    //   }
    //   return { ...currentValue, [product.id]: { ...product, count } };
    // });

    console.log("shoppingCard: ", shoppingCard);
  };

  // <input value={} onChange={}></input>

  return (
    <ContainerShoppingCard>
      {productsAll.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            onChange={onProductCountChange}
            value={shoppingCard[product.id]?.count || 0}
          >
            <ProductCard.Title title="new form property" />
            <ProductCard.Image className="product-image" />
            <ProductCard.Button />
          </ProductCard>
        );
      })}

      {/* <ProductCard product={product}>
        <ProductImage />
        <ProductTitle className="product-title" title="my tittle" />
        <ProductCounter />
      </ProductCard> */}

      <SoppingCard>
        {Object.entries(shoppingCard).map(([key, product]) => {
          return (
            <ProductCard
              key={key}
              product={product}
              style={{ width: 100, height: 100, paddingBottom: 50 }}
              onChange={onProductCountChange}
              value={product.count}
            >
              <ProductImage />
              <ProductCounter />
            </ProductCard>
          );
        })}
      </SoppingCard>
      <pre>{JSON.stringify(shoppingCard, null, 2)}</pre>
    </ContainerShoppingCard>
  );
};
