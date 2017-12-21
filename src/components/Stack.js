import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Card from './Card';
class Stack extends Component{
	
	render(){
	//	console.log(this.props.stack.stackReducers);
	
		return(
	<div>
	<Link to='/' className='link-home'>Home</Link>
	<h5>{this.props.stack.title}</h5>
		{
			this.props.stack.cards.map((card)=>{
				return <Card key={card.id} card={card} />
				
			})
		}
	</div>
	)
		
	}
}
function mapStateToProps(state){
	console.log(state.stackReducers)
	return {stack:state.stackReducers}
}
export default connect(mapStateToProps,null)(Stack);