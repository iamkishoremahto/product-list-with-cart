

export default function ConfirmCartItem({id, name, qty, price ,thumbnail}){
    return (
        <div className="flex items-center  justify-between">
                                <div className="flex items-center gap-2">
                                <img className="w-[60px] rounded-lg" src={thumbnail} alt="food" />
                                <div>
                                    <p className=" font-semibold">{name}</p>
                                    <p className=" font-semibold"><span className=" text-red">{qty}x</span> <span className=" text-rose-300">@ ${price}</span></p>
                                </div>
                                </div>
                                
                                <div>
                                    <p className="text-[20px]">${price*qty}</p>
                                </div>
                            </div>
    )
}