import { Button, ButtonGroup, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createProductList } from "../features/UserService";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface ProductListProps {
  cart: any[]; 
  setCart: React.Dispatch<React.SetStateAction<any[]>>; 
}

const ProductList: React.FC<ProductListProps> = ({ cart, setCart }) => {
  const [posts, setPosts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data: Product[]) => setPosts(data))
      .catch((error) => console.log(error));
    // dispatch(createProductList(posts))

  }, []);

  const handleDelete = (item: Product) => {
    const updatedItem = posts.filter((data: Product) => data.id !== item.id);
    setPosts(updatedItem);
  };

  const handleAddToCart = (item: Product) => {
    console.log(item);
    const newItem = { ...item, quantity: 1 };
    setCart((prevCart) => [...prevCart, newItem]);
  };

  return (
    <>
      <div>
        <Heading as="h3">Product Page.</Heading>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {posts.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
                borderRadius: "15px",
              }}
            >
              <img src={item.image} alt={item.title} width="100px" />
              <Heading as="h4" size="sm">
                {item.title}
              </Heading>
              <Heading as="h5" size="xs">{item.description}</Heading>
              <Heading as="h4" size="sm">
                Rs.{item.price}
              </Heading>
              <ButtonGroup sx={{ gap: "4" }}>
                <Button
                  colorScheme="teal"
                  size={"sm"}
                  onClick={() => handleDelete(item)}
                >
                  Delete Product
                </Button>
                <Button
                  colorScheme="teal"
                  size={"sm"}
                  onClick={() => handleAddToCart(item)}
                >
                  Add To Cart
                </Button>
              </ButtonGroup>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
