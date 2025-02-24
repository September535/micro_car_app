function stop_state () {
    avoidance2 = 0
    line2 = 0
    follow2 = 0
}
function line () {
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
        stop_state()
        Acebott.moveTime(Acebott.Direction.forward, speed)
    }
    if (STR == "0502") {
        stop_state()
        Acebott.moveTime(Acebott.Direction.backward, speed)
    }
    if (STR == "0503") {
        stop_state()
        Acebott.moveTime(Acebott.Direction.left, speed)
    }
    if (STR == "0504") {
        stop_state()
        Acebott.moveTime(Acebott.Direction.right, speed)
    }
    if (STR == "0500") {
        Acebott.stopcar()
        stop_state()
    }
    if (STR == "06130") {
        speed = 10
    }
    if (STR == "06190") {
        speed = 50
    }
    if (STR == "06255") {
        speed = 100
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
function State () {
    if (STR == "0201") {
        avoidance2 = 1
    }
    if (STR == "0200") {
        Acebott.stopcar()
        avoidance2 = 0
    }
    if (STR == "0101") {
        line2 = 1
    }
    if (STR == "0100") {
        Acebott.stopcar()
        line2 = 0
    }
    if (STR == "0301") {
        follow2 = 1
    }
    if (STR == "0300") {
        Acebott.stopcar()
        follow2 = 0
    }
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
})
function RGB_State () {
    if (RGB_status == 1) {
        let R = ""
        if (STR.includes("0801")) {
            B = STR.substr(4, STR.length - 4)
        }
        if (STR.includes("0802")) {
            G = STR.substr(4, STR.length - 4)
        }
        if (STR.includes("0803")) {
            B = STR.substr(4, STR.length - 4)
        }
        Acebott.singleheadlights(Acebott.RGBLights.ALL, parseFloat(R), parseFloat(G), parseFloat(B))
    }
    if (RGB_status == 2) {
        if (STR.includes("0801")) {
            RGB_Left_R = STR.substr(4, STR.length - 4)
        }
        if (STR.includes("0802")) {
            RGB_Left_G = STR.substr(4, STR.length - 4)
        }
        if (STR.includes("0803")) {
            RGB_Left_B = STR.substr(4, STR.length - 4)
        }
        Acebott.singleheadlights(Acebott.RGBLights.RGB_L, parseFloat(RGB_Left_R), parseFloat(RGB_Left_G), parseFloat(RGB_Left_B))
    }
    if (RGB_status == 3) {
        if (STR.includes("0801")) {
            RGB_Right_R = STR.substr(4, STR.length - 4)
        }
        if (STR.includes("0802")) {
            RGB_Right_G = STR.substr(4, STR.length - 4)
        }
        if (STR.includes("0803")) {
            RGB_Right_B = STR.substr(4, STR.length - 4)
        }
        Acebott.singleheadlights(Acebott.RGBLights.RGB_R, parseFloat(RGB_Right_R), parseFloat(RGB_Right_G), parseFloat(RGB_Right_B))
    }
    if (STR == "0701") {
        RGB_status = 1
    }
    if (STR == "0702") {
        RGB_status = 2
    }
    if (STR == "0703") {
        RGB_status = 3
    }
}
bluetooth.onBluetoothDisconnected(function () {
    Acebott.stopcar()
    basic.showIcon(IconNames.No)
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
function follow () {
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
function avoidance () {
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
    Buzzer()
    State()
    New_Year()
    Jingle_bell()
    Have_a_farm()
    Little_Star()
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
let RGB_Right_B = ""
let RGB_Right_G = ""
let RGB_Right_R = ""
let RGB_Left_B = ""
let RGB_Left_G = ""
let RGB_Left_R = ""
let G = ""
let B = ""
let follow2 = 0
let line2 = 0
let avoidance2 = 0
let speed = 0
let RGB_status = 0
let STR = ""
STR = ""
RGB_status = 3
speed = 50
basic.showIcon(IconNames.Heart)
bluetooth.startUartService()
loops.everyInterval(0.3, function () {
    RGB_State()
})
loops.everyInterval(0.2, function () {
    if (avoidance2 == 1) {
        avoidance()
    }
    if (line2 == 1) {
        line()
    }
    if (follow2 == 1) {
        follow()
    }
    rocker()
})
