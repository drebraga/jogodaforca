function Chute({ gameStart, setInputGuess, inputGuess, endGameGuess }) {

    return (
        <>
            <div className="chute">
                <p>Já sei a palavra!</p>
                <input
                    data-test="guess-input"
                    disabled={!gameStart}
                    type="text"
                    onChange={(e) => setInputGuess(e.target.value)}
                    value={inputGuess}
                />
                <input
                    data-test="guess-button"
                    disabled={!gameStart}
                    type="button"
                    value="Chutar"
                    onClick={endGameGuess}
                />
            </div>
        </>
    )
}

export default Chute