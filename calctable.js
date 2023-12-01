<script src="https://bossanova.uk/jspreadsheet/v4/jexcel.js"></script>
<link rel="stylesheet" href="https://bossanova.uk/jspreadsheet/v4/jexcel.css" type="text/css" />
 <script src="https://jsuites.net/v4/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v4/jsuites.css" type="text/css" />

<script type="text/javascript">
 var checkAnswer=[];
</script>

<p style="display:none;">\(x^2\)</p>

 [[jsxgraph input-ref-ans2='ans2Ref' width="0px" height="0px"]]
var readonly=false;
//hide or show the fields for design
if ({#design#} == 1) { document.getElementById("data{#rqm#}" ).style.display = "block" }

 var dataInput = document.getElementById(ans2Ref);

var zData=["","","","","","","","","","","","","","",""];

var data = [zData.slice(0,{#Titles#}.length)];

if (dataInput.value!=( dataInput.value != '')) {data = JSON.parse(dataInput.value)} else {dataInput.value=JSON.stringify(data)};

var widths=[];
for (let i=0;i<{#Titles#}.length;i++){widths[i]=120};

var table=jspreadsheet(document.getElementById('spreadsheet{#rqm#}'), {
  data:data,
  colHeaders:{#Titles#},
 colWidths: widths,
    columns: [
        { type: 'dropdown',   source:[  'יחס מולים',  'מסה',  'מסה מולרית',  'מספר אלקטרונים', 'מספר חלקיקים', 'מספר מולים', 'נפח גז', 'נפח מולרי', 'נפח תמיסה', 'ריכוז' ]  },
        { type: 'dropdown',   source:["gr","gr/mol","kg","kJ","ℓiter","ℓiter/mol","M","ml","mol","mol/ℓiter","atoms","molecules"  ]   },
     
     ]
});

table.onafterchanges = function() {dataInput.value=JSON.stringify(table.getData())};

if ({#hint_enable#}==1){
var btn = document.createElement("BUTTON");  //<button> element
var t = document.createTextNode("hint"); // Create a text node
btn.appendChild(t);   

btn.onclick = function(e){
    e.preventDefault(); 
    table.setData({#hintdata#})
};  
document.getElementById("myView{#rqm#}").appendChild(btn);
}

 var rqm={#rqm#};
checkAnswer[rqm] = function() {
  console.log("hi");
  // Get the total number of rows and columns
  var rowCount = table.getData().length;
  var colCount = table.getHeaders().length;

  // Iterate through all cells and make them read-only
  for (var i = 0; i < rowCount; i++) {
    for (var j = 0; j < colCount; j++) {
      table.getCell(i, j).setEditable(false);
    }
  }
}
[[/jsxgraph]]

  <div id="spreadsheet{#rqm#}"} dir="ltr" ></div>
  <div id="myView{#rqm#}"></div>
                                      
