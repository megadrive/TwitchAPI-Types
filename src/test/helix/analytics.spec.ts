
import { api, throwHttpError } from "../base";

test.skip("analytics/extensions", async () => {
    const testResponse: TwitchAPI.IAnalyticsExtensionsResponse = {
        URL: "",
        ended_at: "",
        extension_id: "",
        pagination: "",
        started_at: "",
        type: ""
    };

    const query: TwitchAPI.IAnalyticsExtensionsQuery = {
        type: "overview_v2"
    };

    try {
        const response: any = await api("analytics/extensions", query);

        // tslint:disable-next-line:forin
        for (const key in testResponse) {
            expect(response.data.data[0]).toHaveProperty(key);
        }
    } catch (e) {
        throwHttpError(e);
    }
});

test.skip("analytics/games", async () => {
    const testResponse: TwitchAPI.IAnalyticsGamesResponse = {
        URL: "",
        ended_at: "",
        game_id: "",
        pagination: "",
        started_at: "",
        type: ""
    };

    const query: TwitchAPI.IAnalyticsGamesQuery = {
        type: "overview_v2"
    };

    try {
        const response: any = await api("analytics/games", query);

        // tslint:disable-next-line:forin
        for (const key in testResponse) {
            expect(response.data.data[0]).toHaveProperty(key);
        }
    } catch (e) {
        throwHttpError(e);
    }
});
