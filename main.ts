controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() == 0) {
        Frog.sayText("Empty", 1000, false)
    } else {
        animation.runImageAnimation(
        Frog,
        assets.animation`myAnim0`,
        150,
        false
        )
        info.changeScoreBy(-1)
        snakelife += randint(-2, 0)
        pause(1000)
        animation.runImageAnimation(
        Frog,
        assets.animation`myAnim`,
        100,
        true
        )
        animation.runImageAnimation(
        snake,
        assets.animation`myAnim4`,
        200,
        false
        )
        pause(2000)
        if (snakelife == 0) {
            snake2()
        } else {
            snattack()
        }
    }
})
function snake2 () {
    if (round2 == 1) {
        game.splash("Round 2")
        snakelife = 5
        round2 += -1
    }
    if (snakelife <= 0) {
        game.over(true)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() == 0) {
        animation.runImageAnimation(
        Frog,
        assets.animation`myAnim1`,
        200,
        false
        )
        pause(2000)
        info.setScore(5)
        animation.runImageAnimation(
        Frog,
        assets.animation`myAnim`,
        100,
        true
        )
        snattack()
    } else {
        game.splash("Still have ammo")
    }
})
function snattack () {
    snake.setPosition(70, 81)
    animation.runImageAnimation(
    snake,
    [img`
        . . . . c c c c c c c . . . . . 
        . . . c 6 7 7 7 7 7 6 c . . . . 
        . . c 6 7 c 6 6 6 6 c 7 c . . . 
        . . c 7 7 6 f 6 6 f 6 7 6 c . . 
        . . c 7 7 7 7 7 7 7 7 7 7 c . . 
        . . f 7 7 7 6 1 f f 1 8 7 f . . 
        . . f 7 7 7 f 1 f f 1 f 6 f . . 
        . . f 6 7 7 f 2 2 2 2 f f . . . 
        . . c f 6 7 7 2 2 2 2 f c c . . 
        . c 7 7 c c 7 7 7 7 7 7 7 7 c . 
        c 7 7 7 6 c f 7 7 7 7 1 1 1 7 c 
        c c 6 6 6 c c f 6 7 1 1 1 1 1 f 
        . . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
        . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . c 6 6 6 6 1 1 1 1 1 6 f . 
        . . . . c c c c c c c c f f . . 
        `,img`
        . . . c c c c c c c . . . . . . 
        . . c 7 f f 6 6 f f c . . . . . 
        . c 6 7 6 6 6 6 6 6 7 c . . . . 
        . c 7 7 7 7 7 7 7 7 7 7 c . . . 
        . c 7 7 7 6 1 f f 1 8 7 c . . . 
        . f 7 7 7 f 1 f f 1 f 6 f . . . 
        . f 7 7 7 f 2 2 2 2 f 6 f . . . 
        . f 6 7 7 f 2 2 2 2 f 6 c c . . 
        . . c f 7 7 2 2 2 2 7 7 7 7 c . 
        . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
        c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
        c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
        . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
        . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . c 6 6 6 6 6 1 1 1 1 6 f . 
        . . . . c c c c c c c c f f . . 
        `,img`
        . . . c c c c c c c . . . . . . 
        . . c 7 f f 6 6 f f c . . . . . 
        . c 6 7 6 6 6 6 6 6 7 c . . . . 
        . c 7 7 7 7 7 7 7 7 7 7 c . . . 
        . c 7 7 7 6 1 f f 1 8 7 c . . . 
        . f 7 7 7 f 1 f f 1 f 6 f . . . 
        . f 7 7 7 f 2 2 2 2 f 6 f . . . 
        . f 6 7 7 f 2 2 2 2 f 6 c c . . 
        . . c f 7 7 2 2 2 2 7 7 7 7 c . 
        . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
        c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
        c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
        . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
        . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . c 6 6 6 6 6 1 1 1 1 6 f . 
        . . . . c c c c c c c c f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        c c c c c . . . . . . . . . . . 
        c 6 7 7 7 c c . . . . . . . . . 
        . c c 7 7 7 c c . . . . . . . . 
        . . . c 7 7 6 c . . . . . . . . 
        . . . c 6 6 6 c . . . . . . . . 
        . . c c 6 6 6 c c c c c c . . . 
        . c 6 6 6 c c 6 7 7 7 7 6 c . . 
        c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
        c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
        c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
        c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
        c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
        . c c 6 6 f 6 7 c 1 f f c 1 c . 
        . . . c c c c c c c c c c c c . 
        `,img`
        c c c c c . . . . . . . . . . . 
        c 6 7 7 7 c c . . . . . . . . . 
        . c c 7 7 7 c c . . . . . . . . 
        . . . c 7 7 6 c . . . . . . . . 
        . . . c 6 6 6 c . . . . . . . . 
        . . c c 6 6 6 c . . . . . . . . 
        . c c 6 6 6 c c c c c c c . . . 
        . c 6 6 6 c c 6 7 7 7 7 6 c . . 
        c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
        c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
        c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
        c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
        c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
        . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
        . c c 6 6 f 6 7 c 1 f f c 1 c . 
        . . . c c c c c c c c c c c c . 
        `,img`
        c c c c c . . . . . . . . . . . 
        c 6 7 7 7 c c . . . . . . . . . 
        . c c 7 7 7 c c . . . . . . . . 
        . . . c 7 7 6 c . . . . . . . . 
        . . . c 6 6 6 c . . . . . . . . 
        . . c c 6 6 6 c . . . . . . . . 
        . c c 6 6 6 c c c c c c c . . . 
        . c 6 6 6 c c 6 7 7 7 7 6 c . . 
        c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
        c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
        c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
        c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
        c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
        . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
        . c c 6 6 f 6 7 c 1 f f c 1 c . 
        . . . c c c c c c c c c c c c . 
        `],
    300,
    false
    )
    pause(2000)
    animation.runImageAnimation(
    Frog,
    assets.animation`myAnim3`,
    200,
    false
    )
    pause(1000)
    animation.runImageAnimation(
    Frog,
    assets.animation`myAnim`,
    100,
    true
    )
    info.changeLifeBy(randint(-2, 0))
    snake.setPosition(45, 81)
    animation.runImageAnimation(
    snake,
    [img`
        . . . . . . c c c c c c . . . . 
        . . . . . c 6 7 7 7 7 6 c . . . 
        . . . . c 7 7 7 7 7 7 7 7 c . . 
        . . . c 6 7 7 7 7 7 7 7 7 6 c . 
        . . . c 7 7 7 c 6 6 6 6 c 7 c . 
        . . . f 7 7 7 6 f 6 6 f 6 7 f . 
        . . . f 7 7 7 7 7 7 7 7 7 7 f . 
        . . c f 6 7 7 c 6 7 7 7 7 f . . 
        . c 7 7 f 6 7 7 c c c c f . . . 
        c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
        c c 6 7 7 6 c f c 7 7 2 7 7 c . 
        . . c 6 6 6 c c f 6 7 1 1 1 1 c 
        . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
        . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . f 6 6 6 1 1 1 1 1 1 6 f . 
        . . . . f c c c c c c c c c . . 
        `,img`
        . . . . . . . c c c c c c . . . 
        . . . . . . c 6 7 7 7 7 6 c . . 
        . . . . . c 7 7 7 7 7 7 7 7 c . 
        . . . . c 6 7 7 7 7 7 7 7 7 6 c 
        . . . . c 7 7 7 c 6 6 6 6 c 7 c 
        . . . . f 7 7 7 6 f 6 6 f 6 7 f 
        . . . . f 7 7 7 7 7 7 7 7 7 7 f 
        . . . . f 6 7 7 c 6 7 7 7 7 f . 
        . . c c c f 6 7 7 c c c c f . . 
        . c 7 7 7 c c f 7 7 7 2 6 c . . 
        c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
        c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
        . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
        . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
        . . c c 6 6 7 1 1 1 1 1 6 c . . 
        . . . c c c c c c c c c c . . . 
        `],
    500,
    true
    )
}
let round2 = 0
let snakelife = 0
let snake: Sprite = null
let Frog: Sprite = null
game.splash("Indiana Frog", "The Treacherous Cave")
game.splash("Round 1")
scene.setBackgroundColor(13)
Frog = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
snake = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
snake.setPosition(45, 81)
Frog.setScale(0.8, ScaleAnchor.Middle)
snakelife = 3
round2 = 1
animation.runImageAnimation(
snake,
[img`
    . . . . . . c c c c c c . . . . 
    . . . . . c 6 7 7 7 7 6 c . . . 
    . . . . c 7 7 7 7 7 7 7 7 c . . 
    . . . c 6 7 7 7 7 7 7 7 7 6 c . 
    . . . c 7 7 7 c 6 6 6 6 c 7 c . 
    . . . f 7 7 7 6 f 6 6 f 6 7 f . 
    . . . f 7 7 7 7 7 7 7 7 7 7 f . 
    . . c f 6 7 7 c 6 7 7 7 7 f . . 
    . c 7 7 f 6 7 7 c c c c f . . . 
    c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
    c c 6 7 7 6 c f c 7 7 2 7 7 c . 
    . . c 6 6 6 c c f 6 7 1 1 1 1 c 
    . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
    . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . f 6 6 6 1 1 1 1 1 1 6 f . 
    . . . . f c c c c c c c c c . . 
    `,img`
    . . . . . . . c c c c c c . . . 
    . . . . . . c 6 7 7 7 7 6 c . . 
    . . . . . c 7 7 7 7 7 7 7 7 c . 
    . . . . c 6 7 7 7 7 7 7 7 7 6 c 
    . . . . c 7 7 7 c 6 6 6 6 c 7 c 
    . . . . f 7 7 7 6 f 6 6 f 6 7 f 
    . . . . f 7 7 7 7 7 7 7 7 7 7 f 
    . . . . f 6 7 7 c 6 7 7 7 7 f . 
    . . c c c f 6 7 7 c c c c f . . 
    . c 7 7 7 c c f 7 7 7 2 6 c . . 
    c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
    c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
    . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
    . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
    . . c c 6 6 7 1 1 1 1 1 6 c . . 
    . . . c c c c c c c c c c . . . 
    `],
500,
true
)
animation.runImageAnimation(
Frog,
assets.animation`myAnim`,
100,
true
)
info.setScore(5)
info.setLife(5)
game.onUpdateInterval(500, function () {
    snake.sayText(snakelife)
})
