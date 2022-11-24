function Letras({gameStart, letras, comparaLetraEscolhida}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return (
        <div className="alphabet">
            {alfabeto.map((l) => (
                <input
                    disabled={!gameStart}
                    type="button"
                    onClick={() => comparaLetraEscolhida(l)}
                    key={l}
                    className={(!letras.includes(l) && gameStart) ? "letterDisabled letterEnabled" : "letterDisabled"}
                    value={l.toUpperCase()}
                />
            ))}
        </div>
    )
}

export default Letras 