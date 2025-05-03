import { OrderActions } from "../reducers/order-reducer"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type TipPercentageFormProps = {
    dispatch: React.Dispatch<OrderActions>
    tip: number
}

export default function TipPercentageForm({ dispatch, tip }: TipPercentageFormProps) {

  return (
    <div>
        <h3 className="font-black text-2xl">Propina: </h3>

        <form>
            <div className="grid grid-cols-2 gap-3 mt-5">
                {tipOptions.map(option => (
                    <div key={option.id}>
                        <input 
                            type="radio" 
                            name="tip" 
                            id={option.id} 
                            value={option.value} 
                            className="hidden peer" 
                            onChange={e => dispatch({type: 'add-tip', payload: { tip: Number(e.target.value)}})}
                            checked={tip === option.value}
                        />
                        <label 
                            htmlFor={option.id} 
                            className=" border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 rounded-xl cursor-pointer peer-checked:bg-teal-200"
                        >
                            <p>
                                {option.label}
                            </p>
                            
                        </label>
                    </div>
                ))}
            </div>
        </form>
    </div>
  )
}
