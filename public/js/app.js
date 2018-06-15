$(function(){



  var username = $("meta[name='username']").attr("content");
  
  var endpoint = 'https://localhost:8080/api/expenses/'
  
  $.ajax({
    method: 'GET',
    url: endpoint + username,
    success: function(data){
      setChart()
    },
    error: function(error_data){
      console.log("error")
      console.log("error_data")
    }
    
  })


  function setChart(){

    var pieChart = document.getElementById("mychart")

    var myConfig = new Chart(pieChart, {
      "type":"pie",
      "title":{
        "text":"Pie Chart"
      },
      "series":[
        {"values":[]},
        {"values":[55]},
        {"values":[30]},
        {"values":[28]},
        {"values":[15]}
      ]
    });
    
    zingchart.render({ 
      id : 'myChart', 
      data : myConfig, 
      height: 400, 
      width: "100%" 
    });
  }




});