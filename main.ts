radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == ID) {
        hasDuck = true
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
    } else {
        hasDuck = false
    }
})
input.onGesture(Gesture.Shake, function () {
    if (hasDuck) {
        sendTo = randint(1, players)
        if (sendTo != ID) {
            hasDuck = false
            basic.clearScreen()
            radio.sendNumber(sendTo)
        }
    }
})
let sendTo = 0
let hasDuck = false
let ID = 0
let players = 0
radio.setGroup(43)
players = 4
ID = 1
basic.showNumber(ID)
if (ID == 1) {
    hasDuck = true
} else {
    hasDuck = false
}
