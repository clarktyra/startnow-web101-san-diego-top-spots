$(document).ready(function() {
// write your code here
$.getJSON("data.json", function (callingSdInfo){
        for(i=0; i<callingSdInfo.length; i++){
        
        $(".table").append(
            "<tr> <td class ='column1'>" + callingSdInfo[i].name +
            "</td> <td class ='column2'>" + callingSdInfo[i].description +
            "</td> <td class ='column3'>" + "<a href='https://www.google.com/maps?q="+ callingSdInfo[i].location + "'" + " class='button' target='_blank'>" +"Open In Google Maps" +  "</a>" +
            "</td> </tr>");
          }

          

    

    for(j=0; j<callingSdInfo.length; j++) {

        var johny = {lat:callingSdInfo[j].location[0] , lng:callingSdInfo[1]};
        var mike = callingSdInfo[j].name;
        // //var jimmy = new google.map.Marker({
        //     postion: johny,
        //     title = mike,
       
    }
});
   // $('#table').append(mydata);
    
});
   




 