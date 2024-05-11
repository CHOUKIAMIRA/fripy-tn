import React from 'react'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../../assets/semaine.png';
import "../../App.css";
function Jarb() {
  const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    }
  };
  return (
    <div style={{width:"1100px",Height:"200px" }}>
<Carousel responsive={responsive} >
<a><Card className='cardj'>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card></a>
    <a><Card className='cardj'>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card></a>
    <a><Card className='cardj'>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card></a>
    <a><Card className='cardj'>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card></a>
    <a><Card className='cardj'>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card></a>
    <a><Card className='cardj'>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card></a>
    <a><Card className='cardj'>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card></a>
    <a><Card className='cardj'>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card></a>
    <a><Card className='cardj'>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card></a>
    <a><Card className='cardj'>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card></a>
    <a><Card className='cardj'>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card></a>
</Carousel>
    </div>
  )
}

export default Jarb