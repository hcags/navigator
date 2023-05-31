input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (!(navigate)) {
        richtung += 1
        ShowDirection(richtung)
    } else {
        nextDirection()
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
	
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (!(navigate)) {
        let richtungen: number[] = []
        richtungen[richtungen.length] = richtung
        basic.setLedColor(0xffff00)
        basic.pause(300)
        basic.setLedColor(0xff0000)
    }
})
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
function nextDirection () {
	
}
let richtung = 0
let navigate = false
let i = 0
navigate = false
richtung = 0
basic.setLedColor(0xff0000)
