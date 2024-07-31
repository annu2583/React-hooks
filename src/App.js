// import logo from './logo.svg';
import { createContext, useContext } from 'react';
import './App.css';
import ChildA from './components/ChildA';

const App=()=> {
  const dataFirst = createContext()
  console.log(dataFirst);
  return (
    <>
    <dataFirst.Provider value={"Hey am here"}>
    <ChildA/>
    </dataFirst.Provider>
    </>
  )
}

export default App;
export {dataFirst};