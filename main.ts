function Nextdirection () {
    if (Richtungen.length > I) {
        Showdirection(Richtungen[I])
        I += 1
    } else {
        basic.showLeds(`
            # # # # #
            # . # . #
            # # # # #
            . # # # .
            . # # # .
            `)
    }
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (!(Navigate)) {
        Richtung += 1
        Showdirection(Richtung)
    } else {
        Nextdirection()
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (!(Navigate)) {
        Navigate = true
        basic.setLedColor(0x00ff00)
    }
    I = 0
    Nextdirection()
})
function Showdirection (Direction2: number) {
    if (Direction2 == 1 || Direction2 == 5) {
        Richtung = 1
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
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (!(Navigate)) {
        Richtungen[Richtungen.length] = Richtung
        basic.setLedColor(0xffff00)
        basic.pause(300)
        basic.setLedColor(0xff0000)
    }
})
let Richtungen: number[] = []
let Richtung = 0
let Navigate = false
let I = 0
I = 0
Navigate = false
Richtung = 0
basic.setLedColor(0xff0000)
