import React,{Component} from 'react';

export default class Question extends Component{
    render(){
        console.log(this.props);
        debugger;
        const question = this.props.question.length > 0 ? this.props.question : 'No Question Given';
        return(
            <div className= "questionHeader">{question}</div>
        );
    }
}
