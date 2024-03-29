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
 * @interface CareworkerListRechargeOrdersResponse
 */
export interface CareworkerListRechargeOrdersResponse {
    /**
     * The field name should match the noun \"RechargeOrder\" in the method name. There will be a maximum number of items returned based on the page_size field in the request.
     * @type {Array<CareworkerRechargeOrder>}
     * @memberof CareworkerListRechargeOrdersResponse
     */
    rechargeOrders?: Array<CareworkerRechargeOrder>;
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     * @type {string}
     * @memberof CareworkerListRechargeOrdersResponse
     */
    nextPageToken?: string;
}


