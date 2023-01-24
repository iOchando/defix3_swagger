# SwaggerDasdsOpenApi30.DasdApi

All URIs are relative to *https://petstore3.swagger.io/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPet**](DasdApi.md#addPet) | **POST** /pet | Add a new pet to the store

<a name="addPet"></a>
# **addPet**
> Pet addPet(body, id, name, category, photoUrls, tags, status)

Add a new pet to the store

Add a new pet to the store

### Example
```javascript
import {SwaggerDasdsOpenApi30} from 'swagger_dasds___open_api_30';
let defaultClient = SwaggerDasdsOpenApi30.ApiClient.instance;

// Configure OAuth2 access token for authorization: petstore_auth
let petstore_auth = defaultClient.authentications['petstore_auth'];
petstore_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerDasdsOpenApi30.DasdApi();
let body = new SwaggerDasdsOpenApi30.Pet(); // Pet | Create a new pet in the store
let id = 789; // Number | 
let name = "name_example"; // String | 
let category = new SwaggerDasdsOpenApi30.Category(); // Category | 
let photoUrls = ["photoUrls_example"]; // [String] | 
let tags = [new SwaggerDasdsOpenApi30.Tag()]; // [Tag] | 
let status = "status_example"; // String | 

apiInstance.addPet(body, id, name, category, photoUrls, tags, status, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Pet**](Pet.md)| Create a new pet in the store | 
 **id** | **Number**|  | 
 **name** | **String**|  | 
 **category** | [**Category**](.md)|  | 
 **photoUrls** | [**[String]**](String.md)|  | 
 **tags** | [**[Tag]**](Tag.md)|  | 
 **status** | **String**|  | 

### Return type

[**Pet**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

