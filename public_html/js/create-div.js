/* Created on : Apr 27, 2018, 12:17:33 PM Author : Julio Bill Schvenger */

document.querySelector("#alimentar").addEventListener('click', createTable);
function createTable() {
    
    var exist = document.querySelector("#table-list-personagens");
    
    if (exist === null) {
    
        var table = document.createElement("table");
        table.setAttribute("id", "table-list-personagens");

        var thead = document.createElement("thead");
        table.appendChild(thead);

        var tr = document.createElement("tr");

        var th_personagem = document.createElement("th");
        th_personagem.setAttribute("id", "th-personagem");
        th_personagem.innerHTML = 'Personagens';

        var th_series = document.createElement("th");
        th_series.setAttribute("id", "th-series");
        th_series.innerHTML = 'Séries';

        var th_eventos = document.createElement("th");
        th_eventos.setAttribute("id", "th-eventos");
        th_eventos.innerHTML = 'Eventos';

        tr.appendChild(th_personagem);
        tr.appendChild(th_series);
        tr.appendChild(th_eventos);

        thead.appendChild(tr);

        var tbody = document.createElement("tbody");
        table.appendChild(tbody);

        createRegistros(tbody, 5);

        var div_list = document.querySelector("#div-list");
        div_list.appendChild(table);
    }
}

function createRegistros(tbody, qtde) {
    for (var i = 1; i < qtde; i++) {
        var tr_tbody = document.createElement("tr");
        tbody.appendChild(tr_tbody);

        var td1 = document.createElement("td");
        td1.innerHTML = i + '.0';
        var td2 = document.createElement("td");
        td2.innerHTML = i + '.1';
        var td3 = document.createElement("td");
        td3.innerHTML = i + '.2';

        tr_tbody.appendChild(td1);
        tr_tbody.appendChild(td2);
        tr_tbody.appendChild(td3);
    }
}

document.querySelector("#pesquisar").addEventListener('keyup', locateTable);
function locateTable() {
    
    var table = document.querySelector("#table-list-personagens");
    var str_locate = document.querySelector("#pesquisar").value;
    var rows = table.rows.length;
    var count = 0;

    for (var i = 1; i < rows; i++) {
        count = 0;
        for (var y = 0; y < 3; y++) {
            var str = new String(table.rows[i].cells[y].innerHTML);
            if (str.search(str_locate) < 0) {
                count = count+1;
            }
        }
        if (count === y) {
            table.rows[i].style.display = 'none';
        } else {
            table.rows[i].style.display = '';
        }
    }
}

/*
 <div id="div-list">
 <table id="table-list-personagens">
 <thead>
 <tr>
 <th id="th-personagem">Personagem</th>
 <th id="th-series">Séries</th>
 <th id="th-eventos">Eventos</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>1.0</td>
 <td>1.1</td>
 <td>1.2</td>
 </tr>
 <tr>
 <td>2.0</td>
 <td>2.1</td>
 <td>2.2</td>
 </tr>
 <tr>
 <td>3.0</td>
 <td>3.1</td>
 <td>3.2</td>
 </tr>
 <tr>
 <td>4.0</td>
 <td>4.1</td>
 <td>4.2</td>
 </tr>                        
 </tbody>
 </table>
 
 */