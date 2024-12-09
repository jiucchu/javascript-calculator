export default class IOvalidator {

    static checkCustomSeporator(inputString) {
        if (inputString.startWith('//')) {
            customDelimeterStartIndex = inputString.indexof('\\n');
            customDelimeterEndIndex = inputString.indexof('\\n') + 2;

            if (customDelimeterStartIndex == -1) {
                throw new Error('[ERROR]');
            }

            return inputString.subString(customDelimeterStartIndex, customDelimeterEndIndex + 1);
        }
    }

}