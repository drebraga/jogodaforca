import styled from "styled-components";

const Letras = ({ gameStart, chosedLetter, compareHiddenLetter }) => {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <Alphabet>
            {alfabeto.map((l) => (
                <Letter
                    data-test="letter"
                    disabled={(!gameStart) ? !chosedLetter.includes(l) : chosedLetter.includes(l)}
                    onClick={() => compareHiddenLetter(l)}
                    key={l}
                    buttonColor="disabled"
                >{l.toUpperCase()}</Letter>
            ))}
        </Alphabet>
    )
};

export default Letras;

const Alphabet = styled.div`
    margin: 2%;
    width: 702px;
    display: flex;
    flex-wrap: wrap;
`;

const Letter = styled.button`
color: ${props => (!props.disabled) ? "#39739d" : "#798a9f"};
background-color: ${props => (!props.disabled) ? "#e1ecf4" : "#9faab5"};
font-weight: 700;
font-size: 16px;
line-height: 19px;
width: 40px;
height: 40px;
border: 1px solid #7aa7c7;
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;
margin: 6px;
`;
