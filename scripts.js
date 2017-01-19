$("#submit").click(function() {
	var firstName = $("#nameField").val();
	Cookies.set("Name",firstName);
	console.log(firstName);
})

if (Cookies.get("Name") == null) {
	$("#welcome").text("Wecome to our page that you are visiting for the first time")
} else {
	var name = Cookies.get("Name")
	$("#welcome").text("hello "+name+", you are visiting this site agian.")
}