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


import { CareworkerCustomer } from './careworker-customer';

/**
 * 
 * @export
 * @interface CareworkerBatchCreateCustomersRequest
 */
export interface CareworkerBatchCreateCustomersRequest {
    /**
     * The parent resource name where the Customer is to be created.
     * @type {string}
     * @memberof CareworkerBatchCreateCustomersRequest
     */
    parent?: string;
    /**
     * The Customer resource to create. The field name should match the Noun in the method name.
     * @type {Array<CareworkerCustomer>}
     * @memberof CareworkerBatchCreateCustomersRequest
     */
    customers?: Array<CareworkerCustomer>;
}


