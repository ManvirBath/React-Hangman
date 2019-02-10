import React,{Component} from 'react';

export default class Hangman extends Component{
    constructor(props) {
        super(props);
        this.state = {
            canvas: null,
            ctx: null,
        }
    }
    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        this.setState({canvas,ctx});
        //this line is for the large vertical
        ctx.moveTo(320,180);
        ctx.lineTo(320,380);
        //this line is for the short horizontal at the top
        ctx.moveTo(320,180);
        ctx.lineTo(400,180);
        //this line is for the rope
        ctx.moveTo(400,180);
        ctx.lineTo(400,200);
        //this line is for the bottom leverage
        ctx.moveTo(320-80,380);
        ctx.lineTo(320+80,380);
        ctx.stroke();
    }
    componentDidUpdate(prevProps) {
    }
    render(){
        return(
            <div className="hangman_wrapper">
                <canvas ref="canvas" width="640" height="480">
                    Your browser does not support HTML5 canvas tag
                </canvas>
            </div>
        );
    }
}
