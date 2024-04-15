import { Button, ButtonGroup, Heading } from "@chakra-ui/react";

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
      <div
        style={{
          boxShadow:
            " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            width:"30%",
            padding:"10px",
            margin:"20px",
            borderRadius:"15px",
          
        }}
      >
        <Heading as="h4" size="sm">
          Cart Page..
        </Heading>

        <Heading as="h4" size="sm">
          Cart Total = {calculateTotalPrice()}
        </Heading>
      </div>
      <div>
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              borderRadius: "15px",
              margin: "20px",
              padding: "10px",
              width: "30%",
              boxShadow:
                " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <img src={item.image} alt={item.title} width={"100px"} />
            <Heading as="h4" size="sm">
              {item.title}
            </Heading>
            <Heading as="h4" size="sm">
              Rs.{item.price}
            </Heading>
            Total : Rs. {item.totalPrice ? item.totalPrice : item.price}
            <ButtonGroup>
              <Button
                colorScheme="red"
                size="sm"
                onClick={() => handleClick(item)}
              >
                Remove Item
              </Button>
              <Button
                colorScheme="green"
                size="sm"
                onClick={() => handleAddItem(item.id)}
              >
                Add Item
              </Button>
              <Button
                colorScheme="red"
                size="sm"
                onClick={() => handleMinus(item.id)}
              >
                Minus Item
              </Button>
            </ButtonGroup>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartPage;
