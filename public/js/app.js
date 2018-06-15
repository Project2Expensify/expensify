$(function(){


<<<<<<< HEAD

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
    
=======
  

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
        //alert("User found");
        // redirect to dashboard
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
      var user = data.user;
      var userId = user.id;

      console.log(data);
  //   $.ajax({
  //     url: /dashboard,
  //     method: 'GET',
  //     data: {}
  // })

>>>>>>> 60f5c89647138e025b9bcdd0e0287adcd02d84a7
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
<<<<<<< HEAD
    });
    
=======
    };
    /*
>>>>>>> 60f5c89647138e025b9bcdd0e0287adcd02d84a7
    zingchart.render({ 
      id : 'myChart', 
      data : myConfig, 
      height: 400, 
      width: "100%" 
    });
  }





});
    */
})
})

