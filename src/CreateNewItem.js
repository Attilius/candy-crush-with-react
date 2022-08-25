import { colors } from "./BasicVariables";

const CreateNewItem = () => {
    const randomNumberToRandomColor = Math.floor(Math.random() * colors.length);
    return colors[randomNumberToRandomColor];
}

export default CreateNewItem;