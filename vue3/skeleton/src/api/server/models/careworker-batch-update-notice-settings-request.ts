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


import { CareworkerNoticeSetting } from './careworker-notice-setting';

/**
 * 
 * @export
 * @interface CareworkerBatchUpdateNoticeSettingsRequest
 */
export interface CareworkerBatchUpdateNoticeSettingsRequest {
    /**
     * The NoticeSetting resource which replaces the resource on the server.
     * @type {Array<CareworkerNoticeSetting>}
     * @memberof CareworkerBatchUpdateNoticeSettingsRequest
     */
    noticeSettings?: Array<CareworkerNoticeSetting>;
    /**
     * 
     * @type {string}
     * @memberof CareworkerBatchUpdateNoticeSettingsRequest
     */
    updateMask?: string;
}

