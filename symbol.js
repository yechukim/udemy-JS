const symbolOne = Symbol('a generic name') //new 키워드 필요 없음
//primitive 타입
const symbolTwo = Symbol('a generic name')
console.log(symbolOne, symbolTwo, typeof symbolOne)
//심볼은 같을 수 없다
console.log(symbolTwo === symbolOne)
//심볼 -- 완전 유니크함

const ninja = {}
ninja.age = 30
ninja['belt'] = 'orange'
ninja['belt'] = 'black' // 'belt' 프로퍼티 override 함 

ninja[symbolOne] = 'ryu'
ninja[symbolTwo] = 'mario'
console.log(ninja)

//NO SYMBOL IS THE SAME
//심볼을 키로 사용한다 -> 모든 키 유니크 