
import { api, throwHttpError as throwError } from "../base";

const gameIds = new Map();
gameIds.set("Just Chatting", 509658);
gameIds.set("Overwatch", 488552);
gameIds.set("Hearthstone", 138585);

test("streams/", async () => {
    const testResponse: TwitchAPI.IStreamsResponse = {
        community_ids: [""],
        game_id: "",
        id: "",
        language: "",
        started_at: "",
        tag_ids: "",
        thumbnail_url: "",
        title: "",
        type: "",
        user_id: "",
        user_name: "",
        viewer_count: 0
    };

    const query: TwitchAPI.IStreamsQuery = {};

    try {
        const response: any = await api("streams", query);

        expect(response.data).toHaveProperty("data");
        expect(response.data).toHaveProperty("pagination");

        // tslint:disable-next-line:forin
        for (const key in testResponse) {
            expect(response.data.data[0]).toHaveProperty(key);
        }
    } catch (e) {
        throwError(e);
    }
});

test("streams/metadata", async () => {
    const query: TwitchAPI.IStreamsMetadataQuery = {
        game_id: gameIds.get("Just Chatting")
    };

    const streamTest = {
        name: "streams/metadata",
        query: {
            game_id: gameIds.get("Just Chatting")
        },
        response: {
            game_id: "",
            hearthstone: null,
            overwatch: null,
            user_id: "",
            user_name: ""
        }
    };

    try {
        const response: any = await api("streams/metadata", streamTest.query);

        expect(response.data).toHaveProperty("data");
        expect(response.data).toHaveProperty("pagination");

        // tslint:disable-next-line:forin
        for (const key in streamTest.response) {
            expect(response.data.data[0]).toHaveProperty(key);
        }
    } catch (e) {
        throwError(e);
    }
});
