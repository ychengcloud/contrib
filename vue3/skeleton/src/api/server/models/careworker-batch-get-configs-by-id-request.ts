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


import { CareworkerBatchGetConfigsByIdRequestView } from './careworker-batch-get-configs-by-id-request-view';

/**
 * 
 * @export
 * @interface CareworkerBatchGetConfigsByIdRequest
 */
export interface CareworkerBatchGetConfigsByIdRequest {
    /**
     * The field will contain name of the resource requested.
     * @type {Array<string>}
     * @memberof CareworkerBatchGetConfigsByIdRequest
     */
    ids?: Array<string>;
    /**
     * 
     * @type {CareworkerBatchGetConfigsByIdRequestView}
     * @memberof CareworkerBatchGetConfigsByIdRequest
     */
    view?: CareworkerBatchGetConfigsByIdRequestView;
}


