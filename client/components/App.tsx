import kid from './kids'
import { Kids, KidsData } from '../../models/types'
import Kid from './kids'
import { useAppDispatch } from '../hooks/hooks'
import { useEffect } from 'react'
import { setKidsThunk } from '../actions/kids'
import Header from './Header'
import AddKidForm from './AddKidForm'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setKidsThunk())
  }, [dispatch])
  return (
    <>
      <div>
        <Header />
      </div>
      <section className="main">
        <Kid />
      </section>
      <AddKidForm />
    </>
  )
}
export default App
