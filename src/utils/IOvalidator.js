import { ERROR_MESSAGE } from "./Constants";

export default class IOvalidator {
    static InputIsEmpty(input) {
        if ((input === null) || (input === '')) {
            return true
        }

        return false
    }

    static checkCustomSeporator(inputString) {
        if (inputString.startWith('//')) {
            customDelimeterStartIndex = inputString.indexof('\\n');
            customDelimeterEndIndex = inputString.indexof('\\n') + 2;

            if (customDelimeterStartIndex == -1) {
                throw new Error(ERROR_MESSAGE.CUSTOM_DELIMETER_ERROR);
            }

            return inputString.subString(customDelimeterStartIndex, customDelimeterEndIndex + 1);
        }
    }

    static splitString(string, delimeter) {
        if (delimeter == null) {
            delimeter = (/:|,/);
        }

        return string.split(delimeter);
    }

    static stringToNumber(stringNumbers) {
        stringNumbers.map(number => {
            number = Number(string);

            if (Number.isNaN(string)) {
                throw new Error(ERROR_MESSAGE.INPUT_IS_NOT_NUMBER);
            }

            if (number <= 0) {
                throw new Error(ERROR_MESSAGE.INPUT_IN_NOT_POSITIVE);
            }
        })

        return stringNumbers;
    }

}