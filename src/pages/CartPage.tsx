import { Button, ButtonGroup, Heading } from "@chakra-ui/react";
import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { Divider } from '@chakra-ui/react'


interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  totalPrice: number;
  quantity: number;
}

interface CartPageProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartPage: React.FC<CartPageProps> = ({ cart, setCart }) => {
  const handleClick = (item: any) => {
    const updatedData = cart?.filter((data: any) => data.id !== item.id);
    setCart(updatedData);
  };

  const handleAddItem = (userId: any) => {
    const updatedData = cart?.map((data: any) => {
      if (data.id === userId) {
        data.quantity += 1;
        data.totalPrice = data.quantity * data.price;
      }
      return data;
    });
    setCart(updatedData);
  };

  const handleMinus = (userId: any) => {
    const updatedData = cart?.map((data: any) => {
      if (data.id === userId) {
        data.quantity = Math.max(1, data.quantity - 1);
        data.totalPrice = data.quantity * data.price;
      }
      return data;
    });
    setCart(updatedData);
  };

  const calculateTotalPrice = () => {
    const totalPrice = cart?.reduce((total, item): any => {
      if (item.totalPrice) {
        return total + item.totalPrice;
      }
      return total + item.price * item.quantity;
    }, 0);
    return totalPrice.toFixed(2);
  };
  return (
    <>
      {cart?.length === 0 ? (
        <div
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "15px",
            textAlign: "center",
            justifyContent: "center"
          }}
        >
         
          <FaOpencart style={{fontSize:"300px", color:"gray", width:"100%"}}/>
          <Divider style={{width:"70%",margin:"auto", color:"ActiveBorder"}} />
          <Heading as="h4" size="xl">
           Your cart is empty !
          </Heading>
        </div>
      ) : (
        <>
        <div style={{display:"flex", flexDirection:"row",gap:"10px", width:"100%"}}>
        
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  borderRadius: "15px",
                  margin: "20px",
                  padding: "10px",
                  width: "70%",
                  boxShadow:
                    " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <img src={item.image} alt={item.title} width={"100px"} />
                  Qty: {item.quantity}
                  <ButtonGroup>
                    <Button
                      colorScheme="red"
                      size="sm"
                      onClick={() => handleClick(item)}
                    >
                      <FaRegTrashAlt />
                    </Button>
                    <Button
                      colorScheme="green"
                      size="sm"
                      onClick={() => handleAddItem(item.id)}
                    >
                      <IoAddOutline />
                    </Button>
                    <Button
                      colorScheme="red"
                      size="sm"
                      onClick={() => handleMinus(item.id)}
                    >
                      <FiMinus />
                    </Button>
                  </ButtonGroup>
                </div>
                <span>
                  {item.title}
                </span>
                <span>
                  $.{item.price}
                </span>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  Total Price:
                  <strong>${item.totalPrice ? item.totalPrice : item.price}</strong>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              width: "30%",
              padding: "10px",
              margin: "20px",
              borderRadius: "15px",
            }}
          >
            <Heading as="h4" size="sm">
              Cart Total = {calculateTotalPrice()}
            </Heading>
          </div>
        </div>
        </>
      )}
    </>
  );
};

export default CartPage;
