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



/**
 * 
 * @export
 * @interface CareworkerRefundRecord
 */
export interface CareworkerRefundRecord {
    /**
     * 
     * @type {string}
     * @memberof CareworkerRefundRecord
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CareworkerRefundRecord
     */
    tenantId?: string;
    /**
     * 
     * @type {string}
     * @memberof CareworkerRefundRecord
     */
    sn?: string;
    /**
     * 
     * @type {number}
     * @memberof CareworkerRefundRecord
     */
    customerId?: number;
    /**
     * 
     * @type {number}
     * @memberof CareworkerRefundRecord
     */
    orderId?: number;
    /**
     * 
     * @type {string}
     * @memberof CareworkerRefundRecord
     */
    orderSn?: string;
    /**
     * 
     * @type {string}
     * @memberof CareworkerRefundRecord
     */
    orderType?: string;
    /**
     * 
     * @type {number}
     * @memberof CareworkerRefundRecord
     */
    orderAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof CareworkerRefundRecord
     */
    refundAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof CareworkerRefundRecord
     */
    transactionId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CareworkerRefundRecord
     */
    refundWay?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CareworkerRefundRecord
     */
    refundType?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CareworkerRefundRecord
     */
    refundStatus?: number;
    /**
     * 
     * @type {number}
     * @memberof CareworkerRefundRecord
     */
    createAt?: number;
    /**
     * 
     * @type {number}
     * @memberof CareworkerRefundRecord
     */
    updateAt?: number;
}


