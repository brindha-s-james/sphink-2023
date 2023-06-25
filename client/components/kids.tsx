import { Kids} from '../../models/types'
import { useAppSelector} from '../hooks/hooks'


function Kid() {
  const kidsArr = useAppSelector((state) => state.kids) as Kids[]

  return (
    <>
      <div>
        {kidsArr.map((kid) => (
          <div className="kids-container" key={kid.id}>
            <h2>{kid.name}</h2>
            <p>Age:{kid.age}</p>

            <div className="child-portrait">
              <img
                src="{`../../Public/images/${kid.photo}`}"
                alt="{kid.name}"
              />
            </div>

            <p>
              <p>caption:</p>
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Kid
