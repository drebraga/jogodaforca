function Chute({guess}) {

    return (
        <>
            <div className="chute">
                <p>Já sei a palavra!</p>
                <input data-test="guess-input" type="text" placeholder="" value={guess} />
                <input data-test="guess-button" type="button" value="Chutar" />
            </div>        
        </>
    )
}

export default Chute