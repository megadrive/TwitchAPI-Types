
import { api, throwHttpError } from "../base";

test.only("tags/streams", async () => {
    const testResponse: TwitchAPI.ITagsStreamsResponse = {
        is_auto: true,
        localization_descriptions: new Map<string, string>(),
        localization_names: new Map<string, string>(),
        tag_id: ""
    };

    const query: TwitchAPI.ITagsStreamsQuery = {
        tag_id: ["621fb5bf-5498-4d8f-b4ac-db4d40d401bf"]
    };

    try {
        const response: any = await api("tags/streams", query);

        // tslint:disable-next-line:forin
        for (const key in testResponse) {
            expect(response.data.data[0]).toHaveProperty(key);
        }
    } catch (e) {
        throwHttpError(e);
    }
});
