
  // Add active class to the current button (highlight it)
  var header = document.getElementById("myDIV");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
    });
  }



function myFunction() {
    var doctor_name = document.getElementById('DrName').value;
    var doctor_qual = document.getElementById("Qualifications").value;
    var doctor_add = document.getElementById("Address").value;
    var doctor_mob = document.getElementById("Mobile").value;
    var patient_name = document.getElementById("PatientName").value;
    var age = document.getElementById("Age").value;
     var exam = document.getElementById("Examinations").value;
    var Diagnosis=document.getElementById("Diagnosis").value ;
    var others = document.getElementById("others").value;
    var date = (new Date()).toISOString().slice(0, 10).split("-").reverse().join("/");

    document.getElementById("doc_name").innerHTML = doctor_name;
    document.getElementById("doc_qual").innerHTML = doctor_qual;
    document.getElementById("doc_add").innerHTML = doctor_add;
    document.getElementById("doc_mob").innerHTML = doctor_mob;
    document.getElementById("pat_name").innerHTML = patient_name;
    document.getElementById("pat_age").innerHTML = age;
    document.getElementById("mod_date").innerHTML = date;
    document.getElementById("diag").innerHTML = Diagnosis ;
     document.getElementById("inves").innerHTML = exam;
    document.getElementById("ins").innerHTML = others;

    var count = document.getElementById("co").childElementCount;
    console.log(count)
    for (i = 0; i < count; i++) {
        var drug_name = document.getElementsByClassName("drug")[i].firstElementChild.firstElementChild.innerHTML;
        console.log(drug_name)
        var drug_dose = document.getElementsByClassName("drug")[i].firstElementChild.nextElementSibling.innerHTML;
        console.log(drug_dose)
        var drug_details = `
            <h3 class="font">
                ${drug_name}
                <h3 >${drug_dose}</h3>
            </h3>`
        var rx = document.createElement('li')
        var pre_drugs = document.getElementsByClassName('med')[0]
        rx.innerHTML = drug_details
        pre_drugs.append(rx)
    }

}


function Drugs() {
    var name = document.getElementById("DrugN").value;
    var strength = document.getElementById("Strength").value;
    var strengthunit = document.getElementById("Strengthunit").value;
    var pre = document.getElementById("pre").value;
    var dose = document.getElementById("Dose").value;
    var doseunit = document.getElementById("doseunit").value;
    var freq = document.getElementById("freq").value;
    var route = document.getElementById("route").value;
    var drug = `
    <h1 class="detail in">
        <span>${pre} ${name} ${strength} ${strengthunit}</span>
        <button class="btn-danger butn" type="button"><i class="fa fa-trash"></i></button>
        <h2 class="detail">&emsp;&emsp;${dose} ${doseunit} ${route} ${freq}</h2>
    </h1>`
    var Drug = document.createElement('li')
    Drug.classList.add('drug')
    Drug.classList.add('mb-5')
    var drugs = document.getElementsByClassName('part4')[0]
    Drug.innerHTML = drug
    drugs.append(Drug)
    Drug.getElementsByClassName('btn-danger')[0].addEventListener('click', removeDrug)


}

function removeDrug(event) {
    var buttonClicked = event.target
    console.log(buttonClicked.parentElement.parentElement.parentElement)
    buttonClicked.parentElement.parentElement.parentElement.remove()
}

document.onkeyup = (e) => {
    if (e.target.tagName === 'INPUT') {
        const canSubmit = [...document.forms.theForm.querySelectorAll('input[type="text"]')]
            .every(i => {
                return i.value
            })
        document.forms.theForm.querySelector('input[type="submit"]').disabled = !canSubmit
    }
}
const canSubmit = [...document.forms.theForm.querySelectorAll('input[type="text"]')]
    .every(i => {
        return i.value
    })
document.forms.theForm.querySelector('input[type="submit"]').disabled = !canSubmit

let input = document.querySelector("input");
input.addEventListener("submit", (event) => {
    event.preventDefault();
})
