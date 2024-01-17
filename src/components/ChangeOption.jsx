import {useState} from 'react'

export default function ChangeOption() {
    const[payment,setPayment]=useState('')
function handlePayment(event){
    setPayment(event.target.value)

}
  return (
    <div>
<select value={payment} onChange={handlePayment}>
    <option value="">Select an option</option>
    <option value="MasterCard">MasterCard</option>
    <option value="Visa">Visa</option>
    <option value="GiftCard">GiftCard</option>
</select>

<p>Payment Method: {payment}</p>
    </div>
  )
}
