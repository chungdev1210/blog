import React, { Component } from 'react'

export class Categories extends Component {
   render() {
      return (
         <>
            <div className="aside-block">
               <h3 className="aside-title">Categories</h3>
               <ul className="aside-links list-unstyled">
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
               </ul>
            </div>
         </>
      )
   }
}

export default Categories