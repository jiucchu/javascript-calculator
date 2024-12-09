import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { getLogSpy, mockQuestions } from "./ApplicationTest";


describe("문자열 계산기 예외 테스트", () => {

    test("문자열 구분자가 닫히지 않았을 때 에러를 발생시킨다.", async () => {
        const inputs = ["//;1,2,3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });

    test("예외 테스트", async () => {
        const inputs = ["-1,2,3"];
        mockQuestions(inputs);

        const app = new App();

        await expect(app.run()).rejects.toThrow("[ERROR]");
    });
});
