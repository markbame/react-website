import React from 'react'
import { Link }   from 'react-router-dom'
import Fa from 'react-fontawesome'
import { Carousel } from 'react-bootstrap'

class CarouselFront extends React.Component {

  CarouselFront() {
          return (
          <div className="carousel-holder">
             <Carousel>
                <Carousel.Item>
                  <img width={969} height={307} alt="900x500" src={ process.env.REACT_URL_APP+"carousel-1.png" }/>
                  <Carousel.Caption>
                    <h3>Pet Supplies</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={969} height={307} alt="900x500" src={ process.env.REACT_URL_APP+"carousel-2.png" }/>
                  <Carousel.Caption>
                    <h3>Pet Coats</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={969} height={307} alt="900x500" src={ process.env.REACT_URL_APP+"carousel-3.png" }/>
                  <Carousel.Caption>
                    <h3>We have totoro!</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          )
  }

  render() {
    return (
        <div>
          {this.CarouselFront()}
        </div>
    )

  }
}
export default CarouselFront;
