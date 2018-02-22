import React from 'react';

class NewBookForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      author: '',
      title: ''
    }
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value })
  }

  handleChangeAuthor(event) {
    this.setState({ author: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.newBook({ title: this.state.title, author: this.state.author }) //object is input into field
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input
        type="text"
        //value={}
        onChange={this.handleChangeTitle.bind(this)}
        placeholder="title"
        />
      <input 
        type="text"
        onChange={this.handleChangeAuthor.bind(this)}
        placeholder="author"
        />
      <input type="submit" value="submit" />
      </form>
    )
  }
}
export default NewBookForm;


// Add thing (todo or book)
// export default props => {

//   return (
//     <form onSubmit={props.handleSubmit}>
//       <input
//         type="text"
//         id="todoInput"
//         value={props.todoValue} //represents the thing inside that's displayed, represented at string
//         onChange={props.handleChange}
//         placeholder="new todo..."
//       />
//       <button type="submit">Add Todo</button>
//     </form>

//   );
// }
