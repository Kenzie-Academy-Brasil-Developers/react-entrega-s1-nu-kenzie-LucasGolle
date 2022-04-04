import './App.css';
import { useState } from 'react';
import Form from './components/Form/Form'
import List from './components/List/List';
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import TotalMoney from './components/TotalMoney/TotalMoney'
import Home from './components/homePage/HomePage'

function App() {
  const [listTransactions, setListTransactions] = useState([])

  const addTransitions = (newListTransactions) =>{
    setListTransactions([...listTransactions, newListTransactions])
  }

  const handleTransitions = (item) =>{
    const result = listTransactions.filter((element) => element !== item)
    setListTransactions(result)
  }

  return (
    <>
    <Home></Home>
   <Header></Header>
   <Form listTransactions={addTransitions} setListTransactions={setListTransactions}></Form>
   <TotalMoney listTransactions={listTransactions}></TotalMoney>
    <List listTransactions={listTransactions} setListTransactions={setListTransactions}></List>
   <Card listTransactions={listTransactions} handleTransitions={handleTransitions}></Card>
   </>
  );
}

export default App;
