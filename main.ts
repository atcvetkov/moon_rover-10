led.enable(false)
irRemote.connectInfrared(DigitalPin.P9)
let p0p4_status = 0
pins.servoWritePin(AnalogPin.P0, 90)
pins.servoWritePin(AnalogPin.P4, 135)
basic.forever(function () {
    for (let index = 0; index <= 135; index++) {
        pins.servoWritePin(AnalogPin.P3, index)
        basic.pause(30)
    }
    for (let index = 0; index <= 135; index++) {
        pins.servoWritePin(AnalogPin.P3, 135 - index)
        basic.pause(30)
    }
})
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
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Up)) {
        mecanumRobot.Motor(LR.Upper_right, MD.Forward, 30)
        mecanumRobot.Motor(LR.Upper_left, MD.Forward, 30)
        mecanumRobot.Motor(LR.Lower_right, MD.Forward, 30)
        mecanumRobot.Motor(LR.Lower_left, MD.Forward, 30)
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Down)) {
        mecanumRobot.Motor(LR.Upper_right, MD.Back, 30)
        mecanumRobot.Motor(LR.Upper_left, MD.Back, 30)
        mecanumRobot.Motor(LR.Lower_right, MD.Back, 30)
        mecanumRobot.Motor(LR.Lower_left, MD.Back, 30)
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Left)) {
        mecanumRobot.Motor(LR.Upper_right, MD.Back, 30)
        mecanumRobot.Motor(LR.Upper_left, MD.Forward, 30)
        mecanumRobot.Motor(LR.Lower_right, MD.Back, 30)
        mecanumRobot.Motor(LR.Lower_left, MD.Forward, 30)
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Right)) {
        mecanumRobot.Motor(LR.Upper_right, MD.Forward, 30)
        mecanumRobot.Motor(LR.Upper_left, MD.Back, 30)
        mecanumRobot.Motor(LR.Lower_right, MD.Forward, 30)
        mecanumRobot.Motor(LR.Lower_left, MD.Back, 30)
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Ok)) {
        mecanumRobot.state(MotorState.stop)
    }
    basic.pause(100)
})
