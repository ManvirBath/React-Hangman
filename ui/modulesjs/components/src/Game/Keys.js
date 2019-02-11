import React, {Component} from 'react';

export default class Keys extends Component {
    constructor(props) {
        super(props);
        this.state={
            keys: [
                {'q','w','e','r','t','y','u','i','o','p'},
                {'a','s','d','f','g','h','j','k','l'},
                {'z','x','c','v','b','n','m'}
            ]
        }
    }
    arrangeKeys = ()=>{
        return this.state.keys.map((val,index)=>{
            return <li key={index+val}>{val}</li>
        })
    }
    render() {
        const body = this.arrangeKeys();
        return(

            <div>{body}</div>
        )
    }
}
