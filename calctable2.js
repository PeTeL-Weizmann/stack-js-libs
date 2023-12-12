<script src="https://rawcdn.githack.com/raedshorrosh/calc/8146613d0a409575be7514c420a69d6e67416f4b/jexcel.js"></script>
<link rel="stylesheet" href="https://rawcdn.githack.com/raedshorrosh/calc/3070ff0e73239c4e5cef044d4cb3a84dd4925fa2/jexcel.css" type="text/css" />
<script src="https://rawcdn.githack.com/raedshorrosh/calc/e2314623eb24ac6307538026626463d67c90e562/jsuites.js"></script>
<link rel="stylesheet" href="https://rawcdn.githack.com/raedshorrosh/calc/e2314623eb24ac6307538026626463d67c90e562/jsuites.css" />

 <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Material+Icons" />

 <div style="display:none;">\(x^2\)</div>
 <div style="display: flex; justify-content: center;" width="100%">
 <div style="display:none;">\(x^2\)</div>
   <div id="spreadsheet" dir="ltr" ><div style="display:none;">\(x^2\)</div></div>
 </div>
 <div id="myView" style="display:none;" ></div>
                                 
<script type="text/javascript">
 var checkAnswer=[];
</script>


  <style>
    .jexcel {
    font-size:16;
}
 </style>
  <div style="display:none;">\(x^2\)
 [[jsxgraph input-ref-ans2='ans2Ref' width="0px" height="0px"]]
var last=false;
var board = JXG.JSXGraph.initBoard(divid, {});
var uid_table=board.generateId();
var uid_hint="hint"+board.generateId();
var uid_feedback="feedback"+board.generateId();

var tmp=document.getElementById("spreadsheet"); tmp.setAttribute("id",uid_table);
     tmp= document.getElementById("myView"); tmp.setAttribute("id",uid_hint);

var readonly=false;
//hide or show the fields for design
if ({#design#} == 1) { document.getElementById("data{#rqm#}" ).style.display = "block" }

 var dataInput = document.getElementById(ans2Ref);

var zData=["","","","","","","","","","","","","","",""];

var data = [zData.slice(0,{#Titles#}.length)];
if (dataInput.value!=( dataInput.value != '')) {data = JSON.parse(dataInput.value)} else {dataInput.value=JSON.stringify(data)};

var widths=[180,80,120];
for (let i=3;i<{#Titles#}.length;i++){widths[i]=120};
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
        { type: 'dropdown',   source:{#items#} },
        { type: 'dropdown',   source:{#units#}  },
        { type: 'text',   wordWrap:true  },                                      
     
     ],
         toolbar:toolbar,
  updateTable: function (instance, cell, col, row, val, label, cellName) {
       if (readonly) cell.classList.add('readonly');
        dataInput.value=JSON.stringify(instance.jspreadsheet.getData());
    },    
         columnSorting:false,
});

table.onbeforechange= function(instance, cell, x, y, value){if (readonly) {cell.classList.add('readonly')}};
  
      var btn = document.createElement("BUTTON");  //<button> element
      var t = document.createTextNode("hint"); // Create a text node
      btn.appendChild(t);   
      btn.onclick = function(e){
         e.preventDefault(); 
         table.setData({#hintdata#});
       
      };  
   var hint_el= document.getElementById(uid_hint);
       hint_el.appendChild(btn);
     
 //if ({#hint_enable#}!=1) {hint_el.style.display = "none"};
if ( ({#hint_enable#}==1) || (localStorage.getItem("showhint")=={#rqm#}) ) {hint_el.style.display = "block"};         
 var rqm={#rqm#};
  
  checkAnswer[rqm] = function(hint,islast) {
     readonly=true;
     table.insertRow();
    if (hint) localStorage.setItem("showhint",{#rqm#});
    if (islast)  localStorage.setItem("final",{#rqm#}); 
    if (localStorage.getItem("final")=={#rqm#}) try {
    tmp= document.getElementById("feedback"); tmp.setAttribute("id",uid_feedback);
    var table2=jspreadsheet(document.getElementById(uid_feedback), {
     data:({#data#}),
     colHeaders:{#Titles#},
     colWidths: widths,
          
     columns: [
         { type: 'dropdown',   source:{#items#}},
        { type: 'dropdown',   source:{#units#} },
        { type: 'text',   wordWrap:true  },
          
     ],
         toolbar:toolbar,
    updateTable: function (instance, cell, col, row, val, label, cellName) {
        cell.classList.add('readonly')
    }, 
    columnSorting:false,
});
  
}        
  catch(err) {};
     table.deleteRow();

   
  };

                                     
[[/jsxgraph]]
     
</div>
