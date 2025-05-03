import { MenuItem, OrderItem } from "../types";


// Tipo de las acciones que se pueden despachar
export type OrderActions = 
    { type : 'add-item' , payload : { item : MenuItem } } |
    { type : 'remove-item', payload : { id : MenuItem['id'] } } |
    { type : 'place-order' } |
    { type : 'add-tip', payload : { tip : number } }

// Definición del tipo del estado inicial
export type OrderState = {
    order: OrderItem[],
    tip: number
}

// Definición del estado inicial
export const initialState : OrderState = {
    order: [],
    tip: 0
}

// Función reductora que maneja las acciones y actualiza el estado
export const orderReducer = (
    state: OrderState = initialState, 
    action: OrderActions) => {

        if(action.type === 'add-item') {

            const existingItem = state.order.find(orderItem => orderItem.id === action.payload.item.id);
            let updatedOrder : OrderItem[] = []
            if (existingItem) {
                updatedOrder = state.order.map(orderItem =>
                    orderItem.id === action.payload.item.id ? 
                    { ...orderItem, quantity: orderItem.quantity + 1 } : 
                    orderItem
                )
            }else{
                updatedOrder = [...state.order, { ...action.payload.item, quantity: 1 }];
            }
            return {
                ...state,
                order: updatedOrder
            }
        }

        if(action.type === 'remove-item') {
            const updatedOrder = state.order.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                order: updatedOrder
            }
        }

        if(action.type === 'place-order') {

            return {
                ...state,
                order: [],
                tip: 0
            }
        }

        if(action.type === 'add-tip') {
            const tip = action.payload.tip
            return {
                ...state,
                tip: tip
            }
        }

        return state
    }