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


import { CareworkerBatchGetRechargeOrdersByIdRequestView } from './careworker-batch-get-recharge-orders-by-id-request-view';

/**
 * 
 * @export
 * @interface CareworkerBatchGetRechargeOrdersByIdRequest
 */
export interface CareworkerBatchGetRechargeOrdersByIdRequest {
    /**
     * The field will contain name of the resource requested.
     * @type {Array<string>}
     * @memberof CareworkerBatchGetRechargeOrdersByIdRequest
     */
    ids?: Array<string>;
    /**
     * 
     * @type {CareworkerBatchGetRechargeOrdersByIdRequestView}
     * @memberof CareworkerBatchGetRechargeOrdersByIdRequest
     */
    view?: CareworkerBatchGetRechargeOrdersByIdRequestView;
}


