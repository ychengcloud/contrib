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


import { CareworkerBatchGetSmsLogsByTenantIdRequestView } from './careworker-batch-get-sms-logs-by-tenant-id-request-view';

/**
 * 
 * @export
 * @interface CareworkerBatchGetSmsLogsByTenantIdRequest
 */
export interface CareworkerBatchGetSmsLogsByTenantIdRequest {
    /**
     * The field will contain name of the resource requested.
     * @type {Array<string>}
     * @memberof CareworkerBatchGetSmsLogsByTenantIdRequest
     */
    tenantIds?: Array<string>;
    /**
     * 
     * @type {CareworkerBatchGetSmsLogsByTenantIdRequestView}
     * @memberof CareworkerBatchGetSmsLogsByTenantIdRequest
     */
    view?: CareworkerBatchGetSmsLogsByTenantIdRequestView;
}


