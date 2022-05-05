import './App.css'
import StudCard from './StudCard'
import StudCardClass from './StudCardClass'
import MinMax from './MinMax'
import MinMaxClass from './MinMaxClass'

function App() {
  return (
    <div className="App">
      <StudCard text="Студент" name="Олег" />
      <StudCard text="Препод" name="Евгений" />
      <StudCard text="Студент" name="Кирилл" />
      <StudCardClass />

      <MinMax max={10} min={1} />
      <MinMaxClass />
    </div>
  )
}

// <StudCard name={}/> --> React.createElement(StudCard, {})

// function StudCard({ text }) {
//   return (
//     <>
//       <hr />
//       <div className="card">{text}</div>
//       <hr />
//     </>
//   )
// }

export default App
