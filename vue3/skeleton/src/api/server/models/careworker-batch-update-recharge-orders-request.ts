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


import { CareworkerRechargeOrder } from './careworker-recharge-order';

/**
 * 
 * @export
 * @interface CareworkerBatchUpdateRechargeOrdersRequest
 */
export interface CareworkerBatchUpdateRechargeOrdersRequest {
    /**
     * The RechargeOrder resource which replaces the resource on the server.
     * @type {Array<CareworkerRechargeOrder>}
     * @memberof CareworkerBatchUpdateRechargeOrdersRequest
     */
    rechargeOrders?: Array<CareworkerRechargeOrder>;
    /**
     * 
     * @type {string}
     * @memberof CareworkerBatchUpdateRechargeOrdersRequest
     */
    updateMask?: string;
}


