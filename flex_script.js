let example = document.querySelector(".example");
const justify_b = document.querySelectorAll(".justify .button");
let justify_prev = "";
const align_b = document.querySelectorAll(".align .button");
let align_prev = "";
const flex_in = document.querySelectorAll(".inputt");
const direct_b = document.querySelectorAll(".direction .button")

const elements = document.querySelectorAll(".example .element")

function change_justify(value) {
    return function () {
        if (example.style.justifyContent !== value) {
            justify_prev = example.style.justifyContent;
            example.style.justifyContent = value;
        }
        else if (justify_prev.length !== 0) {
            example.style.justifyContent = justify_prev;
        }

    }
}

function change_align(value) {
    return function () {
        if (example.style.alignItems !== value) {
            align_prev = example.style.alignItems;
            example.style.alignItems = value;
        }
        else if (justify_prev.length !== 0) {
            example.style.alignItems = align_prev;
        }

    }
}

function change_flex() {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.flexBasis = flex_in[0].value.toString() + "px";
            elements[i].style.flexGrow = flex_in[1].value.toString();
            elements[i].style.flexShrink = flex_in[2].value.toString();
        }
}

function change_flex_personal(element) {
    return function () {
        element.style.flexBasis = flex_in[0].value.toString() + "px";
        element.style.flexGrow = flex_in[1].value.toString();
        element.style.flexShrink = flex_in[2].value.toString();
    }
}

function change_direction(value) {
    return function () {
        example.style.flexDirection = value;
    }
}

for (let i = 0; i < justify_b.length; i++) {
    justify_b[i].addEventListener("click", change_justify(justify_b[i].textContent));
}
for (let i = 0; i < align_b.length; i++) {
    align_b[i].addEventListener("click", change_align(align_b[i].textContent));
}

let apply = document.querySelector(".change_all")
apply.addEventListener("click", change_flex)

let apply1 = document.querySelector(".change_1")
let apply2 = document.querySelector(".change_2")
let apply3 = document.querySelector(".change_3")

apply1.addEventListener("click", change_flex_personal(elements[0]))
apply2.addEventListener("click", change_flex_personal(elements[1]))
apply3.addEventListener("click", change_flex_personal(elements[2]))

for (let i = 0; i < direct_b.length; i++) {
    direct_b[i].addEventListener("click", change_direction(direct_b[i].textContent));
}




