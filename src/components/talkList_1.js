import React from 'react';
import {Link} from 'react-router-dom';

const TalkList = (props) => {

  const list = ({allTalks}) => {
    if (allTalks) {
      return allTalks.map ((item)=>{

        const style = {
          background: `url('/images/mandala_${Math.floor(Math.random()*23)}.jpg') no-repeat`
        }

        return (
          <Link key={item.Id} to={`/talks/${item.Id}`} className="talk_item" style={style}>
            <div className="talk_title">{item.Title}</div>
          </Link>
        )
      })
    }
  }

  return (
  <div className="container Dhamma_Talks">

    <div className="row justify-content-sm-center">
      <div className="list_container">
        {list(props)}
      </div>
    </div>

  </div>
)
}

export default TalkList;
