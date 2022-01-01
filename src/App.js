import { useEffect,useState } from "react"
import "./style.css";
import rockImg from './image/rock.png'
import paperImg from './image/paper.png'
import scissorImg from './image/scissor.png'

const App = () => {

  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const choice = ['rock', 'paper', 'scissor']
  

  var [score,setScore] = useState(0)
  

  const handleClick = (value) => {
    setUserChoice(value) 
    randomComputerChoice()
  }
  const scoreIncrease = () => {
    score=score+1
    
    if(score >=5)
    {
      setScore('done for the day')
    }
    else{
      setScore(score)
    }
  }
  

  const randomComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    const randomChoice = choice[randomNumber]
    setComputerChoice(randomChoice)
    
  }

  useEffect(() => {
    switch (userChoice +' '+ computerChoice) {
      case 'scissor paper':
      case 'rock scissor':
      case 'paper rock':
        setResult('YOU WIN')
        scoreIncrease(setScore(score))
        break
      case 'paper scissor':
      case 'scissor rock':
      case 'rock paper':
        setResult('YOU LOSE')
        break
      case 'rock rock':
      case 'scissor scissor':
      case 'paper paper':
        setResult('DRAW')
        break
      default:
        break
    }
  }, [computerChoice, userChoice])

  return (
    

    <div>
      <div id='Score'>
      <h2>Score:{score}</h2>
    </div>
      <h1> user :{userChoice}</h1>
      <h1> computer:{computerChoice}</h1>
     
      <
        div style={
          {
            display: "flex",
            justifyContent: "center",
            gap: "3rem"
          }
      }
      >

      <button
            onClick={() => handleClick('rock')}>
            <img src={rockImg}
              width='100px' height='100px' alt="rock">
            </img>
      </button>
        <div id='paper'>
          <button
            onClick={() => handleClick('paper')}>
            <img src={paperImg}
            alt="paper" width='100px' height='100px'>
            </img>
          </button>
        </div>
        
        <button onClick={() => handleClick('scissor')}>
            <img src={scissorImg} alt="scissor" 
            width='100px' height='100px'>
              
            </img>
          </button>
        </div>
      
      <h1>{result}</h1>
      
    </div>
  );
}

export default App;