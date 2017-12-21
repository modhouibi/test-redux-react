import React,{Component} from 'react';

class Card extends Component{
	constructor(){
		super();
		this.state={
			reveal:false
		}
	}
	
	render(){
	const {prompt,answer}=this.props.card;
	
		return(
	<div className='card' onClick={()=>this.setState({reveal:true})}>
	<div className='card-prompt'><h5>{prompt}</h5></div>
	<div className='card-answer' >
	<h5 className={this.state.reveal ?'text-revealed':'text-hidden'}>{answer}</h5>
	</div>
	</div>
	)
		
	}
}

export default Card;