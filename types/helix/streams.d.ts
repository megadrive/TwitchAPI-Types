
declare namespace TwitchAPI {
    /**
     * Get Streams
     * Gets information about active streams. Streams are returned sorted by number of current viewers, in descending
     * order. Across multiple pages of results, there may be duplicate or missing streams, as viewers join and leave
     * streams.
     *
     * The response has a JSON payload with a data field containing an array of stream information elements and a
     * pagination field containing information required to query for more streams.
     *
     * GET https://api.twitch.tv/helix/streams
     */

    export interface IStreamsQuery {
        /**
         * Cursor for forward pagination: tells the server where to start fetching the next set of results,
         * in a multi-page response. The cursor value specified here is from the pagination response field of a
         * prior query.
         */
        "after"?: string;

        /**
         * Cursor for backward pagination: tells the server where to start fetching the next set of results,
         * in a multi-page response. The cursor value specified here is from the pagination response field of a
         * prior query.
         */
        "before"?: string;

        /**
         * Returns streams in a specified community ID. You can specify up to 100 IDs.
         */
        "community_id"?: string[];

        /**
         * Maximum number of objects to return. Maximum: 100. Default: 20.
         */
        "first"?: number[];

        /**
         * Returns streams broadcasting a specified game ID. You can specify up to 100 IDs.
         */
        "game_id"?: string[];

        /**
         * Stream language. You can specify up to 100 languages.
         */
        "language"?: string[];

        /**
         * Returns streams broadcast by one or more specified user IDs. You can specify up to 100 IDs.
         */
        "user_id"?: string[];

        /**
         * Returns streams broadcast by one or more specified user login names. You can specify up to 100 names.
         */
        "user_login"?: string[];
    }

    export interface IStreamsResponse {
        /**
         * Array of community IDs.
         */
        "community_ids": string[];

        /**
         * ID of the game being played on the stream.
         */
        "game_id": string;

        /**
         * Stream ID.
         */
        "id": string;

        /**
         * Stream language.
         */
        "language": string;

        /**
         * UTC timestamp.
         */
        "started_at": string;

        /**
         * Shows tag IDs that apply to the stream.
         */
        "tag_ids": string;

        /**
         * Thumbnail URL of the stream. All image URLs have variable width and height. You can replace
         * {width} and {height} with any values to get that size image
         */
        "thumbnail_url": string;

        /**
         * Stream title.
         */
        "title": string;

        /**
         * Stream type: "live" or "" (in case of error).
         */
        "type": string;

        /**
         * ID of the user who is streaming.
         */
        "user_id": string;

        /**
         * Login name corresponding to user_id.
         */
        "user_name": string;

        /**
         * Number of viewers watching the stream at the time of the query.
         */
        "viewer_count": number;

    }

    /**
     * Get Streams Metadata
     *
     * Gets metadata information about active streams playing Overwatch or Hearthstone. Streams are sorted by
     * number of current viewers, in descending order. Across multiple pages of results, there may be duplicate
     * or missing streams, as viewers join and leave streams.
     *
     * The response has a JSON payload with a data field containing an array of stream information elements and
     * a pagination field containing information required to query for more streams.
     *
     * This endpoint has a global rate limit, across all callers. The limit may change over time, but the
     * response includes informative headers:
     *
     * ```
     * Ratelimit-Helixstreamsmetadata-Limit: <int value>
     * Ratelimit-Helixstreamsmetadata-Remaining: <int value>
     * ```
     *
     * GET https://api.twitch.tv/helix/streams/metadata
     */
    export interface IStreamsMetadataQuery {
        /**
         * Cursor for forward pagination: tells the server where to start fetching the next set of results,
         * in a multi-page response. The cursor value specified here is from the pagination response field of a
         * prior query.
         */
        after?: string;

        /**
         * Cursor for backward pagination: tells the server where to start fetching the next set of results,
         * in a multi-page response. The cursor value specified here is from the pagination response field of a
         * prior query.
         */
        before?: string;

        /**
         * Returns streams in a specified community ID. You can specify up to 100 IDs.
         */
        community_id?: string[];

        /**
         * Maximum number of objects to return. Maximum: 100. Default: 20.
         */
        first?: number[];

        /**
         * Returns streams broadcasting the specified game ID. You can specify up to 100 IDs.
         */
        game_id?: string[];

        /**
         * Stream language. You can specify up to 100 languages.
         */
        language?: string[];

        /**
         * Returns streams broadcast by one or more of the specified user IDs. You can specify up to 100 IDs.
         */
        user_id?: string[];

        /**
         * Returns streams broadcast by one or more of the specified user login names. You can specify up to 100 names.
         */
        user_login?: string[];

    }

    interface IHearthstoneHeroData {
        /**
         * Class of the Hearthstone hero.
         */
        class: string;
        /**
         * Name of the Hearthstone hero.
         */
        name: string;
        /**
         * Type of Hearthstone hero.
         */
        type: string;
    }

    interface IHearthstonePersonData {
        /**
         * Metadata about the Hearthstone hero selected by the broadcaster/opponent. null if empty.
         */
        hero: IHearthstoneHeroData|null;
    }

    export interface IHearthstoneData {
        /**
         * Hearthstone metadata about the broadcaster.
         */
        broadcaster: IHearthstonePersonData;
        /**
         * Hearthstone metadata about the broadcaster’s opponent.
         */
        opponent: IHearthstonePersonData;
    }

    export interface IOverwatchHeroData {
        /**
         * Ability being used by the broadcaster.
         */
        ability: string;
        /**
         * Name of the Overwatch hero.
         */
        name: string;
        /**
         * Role of the Overwatch hero.
         */
        role: string;
    }

    export interface IOverwatchPersonData {
        /**
         * Metadata about the Overwatch hero selected by the broadcaster. null if empty.
         */
        hero: IOverwatchHeroData|null;
    }

    export interface IOverwatchData {
        /**
         * Overwatch metadata about the broadcaster.
         */
        broadcaster: IOverwatchHeroData;
    }

    export interface IStreamsMetadataResponse {
        /**
         * ID of the game being played on the stream: 488552 (Overwatch), 138585 (Hearthstone), or `null`
         * (neither Overwatch nor Hearthstone metadata is available).
         */
        game_id: string;

        /**
         * Object containing the Hearthstone metadata, if available; otherwise, null.
         */
        hearthstone: IHearthstoneData|null;

        /**
         * Object containing the Overwatch metadata, if available; otherwise, null.
         */
        overwatch: IOverwatchData|null;

        /**
         * User ID of the streamer (broadcaster).
         */
        user_id: string;

        /**
         * Login name corresponding to user_id.
         */
        user_name: string;
    }
}
