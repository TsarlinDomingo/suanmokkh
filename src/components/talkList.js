import React from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';

const TalkList = (props) => {

  const generateSlides = ({allTalks}) => {

    if(allTalks) {

      const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        infiniteFlow: true,
        speed: 2000,
        slidesToShow: 10,
        slidesToScroll: 10,
        variableWidth: true,
        centerMode: false
      }

      console.log(allTalks);

      return (
        <Slider {...settings}>
          {allTalks.map((item)=>{
            const style = {
              background: `url('/images/mandala_${Math.floor(Math.random()*23)}.jpg') no-repeat`
            }

            return (
              <Link
                key={item.Id}
                to={`/talks/${item.Id}`}
                style={style}
                className="talk_item">
                <div className="talk_title">{item.Title}</div>
              </Link>
            )
          })}
        </Slider>
      )
    }
  }

  return (
    <div className="container-fluid Dhamma_Talks">
      <h1 className="home_title">BROWSE DHAMMA TALKS</h1>
      <div className="list_container">
        {generateSlides(props)}
      </div>
      <div className="player"/>
    </div>
  )
}

export default TalkList;

/*

const generateSlides = ({ slides }) => {
    if(slides) {
      return (
        <Slider {...settings}>
          {slides.map((item)=>{
            return (
              <div key={item.id} className="item_slider"
                style={{background: `url(/images/covers/${item.cover})`}}>
                <div className="caption">
                  <h4>{item.topic}</h4>
                  <p>{item.title}</p>
                </div>
              </div>
            )
          })}
        </Slider>
      )
    }
}

const Featured = (props) => {
  return (
    <div>
      {generateSlides(props)}
    </div>
  )
}

*/
