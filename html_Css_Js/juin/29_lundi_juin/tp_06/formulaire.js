function validation() {
  form1();
  validationCheckbox(document.forms["form4"].elements, "Q4");
  validationCheckbox(document.forms["form5"].elements, "Q5");
  validationCheckbox(document.forms["form6"].elements, "Q6");
  validationCheckbox(document.forms["form7"].elements, "Q7");
  validationCheckbox(document.forms["form8"].elements, "Q8");
  validationCheckbox(document.forms["form9"].elements, "Q9");
  validationCheckbox(document.forms["form10"].elements, "Q10");
  validationCheckbox(document.forms["form11"].elements, "Q11");
  validationCheckbox(document.forms["form12"].elements, "Q12");
  validationCheckbox(document.forms["form13"].elements, "Q13");
}
function form1() {
  var form1 = document.forms["form1"];
  console.log(
    `Q1 : ${form1.marque1.value}\n
       Q2 : ${form1.marque2.value}\n
       Q3 : ${form1.marque3.value}`
  );
}

function validationCheckbox(checkboxElements, numberQuestion) {
  var str = "";
  for (const i in checkboxElements) {
    var c = checkboxElements[i];
    if (c.type === "checkbox" || c.type === "radio") {
      if (c.checked) {
        str += c.value + ", ";
      }
    }
  }
  console.log(`${numberQuestion} : ${str}`);
}
