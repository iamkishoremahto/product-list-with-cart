
import ConfirmCartItem from './ConfirmCartItem'
import { useLocalStorage,useTotalStorage } from '../store/useLocalStorageStore';
import Data from "../../public/data.json"
import { Link } from 'react-router-dom';


export default function OrderConfirm() {

    const { total, setTotal } = useTotalStorage();
   

    const { cartItems, setCartItem } = useLocalStorage()

    const resetCart = () =>{
        setCartItem({})
        setTotal(0)
    
        
    }

 
    return (
        <div className=" fixed   flex items-end  justify-center md:items-center z-50  h-full w-full bg-rose-900 bg-opacity-30">
            <div className=" px-11  py-8 md:min-w-[600px] min-w-full  min-h-[600px] bg-rose-50 rounded-lg ">
                <div>
                    <div>
                        <img src="/assets/images/icon-order-confirmed.svg" alt="confirm" />
                        <p className="lg:text-[45px] text-[25px] font-bold">Order Confirmed</p>
                        <p className=" lg:text-[18px] text-[14px] text-rose-500">We hope you enjoy your food!</p>
                    </div>
                    <div className='my-8'>
                        <div className="bg-rose-100  rounded-lg flex flex-col gap-5 p-5">
                            <div className='flex flex-col gap-5 lg:p-3 overflow-scroll no-scrollbar max-h-[230px]'>
                            
                            {
        Object.entries(cartItems).map((value, index) => {
            return Data.map((food, foodIndex) => (
                food.id === parseInt(value[0]) && parseInt(value[1]) > 0 && <ConfirmCartItem key={foodIndex} id={value[0]} name={food.name} qty={value[1]} price={food.price} thumbnail = {food.image.thumbnail} />
            ))
        })
    }
                            
                           
                            </div>
                            <div>
                                <div className='flex justify-between items-center py-5'>
                                    <p className='lg:text-[20px] text-[16px] text-rose-500'>Order Total</p>
                                    <p className=' lg:text-[35px] text-[20px] font-bold'>${total}</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='mt-11'>
                            <Link to='/' replace={true} onClick={resetCart} className=' bg-red w-full lg:h-[80px] h-[50px] flex justify-center items-center rounded-[55px] text-[22px] font-semibold text-rose-50'>Start New Order</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}