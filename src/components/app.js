import React from 'react';
import TopBar from './TopBar';
import InstructionPanel from './InstructionPanel';
import PicturesPanel from './PicturesPanel';
import images from '../characters.json';

class App extends React.Component {
  state = {
    images: images,
    imageClickedId: [],
    score: 0,
    topScore: 0,
    totalScore: 0,
    message: 'Click an image to begin!'
  };

  onHandleSuffle = id => {
    let imageClickedId = this.state.imageClickedId;
    if (!imageClickedId.includes(id)) {
      imageClickedId.push(id);
      if (this.state.score >= this.state.totalScore) {
        this.setState({ topScore: this.state.score + 1 });
      }
      if (imageClickedId.length === 12) {
        this.setState({ imageClickedId: [] });
      }

      this.setState({
        score: imageClickedId.length,
        totalScore: this.state.topScore,
        message: 'You guessed correctly!'
      });
      // random generating image for all images
      let i = images.length,
        j,
        temp;
      while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = images[j];
        images[j] = images[i];
        images[i] = temp;
      }
    } else {
      this.setState({
        imageClickedId: [],
        score: 0,
        totalScore: this.state.topScore,
        message: 'You guessed incorrectly!'
      });
    }
  };

  render() {
    return (
      <div className="ui container">
        <TopBar
          score={this.state.score}
          message={this.state.message}
          topScore={this.state.topScore}
        />
        <InstructionPanel />
        <PicturesPanel
          onHandleSuffle={this.onHandleSuffle}
          images={this.state.images}
        />
      </div>
    );
  }
}

export default App;