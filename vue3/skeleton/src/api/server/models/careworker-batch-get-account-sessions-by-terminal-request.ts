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


import { CareworkerBatchGetAccountSessionsByTerminalRequestView } from './careworker-batch-get-account-sessions-by-terminal-request-view';

/**
 * 
 * @export
 * @interface CareworkerBatchGetAccountSessionsByTerminalRequest
 */
export interface CareworkerBatchGetAccountSessionsByTerminalRequest {
    /**
     * The field will contain name of the resource requested.
     * @type {Array<boolean>}
     * @memberof CareworkerBatchGetAccountSessionsByTerminalRequest
     */
    terminals?: Array<boolean>;
    /**
     * 
     * @type {CareworkerBatchGetAccountSessionsByTerminalRequestView}
     * @memberof CareworkerBatchGetAccountSessionsByTerminalRequest
     */
    view?: CareworkerBatchGetAccountSessionsByTerminalRequestView;
}


