{
    // // Case-1 //
    // function dayName(n) {
    //     switch (n) {
    //         case 1:
    //             return "1-Dushanba"
    //         case 2:
    //             return "2-Seshanba"
    //         case 3:
    //             return "3-Chorshanba"
    //         case 4:
    //             return "4-Payshanba"
    //         case 5:
    //             return "5-Juma"
    //         case 6:
    //             return "6-Shanba"
    //         case 7:
    //             return "7-Yakshanba"
    //         default:
    //             return "Bunday kun yo'q"
    //     }
    // }
    // console.log(dayName(5));
}

{
    // // Case-2 //
    // function grades(k) {
    //     switch (k) {
    //         case 1:
    //             return "1-Yomon"
    //         case 2:
    //             return "2-Qoniqarsiz"
    //         case 3:
    //             return "3-Qoniqarli"
    //         case 4:
    //             return "4-Yaxshi"
    //         case 5:
    //             return "5-A'lo"
    //         default:
    //             return "Xato"
    //     }
    // }
    // console.log(grades(5));
}

{
    // // Case-3 //
    // function moon(a) {
    //     switch (a) {
    //         case 1:
    //             return "1 chi oy, 'Kuz'"
    //         case 2:
    //             return "2 chi oy, 'Qish'"
    //         case 3:
    //             return "3 chi oy, 'Bahor'"
    //         case 4:
    //             return "4 chi oy, 'Yoz'"
    //         default:
    //             return "Bunday oy yo'q"
    //     }
    // }
    // console.log(moon(2));
}

{
    // // Case-4 //
    // function monthNumber(number) {
    //     switch (number) {
    //         case 1:
    //         case 3:
    //         case 5:
    //         case 7:
    //         case 8:
    //         case 10:
    //         case 12:
    //             return "Bu oyda 31 kun bor"
    //         case 4:
    //         case 6:
    //         case 9:
    //         case 11:
    //             return "Bu oyda 30 kun bor"
    //         case 2:
    //             return "Bu oyda 29 kun bor"
    //         default:
    //             return "Bunday oy yo'q"
    //     }
    // }
    // console.log(monthNumber(5));
}

{
    // // Case-5 //
    // let A = parseFloat(prompt("A sonini kiriting:"));
    // let B = parseFloat(prompt("B sonini kiriting:"));
    // let operation = parseInt(prompt("Amal raqamini kiriting (1-4):"));
    // let result;
    // switch (operation) {
    //     case 1:
    //         result = A + B;
    //         break;
    //     case 2:
    //         result = A - B;
    //         break;
    //     case 3:
    //         result = A * B;
    //         break;
    //     case 4:
    //         result = A / B;
    //         break;
    //     default:
    //         result = "Notog'ri amal raqami kiritildi.";
    //         break;
    // }
    // console.log(result);
}

{
    // // Case-6 //
    // let length = parseFloat(prompt("Uzunlikni kiriting:"));
    // let unit = parseInt(prompt("Birlik raqamini kiriting (1-5):"));
    // switch (unit) {
    //     case 1:
    //         console.log(length * 0.1 + " metr");
    //         break;
    //     case 2:
    //         console.log(length * 1000 + " metr");
    //         break;
    //     case 3:
    //         console.log(length + " metr");
    //         break;
    //     case 4:
    //         console.log(length * 0.001 + " metr");
    //         break;
    //     case 5:
    //         console.log(length * 0.01 + " metr");
    //         break;
    //     default:
    //         console.log("Notog'ri birlik raqami kiritildi.");
    //         break;
    // }
}

{
    // // Case-7 //
    // let weight = parseFloat(prompt("Og'irlikni kiriting:"));
    // let unit = parseInt(prompt("Birlik raqamini kiriting (1-5):"));
    // switch (unit) {
    //     case 1:
    //         console.log(weight + " kilogramm");
    //         break;
    //     case 2:
    //         console.log(weight / 1000 + " kilogramm");
    //         break;
    //     case 3:
    //         console.log(weight / 1000000 + " kilogramm");
    //         break;
    //     case 4:
    //         console.log(weight * 1000 + " kilogramm");
    //         break;
    //     case 5:
    //         console.log(weight * 100 + " kilogramm");
    //         break;
    //     default:
    //         console.log("Notog'ri birlik raqami kiritildi.");
    //         break;
    // }
}

{
    // // Case-8 //
    // let day = parseInt(prompt("Kun (1-31):"));
    // let month = parseInt(prompt("Oy (1-12):"));
    // let isLeapYear = parseInt(prompt("Kabisa yili (1- ha, 0- yo'q):"));
    // let daysInYear = isLeapYear ? 366 : 365;

    // let daysInMonth;
    // switch (month) {
    //     case 1: 
    //     case 3: 
    //     case 5: 
    //     case 7: 
    //     case 8: 
    //     case 10: 
    //     case 12:
    //         daysInMonth = 31;
    //     case 4: 
    //     case 6: 
    //     case 9: 
    //     case 11:
    //         daysInMonth = 30;
    //     case 2:
    //         daysInMonth = isLeapYear ? 29 : 28;
    //     default:
    //         daysInMonth = "Notog'ri oy raqami kiritildi.";
    // }

    // if (day > 0 && day <= daysInMonth) {
    //     console.log("Sanani ifodalovchi dastur: " + day + "-" + month + ", Yilda " + daysInYear + " kun bor.");
    // } else {
    //     console.log("Notog'ri kun kiritildi.");
    // }
}

{
    // // Case - 9 //
    // let day = parseInt(prompt("Kun (1-31):"));
    // let month = parseInt(prompt("Oy (1-12):"));
    // let isLeapYear = parseInt(prompt("Kabisa yili (1- ha, 0- yo'q):"));

    // let daysInMonth;
    // switch (month) {
    //     case 1: 
    //     case 3: 
    //     case 5: 
    //     case 7: 
    //     case 8: 
    //     case 10: 
    //     case 12:
    //         daysInMonth = 31;
    //     case 4: 
    //     case 6: 
    //     case 9: 
    //     case 11:
    //         daysInMonth = 30;
    //     case 2:
    //         daysInMonth = isLeapYear ? 29 : 28;
    //     default:
    //         daysInMonth = 0;
    // }

    // if (day > 0 && day < daysInMonth) {
    //     day++;
    // } else if (day === daysInMonth) {
    //     day = 1;
    //     if (month < 12) {
    //         month++;
    //     } else {
    //         month = 1;
    //     }
    // } else {
    //     console.log("Notog'ri kun kiritildi.");
    // }
    // console.log("Keyingi sana: " + day + "-" + month);
}

{
    // // Case - 10 //
    // let direction = prompt("Robot yo'nalishi (s, j, q, g):");
    // let command1 = prompt("1-buyruq (0, 1, 2):");
    // let command2 = prompt("2-buyruq (0, 1, 2):");
    // let finalDirection;

    // function turnLeft(currentDirection) {
    //     switch (currentDirection) {
    //         case "s":
    //             return "g";
    //         case "g":
    //             return "j";
    //         case "j":
    //             return "q";
    //         case "q":
    //             return "s";
    //     }
    // }

    // function turnRight(currentDirection) {
    //     switch (currentDirection) {
    //         case "s":
    //             return "q";
    //         case "q":
    //             return "j";
    //         case "j":
    //             return "g";
    //         case "g":
    //             return "s";
    //     }
    // }

    // finalDirection = direction;
    // if (command1 === "1") {
    //     finalDirection = turnLeft(finalDirection);
    // }

}

// // // // // // // // // // // // // // // // // // // // //

{
    // // For-1 //
    // let k = parseInt(prompt("k sonini kiriting:"));
    // let n = parseInt(prompt("n sonini kiriting:"));
    // for (let i = 0; i < n; i++) {
    //     console.log(k);
    // }
}

{
    // // For-2 //
    // let a = parseInt(prompt("a sonini kiriting:"));
    // let b = parseInt(prompt("b sonini kiriting:"));
    // let count = 0;
    // for (let i = a; i <= b; i++) {
    //     console.log(i);
    //     count++;
    // }
    // console.log("Jami:", count);
}

{
    // // For-3 //
    // let a = parseInt(prompt("a sonini kiriting:"));
    // let b = parseInt(prompt("b sonini kiriting:"));
    // let count = 0;
    // for (let i = b - 1; i > a; i--) {
    //     console.log(i);
    //     count++;
    // }
    // console.log("Jami:", count);
}

{
    // // For-4 //
    // let price = parseFloat(prompt("1 kg konfet narxini kiriting:"));
    // for (let i = 1; i <= 10; i++) {
    //     console.log(i + " kg konfet narxi:", price * i);
    // }
}

{
    // // For-5 //
    // let price = parseFloat(prompt("1 kg konfet narxini kiriting:"));
    // for (let i = 1; i < 10; i++) {
    //     console.log((i / 10) + " kg konfet narxi:", price * (i / 10));
    // }
}

{
    // // For-6 //
    // let price = parseFloat(prompt("1 kg konfet narxini kiriting:"));
    // for (let weight = 1.2; weight <= 2.8; weight += 0.2) {
    //     console.log(weight + " kg konfet narxi:", price * weight);
    // }
}

{
    // // For-7 //
    // let a = parseInt(prompt("a sonini kiriting:"));
    // let b = parseInt(prompt("b sonini kiriting:"));
    // let total = 0;
    // for (let i = a; i <= b; i++) {
    //     total += i;
    // }
    // console.log("Yig'indi:", total);
}

{
    // // For-8 //
    // let a = parseInt(prompt("a sonini kiriting:"));
    // let b = parseInt(prompt("b sonini kiriting:"));
    // let product = 1;
    // for (let i = a; i <= b; i++) {
    //     product *= i;
    // }
    // console.log("Ko'paytma:", product);
}

{
    // // For-9 //
    // let a = parseInt(prompt("a sonini kiriting:"));
    // let b = parseInt(prompt("b sonini kiriting:"));
    // let total = 0;
    // for (let i = a; i <= b; i++) {
    //     total += i * i;
    // }
    // console.log("Kvadratlar yig'indisi:", total);
}

{
    // // For-10 //
    // let n = parseInt(prompt("n sonini kiriting:"));
    // let total = 0;
    // for (let i = 1; i <= n; i++) {
    //     total += 1 / i;
    // }
    // console.log("Yig'indi:", total);
}

{
    // // For-11 //
    // let n = parseInt(prompt("n sonini kiriting:"));
    // let total = 0;
    // for (let i = n; i > 0; i--) {
    //     total += i * i;
    // }
    // console.log("Yig'indi:", total);
}

{
    // // For-12 //
    // let n = parseInt(prompt("n sonini kiriting:"));
    // let product = 1;
    // for (let i = 0; i < n; i++) {
    //     product *= 1 + i / 10;
    // }
    // console.log("Ko'paytma:", product);
}

{
    // // For-13 //
    // let n = parseInt(prompt("n sonini kiriting:"));
    // let total = 0;
    // let sign = 1;
    // for (let i = 1; i <= n; i++) {
    //     total += sign * (1 + i / 10);
    //     sign *= -1;
    // }
    // console.log("Yig'indi:", total);
}

{
    // // For-14 //
    // let n = parseInt(prompt("n sonini kiriting:"));
    // let total = 0;
    // for (let i = 0; i < n; i++) {
    //     total += 2 * i + 1;
    // }
    // console.log(n + " ning kvadrati:", total);
}

{
    // // For-15 //
    // let a = parseFloat(prompt("a sonini kiriting:"));
    // let n = parseInt(prompt("n sonini kiriting:"));
    // let result = 1;
    // for (let i = 0; i < n; i++) {
    //     result *= a;
    // }
    // console.log(a + " ning " + n + "-darajasi:", result);
}