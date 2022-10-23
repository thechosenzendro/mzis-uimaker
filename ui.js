jstomik = []
function countObjectKeys(obj) {
    return Object.keys(obj).length;
}
function MakeNewInput() {
    newelement = {}
    newelement["tag"] = "input"
    newelement["onchange"] = "ChangeContractData(this.id)"
    newelement["id"] = document.getElementById("idecko").value;
    newelement["placeholder"] = document.getElementById("placeholder").value;

    jstomik.push(newelement);
    Render(jstomik)
}
function MakeNewElement() {
    newelement = {}
    newelement["tag"] = document.getElementById("tag").value;
    newelement["id"] = document.getElementById("id").value;

    jstomik.push(newelement);
    Render(jstomik)
}

function AddNewProperty() {
    id = document.getElementById("ide").value;
    property = document.getElementById("property").value;
    value = document.getElementById("value").value;
    for (var i = 0; i < jstomik.length; i++) {
        obj = jstomik[i]
        if (obj['id'] == id) {
            obj[property] = value;

        }
    }
    Render(jstomik)
}

function Render(objekt) {
    const myNode = document.getElementById("editordiv");
    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
    }
    for (var i = 0; i < objekt.length; i++) {
        newdomobj = objekt[i]
        if (newdomobj["tag"] != undefined) {
            tagheader = newdomobj["tag"]
            element = document.createElement(tagheader)
        }

        for (var u = 1; u < countObjectKeys(newdomobj); u++) {
            tagproperty = Object.keys(newdomobj)[u]
            if (tagproperty == "innerHTML") { element.innerHTML = newdomobj[tagproperty] }
            const property = document.createAttribute(tagproperty); property.value = newdomobj[tagproperty]; element.setAttributeNode(property);
        }
        document.getElementById('editordiv').appendChild(element);


    }
    console.log(jstomik)
}
function RenderData() {
    navigator.clipboard.writeText(JSON.stringify(jstomik));
    alert("Zkopírováno!")
}