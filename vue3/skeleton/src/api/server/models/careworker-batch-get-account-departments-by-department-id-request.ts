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


import { CareworkerBatchGetAccountDepartmentsByDepartmentIdRequestView } from './careworker-batch-get-account-departments-by-department-id-request-view';

/**
 * 
 * @export
 * @interface CareworkerBatchGetAccountDepartmentsByDepartmentIdRequest
 */
export interface CareworkerBatchGetAccountDepartmentsByDepartmentIdRequest {
    /**
     * The field will contain name of the resource requested.
     * @type {Array<string>}
     * @memberof CareworkerBatchGetAccountDepartmentsByDepartmentIdRequest
     */
    departmentIds?: Array<string>;
    /**
     * 
     * @type {CareworkerBatchGetAccountDepartmentsByDepartmentIdRequestView}
     * @memberof CareworkerBatchGetAccountDepartmentsByDepartmentIdRequest
     */
    view?: CareworkerBatchGetAccountDepartmentsByDepartmentIdRequestView;
}


