// Javascript file for settings.html

function getCategories()	{
	
	//Call WebService that returns Categories
	
	var categories = "[{ value: 'Noticias', label: 'Notícias'},{ value: 'Informacoes', label: 'Informações'},{value: 'Contactos', label: 'Contactos'}]";
	
	return categories;
	
}

function setPanelNotifications($appTabs, eventId, authKey){
	
	//Check if TextInput is populated, otherwise show tab notification
	if(eventId == null && authKey == null)	{
		
		$appTabs.showTabNotification(1, 'Event ID and Authorization Key missing!');
		
	}
	else if (authKey == null)	{
		
		$appTabs.showTabNotification(1, 'Authorization Key missing!');
		
	}
	else if(eventId == null)	{
		
		$appTabs.showTabNotification(1, 'Event ID missing!');
		
	}

	
}

$(document).ready(function(){
	
	//Variables
	var $appTabs 				= $("#panelTabs").getCtrl();
	var eventIdTextInputCtrl 	= $("#eventId").getCtrl();
	var authKeyTextInputCtrl 	= $("#authKey").getCtrl();
	
	var auth = [];
	
	$.when(getEventId(), getAuthKey()).then(showData());

	
	//Check events for TextInput on Event Id and Authorization Key
	eventIdTextInputCtrl.onChange(function(value){
        
        Wix.Data.Public.set("eventId", value, { scope: 'COMPONENT' }, function(d){
        	
        	auth[0] = d['eventId'];
        	
        	setPanelNotifications($appTabs, auth[0], auth[1]);
        	
        },function(f){console.log(f)});
    });
	
	authKeyTextInputCtrl.onChange(function(value){
        
        Wix.Data.Public.set("authKey", value, { scope: 'COMPONENT' }, function(d){
        	
        	auth[1] = d['authKey'];
        	
        	setPanelNotifications($appTabs, auth[0], auth[1]);
        	
        },function(f){console.log(f)});
    });
	
	
	//Check event when changing feed category
	$("#category").getCtrl().onChange(function(value){
        console.log(value, ' selected');
        
        Wix.Data.Public.set("category", value, { scope: 'APP' }, 
    			function(d){console.log('ooooo->'+d['category'])},function(f){console.log(f)});
    });
	
	
	//Button Actions
	/*$("#supportButton").getCtrl().onClick(function(){
		window.open('mailto:joao.neto@worldit.pt?subject=Information Request');
     });*/
	
	$("#main-cta").getCtrl().onClick(function(){
		$appTabs.setValue(1);
     });
	
	function showData()	{
		console.log('showData');
		console.log(auth);
		console.log(auth[0]);
		console.log(auth[1]);
			
		setPanelNotifications($appTabs, auth[0], auth[1]);
		
	}
	
	function getEventId()	{
		console.log('getEventId');
		//var eventId;
		
		//Populate TextInput with Event Id and Authorization Key. 
		//Getting values stored in Wix.Data.Public
		Wix.Data.Public.get("eventId", { scope: 'COMPONENT' }, function(d){
			
			eventIdTextInputCtrl.setValue(d['eventId']);
			
			//eventId = d['eventId'];
			auth.push(d['eventId']);
			console.log(auth[0]);
			
			
		},function(f){console.log(f)});
		
		//return eventId;
		
		
	}

	function getAuthKey()	{
		console.log('getAuthKey');
		//var authKey;
		
		Wix.Data.Public.get("authKey", { scope: 'COMPONENT' }, function(d){
			
			authKeyTextInputCtrl.setValue(d['authKey']);
			
			//authKey = d['authKey'];
			auth.push(d['authKey']);
			
			
		},function(f){console.log(f)});
		
		//return authKey;
		
	}
	

});