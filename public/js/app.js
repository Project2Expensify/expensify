$(function(){

  $('#login').on('click', function(event){
    event.preventDefault();

    //grab user login inputs
    var firstNameInput = $('#firstName')
    var lastNameInput = $('lastName')
    var budgetInput = $('budget')

    var firstName = firstNameInput.val()
    var lastName = lastNameInput.val()
    var budget = budgetInput.val()

  $.ajax({
    url: /api/users,
    method: 'POST',
    data: {
      first_name: firstName,
      last_name: lastName,
      budget: budget,
    }
  }).then(function(data){
    $.ajax({
      url: /api/users,
      method: 'POST',
      data: {
        first_name: firstName,
        last_name: lastName,
        budget: budget,
      }
  })




  })

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




})

