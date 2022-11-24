function Chute({guess}) {

    return (
        <>
            <div className="chute">
                <p>Já sei a palavra!</p>
                <input type="text" placeholder="" value={guess} />
                <input type="button" value="Chutar" />
            </div>        
        </>
    )
}

export default Chute