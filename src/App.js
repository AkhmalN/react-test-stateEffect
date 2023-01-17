import './App.css';
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  // TODO : useState()

  // const [count, setCount] = useState(0)
  // const [theme, setTheme] = useState('Normal')
  // function incrementCount(){
  //   setCount(count + 3)
  //   setTheme(' + ')
  // }
  // function decrementCount(){
  //   setCount(count-3)
  //   setTheme(' - ')
  // }
  // console.log(count);
  // const [inputValue, setInputValue] = useState()

  // const [inputValue, setInputValue] = useState(0)

  // const Change =(event) => {
  //   const newValue = event.target.value
  //   setInputValue(newValue)
  // }
  // const [numValue, setAddNum] = useState(0)
  // const [textValue, setToAddText] = useState('add Some One')

  //TODO : useEffect

  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])
  // const [data, setData] = useState([])
  // useEffect( ()=>{
  //   setData([
  //     {
  //       name: 'person1'
  //     },
  //     {
  //       name: 'person2'
  //     }
  //   ])
  // })
  // useEffect( () => {
  //   fetch(`https://jsonplaceholder.typicode.com/users`)
  //   .then(response=> response.json())
  //   .then(json => setData(json))
  // }, [data])

  return (
    <div className="App">

      {/* ----- use State -------------}

      {/* <button onClick={decrementCount}> - </button>
      <span> {count} </span>
      <span> {theme} </span>
      <button onClick={incrementCount}> + </button> */}
      {/* <h2>Use State</h2>
      <input placeholder='Add SomeOne' onChange={Change} />
      <br/>
      {inputValue}
      <br/>

      <h1>{numValue}</h1>
      <button onClick={() => {
        setAddNum(numValue + 1)
        setToAddText('number added')
      }}
      >
        Add Num
      </button>
      <p>{textValue}</p> */}

      {/* ------------ use Effect ---------- */}
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>comments</button>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{ JSON.stringify(item) }</pre>
      })}
      {/* {data?.map( (el)=> {
        return <p>{el?.name}</p>
      })} */}
      {/* {data.map( idx => {
        return <div>{ JSON.stringify(idx) }</div>
      })} */}
    </div>
  );
}

export default App;
