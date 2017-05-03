import React from 'react'
import { Link }   from 'react-router-dom'
import Fa from 'react-fontawesome'
import { Carousel } from 'react-responsive-carousel'

class CarouselFront extends React.Component {

  CarouselFront() {
          return (
          <div className="carousel-holder">
               <Carousel showArrows={true} >
                <div>
                    <img src={ process.env.REACT_URL_UPLOADS+"1489192667_i3.JPG" } />
                </div>
                <div>
                    <img src={ process.env.REACT_URL_UPLOADS+"1489192667_i3.JPG" } />
                </div>
                <div>
                    <img src={ process.env.REACT_URL_UPLOADS+"1489192667_i3.JPG" } />
                </div>
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
