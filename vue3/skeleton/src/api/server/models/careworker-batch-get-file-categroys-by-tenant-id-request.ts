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


import { CareworkerBatchGetFileCategroysByTenantIdRequestView } from './careworker-batch-get-file-categroys-by-tenant-id-request-view';

/**
 * 
 * @export
 * @interface CareworkerBatchGetFileCategroysByTenantIdRequest
 */
export interface CareworkerBatchGetFileCategroysByTenantIdRequest {
    /**
     * The field will contain name of the resource requested.
     * @type {Array<string>}
     * @memberof CareworkerBatchGetFileCategroysByTenantIdRequest
     */
    tenantIds?: Array<string>;
    /**
     * 
     * @type {CareworkerBatchGetFileCategroysByTenantIdRequestView}
     * @memberof CareworkerBatchGetFileCategroysByTenantIdRequest
     */
    view?: CareworkerBatchGetFileCategroysByTenantIdRequestView;
}

