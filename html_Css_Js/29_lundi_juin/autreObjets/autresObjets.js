function cli(form) {
  form.result.value =
    "document.case.check.checked vaut " +
    document.Case.Test.checked +
    "=>" +
    document.forms[0].Test.checked; /* autre façon de faire */
}
