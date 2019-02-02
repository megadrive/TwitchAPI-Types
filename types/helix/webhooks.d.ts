
declare namespace TwitchAPI {
    /**
     * Get Webhook Subscriptions
     *
     * Gets the Webhook subscriptions of a user identified by a Bearer token, in order of expiration.
     *
     * The response has a JSON payload with a data field containing an array of subscription elements and a pagination
     * field containing information required to query for more subscriptions.
     *
     * Authentication: App access token
     *
     * GET https://api.twitch.tv/helix/webhooks/subscriptions
     */

    export interface IWebhookSubscriptionsQuery {
        /**
         * Cursor for forward pagination: tells the server where to start fetching the next set of results, in a
         * multi-page response. The cursor value specified here is from the pagination response field of a prior query.
         */
        after?: string;
        /**
         * Number of values to be returned per page. Limit: 100. Default: 20.
         */
        first?: string;
    }

    export interface IWebhookSubscriptionsResponse {
        /**
         * The callback provided for this subscription.
         */
        callback: string;
        /**
         * Date and time when this subscription expires. Encoded as RFC3339. The timezone is always UTC (“Z”).
         */
        expires_at: string;
        /**
         * The topic used in the initial subscription.
         */
        topic: string;
    }
}
