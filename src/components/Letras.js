import styled from "styled-components";

function Letras({ gameStart, chosedLetter, compareHiddenLetter }) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return (
        <Alphabet>
            {alfabeto.map((l) => (
                <button
                    data-test="letter"
                    disabled={(!gameStart) ? !chosedLetter.includes(l) : chosedLetter.includes(l)}
                    onClick={() => compareHiddenLetter(l)}
                    key={l}
                    className={
                        (chosedLetter.includes(l)) ? "letterDisabled" :
                            (gameStart) ? "letterDisabled letterEnabled" : "letterDisabled"
                    }
                >{l.toUpperCase()}</button>
            ))}
        </Alphabet>
    )
}

export default Letras

const Alphabet = styled.div`
    margin: 2%;
    width: 702px;
    display: flex;
    flex-wrap: wrap;
    p {
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
    }
`