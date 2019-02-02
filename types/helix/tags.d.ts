
declare namespace TwitchAPI {
    /**
     * Get All Stream Tags
     *
     * Gets the list of all stream tags defined by Twitch, optionally filtered by tag ID(s).
     * The response has a JSON payload with a data field containing an array of tag elements and a pagination
     * field containing information required to query for more tags.
     *
     * Authentication: App access token
     *
     * GET https://api.twitch.tv/helix/tags/streams
     */

    export interface ITagsStreamsQuery {
        /**
         * Cursor for forward pagination: tells the server where to start fetching the next set of results,
         * in a multi-page response. The cursor value specified here is from the pagination response field
         * of a prior query.
         */
        after?: string;
        /**
         * Maximum number of objects to return. Maximum: 100. Default: 20.
         */
        first?: number;
        /**
         * ID of a tag. Multiple tag_ids can be specified, separated by ampersands. If provided, only the
         * specified tag(s) is(are) returned.
         */
        tag_id?: string[];
    }

    export interface ITagsStreamsResponse {
        /**
         * ID of the tag.
         */
        tag_id: string;
        /**
         * `true` if the tag is auto-generated; otherwise, `false` . An auto-generated tag is one automatically
         * applied by Twitch (e.g., a language tag based on the broadcaster’s settings); these cannot be added or
         * removed by the user.
         */
        is_auto: boolean;
        /**
         * tring]string 	All localized names of the tag.
         */
        localization_names: Map<string, string>;
        /**
         * tring]string 	All localized descriptions of the tag.
         */
        localization_descriptions: Map<string, string>;
    }

    /**
     * Get Stream Tags
     *
     * Gets the list of tags for a specified stream (channel).
     * The response has a JSON payload with a data field containing an array of tag elements.
     *
     * Authentication: App access token
     *
     * GET https://api.twitch.tv/helix/streams/tags
     */

    export interface IStreamTagsQuery {
        /**
         * ID of the stream thats tags are going to be fetched
         */
        broadcaster_id: string;
    }

    export interface IStreamTagsResponse {
        /**
         * `true` if the tag is auto-generated; otherwise, `false`. An auto-generated tag is one automatically
         * applied by Twitch (e.g., a language tag based on the broadcaster’s settings); these cannot be added or
         * removed by the user.
         */
        is_auto: boolean;
        /**
         * All localized names of the tag.
         */
        localization_names: Map<string, string>;
        /**
         * All localized descriptions of the tag.
         */
        localization_descriptions: Map<string, string>;
        /**
         * ID of the tag.
         */
        tag_id: string;
    }

    /**
     * Replace Stream Tags
     *
     * Applies specified tags to a specified stream, overwriting any existing tags applied to that stream. If
     * no tags are specified, all tags previously applied to the stream are removed. Automated tags are not
     * affected by this operation.
     *
     * Tags expire 72 hours after they are applied, unless the stream is live within that time period. If
     * the stream is live within the 72-hour window, the 72-hour clock restarts when the stream goes offline.
     * The expiration period is subject to change.
     *
     * Up to five tags can be applied to a stream. If no `tag_ids` is provided, all tags are removed from the stream.
     *
     * Required scope: user:edit:broadcast
     *
     * PUT https://api.twitch.tv/helix/streams/tags
     */

    export interface IReplaceStreamTagsQuery {
        /**
         * IDs of tags to be applied to the stream.
         * Up to 5 tags can be applied to a stream.
         */
        tag_ids?: string[];
    }

    export interface IReplaceStreamTagsResponse {
        /**
         * ID of the stream for which tags are to be replaced.
         */
        broadcaster_id: string;
    }
}
