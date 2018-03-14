import React, { Component } from 'react';
import Banner from './banner';
import TalkList from './talkList';
import Player from './player';

const URL_TALKS = 'http://localhost:3005/talks';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      talks:''
    }
  }

  componentDidMount () {
    fetch(URL_TALKS, {
      method: 'GET'
    })
    .then(response => {
      return response.json();
    })
    .then(json => {
      this.setState({
        talks:json
      })
    })
  }

  render () {
    return (
      <div>
        <Banner/>
        <TalkList allTalks={this.state.talks} />
        <Player/>
      </div>
    )
  }
}

export default Home;
