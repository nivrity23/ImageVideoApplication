import React, { Component } from 'react';
import Header from './component/Header/Header';
import AILayout from './component/AILayout/AILayoutCategory';
import GridLayout from './component/GridLayout/GridLayout';
import dummyData from './data/dummyData.json';

import './App.css';

class App extends Component {
  state = {
    gridView: false,
    videoState: true
  };
  toggleView = () => {
    this.setState({
      gridView: !this.state.gridView
    });
  };
  toggleImageVideo = () => {
    this.setState({
      videoState: !this.state.videoState
    });
  };
  render() {
    const categories = dummyData.map(item => item.category);
    const { videoState, gridView } = this.state;

    const categoryLayout = categories.map(category => (
      <AILayout
        category={category}
        key={category}
        dummyData={dummyData}
        videoState={videoState}
      />
    ));
    return (
      <>
        <Header />
        <br />
        <div className='main-body'>
          <div className='btnStyle'>
            <button
              onClick={this.toggleImageVideo}
              disabled={videoState ? true : false}
              className={videoState ? 'btnEnabled' : 'btn btnDisabled'}
            >
              Video
            </button>
            <button
              onClick={this.toggleImageVideo}
              disabled={videoState ? false : true}
              className={videoState ? 'btn btnDisabled' : 'btnEnabled'}
            >
              Image
            </button>
          </div>
          <br />
          <div className='flexDisplay btnStyle'>
            <div className='leftDiv'>
              <button disabled className='btnDisabled'>
                + Create Video
            </button>
              &nbsp; &nbsp; &nbsp;
            <button disabled className='btnDisabled'>
                Upload Video
            </button>
            </div>
            <div className='rightDiv'><button
              onClick={this.toggleView}
              disabled={gridView ? false : true}
              className={gridView ? 'btn btnDisabled' : 'btnEnabled'}
            >
              AI View
            </button>
              <button
                onClick={this.toggleView}
                disabled={gridView ? true : false}
                className={gridView ? 'btnEnabled' : 'btn btnDisabled'}
              >
                Grid View
            </button></div>
          </div>

        </div>
        {gridView ? (
          <>
            <GridLayout videoState={videoState} dummyData={dummyData} />
            <div id='myModal' className='modal'>
              <span className='close'>&times;</span>
              {videoState ? (
                <video
                  controls
                  autoPlay
                  type='video/mp4'
                  className='modal-content'
                  id='gridModal'
                ></video>
              ) : (<img className='modal-content' id='gridModal' alt='hjghjg' />)}
            </div>
          </>
        ) : (
            categoryLayout
          )}
      </>
    );
  }
}

export default App;
