const diet = document.querySelector('#diet');



let c_bmi = document.location.search.replace(/^.*?\=/, '');


// console.log(c_bmi);



if (c_bmi <= 18.5) {

    const underweight = document.createElement('html');

    underweight.innerHTML = '<style>#btn{margin-top:20px;padding:20px;font-size:18px;text-decoration: none;top:50%;left:40%;position:relative;font-weight:800;font-family:Georgia;}<h1>You are Underweight you need /to be increase your BMI /to /at certian level</h1>' +
        '<h2> Why are you underweight.</h2>' +
        '<p>If diet /is the cause of your low weight, changing /to a healthy, balanced diet that provides the /right amount of calories for your age, height and how active you are can help you achieve a healthy weight</p>' +
        '<p>Aim /to gain weight gradually /until you reach a healthy weight.</p>' +
        '<button id="btn"><a style="text-decoration:none;color:green;" href="/resourcse/lose-weight">Get Your Diet Plan </a></button>';
    diet.appendChild(underweight);

}

else if (c_bmi >= 18.6 && c_bmi <= 25) {


    const normal = document.createElement('html');
    normal.innerHTML = '<h3 style="margin:20%;font-size:18px;color:green;top:50%;left:40%;font-weight:800;font-family:Georgia;">You are in a perfect shape so, for now you don\'t need  any kind of  diet paln for a time being stick with your current diet and check your BMI on every month and always compare your new BMI to previous one</h3>';
    diet.appendChild(normal);




} else {
    const overweight = document.createElement('html');

    overweight.innerHTML = '<style>#btn{margin-top:20px;padding:20px;font-size:18px;text-decoration: none;top:50%;left:40%;position:relative;font-weight:800;font-family:Georgia;}</style><h1 style="color:red;"> Your are Overweight you need to be lose your BMI to at certian level !</h1>' +
        '<h2>What causes overweight and obesity?</h2>' +
        '<p>People become overweight or obese from eating more calories than they burn up. Some things that may lead to this imbalance include:</p>' +
        '<ul><li>Poor diet Poor food choices</li><li>Lack of exercise</li><li>An inactive lifestyle (spending a lot of time watching television, playing video games, working on a computer, working late hours at the office, driving rather than walking)</li><li>A family history of being overweight or obese. Children whose parents eat high-calorie foods and are inactive tend to learn these same habits. Genes also play a role. They affect how much fat we store, and where it is stored.</li><li>Oversized or "supersized" food portions</li><li>Negative emotions like boredom, sadness, or anger, which may influence eating habits.</li></ul>' +
        '<button id="btn"><a style="text-decoration:none;color:green;" href="/resourcse/diet-Weight.pdf"> Get Your Diet Plan</button></a>';


    diet.appendChild(overweight);
}