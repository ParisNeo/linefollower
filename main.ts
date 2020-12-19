let LL = 0
let LR = 0
serial.redirectToUSB()
k_Bit.Led(COLOR.black)
let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
    LR = pins.digitalReadPin(DigitalPin.P12)
    LL = pins.digitalReadPin(DigitalPin.P13)
    serial.writeLine("DATA:" + convertToText(LL) + "," + convertToText(LR))
    serial.writeValue("LL", 0)
    serial.writeValue("LR", 0)
    if (LL == 0 && LR == 1) {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 25)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, 25)
    } else if (LL == 1 && LR == 0) {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, 25)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 25)
    } else if (LL == 1 && LR == 1) {
        k_Bit.run(DIR.RunForward, 20)
    } else {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 25)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, 25)
    }
    basic.pause(100)
})
