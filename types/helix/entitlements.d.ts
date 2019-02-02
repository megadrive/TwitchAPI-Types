
declare namespace TwitchAPI {
    /**
     * Create Entitlement Grants Upload URL
     * Creates a URL where you can upload a manifest file and notify users that they have an entitlement. Entitlements
     * are digital items that users are entitled to use. Twitch entitlements are granted to users gratis or as part of
     * a purchase on Twitch.
     *
     * See the Drops Guide for details about using this endpoint to notify users about Drops.
     *
     * Authentication: App access token
     *
     * GET https://api.twitch.tv/helix/entitlements/upload
     */
    export interface IEntitlementsCreateQuery {
        /**
         * Unique identifier of the manifest file to be uploaded. Must be 1-64 characters.
         */
        manifest_id: string;
        /**
         * Type of entitlement being granted. Only bulk_drops_grant is supported.
         */
        type: string;
    }

    export interface IEntitlementsCreateResponse {
        /**
         * The URL where you will upload the manifest file. This is the URL of a pre-signed S3 bucket.
         * Lease time: 15 minutes.
         *
         *  **Note:** You must replace all occurrences of \u0026 with an ampersand (&) character. See the Drops Guide.
         */
        url: string;
    }
}
