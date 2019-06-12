let name = ""
let time = ""
let freq = ""
let destination = ""

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

  let database = firebase.database()

  let ref = database.ref()

  ref.set({
    time: time,
    name: name,
    destination: destination,
    freq: freq
  });

  ref.on("value", function (data) {
    let newRow = $("<tr>")
    let newName = $("<td>")
    let newTime = $("<td>")
    let newDestionation = $("<td>")
    let newFreq = $("<td>")

    newName.text(data.val().name)
    newTime.text(data.val().time);
    newFreq.text(data.val().freq);
    newDestionation.text(data.val().destination);
    newRow.append(newName, newTime, newDestionation, newFreq)
    $("#train-table").append(newRow)
  })





})
i = 0;
if (i === 0) {
  window.onload = function () {
    console.log("looping correctly")

    let database = firebase.database();
    let ref = database.ref()
    ref.on("value", function (data) {
      let newRow = $("<tr>")
      let newName = $("<td>")
      let newTime = $("<td>")
      let newDestionation = $("<td>")
      let newFreq = $("<td>")

      newName.text(data.val().name)
      newTime.text(data.val().time);
      newFreq.text(data.val().freq);
      newDestionation.text(data.val().destination);
      newRow.append(newName, newTime, newDestionation, newFreq)
      $("#train-table").append(newRow)
    })

  }
}
i++
