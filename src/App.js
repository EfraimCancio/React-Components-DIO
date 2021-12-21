import Item from './components/Item';
import Card from './components/Card';

const App = () => {
  return(
    <>
      <h1>My first aplication if React</h1>
      <ul>
        <Item text='First item'/>
        <Item text='Second item'/>
        <Item text='Third item'/>
      </ul>
      <Card/>
    </>
  )
}

export default App;
