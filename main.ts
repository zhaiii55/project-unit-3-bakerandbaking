sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
let mySprite: Sprite = null
let ingrediant4: Sprite = null
let badingridiant: Sprite = null
let ingrediant3: Sprite = null
let ingrediant1: Sprite = null
let ingrediant2: Sprite = null
let cupcake = sprites.create(img`
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
    `, SpriteKind.Food)
let cake_pop = sprites.create(img`
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
    `, SpriteKind.Food)
let pieslice = sprites.create(img`
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
    `, SpriteKind.Food)
let list = [assets.image`pie`, img`
    ............bbbbbbbbb...........
    ...........bb5155555bb..........
    ..........bb555545545bb.........
    ..........b55545555555b.........
    .........bb51555555155bb........
    .........b5555554554555b........
    .........b5454555555515b........
    .........b5555551555555b........
    .........bb51555554555bb........
    ..........b55555555555b.........
    ..........bb554554551bb.........
    ...........bb5555555bb..........
    ............bbb515bbb...........
    ..............b555b.............
    ...............bbb..............
    ...............818..............
    ...............818..............
    ...............818..............
    ...............818..............
    ...............818..............
    ...............818..............
    ...............818..............
    ...............818..............
    ...............818..............
    ...............818..............
    ...............818..............
    ...............818..............
    ...............818..............
    ...............818..............
    ...............818..............
    ...............818..............
    ...............888..............
    `, img`
    ................................
    ................................
    ..........ccc...................
    ........ccc6cffff...............
    ........c661bccfff..............
    ........cc12c2cccfff............
    .........c222bbbccff............
    .........f2ccbcccccffff.........
    ......fffcccccccccbbbcff........
    ......fccbbbbbbbbbbccccff.......
    ......fccccccccccccccbccf.......
    .....fffccccccccbbbbbbcfff......
    ....fcbbbbbbbbbbbccccccccff.....
    ....fcccccccccccccccccccccf.....
    ....fcceecccccceeeccceeeecf.....
    ....c777777777777777777777c.....
    ....c77b77b77b777b77b77b77c.....
    ....cc7b77b77b777b77b77b7c......
    .....c7b77b77b777b77b77b7c......
    .....c7b77b77b777b77b77b7c......
    .....c77b77b77b77b7b77b77c......
    .....cc7b77b77b77b7b77b7cc......
    .....cc7b77b77b77b7b77b7c.......
    ......c7b77b77b77b7b77b7c.......
    ......c7b77b77b77b7b77b7c.......
    ......c7b77b77b77b7b77b7c.......
    ......c77b77b77bb7b77b77c.......
    ......cc777777777777777cc.......
    .......ccccccccccccccccc........
    ................................
    ................................
    ................................
    `]
info.setScore(0)
let chef = sprites.create(img`
    .........99999999999999999999999..........
    .........91191191911911919119119..........
    .........91191191911911919119119..........
    .........91191191911911919119119..........
    .........91191191911911919119119..........
    .........99999999999999999999999..........
    ...........9191191911911919119............
    ...........9999999999999999999............
    ............fffffffffffffffff.............
    ............fffffdddddddfffff.............
    ............ffdddddddddddddff.............
    ............fdddddddddddddddf.............
    ............eddddddddddddddde.............
    ............eddddddddddddddde.............
    ............efffdddddddddfffe.............
    ............ed66ddddddddd66de.............
    ............e22dddddddddddd2e.............
    ............eeeeeeeeeeeeeeeee.............
    ..................eddde...................
    ...........8888888888888888888............
    ...........8999999999999999998............
    ............88899999999999888.............
    ............ddd88888888888ddd.............
    ............edd91119119119dde.............
    ............eee91111991119eee.............
    .............119111119111911..............
    .............999111919111999..............
    ...............91111191119................
    ...............91119191119................
    ...............91111191119................
    ...............91119191119................
    ...............91111191119................
    ...............99119191199................
    ...............99999999999................
    ...............91111111119................
    ...............91119991119................
    ...............91119.91119................
    ...............91119.91119................
    ...............91119.91119................
    ...............91119.99999................
    ..............ffffff.ffffff...............
    ..............ffffff.ffffff...............
    `, SpriteKind.Player)
scene.setBackgroundImage(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55557777777777777777bcccb7775555555577777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55577777777777777777bcccb7777777755577777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55577777777777777777bcccb7777777777777777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55577777777777777777bcccb7777777577777777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55555555777757777777bcccb7777777755777777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55755555777777777777bcccb7777777777557777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55775555557777777777bcccb7777777777757777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55777555555777777777bcccb7777777777775577777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55777755555577777777bcccb5777777777777555777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55775775555555777777bcccb5777777757777775577bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55777557555555577777bcccb7777777775577777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55777775575555557777bcccb7777777777577777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55577777757555557777bcccb7775777777757777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55755577775755557775bcccb7755777777775777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55777555777555557775bcccb7775777777777577777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55777775577755557775bcccb7777777777777755777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55777777755777557775bcccb7777757777777775777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55577777777577757775bcccb5777757777777777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55577777777777777775bcccb5577775777777777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55557777777777777775bcccb5577777577777777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55555577777777777775bcccb7777777755777777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55555577777777777775bcccb7777777777555777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55555557777777777775bcccb7777777777775577777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55555555577777777775bcccb7775777777775577777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb55555555577777777775bcccb7775577777777777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb77755555557777777775bcccb7775557777777777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb77777777755777ccc775bcccb777ccc7775577777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb77777777775577ccc775bcccb555ccc7775555777777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb77777777777755ccc775bcccb555ccc7775555555777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbccc77777777777777777777777777777777777777777777cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb77777777777755ccc775bcccb555ccc7775555555777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbccc7777ccc7777777ccc777777777ccc77777777ccc7777cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb77777777777777ccc775bcccb555ccc7775555555777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbccc7777ccc7777777ccc777777777ccc77777777ccc7777cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb77777777777777ccc775bcccb555ccc7777555555777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbccc7777ccc7777777ccc777777777ccc77777777ccc7777cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb77777757777777ccc775bcccb555ccc7777755555777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbccc77777777777777777777777777777777777777777777cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb77777775777777ccc775bcccb555ccc7777755555777bcccbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb77777777557777ccc775bcccb555ccc7777775555777bcccbbb
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccb77755777775777ccc775bcccb555ccc7777777755777bcccbbb
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccb77755577777577ccc775bcccb557ccc7777777775777bcccbbb
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccb77777557777757ccc775bcccb557ccc5777777777777bcccbbb
    cc55555555555555555555ccc77777777777777777777777777777777777777777777777777ccc5555555555555555555555555cccccb77777775577775ccc775bcccb557ccc5557777777777bcccbbb
    cc55555555555555555555ccc77777777777777777777777777777777777777777777777777ccc5555555555555555555555555cccccb77777777557777557775bcccb5777777755777777777bcccbbb
    cc55555555555555555555ccc77777777777777777777777777777777777777777777777777ccc5555555555555555555555555cccccb77777777555777777775bcccb5777777775577777777bcccbbb
    cc55555555555555555555ccc77777777777777777777777777777777777777777777777777ccc5555555555555555555555555cccccb77777777755577777777bcccb5777777777555777777bcccbbb
    cc55555555555555555555ccc77777cccccccccccccccccccccccccccccccccccccccc77777ccc5555555555555555555555555cccccb77777777777557777777bcccb5777777777555777777bcccbbb
    cc55555555555555555555ccc77777cccccccccccccccccccccccccccccccccccccccc77777ccc5555555555555555555555555cccccb77777777777555777777bcccb5777777777755555777bcccbbb
    cc55555555555555555555ccc77777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc77777ccc5555555555555555555555555cccccb77777777777755577777bcccb5577777777775557777bcccbbb
    cc55555555555555555555ccc77777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc77777ccc5555555555555555555555555cccccb77777777777775557777bcccb5557777777777557777bcccbbb
    cc55555555555555555555ccc77777ccbbbbccccccccccccccccccccccccccccbbbbcc77777ccc5555555555555555555555555cccccb77777777777777557777bcccb5555777777777757777bcccbbb
    cc55555555555555555555ccc77777ccbbbccccccccccccccccccccccccccccccbbbcc77777ccc5555555555555555555555555cccccb77757777777777757777bcccb5555577777777775777bcccbbb
    cc55555555555555555555ccc77777ccbbbbccccccccccccccccccccccccccccbbbbcc77777ccc5555555555555555555555555cccccb77755777777777777777bcccb5555557777777777777bcccbbb
    cc55555555555555555555ccc77777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc77777ccc5555555555555555555555555cccccb77755577777777777777bcccb5555557777777777777bcccbbb
    cc55555555555555555555ccc77777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc77777ccc5555555555555555555555555cccccb77755557777777777777bcccb5577555777777777777bcccbbb
    cc55555555555555555555ccc77777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc77777ccc5555555555555555555555555cccccb77755555577777757777bcccb5577775557777777777bcccbbb
    cc55555555555555555555ccc77777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc77777ccc5555555555555555555555555cccccb77755555557777777777bcccb7777777555777777777bcccbbb
    cc55555555555555555555ccc77777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc77777ccc5555555555555555555555555cccccb77755555557777777777bcccb7777777755555777777bcccbbb
    cc55555555555555555555ccc77777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc77777ccc5555555555555555555555555cccccb77755555555777777777bcccb7777777775555555777bcccbbb
    cc55555555555555555555ccc77777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc77777ccc5555555555555555555555555cccccb77755555555577777777bcccb5777777777555555777bcccbbb
    cc55555555555555555555ccc77777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc77777ccc5555555555555555555555555cccccb77755555555557777777bcccb5577777777755555777bcccbbb
    cc55555555555555555555ccc77777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc77777ccc5555555555555555555555555cccccb77755555555555777777bcccb5557777777775555777bcccbbb
    cc55555555555555555555ccc77777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc77777ccc5555555555555555555555555cccccb77755555555555557777bcccb5555777777777557777bcccbbb
    cc55555555555555555555ccc77777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc77777ccc5555555555555555555555555cccccb77755555555557777777bcccb5555577777777757777bcccbbb
    cc55555555555555555555ccc77777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc77777ccc5555555555555555555555555cccccb77755555555557777777bcccb5555555777777777775bcccbbb
    cc55555555555555555555ccc77777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc77777ccc5555555555555555555555555cccccb77755555555557777777bcccb5555555577777777555bcccbbb
    cc55555555555555555555ccc77777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc77777ccc5555555555555555555555555cccccb77755555555557777777bcccb5555555555577777775bcccbbb
    cc55555555555555555555ccc77777ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc77777ccc5555555555555555555555555cccccb77755555555557777777bcccb5555555555577777775bcccbbb
    cc55555555555555555555ccc77777cccccccccccccccccccccccccccccccccccccccc77777ccc5555555555555555555555555cccccb77777777777777777777bcccb7775555555575555577bcccbbb
    cc55555555555555555555ccc77777cccccccccccccccccccccccccccccccccccccccc77777ccc5555555555555555555555555cccccb77777777777777777777bcccb7775555555555555557bcccbbb
    cc55555555555555555555ccc77777777777777777777777777777777777777777777777777ccc5555555555555555555555555cccccb77777777777777777777bcccb7775555555555555557bcccbbb
    cc55555555555555555555ccc77777777777777777777777777777777777777777777777777ccc5555555555555555555555555cccccbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbcccbbb
    cc55555555555555555555ccc77777777777777777777777777777777777777777777777777ccc5555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbb
    `)
controller.moveSprite(chef)
chef.setStayInScreen(true)
let goal = randint(1, 25)
game.splash("Goal: " + goal)
game.onUpdateInterval(4300, function () {
    ingrediant2 = sprites.createProjectileFromSide(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ...........dddddddddddddddd.....
        ...........d44444444444444d.....
        ..........dd44444444444444d.....
        .........d4d44444444444444d.....
        ........d4dd44444444444444d.....
        .......d44dd44444444444444d.....
        ......d44d.d44444444444444d.....
        .....d44d..d44444444444444d.....
        ...99d4d999d44444444444444d999..
        ...91dd1111dddddddddddddddd119..
        ...911111111111111111111111119..
        ...999999999999999999999999999..
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, 0, 25)
    ingrediant2.setPosition(randint(0, 150), 0)
})
game.onUpdateInterval(3900, function () {
    ingrediant1 = sprites.createProjectileFromSide(img`
        ................................
        ..................99999999......
        ...............999911111199.....
        ............999911111111119.....
        ...........9911111111111119.....
        .....9999999999999999991119.....
        .....9111111111111111199999.....
        .....9111111111111111111119.....
        .....9999999999999999111119.....
        .....9111111111111119999999.....
        .....9111111111111111111119.....
        .....9111111111111111111119.....
        .....9111111111111111111119.....
        .....8888888888888888888888.....
        .....8888888888888888888888.....
        .....8111818881111818181118.....
        .....8188818881881818181818.....
        .....8118818881881818181118.....
        .....8188818881881818181188.....
        .....8188811181111811181818.....
        .....8888888888888888888888.....
        .....8888888888888888888888.....
        .....9111111111111111111119.....
        .....9111111111111111111119.....
        .....9111111111111111111119.....
        .....9111111111111111111119.....
        .....9111111111111111111119.....
        .....9999999999999999999999.....
        .....9111111111111111111119.....
        .....9999999999999999999999.....
        ................................
        ................................
        `, 0, 25)
    ingrediant1.setPosition(randint(0, 150), 0)
})
game.onUpdateInterval(2100, function () {
    ingrediant3 = sprites.createProjectileFromSide(img`
        ................................
        ..................888888........
        ..................8111118.......
        ..................81111188......
        .............88888888111188.....
        ............8811111118111188....
        ............81111111111811188...
        ...........811111111111811118...
        ..........81111111111118811118..
        ..........811111111111118811118.
        .........8111111111111119988818.
        .........811111111111119998.888.
        .........811111111111119998.....
        ........8111111111111199998.....
        ........8111111111111199998.....
        ........8111111111111999988.....
        .......8811111111111199988......
        .......811111111111999988.......
        .......81111111111999988........
        ......81111111111999888.........
        ......811111111199888...........
        ......8111111199988.............
        .....8111111199988..............
        .....811111199888...............
        .....8111119888.................
        ....b11111988...................
        ...b3b111888....................
        ...b33b888......................
        ...b333b........................
        ...bbbb.........................
        ................................
        ................................
        `, 0, 25)
    ingrediant3.setPosition(randint(0, 150), 0)
})
game.onUpdateInterval(1500, function () {
    badingridiant = sprites.createProjectileFromSide(img`
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
        `, 0, 25)
    ingrediant1.setPosition(randint(0, 150), 0)
})
game.onUpdateInterval(1500, function () {
    ingrediant4 = sprites.createProjectileFromSide(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........aaaaaaaaaa33aaa.........
        ........dddddddddd44ddd.........
        ........dddddddddd44ddd.........
        ........dddddddddd44ddd.........
        ........dddddddddd44ddd.........
        ........dddddddddd44ddd.........
        ........dddddddddd44ddd.........
        ........222222222222222.........
        ........222211122222222.........
        ........222112122111122.........
        ........221222121122222.........
        ........222222112222222.........
        ........222222222222222.........
        ........dddddddddd44ddd.........
        ........dddddddddd44ddd.........
        ........dddddddddd44ddd.........
        ........dddddddddd44ddd.........
        ........dddddddddd44ddd.........
        ........dddddddddd44ddd.........
        ........dddddddddd44ddd.........
        ........aaaaaaaaaa33aaa.........
        ................................
        ................................
        ................................
        ................................
        ................................
        `, 0, 25)
    ingrediant4.setPosition(randint(0, 150), 0)
})
forever(function () {
    if (info.score() == goal) {
        mySprite = sprites.create(list._pickRandom(), SpriteKind.Food)
        mySprite.setPosition(78, 100)
        pause(100)
        game.setGameOverEffect(true, effects.confetti)
        game.gameOver(true)
    }
})
