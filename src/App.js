import React from 'react'
import Quote from './Quote'
import data from './data'
import lodash from 'lodash'

function App() {

  // const currentQuote = React.useMemo(() => lodash.shuffle(data), [quote])
  const [quotes, setQuotes] = React.useState(lodash.shuffle(data))

  function handleClick() {
    setQuotes(lodash.shuffle(data))
  }

  return (
    <div className='page'> 
    <nav>    
      <h1>Quoter</h1>
      <h6>A melhor seleção de aforismos da Internet.</h6>
    </nav>
    <main>
      <Quote questionData={quotes[0]} />
    </main>
    <button onClick={handleClick}>Novo Aforismo</button>
    </div>
  );
}

export default App;
