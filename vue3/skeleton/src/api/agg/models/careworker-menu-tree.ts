/* tslint:disable */
/* eslint-disable */
/**
 * agg/v1/api.proto
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
 * @interface CareworkerMenuTree
 */
export interface CareworkerMenuTree {
    /**
     * 
     * @type {CareworkerMenu}
     * @memberof CareworkerMenuTree
     */
    node?: CareworkerMenu;
    /**
     * 
     * @type {Array<CareworkerMenuTree>}
     * @memberof CareworkerMenuTree
     */
    children?: Array<CareworkerMenuTree>;
}


