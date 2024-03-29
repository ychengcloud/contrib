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
 * @interface CareworkerBatchCreateOperationLogsRequest
 */
export interface CareworkerBatchCreateOperationLogsRequest {
    /**
     * The parent resource name where the OperationLog is to be created.
     * @type {string}
     * @memberof CareworkerBatchCreateOperationLogsRequest
     */
    parent?: string;
    /**
     * The OperationLog resource to create. The field name should match the Noun in the method name.
     * @type {Array<CareworkerOperationLog>}
     * @memberof CareworkerBatchCreateOperationLogsRequest
     */
    operationLogs?: Array<CareworkerOperationLog>;
}


