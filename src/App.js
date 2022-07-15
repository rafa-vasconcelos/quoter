import React from "react";
import Quote from "./Components/Quote";
import data from "./data/data";
import lodash from "lodash";

const App = () => {
  const [quotes, setQuotes] = React.useState(lodash.shuffle(data));

  const handleClick = () => {
    setQuotes(lodash.shuffle(data));
  };

  return (
    <div className="page">
      <nav>
        <h1>Quoter</h1>
        <h6>A melhor seleção de aforismos da Internet.</h6>
      </nav>
      <main>
        <Quote
          questionData={
            quotes[0] /* any index could be used here since the source array was shuffled
            qualquer index poderia ser usado aqui, uma vez que a array foi embaralhada */
          }
        />
      </main>
      <button onClick={handleClick}>Novo Aforismo</button>
    </div>
  );
};

export default App;
