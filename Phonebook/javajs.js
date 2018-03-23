//java.js

function add_row() {
  var tablebody = document.getElementById('tablebody');
  var row = tablebody.insertRow( tablebody.rows.length );
  var objInputButton = document.createElement("input");
  objInputButton.setAttribute("type", "button");
  objInputButton.setAttribute("value", "Del");
  objInputButton.setAttribute("onclick", "delete_row();");
  objInputButton.setAttribute("id","Del");
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = document.getElementById('ln').value;
  cell2.innerHTML = document.getElementById('fn').value;
  cell3.innerHTML = document.getElementById('pn').value;
  cell4.appendChild(objInputButton);
}

function delete_row() {
  var tablebody = document.getElementById('tablebody');
  if (tablebody.rows.length < 1) return;
  tablebody.deleteRow( tablebody.rows.length-1 );
}