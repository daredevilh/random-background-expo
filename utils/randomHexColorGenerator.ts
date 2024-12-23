const hexSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const generationStringSize = 6;

export const generateRandomHexColor = () => {
    const chosenSymbols = [];
    for (let i = 0; i < generationStringSize; i++) {
        chosenSymbols.push(
            hexSymbols[Math.round(Math.random() * hexSymbols.length)],
        );
    }
    return `#${chosenSymbols.join('')}`;
};
