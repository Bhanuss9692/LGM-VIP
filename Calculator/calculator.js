
function appendToResult(char) {
    document.getElementById("result").textContent += char;
}

function clearResult() {
    document.getElementById("result").textContent = "";
}

function calculateResult() {
    try {
        const result = eval(document.getElementById("result").textContent);
        document.getElementById("result").textContent = result;
    } catch (error) {
        document.getElementById("result").textContent = "Error";
    }
}
