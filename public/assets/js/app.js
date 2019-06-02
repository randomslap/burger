console.log("test");
$(document).ready(function () {
    $(".devour").on("click", function (event) {
        event.preventDefault()
        var id = $(this).data("id");

		var newDevoured = {
			devoured: true,
		};

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newDevoured,
		}).then(function() {
			console.log("devoured");
			location.reload();
        });
        console.log(id);
	});

	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newBurger = {
			burger_name: $("#name")
				.val()
                .trim(),
            devoured: false
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger,
		}).then(function() {
			console.log("new burger");
			location.reload();
		});
	});
});
