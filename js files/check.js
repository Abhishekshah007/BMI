const height = document.querySelector('#b2');
const age = document.querySelector('#age');
const weight = document.querySelector('#b3');
const btn = document.querySelector('#btn');
const data = document.querySelector('#m_bmi');

const redct = document.querySelector('#d_plan');



const clear = () => {

    height.value = "";
    age.value = "";
    weight.value = "";
    btn.disabled = false;
}

const unhide = () => {

    var x = document.querySelector('#d_plan');


    x.style.display = "block";


}






btn.addEventListener('click', () => {

    h = height.value;
    a = age.value;
    w = weight.value;

    if (a <= 0 || a.trim() <= 0 || h <= 0 || h.trim() <= 0 || w <= 0 || w.trim() <= 0) {

        function presentAlert() {
            const alert = document.createElement('ion-alert');
            alert.header = 'Alert';
            alert.subHeader = 'opps!';
            alert.message = 'entered correct parameter';
            alert.buttons = ['OK'];

            document.body.appendChild(alert);
            return alert.present();
        }
        return presentAlert();
        clear();

    }
    pound = w * 2.2045;

    ht_m = h;
    integer = Math.floor(ht_m);

    decimal = (ht_m - integer) * 10;

    inch = ((integer * 12) + decimal);


    result1 = (703 * pound) / (inch * inch);

    const den = document.createElement('ion-item');

    den.innerHTML = ` <b> Your BMI : ${result1}
                        </b> <br/>
                        `;
    data.appendChild(den);
    btn.disabled = true;

    unhide();

    clear();



});



redct.addEventListener('click', () => {

    window.location.replace("./dietPlan.html" + '?result=' + result1);
})
