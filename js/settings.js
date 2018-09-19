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

	Wix.Data.Public.get("eventId", { scope: 'APP' }, function(d){
		
		eventIdTextInputCtrl.setValue(d);
		
	},function(f){console.log(f)});
	
	Wix.Data.Public.get("authKey", { scope: 'APP' }, function(d){
		
		authKeyTextInputCtrl.setValue(d);
		
	},function(f){console.log(f)});
	

	if(eventIdTextInputCtrl.getValue() == "" && authKeyTextInputCtrl.getValue() == "")	{
		
		$appTabs.showTabNotification(1, 'Event ID and Authorization Key missing!');
		
	}
	else if (authKeyTextInputCtrl.getValue() == "")	{
		
		$appTabs.showTabNotification(1, 'Authorization Key missing!');
		
	}
	else if(eventIdTextInputCtrl.getValue() == "")	{
		
		$appTabs.showTabNotification(1, 'Event ID missing!');
		
	}
	
	eventIdTextInputCtrl.onChange(function(value){
        
        Wix.Data.Public.set("eventId", value, { scope: 'APP' }, 
    			function(d){console.log('ggggg->'+d)},function(f){console.log(f)});
    });
	
	authKeyTextInputCtrl.onChange(function(value){
        
        Wix.Data.Public.set("authKey", value, { scope: 'APP' }, 
    			function(d){console.log('eeeee->'+d)},function(f){console.log(f)});
    });
	
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

