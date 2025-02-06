// let pr1 = prompt("Напишите Модель Машины");
// let object1 = {
//      merc: {
//           model: "Mercedec Cls 350",
//           hp: 306
//      },
//      BMW: {
//           model: "BMW 530",
//           hp: 249
//      },
//      Audi: {
//           model: "Audi RS7",
//           hp: 605
//      }
// }
// if (pr1 == "merc") {
//      console.log(object1,merc);
// }else if (pr1 == "BMW") {
//      console.log(object1.BMW);
// }else if (pr1 == "Audi") {
//      console.log(object1.Audi);
// }
//2
// let sum = 1;
// let object2 = {
//      operation: "minus",
//      arr1: [1,2,3,4,5,6,7,8,9,10],
//      sum: 0,
//      result: null
// }
// if (object2.operation = "plus") {
//      object2.arr1.forEach(e1 => {
//           sum+=e1;
//      });
// }else if (object2.operation = "minus") {
//      object2.arr1.forEach(e2 => {
//           sum-=e2;
//      });
// }else if (object2.operation = "umnoj") {
//      object2.arr1.forEach(e3 => {
//           sum*=e3;
//      });
// }else if (object2.operation = "sr ar") {
//      object2.arr1.forEach(e4 => {
//           sum+=e4;
//           sum/arr1.length;
//      });
// }
// console.log(sum);


// let a = 0;
// while (a<=5) {
//     let pr1 = prompt('Napichi Slovo Luboe');
//     document.getElementsByClassName("b1")[a].innerHTML = pr1;
//     a++;
// }


// let div2 = document.createElement("div");
// let div3 = document.createElement("div");
// document.body.append(div2);
// document.body.append(div3);



// for (let i = 0; i < 3; i++) {
    //     document.getElementsByTagName("div")[i].style.backgroundColor = "red";
    //     document.getElementsByTagName("div")[i].style.width = "200px";
    //     document.getElementsByTagName("div")[i].style.height = "200px";
    //     document.getElementsByTagName("div")[i].style.border = "solid 2px red";
    //     document.getElementsByTagName("div")[i].style.margin = "50px";
    // }              
// function func1() {
    
// }
// let div1 = document.createElement("div");
// document.getElementsByTagName("div")[0].style.backgroundColor = "blue";
// document.getElementsByTagName("div")[0].style.width = "200px";
// document.getElementsByTagName("div")[0].style.height = "200px";
// document.getElementsByTagName("div")[0].style.margin = "200px";
// document.getElementsByTagName("div")[0].onmouseover = (function() {document.getElementsByTagName("div")[0].style.backgroundColor = "aqua";});
// document.getElementsByTagName("div")[0].onclick = (function() {document.getElementsByTagName("div")[0].style.backgroundColor = "black";});
// document.getElementsByTagName("div")[0].onkeydown = (function() {document.getElementsByTagName("div")[0].style.backgroundColor = "white";});

// //2
// function func2(params) {}


// function func1() {
//     let p = document.createElement("p");
//     document.body.append(p);
//     if (document.getElementsByTagName("input")[0].value.length < 8) {
//         document.getElementsByTagName("p")[0].innerHTML = "Напишите заново но правильно!";
//         document.getElementsByTagName("p")[0].style.color = "red";
//     } else {
//         document.getElementsByTagName("p")[0].innerHTML = "Успешно!"
//         document.getElementsByTagName("p")[0].style.color = "green";
//     }
// }
//1
// let sel = document.getElementsByTagName("select")[0];
// let img1 = document.createElement("img"); 
// function func1() {
//     if (sel.value == "Mercedes") {
//         img1.src = "https://www.google.com/imgres?q=mercedes&imgurl=https%3A%2F%2Fstimg.cardekho.com%2Fimages%2Fcarexteriorimages%2F930x620%2FMercedes-Benz%2FC-Class%2F10858%2FMercedes-Benz-C-Class-C-200%2F1720160050225%2Ffront-left-side-47.jpg&imgrefurl=https%3A%2F%2Fwww.cardekho.com%2Fcarmodels%2FMercedes-Benz%2FMercedes-Benz_C-Class&docid=r0wQDKVJvNCn2M&tbnid=7q5TRg0nvgEPzM&vet=12ahUKEwiFpYfgm4GLAxWEQ_EDHZsEGvUQM3oECBwQAA..i&w=930&h=620&hcb=2&ved=2ahUKEwiFpYfgm4GLAxWEQ_EDHZsEGvUQM3oECBwQAA";
//     }else if (sel.value == "Mercedes") {
//         img1.src = "https://www.google.com/imgres?q=mercedes&imgurl=https%3A%2F%2Fimages.netdirector.co.uk%2Fgforces-auto%2Fimage%2Fupload%2Fq_auto%2Cc_fill%2Cf_auto%2Cfl_lossy%2Cw_1920%2Ch_873%2Fauto-client%2Ffae0b0ffe8a7042a015b8174b882e3c5%2Fmercedes_benz_cle_coupe_c236_exterior_media_gallery_frontdesign_2176x1224_05_2023.jpg&imgrefurl=https%3A%2F%2Fwww.mercedes-benz.com.az%2F&docid=Mrx6OefhlDI6VM&tbnid=wihRDlg4LcTn2M&vet=12ahUKEwiHtvfV4PqKAxVnA9sEHeBuDI8QM3oECGMQAA..i&w=1920&h=873&hcb=2&ved=2ahUKEwiHtvfV4PqKAxVnA9sEHeBuDI8QM3oECGMQAA";
//     }else if (sel.value == "Mercedes") {
//         img1.src = "https://www.google.com/imgres?q=audi&imgurl=https%3A%2F%2Fmediaservice.audi.com%2Fmedia%2Ffast%2FH4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grj4OJvKrLmc65T3rWiLaKlnFop_H2MLACdTFqAQnmQiDB9wZIcCoxgEmQeQUgIgHEZ3JiZmBgrQAyIhlAgI-vtCinILEoMVevPDOlJENQw4BIIMzu4hri6OkTDACYh-QJ6QAAAA&imgrefurl=https%3A%2F%2Fwww.audi.co.uk%2Fen%2Fmodels%2F&docid=1zADXKZa8LCDhM&tbnid=nXDOHt5iDLeAuM&vet=12ahUKEwiH1_yF4fqKAxVxB9sEHWzwHzYQM3oECB0QAA..i&w=1400&h=601&hcb=2&ved=2ahUKEwiH1_yF4fqKAxVxB9sEHWzwHzYQM3oECB0QAA";
//    }
// }
// document.body.append(img1);

// //2


// let but1 = document.getElementsByTagName("button")[0];
// let but2 = document.getElementsByTagName("button")[1];
// let but3 = document.getElementsByTagName("button")[2];
// but1.style.backgroundColor = "red";
// but2.style.backgroundColor = "blue";
// but3.style.backgroundColor = "green";
// but1.onclick = function func1() {
//     let div1 = document.createElement("div");
//     div1.style.backgroundColor = "red";
//     div1.style.height = "200px";
//     div1.style.width = "200px";
//     document.body.append(div1);
// }
// but2.onclick = function func2() {
//     let div1 = document.createElement("div");
//     div1.style.backgroundColor = "blue";
//     div1.style.height = "200px";
//     div1.style.width = "200px";
//     document.body.append(div1);
// }
// but3.onclick = function func3() {
//     let div1 = document.createElement("div");
//     div1.style.backgroundColor = "green";
//     div1.style.height = "200px";
//     div1.style.width = "200px";
//     document.body.append(div1);
// }





// for (let i = 0; i < 4; i++) {
//     for (let i = 0; i < 4; i++) {
//         let div1 = document.createElement("div");
//     let div2 = document.createElement("div");
//     div1.style.backgroundColor = "black";
//     div1.style.height = "100px";
//     div1.style.width = "100px";
//     div2.style.backgroundColor = "white";
//     div2.style.height = "100px";
//        div2.style.width = "100px";
//        document.body.append(div2);
//     document.body.append(div1);
//     }
//     for (let i = 0; i < 4; i++) {
//         let div1 = document.createElement("div");
//         let div2 = document.createElement("div");
//         div1.style.backgroundColor = "white";
//         div1.style.height = "100px";
//         div1.style.width = "100px";
//         div2.style.backgroundColor = "black";
//         div2.style.height = "100px";
//            div2.style.width = "100px";
//            document.body.append(div2);
//         document.body.append(div1);
//     }
// }


1


// let h1 = document.querySelector("h1");
// let p1 = document.querySelector("p");
// function func1() {
//     h1.innerHTML = "Добро пожаловать в мир JavaScript.";
//     p1.innerHTML = "Текст был изменен!";
// }


2
// let but = document.createElement("button");
// but.innerHTML = "Click";
// document.body.append(but);
// but.addEventListener("click", func1);
// let div1 = document.createElement("div");
// div1.style.display = "none";
// function func1() {
//     div1.style.display = "block";
//     div1.style.width = "100px";
//     div1.style.height = "100px";
//     div1.innerHTML = "Это новый div!";
//     document.body.append(div1);
// }

let but1 = document.createElement("button");
let but2 = document.createElement("button");
document.body.append(but1);
document.body.append(but2);
but1.innerHTML = "Knopka Nomer 1";
but2.innerHTML = "Knopka Nomer 2";
but1.addEventListener("click", func1);
but2.addEventListener("click", func2);
function func1() {
    window.open('http://google.com', 'my-google');
}
function func2() {
    window.close();
}


let console1 = window.innerWidth;
let console2 = window.innerHeight;
console.log(console1);
console.log(console2);

let but3 = document.createElement("button");
document.body.append(but3);
but3.innerHTML = "Knopka Nomer 3";
but3.addEventListener("click", func3);
function func3() {
    window.open();
    window.resizeTo(300, 300);
}

function func4() {
    window.open();
    window.resizeTo(300, 300);
}
setTimeout(func4, 2000)