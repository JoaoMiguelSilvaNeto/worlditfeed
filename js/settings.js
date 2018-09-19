// Javascript file for settings.html

function getCategories()	{
	
	//Call WebService that returns Categories
	
	var categories = "[{ value: 'Noticias', label: 'Notícias'},{ value: 'Informacoes', label: 'Informações'},{value: 'Contactos', label: 'Contactos'}]";
	
	return categories;
	
}

$(document).ready(function(){
	
	var $appTabs 				= $("#panelTabs").getCtrl();
	var eventIdTextInputCtrl 	= $("#eventId").getCtrl();
	var authKeyTextInputCtrl 	= $("#authKey").getCtrl();

	if(eventIdTextInputCtrl.getValue() == "")	{
		
		$appTabs.showTabNotification(1, 'Event ID missing!');
		
	}
	else if (authKeyTextInputCtrl.getValue() == "")	{
		
		$appTabs.showTabNotification(1, 'Authorization Key missing!');
		
	}
	else if(eventIdTextInputCtrl.getValue() == "" && authKeyTextInputCtrl.getValue() == "")	{
		
		$appTabs.showTabNotification(1, 'Event ID and Authorization Key missing!');
		
	}
	
	
	$("#category").getCtrl().onChange(function(value){
        console.log(value, ' selected');
        
        Wix.Data.Public.set("category", value, { scope: 'APP' }, 
    			function(d){console.log('ooooo->'+d['category'])},function(f){console.log(f)});
    });
	
	/*$("#supportButton").getCtrl().onClick(function(){
		window.open('mailto:joao.neto@worldit.pt?subject=Information Request');
     });*/
	
	$("#main-cta").getCtrl().onClick(function(){
		$appTabs.setValue(1);
     });
	
	
	
	

 
});

