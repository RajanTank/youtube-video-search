import React from 'react';
import { NotificationError } from '../Utility /utility';

class Video extends React.Component {

   componentDidMount() {

      if (!this.props.videoData) {
         return null;
      }
   }

   render() {

      const { id, snippet } = this.props.videoData;
      if(id == null){
         NotificationError(`can't featch video`);
         return null;
      }


      const videoSrc = `https://www.youtube.com/embed/${id}?autoplay=1`
      return (
         <div style={{ width: '900px', height: '600px', margin: '5px' }} >
            <div className="ui embed">
               <iframe title='video player' src={videoSrc} />
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

export default Video;