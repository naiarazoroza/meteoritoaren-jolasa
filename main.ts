input.onButtonPressed(Button.A, function () {
    jokalaria.move(-1)
})
input.onButtonPressed(Button.B, function () {
    jokalaria.move(1)
})
let meteorito: game.LedSprite = null
let jokalaria: game.LedSprite = null
jokalaria = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(randint(1000, 1500))
    meteorito = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
    }
    if (meteorito.isTouching(jokalaria)) {
        game.gameOver()
    }
    basic.pause(200)
})
