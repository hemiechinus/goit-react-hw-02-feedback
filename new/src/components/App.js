import { Component } from 'react';
import {VideoList} from './videoList/VideoList';
import videos from '../constants/videos.json';
// import { Collapsible } from './Collapsible/Collapsible';

// const user = {
//   meta: {
//     hasFullAccess: false,
//   },
//  };

export class App extends Component {
  state = {
    selectedVideo: null,
  };
  selectVideo = link => {
    this.setState({selectedVideo:link});
  };
  render() {
    return (
      <>
      <VideoList videos={videos} onSelect={this.selectVideo} selected={this.state.selectedVideo}/>
      {/*
       <Collapsible       isDisabled={!user.meta.hasFullAccess} 
      triggerText ='Додати замітку'
      mb={3}
      > Some collapsible content 1</Collapsible>
      <hr />
      <Collapsible isOpen
      triggerText ='показати' mt={20}> Some collapsible content 2</Collapsible>
      <hr />
      <Collapsible triggerText ='Зробити щось'> Some collapsible content 3</Collapsible>
      <hr />
      <Collapsible triggerPosition='bottom' triggerText ='Кнопка'> Some collapsible content 4</Collapsible>
      */}
      </>
    );
  }
}