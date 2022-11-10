import React, { Component } from 'react'

export class LastestPost extends Component {
   render() {
      return (
         <>
            <div
               className="tab-pane fade"
               id="pills-latest"
               role="tabpanel"
               aria-labelledby="pills-latest-tab"
            >
               <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                     <span className="date">Lifestyle</span>{" "}
                     <span className="mx-1">•</span> <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                     <a href="#">
                        Life Insurance And Pregnancy: A Working Mom’s Guide
                     </a>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
               </div>
               <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                     <span className="date">Business</span>{" "}
                     <span className="mx-1">•</span> <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                     <a href="#">
                        The Best Homemade Masks for Face (keep the Pimples Away)
                     </a>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
               </div>
               <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                     <span className="date">Lifestyle</span>{" "}
                     <span className="mx-1">•</span> <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                     <a href="#">
                        10 Life-Changing Hacks Every Working Mom Should Know
                     </a>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
               </div>
               <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                     <span className="date">Sport</span>{" "}
                     <span className="mx-1">•</span> <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                     <a href="#">
                        How to Avoid Distraction and Stay Focused During Video
                        Calls?
                     </a>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
               </div>
               <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                     <span className="date">Lifestyle</span>{" "}
                     <span className="mx-1">•</span> <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                     <a href="#">
                        17 Pictures of Medium Length Hair in Layers That Will
                        Inspire Your New Haircut
                     </a>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
               </div>
               <div className="post-entry-1 border-bottom">
                  <div className="post-meta">
                     <span className="date">Culture</span>{" "}
                     <span className="mx-1">•</span> <span>Jul 5th '22</span>
                  </div>
                  <h2 className="mb-2">
                     <a href="#">
                        9 Half-up/half-down Hairstyles for Long and Medium Hair
                     </a>
                  </h2>
                  <span className="author mb-3 d-block">Jenny Wilson</span>
               </div>
            </div>{" "}
         </>
      )
   }
}

export default LastestPost