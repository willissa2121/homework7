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
  let n = new Date();
  let timer = n.getTime()



  ref.push({
    time: time,
    name: name,
    destination: destination,
    freq: freq,
    minutesAway: 20
  });






})




database.ref().on("child_added", function (data) {
  let newRow = $("<tr>");
  let nameItem = $("<td>");
  nameItem.text(data.val().name);

  let timeItem = $("<td>");
  timeItem.text(data.val().time);

  let destinationItem = $("<td>");
  destinationItem.text(data.val().destination);

  let freqItem = $("<td>");
  freqItem.text(data.val().freq);

  let minutesItem = $("<td>");
  minutesItem.text(data.val().minutesAway)

  newRow.append(nameItem, destinationItem, freqItem, timeItem, minutesItem)
  $("#train-table").append(newRow)
})


