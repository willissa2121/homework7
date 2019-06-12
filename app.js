let name = ""
let time = ""
let freq = ""
let destination = ""
let database = firebase.database();
let ref = database.ref()

$(".btn").on("click", function () {

  if ($("#train-name").val() === "" || $("#train-time").val() === "" || $("#train-freq").val() === "" || $("#train-destination").val() === "") {
    let newDiv = $("<h4>");
    newDiv.text("please fill all fields");
    newDiv.css("color", "red")
    $(".container-fluid").append(newDiv)

  }
  else {
    name = $("#train-name").val()
    time = $("#train-time").val()
    // console.log($("#train-time").val())
    destination = $("#train-destination").val()
    freq = $("#train-freq").val()
  }

 

  ref.set({
    time: time,
    name: name,
    destination: destination,
    freq: freq,
    minutesAway: 20
  });

  ref.on("value", function (data) {
    let newRow = $("<tr>")
    let newName = $("<td>")
    let newTime = $("<td>")
    let newDestionation = $("<td>")
    let newFreq = $("<td>")
    let newMinutes = $("<td>")

    newName.text(data.val().name)
    newTime.text(data.val().time);
    newFreq.text(data.val().freq);
    newDestionation.text(data.val().destination);
    newMinutes.text(data.val().minutesAway)
    newRow.append(newName, newTime, newDestionation, newFreq, newMinutes)
    $("#train-table").append(newRow)
  })





})




ref.on("value", function (data) {
  let newRow = $("<tr>")
  let newName = $("<td>")
  let newTime = $("<td>")
  let newDestionation = $("<td>")
  let newFreq = $("<td>")
  let newMinutes = $("<td>")

  newName.text(data.val().name)
  newTime.text(data.val().time);
  newFreq.text(data.val().freq);
  newMinutes.text(data.val().minutesAway);
  newDestionation.text(data.val().destination);
  newRow.append(newName, newTime, newDestionation, newFreq, newMinutes)
  $("#train-table").append(newRow)
})


