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


import { CareworkerAccountDepartment } from './careworker-account-department';

/**
 * 
 * @export
 * @interface CareworkerBatchCreateAccountDepartmentsRequest
 */
export interface CareworkerBatchCreateAccountDepartmentsRequest {
    /**
     * The parent resource name where the AccountDepartment is to be created.
     * @type {string}
     * @memberof CareworkerBatchCreateAccountDepartmentsRequest
     */
    parent?: string;
    /**
     * The AccountDepartment resource to create. The field name should match the Noun in the method name.
     * @type {Array<CareworkerAccountDepartment>}
     * @memberof CareworkerBatchCreateAccountDepartmentsRequest
     */
    accountDepartments?: Array<CareworkerAccountDepartment>;
}


