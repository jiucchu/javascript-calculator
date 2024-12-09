import { Console } from "@woowacourse/mission-utils";

export class InputUtils {
    static async inputString() {
        return await Console.readLineAsync('덧셈할 문자열을 입력해주세요.\n');
    }
}

export class OutputUtils {
    static printSum(sum) {
        Console.print('결과 : ' + sum);
    }
}