import React,{Component, PropTypes} from 'react';
import ReactDOM from 'react-dom'
export class CategoryAdd extends React.Component{
constructor(props){
    super(props)
 this.handleSubmit = this.handleSubmit.bind(this);
 this.handleChangeState=this.handleChangeState.bind(this);
this.state = {categoryName:""}
}
render(){
return (
<form className="new-task" onSubmit={this.handleSubmit} >
<div className="form-group">
    <label >Category Name</label>
    <input type="text" name="categoryName" 
    ref={(input) => this.categoryName = input}  className="form-control" placeholder="Category"  />
  </div>
  <div className="form-group">
    <label >Description</label>
    <input type="text" className="form-control" name="categoryDescription" />
  </div>
  <button type="submit"  className="btn btn-default">Submit</button>
</form>
);
      
  }

  handleChangeState(event){
     switch (event.target.name){
   case "categoryName":
   this.setState({categoryName: event.target.value});
   break;

    }
  }

  handleSubmit(event){
      debugger;
     event.preventDefault();
    // const text = ReactDOM.findDOMNode(this.refs.categoryName).value.trim();
    console.log(this.categoryName.value);
  }
}

CategoryAdd.propTypes = {


      

 };
 CategoryAdd.defaultProps = {

 };
