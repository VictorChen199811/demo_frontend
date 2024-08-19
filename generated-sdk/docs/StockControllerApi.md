# SwaggerUi.StockControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTaiwanTotalIndex**](StockControllerApi.md#getTaiwanTotalIndex) | **GET** /home/getTaiwanTotalIndex | 取得加權指數
[**getTodaySingleStockData**](StockControllerApi.md#getTodaySingleStockData) | **POST** /home/getSingleStockData | 取得個股收盤資訊
[**getTodayStockData**](StockControllerApi.md#getTodayStockData) | **GET** /home/getTodayStockData | 取得今日上市股票收盤資訊



## getTaiwanTotalIndex

> [TaiwanTotalIndex] getTaiwanTotalIndex(opts)

取得加權指數

取得加權指數

### Example

```javascript
import SwaggerUi from '_swagger_ui_';

let apiInstance = new SwaggerUi.StockControllerApi();
let opts = {
  '': new Date("2013-10-20") // Date | 
};
apiInstance.getTaiwanTotalIndex(opts, (error, data, response) => {
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
 **** | **Date**|  | [optional] 

### Return type

[**[TaiwanTotalIndex]**](TaiwanTotalIndex.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getTodaySingleStockData

> [StockData] getTodaySingleStockData(opts)

取得個股收盤資訊

取得個股收盤資訊

### Example

```javascript
import SwaggerUi from '_swagger_ui_';

let apiInstance = new SwaggerUi.StockControllerApi();
let opts = {
  'date': new Date("2013-10-20"), // Date | 
  'code': "code_example" // String | 
};
apiInstance.getTodaySingleStockData(opts, (error, data, response) => {
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
 **date** | **Date**|  | [optional] 
 **code** | **String**|  | [optional] 

### Return type

[**[StockData]**](StockData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getTodayStockData

> [StockData] getTodayStockData()

取得今日上市股票收盤資訊

取得今日上市股票收盤資訊

### Example

```javascript
import SwaggerUi from '_swagger_ui_';

let apiInstance = new SwaggerUi.StockControllerApi();
apiInstance.getTodayStockData((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[StockData]**](StockData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

