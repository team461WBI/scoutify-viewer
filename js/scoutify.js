function parse_file_new(data) {
    alert(data);
    dragons = eval(data);
   $.map(dragons, function(dragon,i) {
       new_team(dragon.number, dragon.matches, dragon.name, dragon.value);
   });
}
function new_team(team_number, dragons,name,rank) {
    $("#accordion").append("<p></p><div class='panel panel-default'><div class='panel-heading'><h4 class='panel-title'><a class='accordion-toggle' data-toggle='collapse' data-parent='#accordion'href='#collapse" + team_number + "'>"+ rank +". Team " + team_number +": " + name + "</a></h4></div><div id='collapse" + team_number + "'class='panel-collapse collapse'> <div class='panel-body'><table class='table table-striped'><thead><tr id='erste" + team_number + "'><th>Team Number</th></tr></thead><tbody><tr id='zweite"+ team_number +"'><td>" + team_number+"</td></tr></tbody></table></div></div>" );
    $.map(dragons, function(unicorn,i){
      $.map(unicorn, function(header,key) {
         $("#erste" + team_number).append("<th>" + key +"</th>");
	 $("#zweite" + team_number).append("<td>" + header + "</th>");
      });
    });
}


$(function() {
var bg = document.getElementById("fml");
bg.addEventListener("dragenter", dragenter, false);  
bg.addEventListener("dragover", dragover, false);  
bg.addEventListener("drop", handleFileSelect, false);
});
function dragenter(e) {  
    e.stopPropagation();  
    e.preventDefault();  
    }  
  
function dragover(e) {  
    e.stopPropagation();  
    e.preventDefault();  
    }  

function abortRead() {
    reader.abort();
    }

function errorHandler(evt) {
    switch(evt.target.error.code) {
	case evt.target.error.NOT_FOUND_ERR:
	alert('File Not Found!');
	break;
	case evt.target.error.NOT_READABLE_ERR:
	alert('File is not readable');
	break;
	case evt.target.error.ABORT_ERR:
	break; // noop
	default:
	alert('An error occurred reading this file.');
	};
    }

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var dt = evt.dataTransfer;
    var files = dt.files;
    var numFiles = files.length;
    var output;
    for(var i = 0, numFiles = files.length; i < numFiles; i++){
	var file = files[i];
	var reader;
	output = file;
	reader = new FileReader();
	reader.onerror = errorHandler;
	reader.onabort = function(e) {
	    };
	reader.onload = function(e) {
	  parse_file_new(this.result);
	}
	reader.readAsText(file);
        alert(file);
    }
}