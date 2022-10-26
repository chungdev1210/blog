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

   getPosts = (posts) => {
      const setArr = new Set(posts)
      return (
         <ul className="footer-links footer-blog-entry list-unstyled">
            {
               Array.from(setArr).map((element, index) => {
                  return (
                     <li key={index}>
                        <a
                           href="#"
                           className="d-flex align-items-center"
                        >
                           <img
                              src={`assets/img/post-sq-${element.id}.jpg`}
                              alt=""
                              className="img-fluid me-3"
                           />
                           <div>
                              <div className="post-meta d-block">
                                 <span className="date">{element.categories}</span>{" "}
                                 <span className="mx-1">•</span>{" "}
                                 <span>{element.post_at}</span>
                              </div>
                              <span>{element.title}</span>
                           </div>
                        </a>
                     </li>
                  )
               })
            }
         </ul>
      )
   }

   render() {

      const { introduce } = this.props;
      const { title, content, about } = introduce

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

                  </div>
                  <div className="col-6 col-lg-2">
                     <h3 className="footer-heading">Categories</h3>

                     {this.getCategories(this.props.categories)}

                  </div>
                  <div className="col-lg-4">
                     <h3 className="footer-heading">Recent Posts</h3>

                     {this.getPosts(this.props.posts)}

                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default FooterTop