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


import { CareworkerAccountPosition } from './careworker-account-position';

/**
 * 
 * @export
 * @interface CareworkerBatchUpdateAccountPositionsRequest
 */
export interface CareworkerBatchUpdateAccountPositionsRequest {
    /**
     * The AccountPosition resource which replaces the resource on the server.
     * @type {Array<CareworkerAccountPosition>}
     * @memberof CareworkerBatchUpdateAccountPositionsRequest
     */
    accountPositions?: Array<CareworkerAccountPosition>;
    /**
     * 
     * @type {string}
     * @memberof CareworkerBatchUpdateAccountPositionsRequest
     */
    updateMask?: string;
}


