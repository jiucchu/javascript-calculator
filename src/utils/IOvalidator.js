import { ERROR_MESSAGE } from "./Constants.js";
import { Console } from "@woowacourse/mission-utils";

export default class IOvalidator {
    static InputIsEmpty(input) {
        if ((input === null) || (input === '')) {
            return true
        }
        return false
    }

    static checkCustomSeporator(inputString) {
        if (inputString.startsWith('//')) {
            const customDelimeterStartIndex = inputString.indexOf('\\n');
            if (customDelimeterStartIndex == -1) {
                throw new Error(ERROR_MESSAGE.CUSTOM_DELIMETER_ERROR);
            }

            return inputString.substring(2, customDelimeterStartIndex);
        }
    }

    static sliceString(inputString, delimeter) {
        if (delimeter == null) {
            return inputString
        }

        const customDelimeterEndIndex = inputString.indexOf('\\n') + 2;

        return inputString.substring(customDelimeterEndIndex);
    }

    static splitString(string, delimeter) {
        if (delimeter == null) {
            delimeter = (/:|,/);
        }

        return string.split(delimeter);
    }

    static stringToNumberList(string, delimeter) {
        const stringNumbers = this.splitString(string, delimeter);

        stringNumbers.map(number => {
            number = Number(number);

            if (Number.isNaN(number)) {
                throw new Error(ERROR_MESSAGE.INPUT_IS_NOT_NUMBER);
            }

            if (number <= 0) {
                throw new Error(ERROR_MESSAGE.INPUT_IN_NOT_POSITIVE);
            }
        })

        return stringNumbers;
    }

}