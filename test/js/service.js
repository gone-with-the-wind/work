angular.module('binding.services',[])
.factory('bindingDataService', function($http){

     console.log('entered the service')
     var bindingData = function(action, params){
         return $http({
                 method: 'POST',
                 url: 'http://89e812c3.ngrok.io/KindlePocket/'+action+'',
                 // pass in data as strings
                 data: $.param(params),
                 headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
             }).then(function(data,status){
                console.log("success! status:"+status);
                alert("binding successfully!")
             },function(data,status){
                 alert("binding error!")
                 console.log("error! status:"+status);
             })
                 
             
     }

     return {
        bindingData: function(action,params){
         console.log('entered the function')
            return bindingData(action,params);
        }
     }

});