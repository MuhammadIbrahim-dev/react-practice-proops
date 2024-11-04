
import { Children } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { blog } from './blog';
import { Container } from 'react-bootstrap';



function App() {
  return (
    <>
      <Container>
        <row>
      {blog.map((v,i)=>{
        return(
        <ProductItem pitem ={v} key={i}/>
        )
      })}
      </row>
      </Container>
    </>
  )
}
export default App;

export  function ProductItem({pitem}){
  return (
    <div>
    <Card>
      <Card.Body style={{display:'flex',width:'10rem'}}>
        <Card.Title>{pitem.title}</Card.Title>
        <Card.Text>
          {pitem.body}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

