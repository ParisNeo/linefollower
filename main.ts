radio.onReceivedNumber(function (receivedNumber) {
    running = receivedNumber
    if (running == 1) {
        k_Bit.run(DIR.TurnLeft, 50)
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # # #
            . # . . .
            . . . . .
            `)
    } else if (running == 2) {
        k_Bit.run(DIR.TurnRight, 50)
        basic.showLeds(`
            . . . . .
            . . . # .
            # # # # #
            . . . # .
            . . . . .
            `)
    } else {
        k_Bit.run(DIR.RunForward, 100)
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
let running = 0
serial.redirectToUSB()
k_Bit.Led(COLOR.black)
let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
pins.digitalWritePin(DigitalPin.P0, 0)
radio.setGroup(1)
basic.forever(function () {
    if (running != 0) {
        running = 0
        basic.pause(200)
    } else {
        k_Bit.carStop()
    }
})
