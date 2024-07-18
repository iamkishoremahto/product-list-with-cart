

import { useLocalStorage } from '../store/useLocalStorageStore';

export default function FoodCard({ foodItem }) {

    const { cartItems ,setCartItem } = useLocalStorage()

 



    const handleQtyInc = () =>{
       

        const updatedCartItems = { ...cartItems, [foodItem.id]: cartItems[foodItem.id]?(cartItems[foodItem.id] +1):1};
        setCartItem(updatedCartItems);
    }

    const handleQtyDesc = () =>{
        const updatedCartItems = { ...cartItems, [foodItem.id]: cartItems[foodItem.id]?(cartItems[foodItem.id] - 1):1};
        setCartItem(updatedCartItems);
    }
   
    if(foodItem){
        return (
            <div>
                <div className=" flex flex-col gap-8">
                    <div className=" relative">
                        <img className={`max-w-[300px] rounded-lg object-cover ${cartItems[foodItem.id] && 'border border-red'}`} src={ foodItem.image.desktop } alt="" />
                        {
                            cartItems[foodItem.id] ?
                                <div className=' absolute translate-x-[35%] translate-y-[-50%]  text-rose-50 flex justify-between px-3 items-center rounded-[35px] bg-red min-h-[50px] min-w-[180px]'>
                                    <button onClick={handleQtyDesc} className = 'border w-[20px] h-[20px] rounded-full flex items-center justify-center'>
                                        -
                                    </button>
                                    <p className='font-semibold'>{cartItems[foodItem.id]}</p>
                                    <button onClick={handleQtyInc} className = 'border w-[20px] h-[20px] rounded-full flex items-center justify-center'>
                                        +
                                    </button>
                                </div>
                                :
    
    
                                <button onClick={handleQtyInc} className="flex group hover:bg-red transition-all hover:text-rose-50 absolute font-semibold bg-rose-100 border-red translate-x-[33%] translate-y-[-50%]   items-center gap-2 border py-4 px-8 rounded-[45px]"><span>
    
                                    <svg xmlns="http://www.w3.org/2000/svg" className=" group-hover:stroke-rose-50  transition-all" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" /><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z" /></clipPath></defs></svg>
    
                                </span><span className=" group-hover:text-rose-50">Add to Cart</span>
                                </button>
    
                        }
    
    
                    </div>
                    <div>
                        <div>
                            <p className=" text-rose-500 text-[18px]">{ foodItem.category }</p>
                            <p className=" text-rose-900 text-[20px] font-semibold">{ foodItem.name }</p>
                            <p className=" text-red text-[20px] font-semibold">${ foodItem.price }</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    
}