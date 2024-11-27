function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()
    context.fillText('Laser Puzzle', UI.title.textTitle[0], UI.title.textTitle[1])
    context.fillText('Start Game', UI.title.textStart[0], UI.title.textStart[1])
}

function keyDownTitle(key) {
    if (menu === false) {
        if (state === '') {
            if (key === 'Enter') {
            } else if (key === 'ArrowUp') {
            } else if (key === 'ArrowDown') {
            }
        }
    }
}

function mouseUpTitle(x, y, button) {
}
