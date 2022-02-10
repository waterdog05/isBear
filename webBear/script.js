document.getElementById("confirm").addEventListener('click', isBear());

function isBear() {
    const BEAR = '고민재';
    const SBEAR = '민재';
    const name = document.getElementById('name').value;

    if (name == '') {
        document.getElementById('result').innerText = `> 이름을 입력하세요.`;
    }
    else {
        if (name === BEAR || name === SBEAR) {
            document.getElementById('result').innerText =  `> ${name}는 곰입니다.`;
        }
        else {
            document.getElementById('result').innerText = `> ${name}은/는 곰이 아닙니다.`;
        }
    }
}
