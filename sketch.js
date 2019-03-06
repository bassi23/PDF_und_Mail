var pdf = new jsPDF("p", "mm", "a4"); // erzeugt pdf Objekt
let input;
let button;

function setup() {
  input = createElement('textarea'); // erzeugt Textfeld, dessen Inhalt als PDF gespeichert werden soll
  input.size(500, 200);
  button = createButton('PDF erzeugen'); // Button zum erzeugen
  button.mousePressed(abschicken);
}


function abschicken() {
  let pdfInput = input.value(); // Inhalt des Textfelds wird als Variable gespeichert
  let lines = pdf.setFontSize(11) //Schriftgröße 11
    .splitTextToSize(pdfInput, 180); //splittet den Textstring, sodass im PDF 180 Pixeln eine neue Zeile angefangen wird.
  pdf.text(10, 33 + 11 / 180, lines); //10: wo der Text links beginnt;
  //33 = wo es von oben aus beginnt;
  //11 = font-size
  //100: Absatzbreite
  pdf.save('Name des PDFs'); //Speichern
}


function sendMail() {
  var link = "mailto:me@example.com" +
    "?cc=myCCaddress@example.com" +
    "&subject=" + escape("This is my subject") +
    "&body=" + escape(document.getElementById('myText').value);

  window.location.href = link;
}


function spamcheck($field) {
  //filter_var() sanitizes the e-mail
  //address using FILTER_SANITIZE_EMAIL
  $field = filter_var($field, FILTER_SANITIZE_EMAIL);

  //filter_var() validates the e-mail
  //address using FILTER_VALIDATE_EMAIL
  if (filter_var($field, FILTER_VALIDATE_EMAIL)) {
    return true;
  } else {
    return false;
  }
}