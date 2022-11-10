import React, { Component } from 'react'
import withContext from '../../Services/Context/withContext';
import moment from 'moment';

export class ReplyForm extends Component {
   constructor(props) {
      super(props)
      this.state = {
         name: '',
         email: '',
         message: ''
      }
   }

   handleSubmitReply = (e) => {
      e.preventDefault();
      console.log('first')
      const {postComment, setTypeComment } = this.props.store.action;
      const {name, email, message} = this.state;
      const { commentId, postId } = this.props;
      setTypeComment('reply')
      const comment = {
         ...this.state,
         name: name,
         email: email,
         message: message,
         postId: postId,
         status: 1,
         parentId: commentId,
         created_at: moment().format("YYYY-MM-DD hh:mm:ss"),
         update_at: moment().format("YYYY-MM-DD hh:mm:ss")
      }
      postComment(comment, postId, 'reply');
      this.setState({
        message: ''
      })

   } 

   handleChangeValue = (e) => {
      const data = {...this.state};
      data[e.target.name] = e.target.value;
      this.setState(data);
   }

   componentDidMount = () => {
      let commentInfo = localStorage.getItem('commentInfo');
      if (commentInfo !== null){
        commentInfo = JSON.parse(commentInfo); 
        this.setState(commentInfo);
      }
    }

   render() {
      const { commentId, postId } = this.props;
      const {name, email, message} = this.state;
      return (
         <form onSubmit={this.handleSubmitReply}>
            <div className='row'>
               <div className='col-6 mb-2'>
                  <input type={'text'} className='form-control' name='name' placeholder='Name' onChange={this.handleChangeValue} value={name} />
               </div>
               <div className='col-6'>
                  <input type={'email'} className='form-control' name='email' placeholder='Email' onChange={this.handleChangeValue} value={email} />
               </div>
               <div className='col-12'>
                  <input type={'text'} className='form-control' name='message' placeholder='Reply' onChange={this.handleChangeValue} value={message} />
               </div>
            </div>
            <button type="submit" className="d-none"></button>
         </form>
      )
   }
}

export default withContext(ReplyForm)