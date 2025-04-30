import Button from "@mui/material/Button";

const changeTEXT = (event) => {
    console.log(event.target);
    event.target.innerText = event.target.innerText + '被點了';
}

const MultiButton = (num) => {
    var output = [];
    for (let i = 1; i <= num; i++)
        output.push(<Button variant="contained" color="primary" onClick={changeTEXT}>第{i}個按鍵</Button>);
    return output;
}

export default MultiButton;