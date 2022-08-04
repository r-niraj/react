import About from "./About"
import NoteState from "./context/notes/NoteState"

function App() {
  return (
    <div>
      <NoteState>
        <About/>
      </NoteState>
    </div>
  )
}

export default App