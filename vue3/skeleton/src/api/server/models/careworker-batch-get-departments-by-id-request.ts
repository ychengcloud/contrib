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


import { CareworkerBatchGetDepartmentsByIdRequestView } from './careworker-batch-get-departments-by-id-request-view';

/**
 * 
 * @export
 * @interface CareworkerBatchGetDepartmentsByIdRequest
 */
export interface CareworkerBatchGetDepartmentsByIdRequest {
    /**
     * The field will contain name of the resource requested.
     * @type {Array<string>}
     * @memberof CareworkerBatchGetDepartmentsByIdRequest
     */
    ids?: Array<string>;
    /**
     * 
     * @type {CareworkerBatchGetDepartmentsByIdRequestView}
     * @memberof CareworkerBatchGetDepartmentsByIdRequest
     */
    view?: CareworkerBatchGetDepartmentsByIdRequestView;
}


