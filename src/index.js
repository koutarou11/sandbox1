// var val1 = "var1";
// console.log(val1);

// val1="var22"
// console.log(val1);

// var val1 = "var55";
// console.log(val1);

// let val2="let";
// console.log(val2);
// val2="sasa";
// console.log(val2);

// let val2="aarra";
// console.log(val2);

// const vak = "asasa";
// console.log(vak);

// const vak = "asassa";
// console.log(vak);

// const vag={
//   name:"dserg",
//   age:25,
// };
// vag.name=
// console.log(vag);

// const das = ["a", "b"];
// das[0] = "sa";
// das.push("aaaa");
// console.log(das);
//点プレーと
// const name="aaa";
// const age=11;

// const message1=`私の名前は${name}です。年齢は${age}どぇす。`;
// console.log(message1);

//アロー関数

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("aaa"));

// const func3= (num1,num2) =>{
//   return num1+num2;
// };
// console.log(func3(10,20));

//分割代入
// const aaaa={
//   name:"fef",
//   age:21,

// };
// const {name,age}=aaaa;
// const message1=`私の名前は${name}desu年齢は${age}ですです`;
// console.log(message1);
// const aaa = ["aaa", 12];
// const [name, age] = aaa;
// const message1 = `私の名前は${name}desu年齢は${age}ですです`;
// console.log(message1);

// const as=(name="asas")=>console.log(`こんにちは、${name}sann`);
// as();

//スプレっと構文
// //配列の展開
// const aer=[1,2];
// console.log(...aer);

// const sut=(num1,num2)=>console.log(num1+num2);
// sut(aer[0],aer[1]);
// sut(...aer);

// const arr1=[1,2,3,4,5];
// const[num1,num2,...num3]=arr1;
// console.log(num3);

// const arr3=[10,20];
// const eer2=[30,40];
// const aeer=[...arr3];
// const aee2=[...arr3,...eer2];
// console.log(aee2);
const namearr = ["yamada", "tanaka"];
// const name=namearr.map((name)=>{
//   return name;
// })

// namearr.map((name)=>console.log(name));
// const numarr=[1,2,3];
// const newNum=numarr.filter((num)=>{
// return num%2==0;
// })
// console.log(newNum);

// const numarr=namearr.map((name)=>{
//   if(name=="tanaka"){
//     return name;
//   }else {
//     return `${name}さん`
//   }

// })
// console.log(numarr);

//三興演算子
// ？がtrue :がfalse
// const v1=1>0　?"true":"false";
// console.log(v1);

// const a=1300;
// console.log(a.toLocaleString());

// const conse=typeof a=='number'?a.toLocaleString():`数値を入力せよ`;
// console.log(conse);
// const chek=(num1,num2)=>{
//   return num1+num2>100 ?`100koe`:`kyoyou`;
// }
// console.log(chek(30,40))

//論理演算し
const flag1 = true;
const a = false;
if (flag1 || a) {
  console.log("どちらかはtrue");
}

const num = null;
const dd = num || "kinngaku";
console.log(dd);

const num1 = null;
const dd1 = num && "kinngaku";
console.log(dd1);
