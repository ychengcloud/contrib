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


import { CareworkerBatchGetDictTypesByIdRequestView } from './careworker-batch-get-dict-types-by-id-request-view';

/**
 * 
 * @export
 * @interface CareworkerBatchGetDictTypesByIdRequest
 */
export interface CareworkerBatchGetDictTypesByIdRequest {
    /**
     * The field will contain name of the resource requested.
     * @type {Array<string>}
     * @memberof CareworkerBatchGetDictTypesByIdRequest
     */
    ids?: Array<string>;
    /**
     * 
     * @type {CareworkerBatchGetDictTypesByIdRequestView}
     * @memberof CareworkerBatchGetDictTypesByIdRequest
     */
    view?: CareworkerBatchGetDictTypesByIdRequestView;
}

