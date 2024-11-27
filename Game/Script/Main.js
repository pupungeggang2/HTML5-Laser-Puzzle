window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    canvas.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('keydown', keyDown, false)    

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16
    gameLoop = requestAnimationFrame(loop)
}

function loop() {
    gameFramePrevious = gameFrameCurrent
    gameFrameCurrent = Date.now()
    delta = gameFramePrevious - gameFrameCurrent

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'LevelSelect') {
        loopLevelSelect()
    } else if (scene === 'Game') {
        loopGame()
    }

    gameLoop = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let targetRect = event.getBoundingClientRect
    let x = (event.clientX - targetRect.left) / targetRect.width * canvas.width
    let y = (event.clientY - targetRect.top) / targetRect.height * canvas.height
    let button = event.button

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'LevelSelect') {
        loopLevelSelect()
    } else if (scene === 'Game') {
        loopGame()
    }
}

function keyDown(event) {
    let key = event.key

    if (scene === 'Title') {
        keyDownTitle(key)
    } else if (scene === 'LevelSelect') {
        keyDownLevelSelect(key)
    } else if (Scene === 'Game') {
        keyDownGame(key)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        return false
    }
}

function rightClick() {
    return false
}
