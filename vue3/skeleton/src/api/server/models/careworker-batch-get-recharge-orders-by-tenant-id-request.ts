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


import { CareworkerBatchGetRechargeOrdersByTenantIdRequestView } from './careworker-batch-get-recharge-orders-by-tenant-id-request-view';

/**
 * 
 * @export
 * @interface CareworkerBatchGetRechargeOrdersByTenantIdRequest
 */
export interface CareworkerBatchGetRechargeOrdersByTenantIdRequest {
    /**
     * The field will contain name of the resource requested.
     * @type {Array<string>}
     * @memberof CareworkerBatchGetRechargeOrdersByTenantIdRequest
     */
    tenantIds?: Array<string>;
    /**
     * 
     * @type {CareworkerBatchGetRechargeOrdersByTenantIdRequestView}
     * @memberof CareworkerBatchGetRechargeOrdersByTenantIdRequest
     */
    view?: CareworkerBatchGetRechargeOrdersByTenantIdRequestView;
}


