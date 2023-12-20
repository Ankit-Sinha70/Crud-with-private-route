// import { Box, Button, FormLabel, Heading, Input } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { createProductList, deleteProductList, displayProductList } from "../features/UserService";

// const ProductList = () => {
//   const products: any = useSelector((state: any) => state?.app?.products);
//   console.log(products, "`this is a list of products");
//   const dispatch = useDispatch();
//   const [inputValue, setInputValue] = useState({
//     title:"",
//     image:"",
//     price:"",
//     description:"",
//   });

//   useEffect(() => {
//     dispatch(displayProductList() as any);
//   }, []);

//   const handleChange = (e:any) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e: any) => {
//     console.log(e, "handleSubmit");
//     e.preventDefault();
//     dispatch(createProductList(inputValue) as any);
//   };
//   return (
//     <>
//       <Box sx={{ margin: "50px", width: "40%" }}>
//         <form onSubmit={handleSubmit}>
//           <FormLabel>Title</FormLabel>
//           <Input
//             type="text"
//             name="title"
//             placeholder="Product Name"
//             onChange={handleChange}
//             value={inputValue.title}
//           />
//           <br />
//           <FormLabel>Image</FormLabel>
//           <Input
//             type="text"
//             name="image"
//             placeholder="Product Image"
//             onChange={handleChange}
//             value={inputValue.image}
//           />
//           <br />
//           <FormLabel>Price</FormLabel>
//           <Input
//             type="text"
//             name="price"
//             placeholder="Product Price"
//             onChange={handleChange}
//             value={inputValue.price}
//           />
//           <br />
//           <FormLabel>Description</FormLabel>
//           <Input
//             type="text"
//             name="description"
//             placeholder="Product Description"
//             onChange={handleChange}
//             value={inputValue.description}
//           />
//           <br />
//           <br />
//           <Button colorScheme="green">Add Product</Button>
//         </form>
//       </Box>
//       <Box>
//         <Heading as={"h3"} textAlign={"center"}>
//           Product List Page
//         </Heading>
//       </Box>
//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "20px",
//           margin: "50px",
//         }}
//       >
//         {products?.products?.map((item: any) => {
//           return (
//             <>
//               <Box
//                 sx={{
//                   padding: "10px",
//                   borderRadius: "25px",
//                   boxShadow: " rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
//                 }}
//                 key={item.id}
//               >
//                 <img
//                   style={{ margin: "10px" }}
//                   src={item.thumbnail}
//                   alt={item.thumbnail}
//                   width={"200px"}
//                 />
//                 <Heading as={"h4"}>{item.brand}</Heading>
//                 <Heading as={"h5"} size={"md"}>
//                   {item.title}
//                 </Heading>
//                 <Heading as={"h6"} size={"md"}>
//                   {item.description}
//                 </Heading>
//                 <p>Price:-{item.price}$</p>
//                 <p>Rating:-{item.rating}</p>
//                 <p>Stock:-{item.stock}</p>
//                 <Button
//                   colorScheme="green"
//                   onClick={() => dispatch(deleteProductList(item.id))}
//                 >
//                   Delete
//                 </Button>
//               </Box>
//             </>
//           );
//         })}
//       </Box>
//     </>
//   );
// };

// export default ProductList;
