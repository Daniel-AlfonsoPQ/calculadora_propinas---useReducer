import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    dispatch: React.Dispatch<OrderActions>
}

export default function OrderTotals({order, tip, dispatch}: OrderTotalsProps) {

    const calculateSubtotal = useMemo(() => 
        order.reduce((acc, item) => acc + (item.price * item.quantity), 0), [order])

    const tipAmount = useMemo(() => 
         calculateSubtotal * tip
        , [order, tip])

    const calculateTotal = useMemo(() => 
        calculateSubtotal + tipAmount
      , [order, tip]);

    
  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propinas:</h2>
            <p>Subtotal a pagar: {''}
                <span className=" font-bold">{formatCurrency(calculateSubtotal)}</span>
            </p>

            <p>Propina: {''}
                <span className=" font-bold">{formatCurrency(tipAmount)}</span>
            </p>

            <p>Total a pagar: {''}
                <span className=" font-bold">{formatCurrency(calculateTotal)}</span>
            </p>
        </div>

        <button
            className=" bg-teal-400 w-full p-3 rounded-lg font-bold text-white hover:bg-teal-500 transition-colors disabled:opacity-10 cursor-pointer"
            disabled={calculateTotal === 0}
            onClick={() => dispatch({type: 'place-order'})}
        >
            Guardar Orden
        </button>
    </>
  )
}
