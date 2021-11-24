input.onButtonPressed(Button.A, function () {
    jokalaria.move(-1)
})
input.onButtonPressed(Button.B, function () {
    jokalaria.move(1)
})
let meteorito_2: game.LedSprite = null
let meteorito: game.LedSprite = null
let jokalaria: game.LedSprite = null
jokalaria = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(randint(1250, 2000))
    meteorito = game.createSprite(randint(0, 4), 0)
    meteorito_2 = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        meteorito.change(LedSpriteProperty.Y, 1)
        meteorito_2.change(LedSpriteProperty.Y, 1)
    }
    if (meteorito.isTouching(jokalaria) || meteorito_2.isTouching(jokalaria)) {
        game.gameOver()
    } else {
        game.addScore(1)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    basic.pause(200)
    meteorito.delete()
    meteorito_2.delete()
})
