import React, { Component } from 'react'
import HttpClient from '../../../Services/Helpers/Api/HttpClient'
import withContext from '../../../Services/Context/withContext';
import withRouter from '../../../Services/Routes/withRouter';


const client = new HttpClient();

export class CommentForm extends Component {
   constructor(props){
      super(props)
      const { id } = this.props.params;
      this.state = {
         comment: {
            name: '',
            email: '',
            message: '',
            created_at: "2022-10-21 14:00:00",
            postId: id * 1,
            parentId: 0
         },
         errors: {
            name: {},
            email: {},
            message: {}
        },
      }
   }

   handleComments = (e) => {
      e.preventDefault();

      const { name, email, message } = this.state.comment;

      const errors = {
         name: {},
         email: {},
         message: {}
      }

      if (name === "") {
         errors.name.required = "Vui lòng nhập name";
      }

      if (email === "") {
         errors.email.required = "Vui lòng nhập email";
      }

      if (message === "") {
         errors.message.required = "Vui lòng nhập message";
      }

      this.setState({
         errors: errors,
      })

      if (!this.isErrors(errors)) {
         const {comment} = this.state;
         client.post(`${client.comments}`,comment )
         this.resetForm();
     }

   }

   getError = (fieldName) => {
      const { errors } = this.state;

      const error = errors[fieldName];

      const keys = Object.keys(error);

      return error[keys[0]];
   }

   isErrors = (errors) => {

      const keys = Object.keys(errors);

      if (keys.length) {
         const check = keys.some(key => {
            return Object.keys(errors[key]).length > 0;
         })

         return check;
      }

      return false;
   }

   resetForm = () => {
      this.setState({
         comment: {
            name: "",
            email: "",
            message: ""
         }
      });
   };

   handleChangeValue = (e) => {
      const data = {...this.state.comment}
      data[e.target.name] =  e.target.value;

      this.setState({
         comment: data,
      })
   }


   render() {
      const {name, email, message} = this.state.comment;
      // console.log(this.props)
      return (
         <div>
            <div className="row justify-content-center mt-5">
               <div className="col-lg-12">
                  <h5 className="comment-title">Leave a Comment</h5>
                  <form onSubmit={this.handleComments}>
                     <div className="row">
                        <div className="col-lg-6 mb-3">
                           <label htmlFor="comment-name">Name</label>
                           <input
                              type="text"
                              className={`form-control ${this.getError('name') ? "is-invalid" : null
                                 }`}
                              id="comment-name"
                              name="name"
                              placeholder="Enter your name"
                              onChange={this.handleChangeValue}
                              value={name}
                           />
                           {this.getError('name') ? (
                              <div className="invalid-feedback">{this.getError('name')}</div>
                           ) : null}
                        </div>
                        <div className="col-lg-6 mb-3">
                           <label htmlFor="comment-email">Email</label>
                           <input
                              type="text"
                              className={`form-control ${this.getError('email') ? "is-invalid" : null
                                 }`}
                              id="comment-email"
                              name="email"
                              placeholder="Enter your email"
                              onChange={this.handleChangeValue}
                              value={email}
                           />
                           {this.getError('email') ? (
                              <div className="invalid-feedback">{this.getError('email')}</div>
                           ) : null}
                        </div>
                        <div className="col-12 mb-3">
                           <label htmlFor="comment-message">Message</label>
                           <textarea
                              className={`form-control ${this.getError('message') ? "is-invalid" : null
                                 }`}
                              id="comment-message"
                              name="message"
                              placeholder="Enter your name"
                              cols={10}
                              rows={10}
                              onChange={this.handleChangeValue}
                              value={message}
                           />
                           {this.getError('message') ? (
                              <div className="invalid-feedback">{this.getError('message')}</div>
                           ) : null}
                        </div>
                        <div className="col-12">
                           <input
                              type="submit"
                              className="btn btn-primary"
                           />
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      )
   }
}

export default withContext(withRouter(CommentForm))