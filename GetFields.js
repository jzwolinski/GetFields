
function GetPostData(){
  try{
  // on script load get non-portal school info and populate for leadedit & verification		
  	SQL="select fieldname,fieldvalue from TABLE where id='"+document.main.NTTCID.value+"' and ttclist='"+document.main.TTCLIST.value+"' order by inserttime";	
  	waSQLQuery(SQL, GetPostDataSuccess, InsertError);		
   }
   catch(e){}	 	
}

function GetPostDataSuccess(r){	
	try{				
		document.getElementById("waitdata").innerHTML = '';	
		if(r != null){
      for (i=0; i<r.length; i++){
        add(a_GetValue(r, i, 'FieldName'), a_GetValue(r, i, 'FieldValue'));
      }
    }
	}
	catch(e){}	 	
}

function add(name, value){
  try{	
	  foo=document.getElementById("waitdata");	
	  element=document.createElement("input");		
	  element.setAttribute("type","text");
	  element.setAttribute("value",value);
	  element.setAttribute("name",name);
	  foo.appendChild(element);
  catch(e){}	 	  
}
