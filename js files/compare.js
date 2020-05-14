const c_detail = document.querySelector('#c-check');
const age = document.querySelector('#age');
const weight = document.querySelector('#Weight');
const height = document.querySelector('#height');
const btn = document.querySelector('#btn');
const prev_BMI = document.querySelector('#perv_bmi');

const clear = () => {

    age.value = "";
    weight.value = "";
    height.value = "";
    btn.disabled = false;
}



btn.addEventListener('click', () => {

    a1 = age.value;
    w1 = weight.value;
    h1 = height.value;
    prev = prev_BMI.value;

    if (w1 <= 0 || h1 <= 0) {


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

        //clear();

    }

    pound = w1 * 2.2045;

    ht_m = h1;
    integer = Math.floor(ht_m);

    decimal = (ht_m - integer) * 10;

    inch = ((integer * 12) + decimal);


    BMI = (703 * pound) / (inch * inch);

    changes = prev - BMI;

    const detail = document.createElement('ion-element');

    detail.innerHTML = `<ion-list>
                        <h3>Age:${a1}</h3>
                        <h2>Current BMI: ${BMI}</h2>
                        <h1>Changes:</h1>
                        <h4><b>${changes}</b></h4>
                        <hr><hr>
                        <h6 style="font-size:12px;color:green;"> /If  changes came 'with' negative sign 'than' your BMI reduced !Good!</h6> 
                        <h6 style="font-size:12px;color:orange;"> /If changes came 'with' positive sign 'than' your BMI increased !Good!</h6> 
                        </ion-list>`

    c_detail.appendChild(detail);

    btn.disabled = true;

    clear();


});

