import Carousel from 'react-bootstrap/Carousel';
import a from "../resources/1.png";
import b from "../resources/2.png";
import c from "../resources/3.png";

export function Home() {
  return (
    
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-95"
          src={a}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Simply the best headphones</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Simply the best headphones</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Simply the best headphones</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
  );
}
