<script src="https://bossanova.uk/jspreadsheet/v4/jexcel.js"></script>
<link rel="stylesheet" href="https://bossanova.uk/jspreadsheet/v4/jexcel.css" type="text/css" />
 <script src="https://jsuites.net/v4/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v4/jsuites.css" type="text/css" />
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Material+Icons" />
 

 <div id="spreadsheet"} dir="ltr" ></div>
 <div id="myView"></div>
                                 
<script type="text/javascript">
 var checkAnswer=[];
</script>

<p style="display:none;">\(x^2\)</p>

 [[jsxgraph input-ref-ans2='ans2Ref' width="0px" height="0px"]]
 const jexcelElements = document.querySelectorAll('.jexcel tbody tr td.readonly');

for (const element of jexcelElements) {
  element.style.color = 'rgb(0, 0, 0)';
};

var board = JXG.JSXGraph.initBoard(divid, {});
var uid_table=board.generateId();
var uid_hint="hint"+board.generateId();

var tmp=document.getElementById("spreadsheet"); tmp.setAttribute("id",uid_table);
     tmp= document.getElementById("myView"); tmp.setAttribute("id",uid_hint);           
var readonly=false;
//hide or show the fields for design
if ({#design#} == 1) { document.getElementById("data{#rqm#}" ).style.display = "block" }

 var dataInput = document.getElementById(ans2Ref);

var zData=["","","","","","","","","","","","","","",""];

var data = [zData.slice(0,{#Titles#}.length)];

if (dataInput.value!=( dataInput.value != '')) {data = JSON.parse(dataInput.value)} else {dataInput.value=JSON.stringify(data)};

var widths=[];
for (let i=0;i<{#Titles#}.length;i++){widths[i]=120};
var toolbar=[
        {
            type: 'i',
            content: 'undo',
            onclick: function() {
                table.undo();
            }
        },
        {
            type: 'i',
            content: 'redo',
            onclick: function() {
                table.redo();
            }
        },
       
        {
            type: 'select',
            k: 'font-family',
            v: ['Arial','Verdana']
        },
        {
            type: 'select',
            k: 'font-size',
            v: ['9px','10px','11px','12px','13px','14px','15px','16px','17px','18px','19px','20px','21px','22px','23px','24px','25px']
        },
        {
            type: 'i',
            content: 'format_align_left',
            k: 'text-align',
            v: 'left'
        },
        {
            type:'i',
            content:'format_align_center',
            k:'text-align',
            v:'center'
        },
        {
            type: 'i',
            content: 'format_align_right', 
            k: 'text-align',
            v: 'right'
        },
        {
            type: 'i',
            content: 'format_bold',
            k: 'font-weight',
            v: 'bold'
        },
        {
            type: 'color',
            content: 'format_color_text',
            k: 'color'
        },
        {
            type: 'color',
            content: 'format_color_fill',
            k: 'background-color'
        },
    ];

var table=jspreadsheet(document.getElementById(uid_table), {
  data:data,
  colHeaders:{#Titles#},
  colWidths: widths,
 
            
    columns: [
        { type: 'dropdown',   source:[  'יחס מולים',  'מסה',  'מסה מולרית',  'מספר אלקטרונים', 'מספר חלקיקים', 'מספר מולים', 'נפח גז', 'נפח מולרי', 'נפח תמיסה', 'ריכוז' ]  },
        { type: 'dropdown',   source:["gr","gr/mol","kg","kJ","ℓiter","ℓiter/mol","M","ml","mol","mol/ℓiter","atoms","molecules"  ]   },
     
     ],
         toolbar:toolbar,
    updateTable: function (instance, cell, col, row, val, label, cellName) {
         if (readonly) {cell.classList.add('readonly')}
    }, 
    columnSorting:false,
});

table.onafterchanges = function() {dataInput.value=JSON.stringify(table.getData())};
table.onbeforechange= function(instance, cell, x, y, value){if (readonly) {cell.classList.add('readonly')}};
var StayOn;
  var showhint=function(){
      StayOn=true;
      var btn = document.createElement("BUTTON");  //<button> element
      var t = document.createTextNode("hint"); // Create a text node
      btn.appendChild(t);   
      btn.onclick = function(e){
         e.preventDefault(); 
         table.setData({#hintdata#})
      };  
    document.getElementById(uid_hint).appendChild(btn);
  }   
 if (({#hint_enable#}==1)|| StayOn) showhint();

 var rqm={#rqm#};
checkAnswer[rqm] = function(hint) {
 readonly=true;
 table.insertRow();
 if (hint) showhint();

};
                   
[[/jsxgraph]]

      
