let p0p4_status = 0
irRemote.connectInfrared(DigitalPin.P9)
led.enable(false)
pins.servoWritePin(AnalogPin.P0, 90)
pins.servoWritePin(AnalogPin.P4, 135)
basic.forever(function () {
    for (let index5 = 0; index5 <= 135; index5++) {
        pins.servoWritePin(AnalogPin.P3, index5)
        basic.pause(30)
    }
    for (let index6 = 0; index6 <= 135; index6++) {
        pins.servoWritePin(AnalogPin.P3, 135 - index6)
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
            for (let index2 = 0; index2 <= 90; index2++) {
                pins.servoWritePin(AnalogPin.P0, 90 - index2)
                basic.pause(10)
            }
            p0p4_status = 1
        } else {
            for (let index3 = 0; index3 <= 90; index3++) {
                pins.servoWritePin(AnalogPin.P0, index3)
                basic.pause(10)
            }
            for (let index4 = 0; index4 <= 135; index4++) {
                pins.servoWritePin(AnalogPin.P4, index4)
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
})
