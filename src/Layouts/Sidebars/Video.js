import React, { Component } from 'react'

export class Video extends Component {
   render() {
      return (
         <>
            <div className="aside-block">
               <h3 className="aside-title">Video</h3>
               <div className="video-post">
                  <a
                     href="https://www.youtube.com/watch?v=AiFfDjmd0jU"
                     className="glightbox link-video"
                  >
                     <span className="bi-play-fill" />
                     <img
                        src="/assets/img/post-landscape-5.jpg"
                        alt=""
                        className="img-fluid"
                     />
                  </a>
               </div>
            </div>
         </>
      )
   }
}

export default Video