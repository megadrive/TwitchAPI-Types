
declare namespace TwitchAPI {
    /**
     * Get Bits Leaderboard
     *
     * Gets a ranked list of Bits leaderboard information for an authorized broadcaster.
     *
     * Required scope: bits:read
     *
     * GET https://api.twitch.tv/helix/bits/leaderboard
     */
    export interface IBitsLeaderboardQuery {
        /**
         * Number of results to be returned. Maximum: 100. Default: 10.
         */
        count?: number;

        /**
         * Time period over which data is aggregated (PST time zone). This parameter interacts with started_at. Valid
         * values are given below. Default: "all".
         *
         * - "day" – 00:00:00 on the day specified in started_at, through 00:00:00 on the following day.
         * - "week" – 00:00:00 on Monday of the week specified in started_at, through 00:00:00 on the following Monday.
         * - "month" – 00:00:00 on the first day of the month specified in started_at, through 00:00:00 on the first
         * day of the following month.
         * - "year" – 00:00:00 on the first day of the year specified in started_at, through 00:00:00 on the first day
         * of the following year.
         * - "all" – The lifetime of the broadcaster's channel. If this is specified (or used by default), started_at
         * is ignored.
         */
        period?: string;

        /**
         * Timestamp for the period over which the returned data is aggregated. Must be in RFC 3339 format.
         * If this is not provided, data is aggregated over the current period; e.g., the current day/week/month/year.
         * This value is ignored if period is "all".
         *
         * Any + operator should be URL encoded.
         *
         * Currently, the HH:MM:SS part of this value is used only to identify a given day in PST and otherwise ignored.
         * For example, if the started_at value resolves to 5PM PST yesterday and period is "day", data is returned for
         * all of yesterday.
         */
        started_at?: string;

        /**
         * ID of the user whose results are returned; i.e., the person who paid for the Bits.
         *
         * As long as count is greater than 1, the returned data includes additional users, with Bits amounts above and
         * below the user specified by user_id.
         *
         * If user_id is not provided, the endpoint returns the Bits leaderboard data across top users (subject to the
         * value of count).
         */
        user_id?: string;
    }

    export interface IBitsLeaderboardResponse {
        /**
         * End of the date range for the returned data.
         */
        ended_at: string;
        /**
         * Leaderboard rank of the user.
         */
        rank: number;
        /**
         * Leaderboard score (number of Bits) of the user.
         */
        score: number;
        /**
         * Start of the date range for the returned data.
         */
        started_at: string;
        /**
         * ID of the user (viewer) in the leaderboard entry.
         */
        user_id: string;
        /**
         * Login name corresponding to user_id.
         */
        user_name: string;
    }
}
