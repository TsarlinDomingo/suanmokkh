import React, { Component } from 'react';
import ReactPlayer from 'react-player';

const Player = (props) => {

    const settings = {
      className:'react-player',
      url:'https://doc-00-a4-docs.googleusercontent.com/docs/securesc/2id9cjphh2dci0b2hbc2dpm9b0dplgqe/hl5ni050qsbi5h1ei3oq6b3r821tdrle/1521036000000/10868490224427815198/10868490224427815198/1G1qnoQeN_kYixS0ILDvDAy9xXdZAcOCj?e=download',
      height: '33px'
    }

    return (
      <div className="player-wrapper">
        <div className="track-image"></div>

        <div className="contents-player">
          <strong>I wanna hold your hand (Golden Voice remix).mp3</strong>
          <br/>
          <span>00:01:35</span>
          <ReactPlayer controls {...settings}/>
        </div>
      </div>
    )
  }

export default Player;
