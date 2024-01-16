import React,{useState} from 'react'

export default function ChangeComment() {

    const[comment,setComment]=useState('')
function handleComment(event){
setComment(event.target.value)
}
  return (
    <div>
<textarea placeholder='enter any special instructions that you have' className='textBox' value={comment} onChange={handleComment}></textarea>

<p><i>Comments: </i>{comment}</p>
    </div>
  )
}
