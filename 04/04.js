//회문
const palindrom = (e) => {
    //버튼의 submit 기능 없앰
    // e.preventDefault() ;


    //입력내용 호출
    const inputV = document.getElementById('txt1').value;
    let inputVt = inputV.replaceAll(' ','');

    //문자열 뒤집기
    console.log(typeof (inputV));
    console.log(inputV.length);
    console.log(inputV[3]);

    let resultV='';

    // for (let i = inputVt.length - 1; i >= 0; i--) {
    //     console.log(inputV[i]);
    //     resultV = resultV + inputVt[i];
    // }

    resultV = inputVt.split('').reverse().join('');
    console.log(resultV);
    


    //입력문과 출력문 비교
    if (inputVt == resultV) {
        document.getElementById('txt2').value = `${inputV}는 회문입니다.`;
    }

    else {
        document.getElementById('txt2').value = `${inputV}는 회문이 아닙니다.`;
    }

    //결과를 div#msg 요소에 출력
    document.getElementById('msg').innerHTML = `<span>"${inputV}"</span>는 ${(inputVt == resultV)?  "회문입니다." : "회문이 아닙니다."}`;
    

}

const digitsum = () => {
    //call input value
    const inputV = document.getElementById('txt1').value;

    let sum=0;

    for (let c of inputV) {
        if (!isNaN(c)) { // choose digits in the input
            sum=sum + parseInt(c);
        }
    }

    //return

    document.getElementById('txt2').value = sum;

    document.getElementById('msg').innerHTML = ` 합계 =&nbsp; <span>${sum}</span>`;
}

const cancel = () => {

    document.getElementById('txt1').value='';
    document.getElementById('txt2').value ='';
    document.getElementById('msg').innerHTML = '';

    document.getElementById('txt1').focus();
} 

//incomplete
const totalsum = () => {
    //call input value
    const inputV = document.getElementById('txt1').value;

    let sum=0;
    let resultV = '';

    for (let i=0; i<=inputV.length; i++) {
        if (!isNaN(inputV[i]) & !isNaN(inputV[i+1])) {
            resultV = resultV+inputV[i];
            console.log(resultV)    
        }
    }
    

    //return

    document.getElementById('txt2').value = sum;

    document.getElementById('msg').innerHTML = `<span>${sum}</span>`;
}