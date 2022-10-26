import React, { Component } from 'react'

export class FooterTop extends Component {
   constructor(props) {
      super(props)
   }

   getNav = (arr) => {
      const setArr = new Set(arr)
      return (
         <ul className="footer-links list-unstyled">
            {
               Array.from(setArr).map((element, index) => {
                  return (
                     <li key={index}>
                        <a href="#">
                           <i className="bi bi-chevron-right" />{element}
                        </a>
                     </li>
                  )
               })
            }
         </ul>
      )
   }

   getCategories = (arr) => {
      const setArr = new Set(arr)
      return (
         <ul className="footer-links list-unstyled">
            {
               Array.from(setArr).map((element, index) => {
                  return (
                     <li key={index}>
                        <a href="#">
                           <i className="bi bi-chevron-right" />{element}
                        </a>
                     </li>
                  )
               })
            }
         </ul>
      )
   }


   render() {
      // console.log(this.props.navigations)
      const { title, content, about } = this.props
      return (
         <div className="footer-content">
            <div className="container">
               <div className="row g-5">
                  <div className="col-lg-4">
                     <h3 className="footer-heading">{title}</h3>
                     <p>{content}</p>
                     <p>
                        <a href="about.html" className="footer-link-more">{about}</a>
                     </p>
                  </div>
                  <div className="col-6 col-lg-2">
                     <h3 className="footer-heading">Navigation</h3>
                     {this.getNav(this.props.navigations)}

                     {/* <ul className="footer-links list-unstyled">
                        <li>
                           <a href="index.html">
                              <i className="bi bi-chevron-right" /> Home
                           </a>
                        </li>
                        <li>
                           <a href="index.html">
                              <i className="bi bi-chevron-right" /> Blog
                           </a>
                        </li>
                        <li>
                           <a href="category.html">
                              <i className="bi bi-chevron-right" /> Categories
                           </a>
                        </li>
                        <li>
                           <a href="single-post.html">
                              <i className="bi bi-chevron-right" /> Single Post
                           </a>
                        </li>
                        <li>
                           <a href="about.html">
                              <i className="bi bi-chevron-right" /> About us
                           </a>
                        </li>
                        <li>
                           <a href="contact.html">
                              <i className="bi bi-chevron-right" /> Contact
                           </a>
                        </li>
                     </ul> */}
                  </div>
                  <div className="col-6 col-lg-2">
                     <h3 className="footer-heading">Categories</h3>
                     {this.getCategories(this.props.categories)}
                     {/* <ul className="footer-links list-unstyled">
                        <li>
                           <a href="category.html">
                              <i className="bi bi-chevron-right" /> Business
                           </a>
                        </li>
                        <li>
                           <a href="category.html">
                              <i className="bi bi-chevron-right" /> Culture
                           </a>
                        </li>
                        <li>
                           <a href="category.html">
                              <i className="bi bi-chevron-right" /> Sport
                           </a>
                        </li>
                        <li>
                           <a href="category.html">
                              <i className="bi bi-chevron-right" /> Food
                           </a>
                        </li>
                        <li>
                           <a href="category.html">
                              <i className="bi bi-chevron-right" /> Politics
                           </a>
                        </li>
                        <li>
                           <a href="category.html">
                              <i className="bi bi-chevron-right" /> Celebrity
                           </a>
                        </li>
                        <li>
                           <a href="category.html">
                              <i className="bi bi-chevron-right" /> Startups
                           </a>
                        </li>
                        <li>
                           <a href="category.html">
                              <i className="bi bi-chevron-right" /> Travel
                           </a>
                        </li>
                     </ul> */}
                  </div>
                  <div className="col-lg-4">
                     <h3 className="footer-heading">Recent Posts</h3>
                     <ul className="footer-links footer-blog-entry list-unstyled">
                        <li>
                           <a
                              href="single-post.html"
                              className="d-flex align-items-center"
                           >
                              <img
                                 src="assets/img/post-sq-1.jpg"
                                 alt=""
                                 className="img-fluid me-3"
                              />
                              <div>
                                 <div className="post-meta d-block">
                                    <span className="date">Culture</span>{" "}
                                    <span className="mx-1">•</span>{" "}
                                    <span>Jul 5th '22</span>
                                 </div>
                                 <span>5 Great Startup Tips for Female Founders</span>
                              </div>
                           </a>
                        </li>
                        <li>
                           <a
                              href="single-post.html"
                              className="d-flex align-items-center"
                           >
                              <img
                                 src="assets/img/post-sq-2.jpg"
                                 alt=""
                                 className="img-fluid me-3"
                              />
                              <div>
                                 <div className="post-meta d-block">
                                    <span className="date">Culture</span>{" "}
                                    <span className="mx-1">•</span>{" "}
                                    <span>Jul 5th '22</span>
                                 </div>
                                 <span>
                                    What is the son of Football Coach John Gruden, Deuce
                                    Gruden doing Now?
                                 </span>
                              </div>
                           </a>
                        </li>
                        <li>
                           <a
                              href="single-post.html"
                              className="d-flex align-items-center"
                           >
                              <img
                                 src="assets/img/post-sq-3.jpg"
                                 alt=""
                                 className="img-fluid me-3"
                              />
                              <div>
                                 <div className="post-meta d-block">
                                    <span className="date">Culture</span>{" "}
                                    <span className="mx-1">•</span>{" "}
                                    <span>Jul 5th '22</span>
                                 </div>
                                 <span>
                                    Life Insurance And Pregnancy: A Working Mom’s Guide
                                 </span>
                              </div>
                           </a>
                        </li>
                        <li>
                           <a
                              href="single-post.html"
                              className="d-flex align-items-center"
                           >
                              <img
                                 src="assets/img/post-sq-4.jpg"
                                 alt=""
                                 className="img-fluid me-3"
                              />
                              <div>
                                 <div className="post-meta d-block">
                                    <span className="date">Culture</span>{" "}
                                    <span className="mx-1">•</span>{" "}
                                    <span>Jul 5th '22</span>
                                 </div>
                                 <span>
                                    How to Avoid Distraction and Stay Focused During
                                    Video Calls?
                                 </span>
                              </div>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default FooterTop