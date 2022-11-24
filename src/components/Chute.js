function Chute({guess}) {

    return (
        <>
            <div className="chute">
                <p>Já sei a palavra!</p>
                <input data-test="guess-input" disabled={true} type="text" placeholder="" value={guess} />
                <input data-test="guess-button" disabled={true} type="button" value="Chutar" />
            </div>        
        </>
    )
}

export default Chute