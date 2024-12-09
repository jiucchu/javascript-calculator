export default class Calculator {
    static sum(numbers) {
        let sum = 0;

        numbers.map(number => {
            sum += number;
        })

        return sum;
    }
}