import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Card from './components/card';
import Input from './components/inputs';
import BasicCard from './components/MUICards';

function App() {
  // Props - passing date parent to child 
  const arr = ["One", "Two", "Three"];
  // Props - passing date child to parent 
  const getData = (a) => {
    console.log("parent------", a);
  }

  return (
    <div className="App">
      <Button className="my-btn" variant="contained">Contained</Button>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button href="https://www.google.co.uk/">Google Link</Button>

      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>


      <div>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      <div>
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </div>

      {/* Props - passing date parent to child */}
      {/* <div className='props_sec'>
          {arr.map((v, i) => (
            <Card key={i} value={v} index={i} />
          ))}
      </div> */}

      {/* Props - passing date child to parent */}
      <div className='props_sec'>
          <Input onChange={(e) => console.log(e.target.value)} />
          {arr.map((v, i) => (
            <BasicCard key={i} v={v} index={i} getData={getData} />
          ))}
      </div>
    </div>
  );
}

export default App;
