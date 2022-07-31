
import '../css/Board.css'

const Formula = ({formula,animationClass}) => {
 
    return (
        <div>
            <div className="boardFormulaContainer"> 

                <img className={`formulaImage ${animationClass}`} id="formulaImage" src={formula}/>
            </div>
        
        </div>
    )
}

export default Formula