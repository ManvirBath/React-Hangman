import React,{Component} from 'react';
import Question from './Question';
import Hangman from './Hangman';
import Guess from './Guess';
import Keys from './Keys';

export default class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            questions: [
                {
                    q: "Who is superman's cousin?",
                    a: "supergirl"
                },
                {
                    q: "What is Batman's real name?",
                    a: "Bruce Wayne"
                }
            ],
            currentIndex: 0,
            tries: 0,
            currentGuess: new Array(1).join('_'),
        }
    }
    _handleKeyPress = (event)=>{
        debugger;
        this.setState({tries: this.state.tries -1});
    }
    componentDidMount() {
        document.addEventListener('keydown',this.handleKeyPress,false);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown',this.handleKeyPress,false);
    }
    render(){
        const index = this.state.currentIndex;
        const question = this.state.questions[index].q;
        const answer= this.state.questions[index].a;
        const currentGuess = this.state.currentGuess;
        return(
            <div className="game">
                <Question question={question}/>
                <Keys/>
                <Hangman/>
                <Guess currentGuess={currentGuess}/>
            </div>
        );
    }
}
