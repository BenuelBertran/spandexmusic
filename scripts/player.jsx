const PlayButton = (props) => {
  const className = props.isMusicPlaying ? "play active" : "play";
  return (
    <a onClick={props.onClick} className={className} href="#" title="Play music"></a>
  )
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMusicPlaying: false };
  }

  onPlayButtonClick(evt) {
    if (this.state.isMusicPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.setState(prevState => {
      return { 
        isMusicPlaying: !prevState.isMusicPlaying   
      };
    });
  };

  render() {
    return (
      <div className="btn player__play-button">
        <PlayButton 
          onClick={ this.onPlayButtonClick.bind(this) }
          isMusicPlaying={ this.state.isMusicPlaying }
        />
        <audio className="btn__audio" src="https://benuelbertran.github.io/spandexmusic/music/YourJoy.mp3" ref={(audioTag) => { this.audio = audioTag }}/>
        <h2 className="btn__title">Play Music</h2>
        <button className="btn__album"></button>
        <button className="btn__songs"></button> 
      </div>
    );
  }
}

const Album = (props) => {
  return (
    <div className="album player__album">
      <h2 className="album__title">Album<br/> cover</h2>
      <div className="album__border">
        <p className="album__add">Add picture here</p>
      </div>
    </div>
  )
}

const SongsList = (props) => {
  return (
    <div className="songs player__songs-list">
      <h2 className="songs__title">Songs<br/> list</h2>
      <p className="songs__add">Drag'N'Drop<br/> your music inside</p>
    </div>
  )
}

ReactDOM.render(
  <React.Fragment>
    <Album />
    <Container />
    <SongsList />
  </React.Fragment>,
  document.querySelector(".player")
);
