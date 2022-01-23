led.enable(false)
irRemote.connectInfrared(DigitalPin.P9)
pins.servoWritePin(AnalogPin.P0, 90)
pins.servoWritePin(AnalogPin.P4, 135)
let p0p4_status = 0
basic.forever(function () {
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_1)) {
        if (p0p4_status == 0) {
            for (let index = 0; index <= 135; index++) {
                pins.servoWritePin(AnalogPin.P4, 135 - index)
                basic.pause(10)
            }
            for (let index = 0; index <= 90; index++) {
                pins.servoWritePin(AnalogPin.P0, 90 - index)
                basic.pause(10)
            }
            p0p4_status = 1
        } else {
            for (let index = 0; index <= 90; index++) {
                pins.servoWritePin(AnalogPin.P0, index)
                basic.pause(10)
            }
            for (let index = 0; index <= 135; index++) {
                pins.servoWritePin(AnalogPin.P4, index)
                basic.pause(10)
            }
            p0p4_status = 0
        }
    }
})
