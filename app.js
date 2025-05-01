import { addTwoNumbers as qoshish, subtractTwoNumbers as ayirish, multiplyTwoNumbers as kopaytirish, divideTwoNumbers as bolish, degreeNumbers as daraja } from './script.js';

window.addEventListener('DOMContentLoaded', function () {
    const firstInput = document.querySelector("#firstInput");
    const secondInput = document.querySelector("#secondInput");
    const qushishBtn = document.querySelector("#qushish");
    const ayirishBtn = document.querySelector("#ayirish");
    const kopaytirishBtn = document.querySelector("#kopaytirish");
    const bolishBtn = document.querySelector("#bolish");
    const darajaBtn = document.querySelector("#daraja");
    const result = document.querySelector(".result");

    if (!firstInput || !secondInput || !qushishBtn || !ayirishBtn || !kopaytirishBtn || !bolishBtn || !darajaBtn || !result) {
        console.error("HTML elementlari topilmadi. ID yoki class larni tekshiring.");
        return;
    }

    qushishBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let son1 = Number(firstInput.value);
        let son2 = Number(secondInput.value);

        if (isNaN(son1) || isNaN(son2)) {
            result.innerHTML = "Iltimos, to‘g‘ri sonlar kiriting";
            return;
        }

        let natija = qoshish(son1, son2);
        result.innerHTML = `Result: ${natija}`;
    });

    ayirishBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let son1 = Number(firstInput.value);
        let son2 = Number(secondInput.value);

        if (isNaN(son1) || isNaN(son2)) {
            result.innerHTML = "Iltimos, to‘g‘ri sonlar kiriting";
            return;
        }

        let natija = ayirish(son1, son2);
        result.innerHTML = `Result: ${natija}`;
    });

    kopaytirishBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let son1 = Number(firstInput.value);
        let son2 = Number(secondInput.value);

        if (isNaN(son1) || isNaN(son2)) {
            result.innerHTML = "Iltimos, to‘g‘ri sonlar kiriting";
            return;
        }

        let natija = kopaytirish(son1, son2);
        result.innerHTML = `Result: ${natija}`;
    });

    bolishBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let son1 = Number(firstInput.value);
        let son2 = Number(secondInput.value);

        if (isNaN(son1) || isNaN(son2)) {
            result.innerHTML = "Iltimos, to‘g‘ri sonlar kiriting";
            return;
        }

        try {
            let natija = bolish(son1, son2);
            result.innerHTML = `Result: ${natija}`;
        } catch (error) {
            result.innerHTML = error.message;
        }
    });

    darajaBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let son1 = Number(firstInput.value);
        let son2 = Number(secondInput.value);

        if (isNaN(son1) || isNaN(son2)) {
            result.innerHTML = "Iltimos, to‘g‘ri sonlar kiriting";
            return;
        }

        let natija = daraja(son1, son2);
        result.innerHTML = `Result: ${natija}`;
    });
});