function Chute({gameStart}) {

    return (
        <>
            <div className="chute">
                <p>Já sei a palavra!</p>
                <input data-test="guess-input" disabled={gameStart} type="text" placeholder="" />
                <input data-test="guess-button" disabled={gameStart} type="button" value="Chutar" />
            </div>        
        </>
    )
}

export default Chute