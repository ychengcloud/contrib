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
 * @interface CareworkerDepartment
 */
export interface CareworkerDepartment {
    /**
     * 
     * @type {string}
     * @memberof CareworkerDepartment
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CareworkerDepartment
     */
    tenantId?: string;
    /**
     * 
     * @type {string}
     * @memberof CareworkerDepartment
     */
    projectId?: string;
    /**
     * 
     * @type {string}
     * @memberof CareworkerDepartment
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof CareworkerDepartment
     */
    pid?: number;
    /**
     * 
     * @type {number}
     * @memberof CareworkerDepartment
     */
    sort?: number;
    /**
     * 
     * @type {string}
     * @memberof CareworkerDepartment
     */
    manager?: string;
    /**
     * 
     * @type {string}
     * @memberof CareworkerDepartment
     */
    managerPhone?: string;
    /**
     * 
     * @type {string}
     * @memberof CareworkerDepartment
     */
    servicePhone?: string;
    /**
     * 
     * @type {string}
     * @memberof CareworkerDepartment
     */
    serviceDescription?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CareworkerDepartment
     */
    status?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CareworkerDepartment
     */
    createAt?: number;
    /**
     * 
     * @type {number}
     * @memberof CareworkerDepartment
     */
    updateAt?: number;
    /**
     * 
     * @type {number}
     * @memberof CareworkerDepartment
     */
    deleteAt?: number;
}

