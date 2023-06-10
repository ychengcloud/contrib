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
 * @interface CareworkerProject
 */
export interface CareworkerProject {
    /**
     * 
     * @type {string}
     * @memberof CareworkerProject
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CareworkerProject
     */
    tenantId?: string;
    /**
     * 
     * @type {string}
     * @memberof CareworkerProject
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CareworkerProject
     */
    status?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CareworkerProject
     */
    remark?: string;
    /**
     * 
     * @type {number}
     * @memberof CareworkerProject
     */
    maxOrderDays?: number;
    /**
     * 
     * @type {string}
     * @memberof CareworkerProject
     */
    servicePhone?: string;
    /**
     * 
     * @type {string}
     * @memberof CareworkerProject
     */
    smsPhone?: string;
    /**
     * 
     * @type {string}
     * @memberof CareworkerProject
     */
    noticePhone?: string;
    /**
     * 
     * @type {string}
     * @memberof CareworkerProject
     */
    clientAppId?: string;
    /**
     * 
     * @type {string}
     * @memberof CareworkerProject
     */
    employeeAppId?: string;
    /**
     * 
     * @type {string}
     * @memberof CareworkerProject
     */
    adminAppId?: string;
    /**
     * 
     * @type {number}
     * @memberof CareworkerProject
     */
    createAt?: number;
    /**
     * 
     * @type {number}
     * @memberof CareworkerProject
     */
    updateAt?: number;
    /**
     * 
     * @type {number}
     * @memberof CareworkerProject
     */
    deleteAt?: number;
}

