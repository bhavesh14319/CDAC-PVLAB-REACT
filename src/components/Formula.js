import '../css/Board.css'

const Formula = ({formula}) => {
    return (
        <div>
            <div className="boardFormulaContainer"> 
                <img className="formulaImage fadeInClass" id="formulaImage" src={formula}/>
            </div>
        
        </div>
    )
}

export default Formula