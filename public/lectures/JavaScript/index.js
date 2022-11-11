
function addAplusB() {
    let a = document.getElementById("a").value; // read as srring
    a = parseInt(a);
    let b = document.getElementById("b").value;
    b = parseInt(b);
    document.getElementById("c").innerHTML = a + b;
}

function sayHello() {
    alert("Hello!")
}


(function() {
    console.log("Hello World")
const house = {
    rooms: 3,
    baths: 3,
    sqf: 1300
 };
document.getElementById("rooms").innerHTML = house.rooms;
document.getElementById("baths").innerHTML = house.baths;
document.getElementById("squareFeet").innerHTML = house.sqf;




var theElement = document.getElementById("input_a");
var theValue = theElement.value;
alert(theValue);

var result = document.getElementById("result");
result.innerHTML = 2 + 3;



var scores = [90,89,78,67];

document.write("<h1>Scores</h1>");
document.write(scores);

document.write(`
        <table border = '1'>
            ${
    scores.map((score, idx) => `
                    <tr>
                        <td>scores[${idx}]</td>
                        <td>${score}</td>
                    </tr>
                `).join('')
}
        </table><br>
      `)


var table = "<table border = '1'>";
for (var j in scores) {
    var row = "<tr>";
    var col = "<td>";
    col += "scores["+j+"]";
    col += "</td>";
    row += col;
    col = "<td>";
    col += scores[j];
    col += "</td>";
    row += col;
    row += "</tr>";
    table += row;
}
table += "</table>";
document.write(table);

document.write(`
        <ul>
            ${
    scores.map((score, idx) =>  `
                    <li>
                        scores[${idx}] = ${score}
                    </li>
                `).join('')
}
        </ul>
      `);

document.write("<ul>");
for(let i in scores) {
    document.write("<li>scores["+i+"] = " + scores[i]);
    document.write("</li>");
}
document.write("</ul>");



var total = 0;
for(var i=0; i<scores.length; i++) {
    total += scores[i];
}
var average = total / scores.length;
// document.write("total = " + total + "<br/>");
// document.write("average = "+average+"<br/>");

document.write(`<br/>total =  ${total}<br/>`);
document.write(`average = ${average}<br/>`);

var today = new Date();
document.write("<h2>The Month</h2>")
document.write(today.getMonth());
document.write(today.getFullYear());
document.write(today.getDate());

document.write(`
        <h2>Hello World!</h2>
        <ul>
            <li>Pich up the kids</li>
            <li>Buy milk</li>
        </ul>
    `);

var h1Hello = document.getElementById('hello');
h1Hello.innerText = ("Hello World");
h1Hello.style.color = 'blue';
h1Hello.style.display = 'none';
})()