import React from 'react'
import { getLocalStorage, setLocalStorage, notificationError } from '../Utility /utility';

class VideoDetail extends React.Component {


   validVideo = () => {

      if (!this.props.video) {
         return <div></div>
      }
   };

   componentWillUpdate() {

      this.validVideo();

   }
   componentDidMount() {

      this.validVideo();

   }

   render() {
      if (!this.props.video) {
         return <div></div>
      }
      const { snippet, id } = this.props.video

      const videoSrc = `https://www.youtube.com/embed/${id.videoId}?autoplay=1`

      return (
         <div  style={{ width: '650px', height: '400px', margin: '5px' }} >
            <div className="ui embed">
               <iframe title='video player'  src={videoSrc} />
            </div> 
            <div className="ui segment" >
               <h4 className="ui header" > {snippet.title}</h4>
               <p>{snippet.description}</p>
            </div>
            <hr />
         </div>
      );
   }
}

export default VideoDetail;