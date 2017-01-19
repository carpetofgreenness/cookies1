$("#submit").click(function() {
	var firstName = $("#nameField").val();
	Cookies.set("Name",firstName);
	console.log(firstName);
})

if (Cookies.get("Name") == null) {
	$("#welcome").text("Wecome to our page that you are visiting for the first time")
	$("#welcome2").text("You're seeing this for the first time!")
	$("#welcome2").animate( { "font-size" : "5em" } )
} else {
	var name = Cookies.get("Name")
	$("#welcome").text("hello "+name+", you are visting this site agian.")
	$("#welcome2").text("hello "+name+", you have been here before. We dont' care.")
}


//second page
if (Cookies.get("HasVisited") == null) {
	$("#welcome2").text("Hi "+Cookies.get("Name")+"! You're seeing this for the first time!")
	$("#welcome2").animate(
		{ "font-size" : "5em" },
		function complete() {
			Cookies.set("HasVisited",true);
			console.log("you have visited this page");
		}
	)
} else {
	var name = Cookies.get("Name")
	$("#welcome").text("hello "+name+", you are visting this site agian.")
	$("#welcome2").text("hello "+name+", you have been here before. We dont' care.")
}