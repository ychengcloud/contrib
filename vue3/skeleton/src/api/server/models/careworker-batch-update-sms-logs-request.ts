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


import { CareworkerSmsLog } from './careworker-sms-log';

/**
 * 
 * @export
 * @interface CareworkerBatchUpdateSmsLogsRequest
 */
export interface CareworkerBatchUpdateSmsLogsRequest {
    /**
     * The SmsLog resource which replaces the resource on the server.
     * @type {Array<CareworkerSmsLog>}
     * @memberof CareworkerBatchUpdateSmsLogsRequest
     */
    smsLogs?: Array<CareworkerSmsLog>;
    /**
     * 
     * @type {string}
     * @memberof CareworkerBatchUpdateSmsLogsRequest
     */
    updateMask?: string;
}

