import { useState } from "react";
import AddminAddProduct from "../components/AddminAddProduct";
import AllProductsPage from "./AllProductsPage";
const AllProduct = ()=>{

    const [isOpen,setIsOpen]= useState(false);

    return(


        <div className="">
            All products
          <div className=" flex justify-end">  <button className="bg-blue-950 text-white p-3 rounded-md">Add New Product</button></div>
            <AllProductsPage/>
        </div>
    )
}
export default AllProduct;