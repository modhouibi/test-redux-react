import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import stacks from '../data/db.json';
class StackList extends Component{
	
	render(){
		return(
	<div>
	{
	stacks.map(stack=>{
		return <Link to='/stack'>
		<h5>{stack.title}</h5>
		</Link>
	})
	
	}
	</div>
	)
		
	}
}

export default StackList;