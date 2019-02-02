
import { constructHttpQuery } from "../helpers";

test("constructHttpQuery", () => {
    const query: TwitchAPI.IStreamsQuery = {
        before: "beforeToken",
        language: ["en"],
        user_login: ["TwitchPresents", "monstercat"]
    };

    const result = constructHttpQuery(query);

    expect(result).toBe("?before=beforeToken&language=en&user_login=TwitchPresents&user_login=monstercat");
});
