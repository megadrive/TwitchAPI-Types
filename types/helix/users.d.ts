
declare namespace TwitchAPI {
    /**
     * Get Users
     *
     * Gets information about one or more specified Twitch users. Users are identified by optional user IDs and/or login
     * name. If neither a user ID nor a login name is specified, the user is looked up by Bearer token.
     *
     * The response has a JSON payload with a data field containing an array of user-information elements.
     *
     * Optional scope: user:read:email
     *
     * If this is provided, the response includes the user’s email address.
     *
     * GET https://api.twitch.tv/helix/users
     *
     * **Note:** A request can include a mixture of login names and user ID. If specifying multiple values
     * (any combination of id and/or login values), separate them with ampersands; e.g.,
     *
     * - GET https://api.twitch.tv/helix/users?login=<login name>&id=<user ID>...
     * - GET https://api.twitch.tv/helix/users?id=<user ID>&id=<user ID>...
     * - GET https://api.twitch.tv/helix/users?login=<login name>&login=<login name>...
     */
    export interface IUsersGetQuery {
        /**
         * User ID. Multiple user IDs can be specified. Limit: 100.
         */
        id?: string[];
        /**
         * User login name. Multiple login names can be specified. Limit: 100.
         */
        login?: string[];
    }

    export interface IUsersGetResponse {
        /**
         * User’s broadcaster type: "partner", "affiliate", or "".
         */
        broadcaster_type: string;
        /**
         * User’s channel description.
         */
        description: string;
        /**
         * User’s display name.
         */
        display_name: string;
        /**
         * User’s email address. Returned if the request includes the user:read:email scope.
         */
        email: string;
        /**
         * User’s ID.
         */
        id: string;
        /**
         * User’s login name.
         */
        login: string;
        /**
         * URL of the user’s offline image.
         */
        offline_image_url: string;
        /**
         * URL of the user’s profile image.
         */
        profile_image_url: string;
        /**
         * User’s type: "staff", "admin", "global_mod", or "".
         */
        type: string;
        /**
         * Total number of views of the user’s channel.
         */
        view_count: number;
    }

    /**
     * Get Users Follows
     *
     * Gets information on follow relationships between two Twitch users. Information returned is sorted in order, most
     * recent follow first. This can return information like “who is lirik following,” “who is following lirik,” or
     * “is user X following user Y.”
     *
     * The response has a JSON payload with a data field containing an array of follow relationship elements and a
     * pagination field containing information required to query for more follow information.
     *
     * ```
     * GET https://api.twitch.tv/helix/users/follows?from_id=<user ID>
     * GET https://api.twitch.tv/helix/users/follows?to_id=<user ID>
     * ```
     *
     * At minimum, from_id or to_id must be provided for a query to be valid.
     */

    export interface IUserFollowsQuery {
        /**
         * Cursor for forward pagination: tells the server where to start fetching the next set of results,
         * in a multi-page response. The cursor value specified here is from the pagination response field
         * of a prior query.
         */
        after?: string;
        /**
         * Maximum number of objects to return. Maximum: 100. Default: 20.
         */
        first?: number[];
        /**
         * User ID. The request returns information about users who are being followed by the from_id user.
         */
        from_id?: string;
        /**
         * User ID. The request returns information about users who are following the to_id user.
         */
        to_id?: string;
    }

    /**
     * `total` sits at the top-level, next to `data` in the response.
     *
     * Total number of items returned.
     * - If only `from_id` was in the request, this is the total number of followed users.
     * - If only `to_id` was in the request, this is the total number of followers.
     * - If both `from_id` and `to_id` were in the request, this is 1 (if the "from" user follows the "to" user) or 0.
     *
     * total: number;
     */
    export interface IUserFollowsResponse {
        /**
         * Date and time when the from_id user followed the to_id user.
         */
        followed_at: string;
        /**
         * ID of the user following the to_id user.
         */
        from_id: string;
        /**
         * Login name corresponding to from_id.
         */
        from_name: string;
        /**
         * ID of the user being followed by the from_id user.
         */
        to_id: string;
        /**
         * Login name corresponding to to_id.
         */
        to_name: string;
    }

    /**
     * Update User
     *
     * Updates the description of a user specified by a Bearer token.
     *
     * Required scope: user:edit
     *
     * PUT https://api.twitch.tv/helix/users
     */

    export interface IUserUpdateQuery {
        /**
         * Description to update on the Authenticated user.
         */
        description: string;
    }

    // tslint:disable-next-line:no-empty-interface
    export interface IUserUpdateResponse extends IUsersGetResponse {}

    /**
     * Get User Extensions
     *
     * Gets a list of all extensions (both active and inactive) for a specified user, identified by a Bearer token.
     *
     * Required scope: user:read:broadcast
     *
     * GET https://api.twitch.tv/helix/users/extensions/list
     *
     *
     * **Note:** Query is an empty interface.
     */
    // tslint:disable-next-line:no-empty-interface
    export interface IUserGetExtensionsQuery {}

    export interface IUserGetExtensionsResponse {
        /**
         * Indicates whether the extension is configured such that it can be activated.
         */
        can_activate: boolean;
        /**
         * ID of the extension.
         */
        id: string;
        /**
         * Name of the extension.
         */
        name: string;
        /**
         * Types for which the extension can be activated.
         *
         * Valid values: "component", "mobile", "panel", "overlay".
         */
        type: string[];
        /**
         * Version of the extension.
         */
        version: string;
    }

    /**
     * Get User Active Extensions
     *
     * Gets information about active extensions installed by a specified user, identified by a user ID or Bearer token.
     *
     * Optional scope: user:read:broadcast or user:edit:broadcast
     *
     * GET https://api.twitch.tv/helix/users/extensions
     */

    export interface IUserActiveExtensionsQuery {
        /**
         * ID of the user whose installed extensions will be returned.
         */
        user_id: string;
    }

    interface IUserActiveExtensionsMapData {
        /**
         * ID of the extension.
         */
        id?: string;
        /**
         * Name of the extension.
         */
        name?: string;

        /**
         * Version of the extension.
         */
        version?: string;
        /**
         * (Video-component Extensions only) X-coordinate of the placement of the extension.
         */
        x?: number;
        /**
         * (Video-component Extensions only) Y-coordinate of the placement of the extension.
         */
        y?: number;
    }

    interface IUserActiveExtensionsMap {
        [key: string]: IUserActiveExtensionsMapData;
    }

    export interface IUserActiveExtensionsResponse {
        /**
         * Activation state of the extension, for each extension type (component, overlay, mobile, panel). If `false`,
         * no other data is provided.
         */
        active: boolean;
        /**
         * Contains data for video-component Extensions.
         */
        component?: IUserActiveExtensionsMap;
        /**
         * Contains data for video-overlay Extensions.
         */
        overlay?: IUserActiveExtensionsMap;
        /**
         * Contains data for panel Extensions.
         */
        panel?: IUserActiveExtensionsMap;
    }

    /**
     * Update User Extensions
     *
     * Updates the activation state, extension ID, and/or version number of installed extensions for a specified user,
     * identified by a Bearer token. If you try to activate a given extension under multiple extension types, the last
     * write wins (and there is no guarantee of write order).
     *
     * Required scope: user:edit:broadcast
     *
     * PUT https://api.twitch.tv/helix/users/extensions
     *
     * **Note:** To use this, please read the Twitch API docs:
     * - https://dev.twitch.tv/docs/api/reference/#update-user-extensions
     */

    interface IUserUpdateExtensionsQueryData {
        panel: IUserActiveExtensionsMap;
        overlay: IUserActiveExtensionsMap;
        component: IUserActiveExtensionsMap;
    }

    export interface IUserUpdateExtensionsQuery {
        data: IUserUpdateExtensionsQueryData;
    }

    // tslint:disable-next-line:no-empty-interface
    export interface IUserUpdateExtensionsResponse extends IUserGetExtensionsResponse {}
}
