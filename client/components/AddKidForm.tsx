import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { KidsData } from '../../models/types'
import { addKidThunk } from '../actions/kids'


function KidForm() {
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({} as KidsData)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    dispatch(addKidThunk()) //do i need an argument?
  }

  return (
    <>

    <div className='kids-container'>
    <h2>Enter a New Child</h2>
      {/* childs name */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={handleChange} />

        {/* childs age */}
       <br /> <label htmlFor="age">Age:</label>
        <input type="text" id="age" onChange={handleChange} />

        {/* childs description */}
        <br />
        <label htmlFor="description">Details:</label>
        <input type="text" id="description" onChange={handleChange} />

        <button type="submit">SUBMIT</button>
      </form>
      </div>
      
    </>
  )
}

export default KidForm
