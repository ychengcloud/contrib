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


import { CareworkerBatchGetEmployeesByNameRequestView } from './careworker-batch-get-employees-by-name-request-view';

/**
 * 
 * @export
 * @interface CareworkerBatchGetEmployeesByNameRequest
 */
export interface CareworkerBatchGetEmployeesByNameRequest {
    /**
     * The field will contain name of the resource requested.
     * @type {Array<string>}
     * @memberof CareworkerBatchGetEmployeesByNameRequest
     */
    names?: Array<string>;
    /**
     * 
     * @type {CareworkerBatchGetEmployeesByNameRequestView}
     * @memberof CareworkerBatchGetEmployeesByNameRequest
     */
    view?: CareworkerBatchGetEmployeesByNameRequestView;
}


