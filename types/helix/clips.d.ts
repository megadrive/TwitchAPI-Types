
declare namespace TwitchAPI {
    /**
     * Create Clip
     *
     * Creates a clip programmatically. This returns both an ID and an edit URL for the new clip.
     *
     * Clip creation takes time. We recommend that you query Get Clips, with the clip ID that is returned here.
     *
     * If Get Clips returns a valid clip, your clip creation was successful. If, after 15 seconds, you still have
     * not gotten back a valid clip from Get Clips, assume that the clip was not created and retry Create Clip.
     *
     * This endpoint has a global rate limit, across all callers. The limit may change over time, but the response
     * includes informative headers:
     *
     * ```
     * Ratelimit-Helixclipscreation-Limit: <int value>
     * Ratelimit-Helixclipscreation-Remaining: <int value>
     * ```
     *
     * Required scope: clips:edit
     *
     * GET https://api.twitch.tv/helix/clips
     */
    export interface IClipCreateQuery {
        /**
         * ID of the stream from which the clip will be made.
         */
        broadcaster_id: string;

        /**
         * If false, the clip is captured from the live stream when the API is called; otherwise, a delay is
         * added before the clip is captured (to account for the brief delay between the broadcaster’s stream
         * and the viewer’s experience of that stream).
         *
         * Default: `false`.
         */
        has_delay?: boolean;
    }

    export interface IClipCreateResponse {
        /**
         * URL of the edit page for the clip.
         */
        edit_url: string;
        /**
         * ID of the clip that was created.
         */
        id: string;
    }

    /**
     * Get Clips
     *
     * Gets clip information by clip ID (one or more), broadcaster ID (one only), or game ID (one only).
     *
     * The response has a JSON payload with a data field containing an array of clip information elements
     * and a pagination field containing information required to query for more streams.
     *
     * **Note:** For a query to be valid, id (one or more), broadcaster_id, or game_id must be specified. You
     * may specify only one of these parameters.
     *
     * https://api.twitch.tv/helix/clips
     */
    export interface IClipGetQuery {
        /**
         * ID of the broadcaster for whom clips are returned. The number of clips returned is determined by the first
         * query-string parameter (default: 20). Results are ordered by view count.
         */
        broadcaster_id: string;
        /**
         * ID of the game for which clips are returned. The number of clips returned is determined by the first
         * query-string parameter (default: 20). Results are ordered by view count.
         */
        game_id: string;
        /**
         * ID of the clip being queried. Limit: 100.
         */
        id: string;
        /**
         * Cursor for forward pagination: tells the server where to start fetching the next set of results, in a
         * multi-page response. This applies only to queries specifying broadcaster_id or game_id. The cursor value
         * specified here is from the pagination response field of a prior query.
         */
        after: string;
        /**
         * Cursor for backward pagination: tells the server where to start fetching the next set of results, in a
         * multi-page response. This applies only to queries specifying broadcaster_id or game_id. The cursor value
         * specified here is from the pagination response field of a prior query.
         */
        before: string;
        /**
         * Ending date/time for returned clips, in RFC3339 format. (Note that the seconds value is ignored.) If this
         * is specified, started_at also must be specified; otherwise, the time period is ignored.
         */
        ended_at: string;
        /**
         * Maximum number of objects to return. Maximum: 100. Default: 20.
         */
        first: number;
        /**
         * Starting date/time for returned clips, in RFC3339 format. (Note that the seconds value is ignored.) If this
         * is specified, ended_at also should be specified; otherwise, the ended_at date/time will be 1 week after the
         * started_at value.
         */
        started_at: string;
    }

    export interface IClipGetResponse {
        /**
         * User ID of the stream from which the clip was created.
         */
        broadcaster_id: string;
        /**
         * Login name corresponding to broadcaster_id.
         */
        broadcaster_name: string;
        /**
         * Date when the clip was created.
         */
        created_at: string;
        /**
         * ID of the user who created the clip.
         */
        creator_id: string;
        /**
         * Login name corresponding to creator_id.
         */
        creator_name: string;
        /**
         * URL to embed the clip.
         */
        embed_url: string;
        /**
         * ID of the game assigned to the stream when the clip was created.
         */
        game_id: string;
        /**
         * ID of the clip being queried.
         */
        id: string;
        /**
         * Language of the stream from which the clip was created.
         */
        language: string;
        /**
         * URL of the clip thumbnail.
         */
        thumbnail_url: string;
        /**
         * Title of the clip.
         */
        title: string;
        /**
         * URL where the clip can be viewed.
         */
        url: string;
        /**
         * ID of the video from which the clip was created.
         */
        video_id: string;
        /**
         * Number of times the clip has been viewed.
         */
        view_count: number;
    }
}
