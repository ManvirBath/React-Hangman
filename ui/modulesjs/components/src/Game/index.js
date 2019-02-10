import React,{Component} from 'react';
import Question from './Question';
import Hangman from './Hangman';
import Guess from './Guess';

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
            currentIndex: 0
        }
    }
    render(){
        const index = this.state.currentIndex;
        const question = this.state.questions[index].q;
        const answer= this.state.questions[index].a;
        return(
            <div className="game">
                <Question question={question}/>
                <Hangman/>
                <Guess answer={answer}/>
            </div>
        );
    }
}
