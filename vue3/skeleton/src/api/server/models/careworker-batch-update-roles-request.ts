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


import { CareworkerRole } from './careworker-role';

/**
 * 
 * @export
 * @interface CareworkerBatchUpdateRolesRequest
 */
export interface CareworkerBatchUpdateRolesRequest {
    /**
     * The Role resource which replaces the resource on the server.
     * @type {Array<CareworkerRole>}
     * @memberof CareworkerBatchUpdateRolesRequest
     */
    roles?: Array<CareworkerRole>;
    /**
     * 
     * @type {string}
     * @memberof CareworkerBatchUpdateRolesRequest
     */
    updateMask?: string;
}


