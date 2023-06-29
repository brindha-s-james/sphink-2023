import { Kids } from '../../models/types'
import { delKidThunk, updateKidDescription } from '../actions/kids'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

function Kid() {
  const kidsArr = useAppSelector((state) => state.kids) as Kids[]
  const dispatch = useAppDispatch()

  const [formData, setFormData] = useState('')
  const [showForm, setShowForm] = useState(false as boolean)

  const handleDelete = (id: number) => {
    dispatch(delKidThunk(id))
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData(event.target.value)
  }

  //update childs description
  const handleSubmit = (event: FormEvent, id: number, formData: string) => {
    event.preventDefault()
    dispatch(updateKidDescription(id, formData))
  }

  return (
    <>
      <div>
        {kidsArr.map((kid) => (
          <div className="kids-container" key={kid.id}>
            <h2>{kid.name}</h2>
            <p>Age:{kid.age}</p>

            <div>
              <img
                className="child-portrait"
                src={kid.photo}
                alt={`${kid.name}`}
              />
              <p>Caption:{kid.description}</p>
              <button onClick={() => handleDelete(kid.id)}>Delete</button>

              {showForm && (
                <form
                  onSubmit={(event) => handleSubmit(event, kid.id, formData)}
                >
                  <label htmlFor="description">Update Description</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    onChange={handleChange}
                  />
                  <input type="submit" value="update" />
                </form>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Kid
