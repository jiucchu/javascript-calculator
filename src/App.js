import { InputUtils, OutputUtils } from "./utils/IOutils.js";
import IOvalidator from "./utils/IOvalidator.js";
import { Console } from "@woowacourse/mission-utils";
import Calculator from "./calculator.js";

class App {
  async run() {

    try {
      const inputString = await InputUtils.inputString();

      if (IOvalidator.InputIsEmpty(inputString)) {
        Console.print('0');

        return 0;
      }

      const customDelimeter = IOvalidator.checkCustomSeporator(inputString);
      const numberString = IOvalidator.sliceString(inputString, customDelimeter);
      const numbers = IOvalidator.stringToNumberList(numberString, customDelimeter);

      OutputUtils.printSum(Calculator.sum(numbers));

    }
    catch (error) {
      Console.print(error.message);
      throw new Error(error.message);
    }

  }
}

export default App;
