function explain_callback(name, age ,task){
    task();
    console.log('Hello', name);
    console.log('Your age', age);
}
function washHand() {
    console.log("Wash your hand with soap.");
}
function takeShower() {
    console.log("Take Shower.")
}
function scrollFacebook() {
    console.log("Scroll facebook but don't like any post")
}
explain_callback('Sogir uddin', 17,washHand);
explain_callback('Jogir Uddin', 13, takeShower);
explain_callback('Mugir uddin',21,scrollFacebook)