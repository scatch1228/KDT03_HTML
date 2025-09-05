// 리터럴 생성
let arr1 = ['나',2,3,4,5,6,7,8];

//생성자 생성
let arr = new Array(5); //빈 배열
let arr2 = new Array(1,2,3,4,5); //엔트리 채워짐

console.log(`arr2=${arr2}`)
console.log(`arr2 요소 개수 ${arr2.length}`)

//배열요소 추가
console.log(arr1)
arr1.push('가')
console.log(arr1)

let arr1Pop = arr1.pop()
arr1.pop()
console.log(arr1, typeof(arr1))
console.log(arr1Pop, typeof(arr1Pop))

//배열순회
for (let i in arr2) {
    console.log(arr2[i])
}

for (let c of arr2) {
    console.log(c)
}

arr2.forEach((c, i) => {
    console.log(c, i)
}) ;

//map method
const arr3 = arr1.map((c) => {
    return c * 2 ;
})

console.log(arr3)
console.log(arr1.map(c => c * 2))

//문법
//1 parameter => can omit () inside callback()
//{}에 리턴문만 있으면 {}와 return 생략가능

//filter method
const arrFilter = arr1.filter((c) => {
    return c%2 == 0;
})
console.log(arrFilter)