import Header from './components/Header'
import TravelCards from './components/TravelCards'
import data from './data.js'

function App() {
  const card = data.map(e => {
    return (
      < TravelCards
        key={e.index}
        {...e}
      />
    )
  })

  return (
    <div className='container'>
      < Header />
      {card}

    </div>
  )
}

export default App
