$(function(){


  

  $('#login').on('click', function(event){
      //grab user login inputs
    var userNameInput = $('#userName');
  
    var userName = userNameInput.val();
  
    // create new user
    $.ajax({
      url: "/api/login/user",
      method: 'POST',
      data: {
        user_name: userName
      }
    }).done(function(data){ //redirect to users dashboard
      if (data.user) {
        window.location.href = "dashboard?user_id=" + data.user.id;
      }
      else {
        //alert("User not found");
      }
    })

  });

  $('#create').on('click', function(event){
    event.preventDefault();

    //grab user login inputs
    var userNameInput = $('#userName');
    var budgetInput = $('#budget');

    var userName = userNameInput.val();
    var budget = budgetInput.val();

    // create new user
    $.ajax({
      url: "/api/create/user",
      method: 'POST',
      data: {
        user_name: userName,
        budget: budget
      }
    }).done(function(data){ //redirect to users dashboard
      var user = data[0];
      var success = data[1];
      if (user) {
        window.location.href = "dashboard?user_id=" + user.id;
      }
      else {
        alert("Error creating user...");
      }
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
    /*
    zingchart.render({ 
      id : 'myChart', 
      data : myConfig, 
      height: 400, 
      width: "100%" 
    });





});
    */
})
})

