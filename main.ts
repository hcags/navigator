input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (!(navigate)) {
        richtung += 1
        ShowDirection(richtung)
    } else {
        NextDirection()
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
	
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (!(navigate)) {
        richtungen[richtungen.length] = richtung
        basic.setLedColor(0x00ff00)
        basic.pause(300)
        basic.setLedColor(0xff0000)
    }
})
function NextDirection () {
	
}
function ShowDirection (Direction2: number) {
    if (Direction2 == 1 || Direction2 == 5) {
        richtung = 1
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (Direction2 == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (Direction2 == 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (Direction2 == 4) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
}
let richtung = 0
let richtungen: number[] = []
let navigate = false
let i = 0
navigate = false
richtungen += 0
basic.setLedColor(0xff0000)
