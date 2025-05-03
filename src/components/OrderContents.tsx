import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"
import { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    dispatch: React.Dispatch<OrderActions>,
}
    


export default function OrderContents({order, dispatch}: OrderContentsProps) {
  return (
    <div>
        <h2 className=" font-black text-4xl">Consumo</h2>

        <div className="space-y-3 mt-10">
            {
                order.map((item) => (
                    <div 
                        key={item.id} 
                        className=" border-b border-slate-300 pb-2 flex justify-between items-center py-4 first-of-type:border-t"
                    >
                        <div>
                            <p className=" text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className=" font-black ">
                                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>    
                        
                        <button 
                            className=" bg-red-600 text-white px-2 py-1 rounded-md mt-2 hover:bg-red-600"
                            onClick={() => dispatch({type:'remove-item' , payload: { id: item.id }})}
                        >
                            X
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
