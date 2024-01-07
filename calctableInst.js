<script src="https://rawcdn.githack.com/raedshorrosh/calc/8146613d0a409575be7514c420a69d6e67416f4b/jexcel.js"></script>
<link rel="stylesheet" href="https://rawcdn.githack.com/raedshorrosh/calc/3070ff0e73239c4e5cef044d4cb3a84dd4925fa2/jexcel.css" type="text/css" />
<script src="https://rawcdn.githack.com/raedshorrosh/calc/e2314623eb24ac6307538026626463d67c90e562/jsuites.js"></script>
<link rel="stylesheet" href="https://rawcdn.githack.com/raedshorrosh/calc/e2314623eb24ac6307538026626463d67c90e562/jsuites.css" />

 <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Material+Icons" />

 <div style="display:none;">\(x^2\)</div>
 <div style="display: flex; justify-content: center;" width="100%">
   <div id="spreadsheet" dir="ltr" ><div style="display:none;">\(x^2\)</div></div>
 </div>
 <div id="myView" style="display:none;" ></div>
                                 
<script type="text/javascript">
 var checkAnswer=[];
</script>


  <style>
    .jexcel {
    font-size:16 px;
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
//try {tmp= document.getElementById("feedback"); tmp.setAttribute("id",uid_feedback);}catch(err) {};

var readonly=false;
//hide or show the fields for design
if ({#design#} == 1) { document.getElementById("data{#rqm#}" ).style.display = "block" }

 var dataInput = document.getElementById(ans2Ref);

//var zData=["","","","","","","","","","","","","","",""];

//var data = [zData.slice(0,{#Titles#}.length)];
var data={#hintdata#};
if (dataInput.value!=( dataInput.value != '')) {data = JSON.parse(dataInput.value)} else {dataInput.value=JSON.stringify(data)};

var widths=[180,120,120];
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
  allowManualInsertColumn:1,             
  allowInsertColumn:1,
  allowDeleteColumn:0,
            
    columns: [
        { type: 'dropdown',   source:{#items#} },
        { type: 'dropdown',   source:{#units#}  },
        { type: 'text',   wordWrap:true  },                                      
     
     ],
         toolbar:toolbar,
  updateTable: function (instance, cell, col, row, val, label, cellName) {
   var isAttemptMode = window.location.href.indexOf('attempt.php') !== -1;
   if (isAttemptMode && readonly) cell.classList.add('readonly');                                    
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
     
// Get the data as a nested array
const data = table.getData();
const columnLength = data[0].length;  // Assuming the first row has all columns
var columnIndex=3;
// Insert columns between existing columns
for (let i = 0; i < columnLength-3; i++) {
    table.insertColumn(1, columnIndex, false);  // Insert 1 empty column after the current column
 columnIndex=columnIndex+2;
 
}
   table.setValue(1,4,'raed');
/*
var container = document.createElement('div');
container.style.position = 'absolute';
container.style.left = '-9999px';

// Attach the container to the document body
document.body.appendChild(container);

// Initialize the jspreadsheet table in the container
var teacherTable = jspreadsheet(container, {
  data: ({#data#})
});
   const studentData = table.getData();
const teacherData = teacherTable.getData();

for (let rowIndex = 0; rowIndex < studentData.length; rowIndex++) {
    let teacherColumnIndex = 3;  // Starting column index for the teacher
    for (let studentColumnIndex = 3; studentColumnIndex < studentData[rowIndex].length; studentColumnIndex += 2) {
        const studentValue = table.getValue(rowIndex, studentColumnIndex);
        const teacherValue = teacherTable.getValue(rowIndex, teacherColumnIndex);

        // Check if either student or teacher cell is not empty
        if (studentValue !== undefined || teacherValue !== undefined) {
        //    const grade = studentValue === teacherValue ? "✔️" : "❌";
             const grade = studentValue === teacherValue ? "ok" : "no";
            const gradeColumnIndex = studentColumnIndex + 1;  // Adjust the column index for the student table
            console.log(`Row: ${rowIndex}, Column: ${gradeColumnIndex}, Grade: ${grade}`);
            table.setValue(rowIndex, gradeColumnIndex, grade);
           
        }

        // Increment teacherColumnIndex by 1
        teacherColumnIndex++;
    }
};
 */
     //readonly=true;
     table.refresh();
     table.insertRow();
    if (hint) localStorage.setItem("showhint",{#rqm#});
    if (islast)  localStorage.setItem("final",{#rqm#}); 
    if (localStorage.getItem("final")=={#rqm#}) try {
     tmp= document.getElementById("feedback{#rqm#}"); tmp.setAttribute("id",uid_feedback);
    var table2=jspreadsheet(document.getElementById(uid_feedback), {
     data:({#data#}),
     colHeaders:{#Titles#},
     colWidths: widths,
     allowManualInsertColumn:0,             
     allowInsertColumn:0,
     allowDeleteColumn:0,
     allowManualInsertRow:0,             
     allowInsertRow:0,
     allowDeleteRow:0,
          
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
