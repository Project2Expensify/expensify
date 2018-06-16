$(function() {
  console.log("loaded");

  $("#login").on("click", function(event) {
    //grab user login inputs
    var userNameInput = $("#userName");

    var userName = userNameInput.val();

    // create new user
    $.ajax({
      url: "/api/login/user",
      method: "POST",
      data: {
        user_name: userName
      }
    }).done(function(data) {
      //redirect to users dashboard
      if (data.user) {
        //alert("User found");
        // redirect to dashboard
        window.location.href = "dashboard?user_id=" + data.user.id;
      } else {
        //alert("User not found");
      }
    });
  });

  $("#create").on("click", function(event) {
    event.preventDefault();

    //grab user login inputs
    var userNameInput = $("#userName");
    var budgetInput = $("#budget");

    var userName = userNameInput.val();
    var budget = budgetInput.val();

    // create new user
    $.ajax({
      url: "/api/create/user",
      method: "POST",
      data: {
        user_name: userName,
        budget: budget
      }
    }).done(function(data) {
      //redirect to users dashboard
      var user = data.user;
      var userId = user.id;

      console.log(data);
      //   $.ajax({
      //     url: /dashboard,
      //     method: 'GET',
      //     data: {}
      // })
    });
  });

  $("#submitExpense").on("click", function(event) {
    event.preventDefault();

    //grab expense form inputs
    var dateInput = $("#date");
    var categoryInput = $("#category");
    var descriptionInput = $("#description");
    var amountInput = $("#amount");

    var date = dateInput.val();
    var category_id = categoryInput.val();
    var description = descriptionInput.val();
    var amount = amountInput.val();

    var userId = "1";

    // we want to get category data for this expense but sequelize wont populate category information in server response
    // solution: make two ajax calls simultaneously with $.when()

    // we first store ajax calls in variables
    const categoryPromise =  $.ajax({
      url: "http://localhost:8080/api/categories/?id=" + category_id,
      method: "GET",
      
    });

    const expensePromise = $.ajax({
      url: "http://localhost:8080/api/expenses/",
      method: "POST",
      data: {
        description: description,
        date: date,
        category_id: category_id,
        amount: amount,
        user_id: userId
      }
    });

    $.when( categoryPromise, expensePromise ).then( function( categoryResponse, expenseResponse ) {
      $("#tableBody").append("<tr><td>" + expenseResponse[0].date + "</td><td>" + expenseResponse[0].description + "</td><td>" + categoryResponse[0].name + "</td><td>"  + expenseResponse[0].amount);

      dateInput.val("");
      categoryInput.val("")
      descriptionInput.val("")
      amountInput.val("") 

    });

    // //send form data
    // $.ajax({
    //   url: "http://localhost:8080/api/expenses/",
    //   method: "POST",
    //   data: {
    //     description: description,
    //     date: date,
    //     category_id: category_id,
    //     amount: amount,
    //     user_id: userId
    //   }
    // }).then(function(data) {
    //   console.log(data);


    //   // Add each expense's data into the table
    //   $("#tableBody").append("<tr><td>" + data.date + "</td><td>" + data.description + "</td><td>" + data.category + "</td><td>"  + data.amount);
    // });
  });

  //Pie chart
  var myConfig = {
    type: "pie",
    title: {
      text: "Pie Chart"
    },
    series: [
      { values: [59] },
      { values: [55] },
      { values: [30] },
      { values: [28] },
      { values: [15] }
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
});
