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


import { CareworkerBatchGetNoticeRecordsByEmployeeIdRequestView } from './careworker-batch-get-notice-records-by-employee-id-request-view';

/**
 * 
 * @export
 * @interface CareworkerBatchGetNoticeRecordsByEmployeeIdRequest
 */
export interface CareworkerBatchGetNoticeRecordsByEmployeeIdRequest {
    /**
     * The field will contain name of the resource requested.
     * @type {Array<string>}
     * @memberof CareworkerBatchGetNoticeRecordsByEmployeeIdRequest
     */
    employeeIds?: Array<string>;
    /**
     * 
     * @type {CareworkerBatchGetNoticeRecordsByEmployeeIdRequestView}
     * @memberof CareworkerBatchGetNoticeRecordsByEmployeeIdRequest
     */
    view?: CareworkerBatchGetNoticeRecordsByEmployeeIdRequestView;
}


