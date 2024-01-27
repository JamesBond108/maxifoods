let a = 20;
a ++;
document.getElementById('p1').innerHTML = a;

let b = 30 < 10;
let result = document.getElementById('p2').innerHTML = b.toString();


function handleClick() {

    let first = document.getElementById('mytext');
    let second = first.value < 18;
    if (second) {
        document.getElementById('p3').innerHTML = "Congratulations, you are fit for this test";
    }else{
        document.getElementById('p3').innerHTML = "Am sorry dear, you are too old for this test";
    };
}

document.getElementById('menu-button').addEventListener('click', function menuClick() {
    let drink = document.getElementById('select1');
    let drinkOption = drink.options[drink.selectedIndex];
    let drinkValue = drinkOption.value;
    document.getElementById('p4').innerHTML = drinkValue
})


function handleButtonClick() {

   
    
        // Get the select element by its ID
    var selectElement = document.getElementById('mySelect');

    // Get the selected option
    var selectedOption = selectElement.options[selectElement.selectedIndex];

    // Get the value of the selected option
    var selectedValue = selectedOption.value;
    document.getElementById('output').innerHTML = 'Selected Option Value: ' + selectedValue;
    // Work with the selected value (e.g., display it)
  }

  function drinkClick() {
    
        var SelectDrink = document.getElementById('yourSelect');

    var selectOption = SelectDrink.options[SelectDrink.selectedIndex];

    var yourValue = selectOption.value;
    document.getElementById('p6').innerHTML = yourValue;
  }



// function orderList() {
    
    // if (drinkOption = drink) {
    //     document.getElementById('p4').innerHTML = drinkOption;
    // }else{
    //     alert('pls make a choice');
    // }
// }



// function handleButtonClick() {
//     // Get the select element by its ID
//     var selectElement = document.getElementById('mySelect');

//     // Get the selected option
//     var selectedOption = selectElement.options[selectElement.selectedIndex];

//     // Get the value of the selected option
//     var selectedValue = selectedOption.value;

//     // Work with the selected value (e.g., display it)
//     document.getElementById('output').innerHTML = 'Selected Option Value: ' + selectedValue;
//   }

