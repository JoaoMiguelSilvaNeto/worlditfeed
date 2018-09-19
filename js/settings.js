// Javascript file for settings.html

function getCategories()	{
	
	//Call WebService that returns Categories
	
	var categories = "[{ value: 'Noticias', label: 'Notícias'},{ value: 'Informacoes', label: 'Informações'},{value: 'Contactos', label: 'Contactos'}]";
	
	return categories;
	
}

//get Event ID from Wix Public Data
function getEventId($appTabs, eventIdTextInputCtrl)	{
	
	//Populate TextInput with Event Id and Authorization Key. 
	//Getting values stored in Wix.Data.Public
	Wix.Data.Public.get("eventId", { scope: 'COMPONENT' }, function(d){
		
		eventIdTextInputCtrl.setValue(d['eventId']);	
		
		if(d['eventId'].length == 0)	{
			
			$appTabs.showTabNotification(1, 'Account data missing!');
			
		}
		
	},function(f){console.log(f)});

	
}

//get Authorization Key from Wix Public Data
function getAuthKey($appTabs, authKeyTextInputCtrl)	{
	
	Wix.Data.Public.get("authKey", { scope: 'COMPONENT' }, function(d){
		
		authKeyTextInputCtrl.setValue(d['authKey']);
		
		if(d['authKey'].length == 0)	{
			
			$appTabs.showTabNotification(1, 'Account data missing!');
			
		}
			
		
	},function(f){console.log(f)});
	
}

//Manage Panel Notifications to alert user that Event ID/Authorization Key is missing
function setPanelNotifications($appTabs, eventId, authKey){
	
	//Check if TextInput is populated, otherwise show tab notification
	if(eventId.length == 0 && authKey.length == 0)	{
		
		$appTabs.showTabNotification(1, 'Event ID and Authorization Key missing!');
		
	}
	else if (authKey .length == 0 && eventId.length != 0)	{
		
		$appTabs.showTabNotification(1, 'Authorization Key missing!');
		
	}
	else if (authKey.length == 0)	{
		
		$appTabs.showTabNotification(1, 'Authorization Key missing!');
		
	}
	else if(eventId.length == 0 && authKey.length != 0)	{
		
		$appTabs.showTabNotification(1, 'Event ID missing!');
		
	}
	else if(eventId.length == 0)	{
		
		$appTabs.showTabNotification(1, 'Event ID missing!');
		
	}
	else if(eventId.length != 0 && authKey.length != 0)	{
		
		$appTabs.removeTabNotification(1);
		
	}

}


$(document).ready(function(){
	
	//Variables
	var $appTabs 				= $("#panelTabs").getCtrl();
	var eventIdTextInputCtrl 	= $("#eventId").getCtrl();
	var authKeyTextInputCtrl 	= $("#authKey").getCtrl();

	//get Event ID and Authorization Key from Wix Public Data,
	//and set them in the TextInputs
	eventId = getEventId($appTabs, eventIdTextInputCtrl);
	authKey = getAuthKey($appTabs, authKeyTextInputCtrl);
	
	
	//Check events on TextInput Event Id
	eventIdTextInputCtrl.onChange(function(value){
        
		//set variable on Wix Public Data
        Wix.Data.Public.set("eventId", value, { scope: 'COMPONENT' }, function(d){
        	
        	eventId = d['eventId'];
        	
        	//change panel tab notification
        	setPanelNotifications($appTabs, eventId, authKey);
        	
        },function(f){console.log(f)});
    });
	
	//Check events on TextInput Authorization Key
	authKeyTextInputCtrl.onChange(function(value){
        
		//set variable on Wix Public Data
        Wix.Data.Public.set("authKey", value, { scope: 'COMPONENT' }, function(d){
        	
        	authKey = d['authKey'];
        	
        	//change panel tab notification
        	setPanelNotifications($appTabs, eventId, authKey);
        	
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
		

});