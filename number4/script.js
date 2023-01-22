/*Реализуйте класс Валидатор, который будет проверять строки. 
К примеру, у него будет метод isEmail, который параметром принимает строку и проверяет, 
является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. 
Кроме того, класс будет иметь следующие методы: 
метод isDomain для проверки домена,
 метод isDate для проверки даты и
  метод isPhone для проверки телефона.
  Сделайте 2 версии этого класса - стандартную и статистическую.*/

class Validator {
    constructor() {

    }
    isEmail(str) {
        return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
    }
    isDomain(str) {
        return ((str.indexOf('.com') !== -1) || (str.indexOf('.ru') !== -1))
    }
    isDate(str) {
        const date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
    }
    isPhone(str) {
        let phone = str.match(/\+7\ \([0-9]{3}\)\ [0-9]{2}-[0-9]{2}-[0-9]{3}/);
        return phone === null ? false : true;
    }

}
let validator = new Validator();
console.log(validator.isEmail('natalik@gmail.com'));
console.log(validator.isDomain('yakrytoiprogrramist.ru'));
console.log(validator.isDate('22.01.2023'));
console.log(validator.isPhone('+7 (911) 23-14-014'));
