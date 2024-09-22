import './App.css';
import {Header} from './components/Header';
import {Card} from './components/Card';
import {superheroes} from './superheroes';

function App() {
  return (
    <div className='cards-header'>
      <Header/>
      <div className='cards-container'>
        {superheroes.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            universe={card.universe}
            alterego={card.alterego}
            occupation={card.occupation}
            friends={card.friends}
            superpowers={card.superpowers}
            url={card.url}
            info={card.info}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
