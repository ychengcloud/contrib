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


import { CareworkerBatchGetEmployeesByIdRequestView } from './careworker-batch-get-employees-by-id-request-view';

/**
 * 
 * @export
 * @interface CareworkerBatchGetEmployeesByIdRequest
 */
export interface CareworkerBatchGetEmployeesByIdRequest {
    /**
     * The field will contain name of the resource requested.
     * @type {Array<string>}
     * @memberof CareworkerBatchGetEmployeesByIdRequest
     */
    ids?: Array<string>;
    /**
     * 
     * @type {CareworkerBatchGetEmployeesByIdRequestView}
     * @memberof CareworkerBatchGetEmployeesByIdRequest
     */
    view?: CareworkerBatchGetEmployeesByIdRequestView;
}


