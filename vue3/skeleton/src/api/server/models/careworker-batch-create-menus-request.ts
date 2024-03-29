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


import { CareworkerMenu } from './careworker-menu';

/**
 * 
 * @export
 * @interface CareworkerBatchCreateMenusRequest
 */
export interface CareworkerBatchCreateMenusRequest {
    /**
     * The parent resource name where the Menu is to be created.
     * @type {string}
     * @memberof CareworkerBatchCreateMenusRequest
     */
    parent?: string;
    /**
     * The Menu resource to create. The field name should match the Noun in the method name.
     * @type {Array<CareworkerMenu>}
     * @memberof CareworkerBatchCreateMenusRequest
     */
    menus?: Array<CareworkerMenu>;
}


