import React,{Component} from 'react';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import stacks from '../data/db.json';
import {setStack,loadStack} from '../actions';
class StackList extends Component{
	
	componentDidMount(){
		if(this.props.stack.length===0){
		this.props.loadStack(stacks)
		}
	}
	render(){
	//	console.log(this.props);
		return(
	<div>
	{
	this.props.stack.map((stack,key)=>{
		return <Link 
		to='/stack' 
		key={key} 
		onClick={()=>this.props.setStack(stack)}>
		<h5>{stack.title}</h5>
		</Link>
	})
	
	}
	</div>
	)
		
	}
}

//function mapDispatchToProps(dispatch){
	//return bindActionCreators({setStack},dispatch);
//}

//export default connect(null,mapDispatchToProps)(StackList);
function mapStateToProps(state){
	return {stack:state.loadStackReducers}
}
export default connect(mapStateToProps,{setStack,loadStack})(StackList);