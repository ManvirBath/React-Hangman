import React,{Component} from 'react';

export default class Hangman extends Component{
    constructor(props) {
        super(props);
        this.height = '240';
        this.width = '300';
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
        ctx.moveTo(10,this.height-100);
        ctx.lineTo(10,0);
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
        //this is the head
        ctx.beginPath();
        ctx.arc(100,75,50,0,2*Math.PI);
        ctx.stroke();
    }
    componentDidUpdate(prevProps) {
    }
    render(){
        return(
            <div className="hangman_wrapper">
                <canvas ref="canvas" width={this.width} height={this.height}>
                    Your browser does not support HTML5 canvas tag
                </canvas>
            </div>
        );
    }
}
