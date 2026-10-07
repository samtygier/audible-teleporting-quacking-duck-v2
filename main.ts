radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == ID) {
        hasDuck = true
        show_duck()
    } else {
        hasDuck = false
        basic.clearScreen()
    }
})
function show_duck () {
    basic.showIcon(IconNames.Duck)
    music.play(music.createSoundExpression(
    WaveShape.Square,
    325,
    2675,
    225,
    27,
    100,
    SoundExpressionEffect.None,
    InterpolationCurve.Logarithmic
    ), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.play(music.createSoundExpression(
    WaveShape.Square,
    1,
    2675,
    225,
    27,
    100,
    SoundExpressionEffect.None,
    InterpolationCurve.Logarithmic
    ), music.PlaybackMode.UntilDone)
}
input.onButtonPressed(Button.A, function () {
    if (hasDuck || ID == 1) {
        sendTo = randint(1, players)
        if (sendTo != ID) {
            hasDuck = false
            radio.sendNumber(sendTo)
            radio.sendNumber(sendTo)
            radio.sendNumber(sendTo)
            basic.showNumber(sendTo)
            basic.clearScreen()
        }
    }
})
let sendTo = 0
let hasDuck = false
let ID = 0
let players = 0
radio.setGroup(43)
music.setVolume(64)
players = 4
ID = 3
basic.showNumber(ID)
if (ID == 1) {
    hasDuck = true
    show_duck()
} else {
    hasDuck = false
}
