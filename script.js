
function calculate() {
    let name = document.getElementById("name").value;

    let m1 = Number(document.getElementById("mark1").value);
    let m2 = Number(document.getElementById("mark2").value);
    let m3 = Number(document.getElementById("mark3").value);

    if (!name || m1 < 0 || m1 > 100 ||
        m2 < 0 || m2 > 100 ||
        m3 < 0 || m3 > 100) {
        alert("Enter valid details and marks between 0 and 100");
        return;
    }

    let total = m1 + m2 + m3;
    let percentage = total / 3;

    let status = (m1 >= 35 && m2 >= 35 && m3 >= 35)
        ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML =
        "Student: " + name +
        "<br>Total: " + total + "/300" +
        "<br>Percentage: " + percentage.toFixed(2) + "%" +
        "<br>Result: " + status;
}
