$(function() {

  function Places (placeName, why, landmark, timeOfYear, note, phoneNumber, how) {
    this.placeName=placeName;
    this.why=why;
    this.landmark=landmark;
    this.timeOfYear=timeOfYear;
    this.notes=note;
    this.pn=phoneNumber;
    this.how=how;

  }

  Places.prototype.fullDestination = function () {
    return "You went to "+ this.placeName.bold() + " in " + this.timeOfYear + " " + "to " + this.why + ". It was near " + this.landmark + ". You had this to say about it " + this.notes.italics() + ". You recommended that someone else get there by" + this.how + ".";
  }


  //business-back logic

  //user-interface logic
  $("form#form").submit(function(event) {
    event.preventDefault();

    var inputNameOfPlace = $("input#nameOfPlace").val();
    var inputWhy = $("input#why").val();
    var inputLandmarks = $("#landmarks").val();
    var inputTimeOfYear = $("#timeOfYear").val();
    var inputNotes = $("#notes").val();
    var inputphoneNumber = $("#phoneNumber").val();
    var inputHow = $("#how").val();


    var newPlace = new Places(inputNameOfPlace,inputWhy,inputLandmarks,inputTimeOfYear,inputNotes,inputphoneNumber,inputHow);
    console.log(newPlace);
    $("#destinations").append("<li><span class='destination'>"+ newPlace.fullDestination()+ "</li>");
  });
})
