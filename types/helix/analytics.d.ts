
declare namespace TwitchAPI {
    /**
     * Gets a URL that extension developers can use to download analytics reports (CSV files) for their
     * extensions. The URL is valid for 5 minutes.
     *
     * For detail about analytics and the fields returned, see the Insights & Analytics guide.
     *
     * Required scope: analytics:read:extensions
     *
     * GET https://dev.twitch.tv/docs/api/reference/#get-extension-analytics
     */
    export interface IAnalyticsExtensionsQuery {
        /**
         * Cursor for forward pagination: tells the server where to start fetching the next set of results, in a
         * multi-page response. This applies only to queries without extension_id. If an extension_id is specified,
         * it supersedes any cursor/offset combinations. The cursor value specified here is from the pagination
         * response field of a prior query.
         */
        "after"?: string;

        /**
         * Ending date/time for returned reports, in RFC3339 format with the hours, minutes, and seconds zeroed
         * out and the UTC timezone: YYYY-MM-DDT00:00:00Z. The report covers the entire ending date; e.g., if
         * 2018-05-01T00:00:00Z is specified, the report covers up to 2018-05-01T23:59:59Z.
         *
         * If this is provided, started_at also must be specified. If ended_at is later than the default end date, the
         * default date is used. Default: 1-2 days before the request was issued (depending on report availability).
         */
        "ended_at"?: string;

        /**
         * Client ID value assigned to the extension when it is created. If this is specified, the returned URL points
         * to an analytics report for just the specified extension. If this is not specified, the response includes
         * multiple URLs (paginated), pointing to separate analytics reports for each of the authenticated user’s
         * extensions.
         */
        "extension_id"?: string;

        /**
         * Maximum number of objects to return. Maximum: 100. Default: 20.
         */
        "first"?: number;

        /**
         * Starting date/time for returned reports, in RFC3339 format with the hours, minutes, and seconds zeroed
         * out and the UTC timezone: YYYY-MM-DDT00:00:00Z. This must be on or after January 31, 2018.
         *
         * If this is provided, ended_at also must be specified. If started_at is earlier than the default start date,
         * the default date is used. Default: January 31, 2018 (overview_v2) or 90 days (overview_v1) before the report
         * was issued. The file contains one row of data per day.
         */
        "started_at"?: string;

        /**
         * Type of analytics report that is returned. If this is specified, the response includes one URL, for the
         * specified report type. If this is not specified, the response includes multiple URLs (paginated), one for
         * each report type available for the authenticated user’s Extensions. Limit: 1. Valid values: "`overview_v1`",
         * "`overview_v2`".
         *
         * Default: all report types for the authenticated user’s Extensions.
         */
        "type"?: string;
    }

    export interface IAnalyticsExtensionsResponse {
        /**
         * Report end date/time.
         */
        "ended_at": string;

        /**
         * ID of the extension whose analytics data is being provided.
         */
        "extension_id": string;

        /**
         * A cursor value, to be used in a subsequent request to specify the starting point of the next set of results.
         * This is returned only if extension_id is not specified in the request.
         */
        "pagination": string;

        /**
         * Report start date/time. Note this may differ from (be later than) the started_at value in the request; the
         * response value is the date when data for the extension is available.
         */
        "started_at": string;

        /**
         * Type of report.
         */
        "type": string;

        /**
         * URL to the downloadable CSV file containing analytics data. Valid for 5 minutes.
         */
        "URL": string;
    }

    /**
     * Get Game Analytics
     * Gets a URL that game developers can use to download analytics reports (CSV files) for their games. The URL is
     * valid for 5 minutes. For detail about analytics and the fields returned, see the Insights & Analytics guide.
     *
     * The response has a JSON payload with a data field containing an array of games information elements and can
     * contain a pagination field containing information required to query for more streams.
     *
     * Required scope: analytics:read:games
     *
     * GET https://api.twitch.tv/helix/analytics/games
     */
    export interface IAnalyticsGamesQuery {
        /**
         * Cursor for forward pagination: tells the server where to start fetching the next set of results, in a
         * multi-page response. This applies only to queries without game_id. If a game_id is specified, it supersedes
         * any cursor/offset combinations. The cursor value specified here is from the pagination response field of
         * a prior query.
         */
        "after"?: string;

        /**
         * Ending date/time for returned reports, in RFC3339 format with the hours, minutes, and seconds zeroed out
         * and the UTC timezone: YYYY-MM-DDT00:00:00Z. The report covers the entire ending date; e.g., if
         * 2018-05-01T00:00:00Z is specified, the report covers up to 2018-05-01T23:59:59Z.
         *
         * If this is provided, started_at also must be specified. If ended_at is later than the default end date, the
         * default date is used. Default: 1-2 days before the request was issued (depending on report availability).
         */
        "ended_at"?: string;

        /**
         * Maximum number of objects to return. Maximum: 100. Default: 20.
         */
        "first"?: number;

        /**
         * Game ID. If this is specified, the returned URL points to an analytics report for just the specified game.
         * If this is not specified, the response includes multiple URLs (paginated), pointing to separate analytics
         * reports for each of the authenticated user’s games.
         */
        "game_id"?: string;

        /**
         * Starting date/time for returned reports, in RFC3339 format with the hours, minutes, and seconds zeroed out
         * and the UTC timezone: YYYY-MM-DDT00:00:00Z.
         *
         * If this is provided, ended_at also must be specified. If started_at is earlier than the default start date,
         * the default date is used. Default: 365 days (overview_v2) or 90 days (overview_v1) before the report was
         * issued. The file contains one row of data per day.
         */
        "started_at"?: string;

        /**
         * Type of analytics report that is returned. If this is specified, the response includes one URL, for the
         * specified report type. If this is not specified, the response includes multiple URLs (paginated), one for
         * each report type available for the authenticated user’s games. Limit: 1. Valid values: "overview_v1",
         * "overview_v2". Default: all report types for the authenticated user’s games.
         */
        "type"?: string;
    }

    export interface IAnalyticsGamesResponse {
        /**
         * Report end date/time.
         */
        "ended_at": string;

        /**
         * ID of the game whose analytics data is being provided.
         */
        "game_id": string;

        /**
         * A cursor value, to be used in a subsequent request to specify the starting point of the next set of results.
         * This is returned only if game_id is not specified in the request.
         */
        "pagination": string;

        /**
         * Report start date/time.
         */
        "started_at": string;

        /**
         * Type of report.
         */
        "type": string;

        /**
         * URL to the downloadable CSV file containing analytics data. Valid for 5 minutes.
         */
        "URL": string;
    }
}
