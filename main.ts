led.enable(false)
irRemote.connectInfrared(DigitalPin.P9)
let p0_state = 0
pins.servoWritePin(AnalogPin.P0, 90)
let p4_status = 0
pins.servoWritePin(AnalogPin.P4, 135)
basic.forever(function () {
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_1)) {
        if (p0_state == 0 && p4_status == 1) {
            for (let index = 0; index <= 90; index++) {
                pins.servoWritePin(AnalogPin.P0, index)
                basic.pause(10)
            }
            p0_state = 1
        } else if (p0_state == 1 && p4_status == 1) {
            for (let index = 0; index <= 90; index++) {
                pins.servoWritePin(AnalogPin.P0, 90 - index)
                basic.pause(10)
            }
            p0_state = 0
        }
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_2)) {
        if (p4_status == 0 && p0_state == 0) {
            for (let index = 0; index <= 135; index++) {
                pins.servoWritePin(AnalogPin.P4, index)
                basic.pause(10)
            }
            p4_status = 1
        } else if (p4_status == 1 && p0_state == 0) {
            for (let index = 0; index <= 135; index++) {
                pins.servoWritePin(AnalogPin.P4, 135 - index)
                basic.pause(10)
            }
            p4_status = 0
        }
    }
})
