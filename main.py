def DHT_t():
    if STR == "0601":
        bluetooth.uart_write_string("06" + ("" + str(Math.round(0))) + "#")
def line():
    if Acebott.tracking(Acebott.MbPins.RIGHT) >= 900 and Acebott.tracking(Acebott.MbPins.LEFT) >= 900:
        Acebott.stopcar()
    if Acebott.tracking(Acebott.MbPins.RIGHT) <= 310 and Acebott.tracking(Acebott.MbPins.LEFT) <= 310:
        Acebott.stopcar()
    if Acebott.tracking(Acebott.MbPins.RIGHT) >= 700 and Acebott.tracking(Acebott.MbPins.RIGHT) <= 900:
        Acebott.motors(8, 60)
    if Acebott.tracking(Acebott.MbPins.LEFT) >= 700 and Acebott.tracking(Acebott.MbPins.LEFT) <= 900:
        Acebott.motors(60, 8)
    if Acebott.tracking(Acebott.MbPins.LEFT) >= 240 and Acebott.tracking(Acebott.MbPins.LEFT) <= 800 and (Acebott.tracking(Acebott.MbPins.RIGHT) >= 240 and Acebott.tracking(Acebott.MbPins.RIGHT) <= 700):
        Acebott.move_time(Acebott.Direction.FORWARD, 30)
def Little_Star():
    if STR == "0408":
        music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(392, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(392, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(440, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(440, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(392, music.beat(BeatFraction.DOUBLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(349, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(349, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(330, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(330, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(294, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(294, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(262, music.beat(BeatFraction.DOUBLE)),
            music.PlaybackMode.UNTIL_DONE)
def New_Year():
    if STR == "0410":
        music.play(music.tone_playable(262, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(262, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(196, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(330, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(330, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(330, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(262, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(330, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(392, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(392, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(349, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(330, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(294, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)

def on_bluetooth_connected():
    basic.show_icon(IconNames.YES)
    basic.pause(2000)
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    basic.show_icon(IconNames.NO)
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

def Jingle_bell():
    if STR == "0409":
        music.play(music.tone_playable(330, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(330, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(330, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(330, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(330, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(330, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(330, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(392, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(262, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(262, music.beat(BeatFraction.QUARTER)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(294, music.beat(BeatFraction.QUARTER)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(330, music.beat(BeatFraction.DOUBLE)),
            music.PlaybackMode.UNTIL_DONE)
def emoji():
    global LED_m
    if STR.includes("0801"):
        LED_m = STR.substr(4, len(STR) - 4)
def follow():
    if Acebott.ultrasonic_distance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) <= 10:
        Acebott.move_time(Acebott.Direction.BACKWARD, 40)
    if Acebott.ultrasonic_distance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) >= 15 and Acebott.ultrasonic_distance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) <= 20:
        Acebott.stopcar()
    if Acebott.ultrasonic_distance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) >= 20 and Acebott.ultrasonic_distance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) <= 25:
        Acebott.move_time(Acebott.Direction.FORWARD, 40)
    if Acebott.ultrasonic_distance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) >= 25 and Acebott.ultrasonic_distance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) <= 50:
        Acebott.move_time(Acebott.Direction.FORWARD, 40)
    if Acebott.ultrasonic_distance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) >= 51:
        Acebott.stopcar()
def DHT_h():
    if STR == "0701":
        bluetooth.uart_write_string("07" + convert_to_text(Math.round(0)) + "#")
def avoidance():
    if Acebott.ultrasonic_distance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) <= 10:
        basic.pause(200)
        Acebott.stopcar()
        basic.pause(200)
        if Math.random_boolean():
            Acebott.move_time(Acebott.Direction.RIGHT, 40)
            basic.pause(200)
        else:
            Acebott.move_time(Acebott.Direction.LEFT, 40)
            basic.pause(200)
    else:
        Acebott.move_time(Acebott.Direction.FORWARD, 40)
def Have_a_farm():
    if STR == "0411":
        music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(196, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(220, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(220, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(196, music.beat(BeatFraction.DOUBLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(330, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(330, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(294, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(294, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.SIXTEENTH))
        music.play(music.tone_playable(262, music.beat(BeatFraction.DOUBLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)

def on_uart_data_received():
    global STR
    STR = bluetooth.uart_read_until(serial.delimiters(Delimiters.HASH))
    LED()
    Buzzer()
    emoji()
    Little_Star()
    Jingle_bell()
    New_Year()
    Have_a_farm()
    GAS()
    DHT_t()
    DHT_h()
    PIR()
bluetooth.on_uart_data_received(serial.delimiters(Delimiters.HASH), on_uart_data_received)

def Buzzer():
    if STR == "0401":
        music.play(music.tone_playable(262, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.IN_BACKGROUND)
    if STR == "0402":
        music.play(music.tone_playable(294, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.IN_BACKGROUND)
    if STR == "0403":
        music.play(music.tone_playable(330, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.IN_BACKGROUND)
    if STR == "0404":
        music.play(music.tone_playable(349, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.IN_BACKGROUND)
    if STR == "0405":
        music.play(music.tone_playable(392, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.IN_BACKGROUND)
    if STR == "0406":
        music.play(music.tone_playable(440, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.IN_BACKGROUND)
    if STR == "0407":
        music.play(music.tone_playable(494, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.IN_BACKGROUND)
def LED():
    global led2
    if STR == "0101":
        led2 = 1
    if STR == "0100":
        led2 = 0
def GAS():
    if STR == "0401":
        bluetooth.uart_write_string("04" + "" + "#")
def PIR():
    if STR == "0501":
        bluetooth.uart_write_string("05" + "" + "#")
led2 = 0
LED_m = ""
STR = ""
STR = ""
basic.show_icon(IconNames.HEART)
bluetooth.start_uart_service()