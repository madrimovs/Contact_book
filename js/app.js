function elements(element, parent = document) {
  return parent.querySelector(element);
}

const elForm = elements("#form");
const elName = elements("#name");
const elPhone = elements("#phone");
const elRelation = elements("#relation");
const elSubmit = elements("#submit");
const elContactG = elements("#contact-g");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  function createEl(create, parent = document) {
    return parent.createElement(create);
  }
  const elContact = createEl("div");
  const elH4 = createEl("h4");
  const elP = createEl("p");
  const elNum = createEl("p");

  elContact.classList = "bg-light shadow border rounded ps-3 mb-3";
  elNum.classList = "text-primary ";
  elP.classList = "border-bottom";
  elContactG.appendChild(elContact);
  elContact.appendChild(elH4);
  elContact.appendChild(elP);
  elContact.appendChild(elNum);

  elH4.textContent = elName.value;
  elP.textContent = elRelation.value;
  elNum.textContent = elPhone.value;

  elName.value = null;
  elRelation.value = null;
  elPhone.value = null;
});
