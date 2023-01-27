
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Container from '@mui/material/Container'
import Header from './components/header/Header';
import Defination from './components/definations/Defination';

function App() {

  const [word, setWord] = useState("plane");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      console.log(data.data);
      setMeanings(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line 
  }, [word, category])

  return (
    <div className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container maxWidth="md"
        style={{ display: "flex",flexDirection:"column", height: "100vh" }}
      >
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} />
        {meanings && (
          <Defination word={word} meanings={meanings} category={category}/>
        )}
      </Container>

    </div>
  );
}

export default App;
