function DHT_t () {
    if (STR == "0601") {
        bluetooth.uartWriteString("06" + ("" + Math.round(Acebott.DHT11_getvalue(DigitalWritePin.P8, DHT11Type.Temperature_C))) + "#")
    }
}
function line () {
    if (STR == "0101") {
        if (Acebott.tracking(Acebott.MbPins.Right) >= 900 && Acebott.tracking(Acebott.MbPins.Left) >= 900) {
            Acebott.stopcar()
        }
        if (Acebott.tracking(Acebott.MbPins.Right) <= 310 && Acebott.tracking(Acebott.MbPins.Left) <= 310) {
            Acebott.stopcar()
        }
        if (Acebott.tracking(Acebott.MbPins.Right) >= 700 && Acebott.tracking(Acebott.MbPins.Right) <= 900) {
            Acebott.motors(8, 60)
        }
        if (Acebott.tracking(Acebott.MbPins.Left) >= 700 && Acebott.tracking(Acebott.MbPins.Left) <= 900) {
            Acebott.motors(60, 8)
        }
        if (Acebott.tracking(Acebott.MbPins.Left) >= 240 && Acebott.tracking(Acebott.MbPins.Left) <= 800 && (Acebott.tracking(Acebott.MbPins.Right) >= 240 && Acebott.tracking(Acebott.MbPins.Right) <= 700)) {
            Acebott.moveTime(Acebott.Direction.forward, 30)
        }
    }
    if (STR == "0101") {
        Acebott.stopcar()
    }
}
function Little_Star () {
    if (STR == "0408") {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    }
}
function rocker () {
    if (STR == "0501") {
        Acebott.moveTime(Acebott.Direction.forward, 0)
    }
    if (STR == "0502") {
        Acebott.moveTime(Acebott.Direction.backward, 0)
    }
    if (STR == "0503") {
        Acebott.moveTime(Acebott.Direction.left, 0)
    }
    if (STR == "0504") {
        Acebott.moveTime(Acebott.Direction.forward, 0)
    }
    if (STR == "0500") {
        Acebott.stopcar()
    }
}
function New_Year () {
    if (STR == "0410") {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
    Acebott.LCD1602_Clear()
})
function Jingle_bell () {
    if (STR == "0409") {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    }
}
function emoji () {
    if (STR.includes("0801")) {
        function LED() {
            Acebott.singleheadlights(Acebott.RGBLights.ALL, 255, 0, 0)
            basic.pause(200)
            Acebott.singleheadlights(Acebott.RGBLights.ALL, 0, 255, 0)
            basic.pause(200)
            Acebott.singleheadlights(Acebott.RGBLights.ALL, 0, 0, 255)
            basic.pause(200)
            Acebott.singleheadlights(Acebott.RGBLights.ALL, 0, 0, 0)
            basic.pause(200)
        }
    }
}
function follow () {
    if (STR == "0301") {
        if (Acebott.UltrasonicDistance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) <= 10) {
            Acebott.moveTime(Acebott.Direction.backward, 40)
        }
        if (Acebott.UltrasonicDistance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) >= 15 && Acebott.UltrasonicDistance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) <= 20) {
            Acebott.stopcar()
        }
        if (Acebott.UltrasonicDistance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) >= 20 && Acebott.UltrasonicDistance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) <= 25) {
            Acebott.moveTime(Acebott.Direction.forward, 40)
        }
        if (Acebott.UltrasonicDistance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) >= 25 && Acebott.UltrasonicDistance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) <= 50) {
            Acebott.moveTime(Acebott.Direction.forward, 40)
        }
        if (Acebott.UltrasonicDistance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) >= 51) {
            Acebott.stopcar()
        }
    }
    if (STR == "0300") {
        Acebott.stopcar()
    }
}
function DHT_h () {
    if (STR == "0701") {
        bluetooth.uartWriteString("07" + convertToText(Math.round(Acebott.DHT11_getvalue(DigitalWritePin.P8, DHT11Type.Humidity))) + "#")
    }
}
function avoidance () {
    if (STR == "0201") {
        if (Acebott.UltrasonicDistance(DigitalPin.P15, DigitalWritePin.P14, DistanceUnit.CM) <= 10) {
            basic.pause(200)
            Acebott.stopcar()
            basic.pause(200)
            if (Math.randomBoolean()) {
                Acebott.moveTime(Acebott.Direction.right, 40)
                basic.pause(200)
            } else {
                Acebott.moveTime(Acebott.Direction.left, 40)
                basic.pause(200)
            }
        } else {
            Acebott.moveTime(Acebott.Direction.forward, 40)
        }
    }
    if (STR == "0200") {
        Acebott.stopcar()
    }
}
function Have_a_farm () {
    if (STR == "0411") {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
}
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    STR = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
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
})
function Buzzer () {
    if (STR == "0401") {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
    }
    if (STR == "0402") {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
    }
    if (STR == "0403") {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
    }
    if (STR == "0404") {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
    }
    if (STR == "0405") {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
    }
    if (STR == "0406") {
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
    }
    if (STR == "0407") {
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
    }
}
function LED () {
    if (STR == "0101") {
        Acebott.setLed(DigitalWritePin.P1, SwitchStatus.ON)
        led2 = 1
    }
    if (STR == "0100") {
        Acebott.setLed(DigitalWritePin.P1, SwitchStatus.OFF)
        led2 = 0
    }
}
function GAS () {
    if (STR == "0401") {
        bluetooth.uartWriteString("04" + ("" + Acebott.MQ4_Sensor(AnalogReadPin.P2)) + "#")
    }
}
function PIR () {
    if (STR == "0501") {
        bluetooth.uartWriteString("05" + ("" + Acebott.PIRMotion(DigitalPin.P0)) + "#")
    }
}
let led2 = 0
let LED_m = ""
let STR = ""
STR = ""
basic.showIcon(IconNames.Heart)
bluetooth.startUartService()
