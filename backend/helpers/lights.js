var gpio = require('onoff').Gpio;
var LED
var blinkInterval

function blinkLED() {
    console.log(LED.readSync())
    if (LED.readSync() === 0) {
        LED.write(1); // (turn LED on)
    } else {
        LED.write(0); // (turn LED off)
    }
}

    function endBlink() { //function to stop blinking
        LED.writeSync(0); // Turn LED off
        LED.unexport(); // Unexport GPIO to free resources
        clearInterval(blinkInterval); // Stop blink intervals
    }

module.exports = {
    blink: function b() {
        LED = new gpio(4, 'out');
        blinkInterval = setInterval(blinkLED, 250);
        setTimeout(endBlink, 5000); //stop blinking after 5 seconds
    }
}
