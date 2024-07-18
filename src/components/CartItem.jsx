
import { IoCloseCircleOutline } from "react-icons/io5";
import { useLocalStorage } from '../store/useLocalStorageStore';


export default function CartItem({ id, name, qty, price}){
    const { cartItems, setCartItem } = useLocalStorage()


    const handleRemoveItem = (id) =>{
        let newCartItem = Object.fromEntries(
            Object.entries(cartItems).filter(([key,value]) => key !== id)
        )
        setCartItem(newCartItem)
        
       
        
    }
    return (
        <div className=" border-b border-rose-100 group hover:border-rose-300 cursor-pointer transition-all  p-2 flex w-full items-center">
                                            <div className=" w-full p-2">
                                                <p className=" mb-2 font-bold text-[18px] text-rose-900">{ name }</p>
                                                <div className="flex text-[16px] font-semibold gap-2 items-center">
                                                    <p className="text-red">{qty}x</p>
                                                    <p className=" text-rose-300">@ ${price}</p>
                                                    <p className="text-rose-500">${qty * price}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <button onClick={() =>(handleRemoveItem(id))} className=" text-[30px] text-rose-400 group-hover:text-rose-900 transition-all">
                                                    <IoCloseCircleOutline />
                                                </button>
                                            </div>
                                        </div>
    )
}