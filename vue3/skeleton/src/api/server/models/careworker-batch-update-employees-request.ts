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


import { CareworkerEmployee } from './careworker-employee';

/**
 * 
 * @export
 * @interface CareworkerBatchUpdateEmployeesRequest
 */
export interface CareworkerBatchUpdateEmployeesRequest {
    /**
     * The Employee resource which replaces the resource on the server.
     * @type {Array<CareworkerEmployee>}
     * @memberof CareworkerBatchUpdateEmployeesRequest
     */
    employees?: Array<CareworkerEmployee>;
    /**
     * 
     * @type {string}
     * @memberof CareworkerBatchUpdateEmployeesRequest
     */
    updateMask?: string;
}

