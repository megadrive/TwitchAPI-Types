
declare namespace TwitchAPI {
    /**
     * Get Videos
     *
     * Gets video information by video ID (one or more), user ID (one only), or game ID (one only).
     *
     * The response has a JSON payload with a data field containing an array of video elements. For lookup by
     * user or game,pagination is available, along with several filters that can be specified as query string
     * parameters.
     *
     * GET https://api.twitch.tv/helix/videos
     *
     * Required Query String Parameters
     *
     * Each request must specify one or more video ids, one user_id, or one game_id.
     */

    export interface IVideosGetQuery {
        /**
         * ID of the video being queried. Limit: 100. If this is specified, you cannot use any of the optional
         * query string parameters below.
         */
        id?: string[];
        /**
         * ID of the user who owns the video. Limit 1.
         */
        user_id?: string;
        /**
         * ID of the game the video is of. Limit 1.
         */
        game_id?: string;
        /**
         * Cursor for forward pagination: tells the server where to start fetching the next set of results,
         * in a multi-page response. The cursor value specified here is from the pagination response field of
         * a prior query.
         */
        after?: string;
        /**
         * Cursor for backward pagination: tells the server where to start fetching the next set of results,
         * in a multi-page response. The cursor value specified here is from the pagination response field of
         * a prior query.
         */
        before?: string;
        /**
         * Number of values to be returned when getting videos by user or game ID. Limit: 100. Default: 20.
         */
        first?: string;
        /**
         * Language of the video being queried. Limit: 1.
         */
        language?: string;
        /**
         * Period during which the video was created. Valid values: "all", "day", "week", "month". Default: "all".
         */
        period?: string;
        /**
         * Sort order of the videos. Valid values: "time", "trending", "views". Default: "time".
         */
        sort?: string;
        /**
         * Type of video. Valid values: "all", "upload", "archive", "highlight". Default: "all".
         */
        type?: string;
    }

    export interface IVideosGetResponse {
        /**
         * Date when the video was created.
         */
        created_at: string;
        /**
         * Description of the video.
         */
        description: string;
        /**
         * Length of the video.
         */
        duration: string;
        /**
         * ID of the video.
         */
        id: string;
        /**
         * Language of the video.
         */
        language: string;
        /**
         * Date when the video was published.
         */
        published_at: string;
        /**
         * Template URL for the thumbnail of the video.
         */
        thumbnail_url: object;
        /**
         * Title of the video.
         */
        title: string;
        /**
         * Type of video. Valid values: "upload", "archive", "highlight".
         */
        type: string;
        /**
         * URL of the video.
         */
        url: object;
        /**
         * ID of the user who owns the video.
         */
        user_id: string;
        /**
         * Login name corresponding to user_id.
         */
        user_name: string;
        /**
         * Number of times the video has been viewed.
         */
        view_count: number;
        /**
         * Indicates whether the video is publicly viewable. Valid values: "public", "private".
         */
        viewable: string;
    }
}
