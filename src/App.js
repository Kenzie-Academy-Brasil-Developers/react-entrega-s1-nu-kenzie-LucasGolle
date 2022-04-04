import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Form from './components/Form/Form'
import List from './components/List/List';
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import TotalMoney from './components/TotalMoney/TotalMoney'
import Home from './components/homePage/HomePage'

function App() {

  const [listTransactions, setListTransactions] = useState([])

  const [filterList, setFilterList] = useState([])
  
  useEffect(() => {
    setFilterList(listTransactions)
  }, [listTransactions]);

  const addTransitions = (newListTransactions) =>{
    setListTransactions([...listTransactions, newListTransactions])
  }

  const handleTransitions = (item) =>{
    const result = listTransactions.filter((element) => element !== item)
    setListTransactions(result)
  }

  return (
    <>
   <Header></Header>
   <div className='divMain'>
   <div className='divFormMoney'>
   <Form listTransactions={addTransitions} setListTransactions={setListTransactions}></Form>
   {filterList.length > 0 && <TotalMoney listTransactions={listTransactions}></TotalMoney>}
   </div>
   <div className='divListCard'>
    <List listTransactions={listTransactions} setFilterList={setFilterList}></List>
   <Card filterList={filterList} handleTransitions={handleTransitions}></Card>
   </div>
   </div>
   </>
  );
}

export default App;
