
import FoodCard from "../components/FoodCard";
import EmptyCart from "../components/EmptyCart";
import Data from "../../public/data.json"
import { useLocalStorage,useTotalStorage } from '../store/useLocalStorageStore';
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import CartItem from "../components/CartItem";
export default function Home() {
    console.log(Data)
    const { total, setTotal } = useTotalStorage();

    const { cartItems } = useLocalStorage()
    console.log(Object.keys(cartItems).length)
    

    useEffect(() => {
        let tempTotal = 0;
        Object.entries(cartItems).forEach(([id, quantity]) => {
            Data.forEach(food => {
                if (food.id === parseInt(id) && parseInt(quantity) > 0) {
                    tempTotal += parseFloat(food.price) * parseFloat(quantity);
                }
            });
        });
        setTotal(tempTotal);
    }, [cartItems]);


    return (
        <>
           
            <Outlet />

            <div className=" bg-rose-100  font-red-hat flex justify-center  min-h-screen min-w-screen">
                <div className="container  p-5 mt-[100px]">

                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className=" col-span-2">
                            <div>
                                <h1 className='text-[35px] font-bold'>Desserts</h1>
                                <div className=" flex flex-wrap justify-evenly gap-5 mt-[50px]">

                                    {
                                        Data.map((foodItem, index) => (
                                            <FoodCard key={index} foodItem={foodItem} />
                                        ))
                                    }

                                </div>

                            </div>
                        </div>
                        <div className=" flex flex-col items-center lg:items-end mt-[50px]">
                            <div>
                                <div className=" min-h-[400px] min-w-[330px] lg:min-w-[450px]  flex flex-col justify-between p-5 rounded-lg max-w-[450px] bg-rose-50">
                                    <p className=" text-[30px] font-bold text-red">Your Cart ({Object.keys(cartItems).length})</p>
                                    <div className=" flex flex-col items-center justify-start min-h-[350px]">
                                        {
                                               total?<><div className=" w-full">

                                               <div>
   
                                                   {
                                                       Object.entries(cartItems).map((value, index) => {
                                                           return Data.map((food, foodIndex) => (
                                                               food.id === parseInt(value[0]) && parseInt(value[1]) > 0 && <CartItem key={foodIndex} id={value[0]} name={food.name} qty={value[1]} price={food.price} />
                                                           ))
                                                       })
                                                   }
                                                   
                                               </div>
                                               <div>
                                                   <div className="flex py-8 items-center justify-between">
                                                       <p className="text-[20px] text-rose-500">Order Total</p>
                                                       <p className=" text-[30px] font-bold text-rose-900">${total}</p>
                                                   </div>
                                                   <div className=" flex bg-rose-100  min-h-[55px] p-5 rounded-lg items-center justify-center">
                                                       <p className="  flex items-center gap-2">
                                                           <span><img src="/assets/images/icon-carbon-neutral.svg" alt="carbon" /></span>
                                                           <span>This is a <span className="font-semibold">carbon-neutral</span> delivery</span>
                                                       </p>
                                                   </div>
   
                                                   <div className=" py-8">
                                                       <Link to='/order-confirm' className="p-5 w-full text center border flex items-center justify-center rounded-[35px] bg-red text-rose-50 font-semibold text-[20px]">
                                                           Confirm Order
                                                       </Link>
                                                   </div>
                                               </div>
                                           </div></>  : <EmptyCart />
                                        }
                                  
                                        

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}