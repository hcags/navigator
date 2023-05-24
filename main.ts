input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (!(Navigate)) {
        Richtung += 1
        ShowDirection(Richtung)
    } else {
        Nextdiection()
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
	
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (!(Navigate)) {
        let list: number[] = []
        let Richtungen: number[] = []
        Richtungen[list.length] = Richtung
        basic.setLedColor(0xffff00)
        basic.pause(300)
        basic.setLedColor(0xff0000)
    }
})
function ShowDirection (DIRECTION: number) {
    if (DIRECTION == 1 || DIRECTION == 5) {
        Richtung = 1
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (DIRECTION == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (DIRECTION == 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (DIRECTION == 4) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
}
function Nextdiection () {
	
}
let Richtung = 0
let Navigate = false
let I = 0
Navigate = false
Richtung = 0
basic.setLedColor(0xff0000)
