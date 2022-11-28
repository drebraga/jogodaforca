import styled from "styled-components";

const Chute = ({ gameStart, setInputGuess, inputGuess, endGameGuess }) => {
    return (
        <>
            <StyledChute>
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
            </StyledChute>
        </>
    )
};

export default Chute;

const StyledChute = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
    }
    input[type="text"] {
        width: 353px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #cccccc;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        margin: 0 15px;
    }
    input[value="Chutar"] {
        width: 100px;
        height: 40px;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        background-color: #e1ecf4;
        border: 1px solid #7aa7c7;
        border-radius: 3px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #3c76a1;
    }
`;