led.enable(False)
irRemote.connect_infrared(DigitalPin.P9)
p0p4_status = 0
pins.servo_write_pin(AnalogPin.P0, 90)
pins.servo_write_pin(AnalogPin.P4, 135)

def on_forever():
    global p0p4_status
    if irRemote.return_ir_button() == irRemote.ir_button(IrButton.NUMBER_1):
        if p0p4_status == 0:
            for index in range(136):
                pins.servo_write_pin(AnalogPin.P4, 135 - index)
                basic.pause(10)
            for index2 in range(91):
                pins.servo_write_pin(AnalogPin.P0, 90 - index2)
                basic.pause(10)
            p0p4_status = 1
        else:
            for index3 in range(91):
                pins.servo_write_pin(AnalogPin.P0, index3)
                basic.pause(10)
            for index4 in range(136):
                pins.servo_write_pin(AnalogPin.P4, index4)
                basic.pause(10)
            p0p4_status = 0
    if irRemote.return_ir_button() == irRemote.ir_button(IrButton.UP):
        mecanumRobot.motor(LR.UPPER_RIGHT, MD.FORWARD, 30)
        mecanumRobot.motor(LR.UPPER_LEFT, MD.FORWARD, 30)
        mecanumRobot.motor(LR.LOWER_RIGHT, MD.FORWARD, 30)
        mecanumRobot.motor(LR.LOWER_LEFT, MD.FORWARD, 30)
    if irRemote.return_ir_button() == irRemote.ir_button(IrButton.DOWN):
        mecanumRobot.motor(LR.UPPER_RIGHT, MD.BACK, 30)
        mecanumRobot.motor(LR.UPPER_LEFT, MD.BACK, 30)
        mecanumRobot.motor(LR.LOWER_RIGHT, MD.BACK, 30)
        mecanumRobot.motor(LR.LOWER_LEFT, MD.BACK, 30)
    if irRemote.return_ir_button() == irRemote.ir_button(IrButton.LEFT):
        mecanumRobot.motor(LR.UPPER_RIGHT, MD.BACK, 30)
        mecanumRobot.motor(LR.UPPER_LEFT, MD.FORWARD, 30)
        mecanumRobot.motor(LR.LOWER_RIGHT, MD.BACK, 30)
        mecanumRobot.motor(LR.LOWER_LEFT, MD.FORWARD, 30)
    if irRemote.return_ir_button() == irRemote.ir_button(IrButton.RIGHT):
        mecanumRobot.motor(LR.UPPER_RIGHT, MD.FORWARD, 30)
        mecanumRobot.motor(LR.UPPER_LEFT, MD.BACK, 30)
        mecanumRobot.motor(LR.LOWER_RIGHT, MD.FORWARD, 30)
        mecanumRobot.motor(LR.LOWER_LEFT, MD.BACK, 30)
    if irRemote.return_ir_button() == irRemote.ir_button(IrButton.OK):
        mecanumRobot.state(MotorState.STOP)
    basic.pause(100)
basic.forever(on_forever)

def on_forever2():
    for index5 in range(136):
        pins.servo_write_pin(AnalogPin.P3, index5)
        basic.pause(30)
    for index6 in range(136):
        pins.servo_write_pin(AnalogPin.P3, 135 - index6)
        basic.pause(30)
basic.forever(on_forever2)
