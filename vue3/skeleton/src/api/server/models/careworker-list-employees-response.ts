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
 * @interface CareworkerListEmployeesResponse
 */
export interface CareworkerListEmployeesResponse {
    /**
     * The field name should match the noun \"Employee\" in the method name. There will be a maximum number of items returned based on the page_size field in the request.
     * @type {Array<CareworkerEmployee>}
     * @memberof CareworkerListEmployeesResponse
     */
    employees?: Array<CareworkerEmployee>;
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     * @type {string}
     * @memberof CareworkerListEmployeesResponse
     */
    nextPageToken?: string;
}

