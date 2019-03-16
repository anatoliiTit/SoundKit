const snd = document.querySelector('audio');
document.addEventListener('keypress', (e) => {
    snd.currentTime = 0;
    switch (e.charCode) {
        case 113:
            snd.src = 'samples/snap-yes_1.mp3';
            snd.play();
            press('Q');
            break;
        case 119:
            snd.src = 'samples/pickle_rick.mp3';
            snd.play();
            press('W');
            break;
        case 101:
            snd.src = 'samples/my-man.mp3';
            snd.play();
            press('E');
            break;
        case 114:
            snd.src = 'samples/hihat.wav';
            snd.play();
            press('R');
            break;
        case 97:
            snd.src = 'samples/openhat.wav';
            snd.play();
            press('A');
            break;
        case 115:
            snd.src = 'samples/ride.wav';
            snd.play();
            press('S');
            break;
        case 100:
            snd.src = 'samples/tink.wav';
            snd.play();
            press('D');
            break;
        case 102:
            snd.src = 'samples/clap.wav';
            snd.play();
            press('F');
            break;
        case 122:
            snd.src = 'samples/boom.wav';
            snd.play();
            press('Z');
            break;
        case 120:
            snd.src = 'samples/snare.wav';
            snd.play();
            press('X');
            break;
        case 99:
            snd.src = 'samples/kick.wav';
            snd.play();
            press('C');
            break;
        case 118:
            snd.src = 'samples/tom.wav';
            snd.play();
            press('V');
            break;
    }

})
function press(id) {
    document.getElementById(id).style.background = 'blue';
    document.getElementById(id).style.boxShadow = 'none';
}
document.addEventListener('keyup', (e) => {
    switch (e.keyCode) {
        case 81:
            up('Q');
            break;
        case 87:
            up('W');
            break;
        case 69:
            up('E');
            break;
        case 82:
            up('R');
            break;
        case 65:
            up('A');
            break;
        case 83:
            up('S');
            break;
        case 68:
            up('D');
            break;
        case 70:
            up('F');
            break;
        case 90:
            up('Z');
            break;
        case 88:
            up('X');
            break;
        case 67:
            up('C');
            break;
        case 86:
            up('V');
            break;
    }
})
function up(id) {
    document.getElementById(id).style.background = 'rgb(3, 133, 255)';
    document.getElementById(id).style.boxShadow = '2px 2px 5px black';
}

const lineOne = document.getElementById('rec1');
const lineTwo = document.getElementById('rec2');
const lineThree = document.getElementById('rec3');
const lineFour = document.getElementById('rec4');
const playBtn = document.getElementById('playBtn');
let recKey = [];
let recTime = [];

function rec(checkbox, recKey, recTime) {
    if (checkbox.checked) {
        let i = 0;
        document.onkeydown = function (e) {
            let time = new Date().getTime();
            let key = e.keyCode;
            recKey[i] = key;
            recTime[i] = time;
            i++;
        }
    }
}
function keyPlays(keyCode) {
    switch (keyCode) {
        case 81:
            snd.src = 'samples/snap-yes_1.mp3';
            return 81;
            break;
        case 87:
            snd.src = 'samples/pickle_rick.mp3';
            break;
        case 69:
            snd.src = 'samples/my-man.mp3';
            break;
        case 82:
            snd.src = 'samples/hihat.wav';
            break;
        case 65:
            snd.src = 'samples/openhat.wav';
            break;
        case 83:
            snd.src = 'samples/ride.wav';
            break;
        case 68:
            snd.src = 'samples/tink.wav';
            break;
        case 70:
            snd.src = 'samples/clap.wav';
            break;
        case 90:
            snd.src = 'samples/boom.wav';
            break;
        case 88:
            snd.src = 'samples/snare.wav';
            break;
        case 67:
            snd.src = 'samples/kick.wav';
            break;
        case 86:
            snd.src = 'samples/tom.wav';
            break;
    }
    snd.play();
}
function playLine(recKey, recTime) {
    for (let i = 0; i < recKey.length; i++) {
        if (i !== 0) {
            setTimeout(function () { keyPlays(recKey[i]) }, timeToNextSound(i, recTime));
        }
        else {
            keyPlays(recKey[i]);
        }
    }
}
function timeToNextSound(i, recTime) {
    return recTime[i] - recTime[0];
}
lineOne.addEventListener('change', function () {
    rec(lineOne, recKey, recTime);
});
lineTwo.addEventListener('change', function () {
    rec(lineTwo, recKey, recTime);
});
lineThree.addEventListener('change', function () {
    rec(lineTwo, recKey, recTime);
});
lineFour.addEventListener('change', function () {
    rec(lineTwo, recKey, recTime);
});
playBtn.addEventListener('click', (e) => {
    playLine(recKey, recTime);
});