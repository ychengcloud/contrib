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


import { CareworkerBatchGetPositionsByTenantIdRequestView } from './careworker-batch-get-positions-by-tenant-id-request-view';

/**
 * 
 * @export
 * @interface CareworkerBatchGetPositionsByTenantIdRequest
 */
export interface CareworkerBatchGetPositionsByTenantIdRequest {
    /**
     * The field will contain name of the resource requested.
     * @type {Array<string>}
     * @memberof CareworkerBatchGetPositionsByTenantIdRequest
     */
    tenantIds?: Array<string>;
    /**
     * 
     * @type {CareworkerBatchGetPositionsByTenantIdRequestView}
     * @memberof CareworkerBatchGetPositionsByTenantIdRequest
     */
    view?: CareworkerBatchGetPositionsByTenantIdRequestView;
}


