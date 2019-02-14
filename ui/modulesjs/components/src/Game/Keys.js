import React, {Component} from 'react';

export default class Keys extends Component {
    constructor(props) {
        super(props);
        this.state={
            keys: [
                ['q','w','e','r','t','y','u','i','o','p'],
                ['a','s','d','f','g','h','j','k','l'],
                ['z','x','c','v','b','n','m']
            ]
        }
    }
    arrangeKeys = ()=>{
        return this.state.keys.map((val,index)=>{
            return <ul key={index} className={"alphabet "+index}>{val.map((alphabet)=>{
                    return <li className="key" onClick = {this.props.eventHandler} key={alphabet}>{alphabet}</li>
                    })}
                </ul>
        })
    }
    render() {
        const body = this.arrangeKeys();
        return(
            <div className ="keys">
            {body}</div>
        )
    }
}
