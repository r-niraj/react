import { useContext } from 'react'
import NoteContext from './context/notes/noteContext'

function About() {

    const a = useContext(NoteContext)
  return (
    <div>
        Welcome : {a.name} you are {a.age}
    </div>
  )
}

export default About