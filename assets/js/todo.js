$("ul").on("click","li",function(){
    $(this).toggleClass("completed");	
    }
);
//click on x to delete todo
$("ul").on("click","span",function(event){
	$(this).parent().remove(); 
	event.stopPropagation(); 
    }
);

$("input[type='text'").keypress(function(event){
    if(event.which === 13){ 
    	//add a new todo
    	var todoText= $(this).val();
    	$(this).val("");
    	//create a new li and append
    	$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " +   todoText  + "</li>");

    }
});

$(".fa-plus").on("click",function(){
	$("input").fadeToggle([200]);
    
    }
);