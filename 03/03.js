//기존 방식
// function Hi(n) {
//     if (n=='1') alert("안녕하세요");
//     else alert("반갑습니다");

//     console.log("콘솔출력")
// }

// 화살표함수
const Hi = (n) => {
    if (n == '1') alert("안녕하세요");
    else alert("반갑습니다");

    console.log("콘솔출력");
}

const Check = () => {
    // x=10;

    // var x;
    let x ;
    x='test';
    const y='20';
    // console.log('x = ' + x); =
    console.log(`x = ${x}`);
    console.log(`x=${typeof(x)}, y=${typeof{y}}`);
    console.log(`${x}는 문자? ${isNaN(x)?'T':'F'}`);
    console.log(`${y}는 문자? ${isNaN(y)?'T':'F'}`);
}