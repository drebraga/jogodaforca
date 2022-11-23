function Letras() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    console.log(alfabeto)
    return (
        <div className="alphabet">
            {alfabeto.map((l) => (<div className="letter">{l.toUpperCase()}</div>))}
        </div>
    )
}

export default Letras