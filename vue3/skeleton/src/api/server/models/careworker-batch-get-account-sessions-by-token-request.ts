/* tslint:disable */
/* eslint-disable */
/**
 * server/v1/api.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { CareworkerBatchGetAccountSessionsByTokenRequestView } from './careworker-batch-get-account-sessions-by-token-request-view';

/**
 * 
 * @export
 * @interface CareworkerBatchGetAccountSessionsByTokenRequest
 */
export interface CareworkerBatchGetAccountSessionsByTokenRequest {
    /**
     * The field will contain name of the resource requested.
     * @type {Array<string>}
     * @memberof CareworkerBatchGetAccountSessionsByTokenRequest
     */
    tokens?: Array<string>;
    /**
     * 
     * @type {CareworkerBatchGetAccountSessionsByTokenRequestView}
     * @memberof CareworkerBatchGetAccountSessionsByTokenRequest
     */
    view?: CareworkerBatchGetAccountSessionsByTokenRequestView;
}


