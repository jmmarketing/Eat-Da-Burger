console.log("Connected to JS File"); 


// ################ JAVASCRIPT ON CLICK FUNCTIONS ################

$(function () {

    $("#order-burger").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#new-burger").val().trim(),
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("Created New Burger")
                location.reload(); 
            }
        )
    });


    $(document).on("click", "#eat-burger", function(event){
        var id = $(this).data("id"); 
        var newDevour = {
            devoured: true
        };

        $.ajax("/api/burgers/" +id, {
            type: "PUT",
            data: newDevour
        }).then(
            function(){
                console.log("Changed Devoured to True")
                location.reload(); 
            }
        )
    })



















})