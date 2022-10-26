import React, { Component } from "react";
import Copyright from "./Copyright";
import FooterTop from "./FooterTop";
import Social from "./Social";
import HttpClient from "../../Services/Helpers/Api/HttpClient";

const client = new HttpClient();

export class Footers extends Component {
   constructor(props) {
      super(props)
      this.state = {
         introduce: '',
         navigations: '',
         categories: ''
      }
   }

   getOptions = async () => {
      const res = await client.get(client.options);
      if (res.response.ok) {
         const data = res.data.footer;
         this.setState({
            introduce: data.introduce,
            navigations: data.navigations,
            categories: data.categories
         })
       }
   }

   componentDidMount = () => {
      this.getOptions()
   }

   render() {

      const { introduce, navigations, categories } = this.state;

      return (
         <>
            {/* ======= Footer ======= */}
            <footer id="footer" className="footer">
               <FooterTop {...introduce} navigations={navigations} categories={categories} />
               <div className="footer-legal">
                  <div className="container">
                     <div className="row justify-content-between">
                        <Copyright />
                        <Social />
                     </div>
                  </div>
               </div>
            </footer>
         </>
      );
   }
}

export default Footers;
