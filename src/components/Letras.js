function Letras({ gameStart, chosedLetter, compareHiddenLetter }) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return (
        <div className="alphabet">
            {alfabeto.map((l) => (
                <button
                    data-test="letter"
                    disabled={(chosedLetter.includes(l) || !gameStart)}
                    onClick={() => compareHiddenLetter(l)}
                    key={l}
                    className={(!chosedLetter.includes(l) && gameStart) ? "letterDisabled letterEnabled" : "letterDisabled"}
                >{l.toUpperCase()}</button>
            ))}
        </div>
    )
}

export default Letras 