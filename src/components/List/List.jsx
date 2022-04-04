import "./styles.css"

const List = ({ listTransactions, setListTransactions }) => {


  const filtrarDespesas = () =>{
    setListTransactions(listTransactions.filter(({type}) => type === "Despesa"))
  }

  const filtrarEntradas = () =>{
    setListTransactions(listTransactions.filter(({type}) => type === "Entrada"))
  }

  return (
    <>
      <div className="divResumo">
        <h1 className="titleList">Resumo financeiro</h1>
      <div className="divList">
        <button onClick={() => listTransactions} className="allButton">Todos</button>
        <button onClick={() => filtrarDespesas} className="inButton">Entradas</button>
        <button onClick={() => filtrarEntradas} className="outButton">Despesas</button>
      </div>
      </div>
    </>
  );
};

export default List;
