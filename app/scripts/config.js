/**
 * Created by xyj on 21/01/14.
 */
'use strict';

var Configuration = (function(configuration){

    configuration.Environment = "DEVELOPMENT";//PRODUCTION
    configuration.ServerBaseUrl = "";
    configuration.AppConfigUrl = "/data/config/";
    configuration.AppConfig = {};
    configuration.CurrentPage = "";


    return configuration;
}(Global.Configuration || {}))