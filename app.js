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




  ref.push({
    time: time,
    name: name,
    destination: destination,
    freq: freq
  });






})




database.ref().on("child_added", function (data) {
  let newRow = $("<tr>");
  let nameItem = $("<td>");
  nameItem.text(data.val().name);

  let timeItem = $("<td>");

  var firstTime = data.val().time
  var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
  var currentTime = moment();
  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
  var tRemainder = diffTime % data.val().freq;
  var tMinutesTillTrain = data.val().freq - tRemainder;


  timeItem.text(tMinutesTillTrain);

  let destinationItem = $("<td>");
  destinationItem.text(data.val().destination);

  let freqItem = $("<td>");
  freqItem.text(data.val().freq);

  let minutesItem = $("<td>");
  var nextTrain = moment().add(tMinutesTillTrain, "minutes");
  minutesItem.text("Arriving at: " + moment(nextTrain).format("hh:mm"))

  newRow.append(nameItem, destinationItem, freqItem, timeItem, minutesItem)
  $("#train-table").append(newRow)
})






