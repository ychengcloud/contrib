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


import { CareworkerOperationLog } from './careworker-operation-log';

/**
 * 
 * @export
 * @interface CareworkerBatchUpdateOperationLogsRequest
 */
export interface CareworkerBatchUpdateOperationLogsRequest {
    /**
     * The OperationLog resource which replaces the resource on the server.
     * @type {Array<CareworkerOperationLog>}
     * @memberof CareworkerBatchUpdateOperationLogsRequest
     */
    operationLogs?: Array<CareworkerOperationLog>;
    /**
     * 
     * @type {string}
     * @memberof CareworkerBatchUpdateOperationLogsRequest
     */
    updateMask?: string;
}

