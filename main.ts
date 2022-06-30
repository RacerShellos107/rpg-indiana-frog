controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.life() <= 4) {
        animation.runImageAnimation(
        Frog,
        assets.animation`myAnim5`,
        200,
        false
        )
        pause(2000)
        info.changeLifeBy(randint(1, 2))
        animation.runImageAnimation(
        Frog,
        assets.animation`myAnim`,
        100,
        true
        )
        if (round2 == -1) {
            battack()
        } else if (round2 == -2) {
            battack()
        } else {
            snattack()
        }
    } else {
        Frog.sayText("Life at Full", 1000, false)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (target == 1) {
        Arrow.setPosition(bat.x, 50)
        target = -1
    } else {
        Arrow.setPosition(snake.x, 50)
        target = 1
    }
})
function bathit () {
    animation.runImageAnimation(
    bat,
    assets.animation`DamagedBat`,
    200,
    false
    )
    pause(1000)
    if (round2 == -2) {
        bat.sayText("" + batlife2 + "HP")
    } else {
        bat.sayText("" + batlife + "HP")
    }
    animation.runImageAnimation(
    bat,
    assets.animation`BatIdle`,
    150,
    true
    )
    pause(100)
    battack()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() == 0) {
        Frog.sayText("Empty", 1000, false)
    } else {
        if (round2 == -1) {
            gunshot()
            pause(1000)
            batlife += randint(-3, -1)
            animation.runImageAnimation(
            Frog,
            assets.animation`myAnim`,
            100,
            true
            )
            bat.sayText("" + batlife + "HP")
            if (batlife > 0) {
                bathit()
            }
        } else if (round2 == -2) {
            if (target == 0) {
                if (batlife2 > 0) {
                    animation.runImageAnimation(
                    Frog,
                    assets.animation`myAnim0`,
                    150,
                    false
                    )
                    info.changeScoreBy(-1)
                    pause(1000)
                    batlife2 += randint(-3, -1)
                    animation.runImageAnimation(
                    Frog,
                    assets.animation`myAnim`,
                    100,
                    true
                    )
                    bathit()
                }
            } else {
                if (snakelife3 > 0) {
                    gunshot()
                    pause(1000)
                    snakelife3 += randint(-3, -1)
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
                    snake.sayText("" + snakelife3 + "HP")
                    pause(2000)
                }
            }
            battack()
        } else {
            gunshot()
            pause(1000)
            snakelife += randint(-3, -1)
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
            snake.sayText("" + snakelife + "HP")
            pause(2000)
            if (snakelife <= 0) {
                snake2()
                snake.sayText("" + snakelife + "HP")
            } else {
                snattack()
            }
        }
    }
})
function snake2 () {
    if (round2 == 1) {
        game.splash("Round 2")
        snakelife = 1
        round2 += -1
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
    if (snakelife <= 0 && round2 == 0) {
        snake.destroy()
        round2 += -1
        game.splash("Round 3")
        batround3()
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
        if (round2 == -1) {
            battack()
        } else if (round2 == -2) {
            battack()
        } else {
            snattack()
        }
    } else {
        Frog.sayText("Still have ammo", 1000, false)
    }
})
function gunshot () {
    animation.runImageAnimation(
    Frog,
    assets.animation`myAnim0`,
    150,
    false
    )
    info.changeScoreBy(-1)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (round2 == -1) {
        bat.sayText("Immune")
        pause(1000)
        bat.sayText("" + batlife + "HP")
    } else if (round2 == -2) {
        if (snakelife3 > 0) {
            animation.runImageAnimation(
            Frog,
            assets.animation`myAnim2`,
            100,
            false
            )
            snakelife3 += -2
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
            snake.sayText("" + snakelife3 + "HP")
            pause(2000)
            battack()
        } else {
            bat.sayText("Immune")
            pause(1000)
            bat.sayText("" + batlife2 + "HP")
        }
    } else {
        animation.runImageAnimation(
        Frog,
        assets.animation`myAnim2`,
        100,
        false
        )
        snakelife += -2
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
        snake.sayText("" + snakelife + "HP")
        pause(2000)
        if (snakelife <= 0) {
            snake2()
            snake.sayText("" + snakelife + "HP")
        } else {
            snattack()
        }
    }
})
function batround3 () {
    bat = sprites.create(img`
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
    bat.setPosition(45, 81)
    bat.sayText("" + batlife + "HP")
    animation.runImageAnimation(
    bat,
    assets.animation`BatIdle`,
    150,
    true
    )
}
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
function battack () {
    bat.sayText("" + batlife + "HP")
    bat.setPosition(70, 81)
    animation.runImageAnimation(
    bat,
    [img`
        f f f . . . . . . . . f f f . . 
        c b b c f . . . . . . c c f f . 
        . c b b c f . . . . . . c c f f 
        . c c c b f . . . . . . c f c f 
        . c c b b c f . c c . c c f f f 
        . c b b c b f c c 3 c c 3 c f f 
        . c b c c b f c b 3 c b 3 b f f 
        . . c c c b b c b 1 b b b 1 c . 
        . . . c c c c b b 1 b b b 1 c . 
        . . . . c c b b b b b b b b b c 
        . . . . f b b b b c 1 f f 1 b c 
        . . . c f b b b b f 1 f f 1 f f 
        . . c c f b b b b f 2 2 2 2 f f 
        . . . . f c b b b b 2 2 2 2 f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . . . . . f f f . . 
        f f f . . . . . . . . c c f f f 
        c b b c f . . . c c . c c c f f 
        . c b b b f f c c 3 c c 3 c f f 
        . c c c b b f c b 3 c b 3 c f f 
        . c c b c b f c b b b b b b c f 
        . c b b c b b c b 1 b b b 1 c c 
        . c b c c c b b b b b b b b b c 
        . . c c c c c b b c 1 f f 1 b c 
        . . . c f b b b b f 1 f f 1 f c 
        . . . c f b b b b f f f f f f f 
        . . c c f b b b b f 2 2 2 2 f f 
        . . . . f c b b b 2 2 2 2 2 f . 
        . . . . . f c b b b 2 2 2 f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . c c . . . 
        . . . . . . c c c 3 c c 3 f . . 
        . . . . . c c c b 3 c b 3 c f . 
        . . . . f f b b b b b b b b c f 
        . . . . f f b b b 1 b b b 1 c c 
        . . . f f f c b b b b b b b b c 
        . . . f f f f b b c 1 f f 1 b c 
        . . . b b b c c b f 1 f f 1 f f 
        . . . c c c c f b f f f f f f f 
        . . c c c b b f b f 2 2 2 2 f f 
        . . . c b b c c b 2 2 2 2 2 f . 
        . . c b b c c f f b 2 2 2 f . . 
        . c c c c c f f f f f f f . . . 
        c c c c . . . . . . . . . . . . 
        `,img`
        . f f f . . . . . . . . f f f . 
        . c b b c f . . . . . . . c f f 
        . . c b b c f . . . . . . c c f 
        . . c c c b f . . . . . . . f c 
        . . c c b b f f . . . . . f f c 
        . . c b b c b f c c . c c f f f 
        . . c b c c b f c c c c c f f f 
        . . . c c c b c b 3 c c 3 c f . 
        . . . c c c c b b 3 c b 3 b c . 
        . . . . c c b b b b b b b b c c 
        . . . c f b b b 1 1 b b b 1 1 c 
        . . c c f b b b b b b b b b b f 
        . . . . f b b b b c b b b c b f 
        . . . . f c b b b 1 f f f 1 f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `],
    400,
    false
    )
    pause(1800)
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
    bat.setPosition(45, 81)
    animation.runImageAnimation(
    bat,
    assets.animation`BatIdle`,
    150,
    true
    )
    if (round2 == -2 && snakelife3 > 0) {
        snattack()
    }
}
let mySprite: Sprite = null
let bat: Sprite = null
let snake: Sprite = null
let Arrow: Sprite = null
let round2 = 0
let snakelife = 0
let batlife = 0
let target = 0
let batlife2 = 0
let snakelife3 = 0
let Frog: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
game.splash("Indiana Frog", "The Tomb of the Bat")
game.splash("Chapter 1", "The Treacherous Cave")
game.splash("Defend yourself in", "order to get to the tomb")
game.splash("Use \"Left\"", "for Ranged Attack")
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
let mySprite2 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
mySprite2.setPosition(80, 19)
animation.runImageAnimation(
Frog,
assets.animation`myAnim0`,
150,
false
)
pause(2000)
game.splash("Use \"Right\" to", "Reload when Empty")
animation.runImageAnimation(
Frog,
assets.animation`myAnim1`,
200,
false
)
pause(2000)
game.splash("Use \"Up\" to", "Heal")
animation.runImageAnimation(
Frog,
assets.animation`myAnim5`,
200,
false
)
pause(2000)
game.splash("Use \"Down\" for", "Melee Damage")
animation.runImageAnimation(
Frog,
assets.animation`myAnim2`,
100,
false
)
pause(2000)
game.splash("Wait for animation", "to finish")
game.splash("Round 1")
snakelife3 = 1
batlife2 = 1
target = 1
batlife = 1
snakelife = 1
round2 = 1
let round4 = 0
Arrow = sprites.create(assets.image`myImage1`, SpriteKind.Player)
animation.runImageAnimation(
Arrow,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 4 . . . . . . . 4 . . . . 
    . . . 4 4 . . . . . 4 4 . . . . 
    . . . 4 5 4 . . . 4 5 4 . . . . 
    . . . 4 5 5 4 . 4 5 5 4 . . . . 
    . . . 4 5 5 5 4 5 5 5 4 . . . . 
    . . . 4 5 5 5 5 5 5 5 4 . . . . 
    . . . . 4 5 5 5 5 5 4 . . . . . 
    . . . . . 4 5 5 5 4 . . . . . . 
    . . . . . . 4 5 4 . . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 4 . . . . . . . 4 . . . . 
    . . . 4 4 . . . . . 4 4 . . . . 
    . . . 4 5 4 . . . 4 5 4 . . . . 
    . . . 4 5 5 4 . 4 5 5 4 . . . . 
    . . . 4 5 5 5 4 5 5 5 4 . . . . 
    . . . 4 5 5 5 5 5 5 5 4 . . . . 
    . . . . 4 5 5 5 5 5 4 . . . . . 
    . . . . . 4 5 5 5 4 . . . . . . 
    . . . . . . 4 5 4 . . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 4 . . . . . . . 4 . . . . 
    . . . 4 4 . . . . . 4 4 . . . . 
    . . . 4 5 4 . . . 4 5 4 . . . . 
    . . . 4 5 5 4 . 4 5 5 4 . . . . 
    . . . 4 5 5 5 4 5 5 5 4 . . . . 
    . . . 4 5 5 5 5 5 5 5 4 . . . . 
    . . . . 4 5 5 5 5 5 4 . . . . . 
    . . . . . 4 5 5 5 4 . . . . . . 
    . . . . . . 4 5 4 . . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 4 . . . . . . . 4 . . . . 
    . . . 4 4 . . . . . 4 4 . . . . 
    . . . 4 5 4 . . . 4 5 4 . . . . 
    . . . 4 5 5 4 . 4 5 5 4 . . . . 
    . . . 4 5 5 5 4 5 5 5 4 . . . . 
    . . . 4 5 5 5 5 5 5 5 4 . . . . 
    . . . . 4 5 5 5 5 5 4 . . . . . 
    . . . . . 4 5 5 5 4 . . . . . . 
    . . . . . . 4 5 4 . . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
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
Arrow.setPosition(45, 50)
snake.setPosition(45, 81)
Frog.setScale(1, ScaleAnchor.Middle)
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
snake.sayText("" + snakelife + "HP")
game.onUpdate(function () {
    if (batlife <= 0) {
        round2 += -1
        batlife = 9
    }
    if (batlife2 == 0) {
        round4 += -1
    }
    if (snakelife3 == 0) {
        round4 += -1
    }
    if (round4 <= -2) {
        bat.destroy()
        Arrow.destroy()
        tiles.setCurrentTilemap(tilemap`level3`)
        game.splash("You've made it to", "The Tomb of the Bat")
        mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
        Frog.setPosition(90, 90)
        mySprite.setPosition(22, 90)
        mySprite.setScale(1.5, ScaleAnchor.Bottom)
        pause(1900)
        game.splash("To Be Continued...")
        game.over(true)
    }
})
game.onUpdate(function () {
    if (round2 == -2) {
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
        snake.setPosition(20, 81)
        snakelife3 = 5
        snake.sayText("" + snakelife3 + "HP")
        round2 += -1
        batlife2 = 5
        bat.sayText("" + batlife2 + "HP")
        game.splash("Round 4")
        game.splash("Use \"B\" to toggle", "between targets")
    }
})
