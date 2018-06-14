$(function(){

  

  //Pie chart
    var myConfig = {
      "type":"pie",
      "title":{
        "text":"Pie Chart"
      },
      "series":[
        {"values":[59]},
        {"values":[55]},
        {"values":[30]},
        {"values":[28]},
        {"values":[15]}
      ]
    };
    
    zingchart.render({ 
      id : 'myChart', 
      data : myConfig, 
      height: 400, 
      width: "100%" 
    });




});