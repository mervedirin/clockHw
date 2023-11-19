let userName = prompt("isminizi giriniz");
let firsName = document.querySelector("#myName");
firsName.innerHTML = userName;

// var func = () => {
//     let clock = document.querySelector("#myClock")
//     let date = new Date()
//     var stringDay = date.toLocaleDateString('tr-TR', { weekday: 'long' });
//     var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

//     var dateString = `${time} ${stringDay};`
//     clock.innerHTML = dateString;
// }

function func() {
    let clock = document.querySelector("#myClock")
    let date = new Date()
    var stringDay = date.toLocaleDateString('tr-TR', { weekday: 'long' });
    var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    var dateString = `${time} ${stringDay};`
    clock.innerHTML = dateString;
}
func();
setInterval(func, 1000);