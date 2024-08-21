
import './App.css'
import Navbar from './componets/Navbar'
import Item from './componets/Item'
import Cart from './componets/Cart'

function App() {
  return (
    <>
      <Navbar/>
      <Item name="pav bhaji" price={80} id={1}/>
      <Item name="barger" price={35} id={2}/>
      <Item name="bhaji" price={30} id={3}/>
      <Cart />
    </>
  );
}

export default App;
