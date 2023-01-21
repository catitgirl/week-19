/*Создайте класс Работник, который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. */
class EmployeeTypeOne {
    name;
    surname;
    rate;
    days;
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(rate, days) {
        let salary = this.rate * this.days;
        return salary;
    }
}
let emploOne = new EmployeeTypeOne('Иван', 'Иванов', 10, 31);
console.log(emploOne.name);
console.log(emploOne.surname);
console.log(emploOne.rate);
console.log(emploOne.days);
console.log(emploOne.getSalary());
let emploTwo = new EmployeeTypeOne('Кот', 'Котов', 40, 21);
console.log(emploTwo.name);
console.log(emploTwo.surname);
console.log(emploTwo.rate);
console.log(emploTwo.days);
console.log(emploTwo.getSalary());