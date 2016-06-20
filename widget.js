/* global requirejs cprequire cpdefine chilipeppr THREE */
// Defining the globals above helps Cloud9 not show warnings for those variables

// ChiliPeppr Widget/Element Javascript

requirejs.config({
    /*
    Dependencies can be defined here. ChiliPeppr uses require.js so
    please refer to http://requirejs.org/docs/api.html for info.
    
    Most widgets will not need to define Javascript dependencies.
    
    Make sure all URLs are https and http accessible. Try to use URLs
    that start with // rather than http:// or https:// so they simply
    use whatever method the main page uses.
    
    Also, please make sure you are not loading dependencies from different
    URLs that other widgets may already load like jquery, bootstrap,
    three.js, etc.
    
    You may slingshot content through ChiliPeppr's proxy URL if you desire
    to enable SSL for non-SSL URL's. ChiliPeppr's SSL URL is
    https://i2dcui.appspot.com which is the SSL equivalent for
    http://chilipeppr.com
    */
    paths: {
        // Example of how to define the key (you make up the key) and the URL
        // Make sure you DO NOT put the .js at the end of the URL
        // SmoothieCharts: '//smoothiecharts.org/smoothie',
        Three: '//i2dcui.appspot.com/geturl?url=http://threejs.org/build/three.js',
        AwsIot: '//i2dcui.appspot.com/slingshot?url=https://raw.githubusercontent.com/chilipeppr/widget-awsmqtt/master/aws-iot-sdk-browser-bundle.js',
        AwsIot2: '//i2dcui.appspot.com/slingshot?url=https://raw.githubusercontent.com/chilipeppr/widget-awsmqtt/master/bundle.js',
    },
    shim: {
        // See require.js docs for how to define dependencies that
        // should be loaded before your script/widget.
    }
});

cprequire_test(["inline:com-zipwhip-widget-awsmqtt"], function(myWidget) {

    // Test this element. This code is auto-removed by the chilipeppr.load()
    // when using this widget in production. So use the cpquire_test to do things
    // you only want to have happen during testing, like loading other widgets or
    // doing unit tests. Don't remove end_test at the end or auto-remove will fail.

    // Please note that if you are working on multiple widgets at the same time
    // you may need to use the ?forcerefresh=true technique in the URL of
    // your test widget to force the underlying chilipeppr.load() statements
    // to referesh the cache. For example, if you are working on an Add-On
    // widget to the Eagle BRD widget, but also working on the Eagle BRD widget
    // at the same time you will have to make ample use of this technique to
    // get changes to load correctly. If you keep wondering why you're not seeing
    // your changes, try ?forcerefresh=true as a get parameter in your URL.

    console.log("test running of " + myWidget.id);

    // load 3dviewer
    // have to tweak our own widget to get it above the 3dviewer
    $('#' + myWidget.id).css('position', 'relative');
    //$('#' + myWidget.id).css('background', 'none');
    $('#' + myWidget.id).css('width', '420px');
    // $('body').prepend('<div id="3dviewer"></div>');
    
    $('#' + myWidget.id).css('margin', '20px');
    $('title').html(myWidget.name);
    // $('body').css("position", "relative");
    myWidget.init();
    

} /*end_test*/ );

// This is the main definition of your widget. Give it a unique name.
cpdefine("inline:com-zipwhip-widget-awsmqtt", [ "chilipeppr_ready", 'AwsIot' /* other dependencies here */ ], function() {
    return {
        /**
         * The ID of the widget. You must define this and make it unique.
         */
        id: "com-zipwhip-widget-awsmqtt", // Make the id the same as the cpdefine id
        name: "Widget / AWS MQTT", // The descriptive name of your widget.
        desc: "A widget for interfacing with Amazon's MQTT service.",
        url: "(auto fill by runme.js)",       // The final URL of the working widget as a single HTML file with CSS and Javascript inlined. You can let runme.js auto fill this if you are using Cloud9.
        fiddleurl: "(auto fill by runme.js)", // The edit URL. This can be auto-filled by runme.js in Cloud9 if you'd like, or just define it on your own to help people know where they can edit/fork your widget
        githuburl: "(auto fill by runme.js)", // The backing github repo
        testurl: "(auto fill by runme.js)",   // The standalone working widget so can view it working by itself
        /**
         * Define pubsub signals below. These are basically ChiliPeppr's event system.
         * ChiliPeppr uses amplify.js's pubsub system so please refer to docs at
         * http://amplifyjs.com/api/pubsub/
         */
        /**
         * Define the publish signals that this widget/element owns or defines so that
         * other widgets know how to subscribe to them and what they do.
         */
        publish: {
            // Define a key:value pair here as strings to document what signals you publish.
            //'/onExampleGenerate': 'Example: Publish this signal when we go to generate gcode.'
        
            '/onmessage':'We publish this signal when we get an incoming message from Amazon\'s MQTT service.',
            
        },
        /**
         * Define the subscribe signals that this widget/element owns or defines so that
         * other widgets know how to subscribe to them and what they do.
         */
        subscribe: {
            // Define a key:value pair here as strings to document what signals you subscribe to
            // so other widgets can publish to this widget to have it do something.
            // '/onExampleConsume': 'Example: This widget subscribe to this signal so other widgets can send to us and we'll do something with it.'
        },
        /**
         * Document the foreign publish signals, i.e. signals owned by other widgets
         * or elements, that this widget/element publishes to.
         */
        foreignPublish: {
            // Define a key:value pair here as strings to document what signals you publish to
            // that are owned by foreign/other widgets.
            // '/jsonSend': 'Example: We send Gcode to the serial port widget to do stuff with the CNC controller.'
            // "/com-chilipeppr-widget-3dviewer/request3dObject" : "This gives us back the 3d object from the 3d viewer so we can add Three.js objects to it.",
            // "/com-chilipeppr-widget-recvtext/send" : 'We send texts via this publish. The payload is like {body: "my text msg body", to: "313-555-1212"}',
            
        },
        /**
         * Document the foreign subscribe signals, i.e. signals owned by other widgets
         * or elements, that this widget/element subscribes to.
         */
        foreignSubscribe: {
            // Define a key:value pair here as strings to document what signals you subscribe to
            // that are owned by foreign/other widgets.
            // '/com-chilipeppr-elem-dragdrop/ondropped': 'Example: We subscribe to this signal at a higher priority to intercept the signal. We do not let it propagate by returning false.'
            // "/com-chilipeppr-widget-3dviewer/recv3dObject" : "By subscribing to this we get the callback when we /request3dObject and thus we can grab the reference to the 3d object from the 3d viewer and do things like addScene() to it with our Three.js objects.",
            // "/com-chilipeppr-widget-recvtext/recv" : "We watch for incoming texts so we can trigger the Texterator.",
            
        },
        
        /**
         * All widgets should have an init method. It should be run by the
         * instantiating code like a workspace or a different widget.
         */
        init: function(opts) {
            console.log("I am being initted. Thanks.");


            this.btnSetup();
            // this.startMqtt();
            this.initMqtt();
            console.log("window after startMqtt", window);
            
            console.log("I am done being initted.");
        },
        
        poolid: null, // set poolid from localstorage so we don't store this in the code
        initMqtt: function() {
            // txt-poolid
            
            // See if Pool ID exists in localstorage, if so populate and startMqtt()
            this.poolid = localStorage.getItem(this.id + "/poolid");
            if (this.poolid && this.poolid.length > 0) {
                // we have a pool id
                $('#' + this.id + ' .txt-poolid').val(this.poolid);
                this.startMqtt(this.poolid);
            } else {
                // there is no pool id
                console.log("no pool id yet. need admin to paste.");
            }
            
            // When Pool ID changes by user, store it in localstorage
            $('#' + this.id + ' .txt-poolid').change(this.onPoolIdChange.bind(this));
            
        },
        onPoolIdChange: function(evt) {
            var el = $('#' + this.id + ' .txt-poolid');
            console.log("onPoolIdChange", el.val());
            localStorage.setItem(this.id + "/poolid", el.val());
            this.poolid = el.val();
        },
        startMqtt: function(poolid) {
            window.punycode = {};
            window.punycode.toASCII = function(mystr) {
                return mystr;
            }
            console.log("window:", window);
            // console.log("Url.prototype.parse", Url.prototype.parse);
            (function e(t, n, r) {
                function s(o, u) {
                    if (!n[o]) {
                        if (!t[o]) {
                            var a = typeof require == "function" && require;
                            if (!u && a) return a(o, !0);
                            if (i) return i(o, !0);
                            var f = new Error("Cannot find module '" + o + "'");
                            throw f.code = "MODULE_NOT_FOUND", f
                        }
                        var l = n[o] = {
                            exports: {}
                        };
                        t[o][0].call(l.exports, function(e) {
                            var n = t[o][1][e];
                            return s(n ? n : e)
                        }, l, l.exports, e, t, n, r)
                    }
                    return n[o].exports
                }
                var i = typeof require == "function" && require;
                for (var o = 0; o < r.length; o++) s(r[o]);
                return s
            })({
                1: [function(require, module, exports) {
                    /*
                     * Copyright 2015-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
                     *
                     * Licensed under the Apache License, Version 2.0 (the "License").
                     * You may not use this file except in compliance with the License.
                     * A copy of the License is located at
                     *
                     *  http://aws.amazon.com/apache2.0
                     *
                     * or in the "license" file accompanying this file. This file is distributed
                     * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
                     * express or implied. See the License for the specific language governing
                     * permissions and limitations under the License.
                     */
        
                    /*
                     * NOTE: You must set the following string constants prior to running this
                     * example application.
                     */
                     console.log("about to set awsConfiguration with poolid:", poolid);
                    var awsConfiguration = {
                        poolId: poolid, //'COGNITO IDENTITY POOL ID', // e.g. 'us-east-1:ba776ba-2af4-4b989-a0091-44933382772'
                        region: 'us-east-1' //'REGION GOES HERE' // e.g. 'us-east-1'
                    };
                    console.log("awsConfiguration:", awsConfiguration);
                    module.exports = awsConfiguration;
        
                }, {}],
                2: [function(require, module, exports) {
                    /*
                     * Copyright 2015-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
                     *
                     * Licensed under the Apache License, Version 2.0 (the "License").
                     * You may not use this file except in compliance with the License.
                     * A copy of the License is located at
                     *
                     *  http://aws.amazon.com/apache2.0
                     *
                     * or in the "license" file accompanying this file. This file is distributed
                     * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
                     * express or implied. See the License for the specific language governing
                     * permissions and limitations under the License.
                     */
        
                    //
                    // Instantiate the AWS SDK and configuration objects.  The AWS SDK for 
                    // JavaScript (aws-sdk) is used for Cognito Identity/Authentication, and 
                    // the AWS IoT SDK for JavaScript (aws-iot-device-sdk) is used for the
                    // WebSocket connection to AWS IoT and device shadow APIs.
                    // 
                    var AWS = require('aws-sdk');
                    var AWSIoTData = require('aws-iot-device-sdk');
                    var AWSConfiguration = require('./aws-configuration.js');
        
                    console.log('Loaded AWS SDK for JavaScript and AWS IoT SDK for Node.js');
                    console.log("AWS:", AWS, "AWSIoTData:", AWSIoTData);
                    console.log("AWSConfiguration:", AWSConfiguration);
        
                    var kegTopic = 'devday/test/keg';
        
                    //
                    // Create a client id to use when connecting to AWS IoT.
                    //
                    var clientId = 'keg-app-' + (Math.floor((Math.random() * 100000) + 1));
        
                    //
                    // Initialize our configuration.
                    //
                    AWS.config.region = AWSConfiguration.region;
        
                    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                        IdentityPoolId: AWSConfiguration.poolId
                    });
        
                    //
                    // Create the AWS IoT device object.  Note that the credentials must be 
                    // initialized with empty strings; when we successfully authenticate to
                    // the Cognito Identity Pool, the credentials will be dynamically updated.
                    //
                    const mqttClient = AWSIoTData.device({
                        //
                        // Set the AWS region we will operate in.
                        //
                        region: AWS.config.region,
                        //
                        // Use the clientId created earlier.
                        //
                        clientId: clientId,
                        //
                        // Connect via secure WebSocket
                        //
                        protocol: 'wss',
                        //
                        // Set the maximum reconnect time to 8 seconds; this is a browser application
                        // so we don't want to leave the user waiting too long for reconnection after
                        // re-connecting to the network/re-opening their laptop/etc...
                        //
                        maximumReconnectTimeMs: 8000,
                        //
                        // Enable console debugging information (optional)
                        //
                        debug: true,
                        //
                        // IMPORTANT: the AWS access key ID, secret key, and sesion token must be 
                        // initialized with empty strings.
                        //
                        accessKeyId: '',
                        secretKey: '',
                        sessionToken: ''
                    });
        
                    //
                    // Attempt to authenticate to the Cognito Identity Pool.  Note that this
                    // example only supports use of a pool which allows unauthenticated 
                    // identities.
                    //
                    var cognitoIdentity = new AWS.CognitoIdentity();
                    AWS.config.credentials.get(function(err, data) {
                        if (!err) {
                            console.log('retrieved identity: ' + AWS.config.credentials.identityId);
                            var params = {
                                IdentityId: AWS.config.credentials.identityId
                            };
                            cognitoIdentity.getCredentialsForIdentity(params, function(err, data) {
                                if (!err) {
                                    //
                                    // Update our latest AWS credentials; the MQTT client will use these
                                    // during its next reconnect attempt.
                                    //
                                    mqttClient.updateWebSocketCredentials(data.Credentials.AccessKeyId,
                                        data.Credentials.SecretKey,
                                        data.Credentials.SessionToken);
                                }
                                else {
                                    console.log('error retrieving credentials: ' + err);
                                    alert('error retrieving credentials: ' + err);
                                }
                            });
                        }
                        else {
                            console.log('error retrieving identity:' + err);
                            alert('error retrieving identity: ' + err);
                        }
                    });
        
                    //
                    // Connect handler; update div visibility and fetch latest shadow documents.
                    // Subscribe to lifecycle events on the first connect event.
                    //
                    window.mqttClientConnectHandler = function() {
                        console.log('connect');
                        // document.getElementById("connecting-div").style.visibility = 'hidden';
                        // document.getElementById("message-div").style.visibility = 'visible';
                        // document.getElementById('message-div').innerHTML = '<span></span>';
        
                        //
                        // Subscribe to our current topic.
                        //
                        mqttClient.subscribe(kegTopic);
                    };
        
                    //
                    // Reconnect handler; update div visibility.
                    //
                    window.mqttClientReconnectHandler = function() {
                        console.log('reconnect');
                        // document.getElementById("connecting-div").style.visibility = 'visible';
                        // document.getElementById("message-div").style.visibility = 'hidden';
                    };
        
                    //
                    // Utility function to determine if a value has been defined.
                    //
                    window.isUndefined = function(value) {
                        return typeof value === 'undefined' || typeof value === null;
                    };
        
                    //
                    // Message handler for lifecycle events; create/destroy divs as clients
                    // connect/disconnect.
                    //
                    // assumes payload is: {"phone":"###-###-####"}
                    window.mqttClientMessageHandler = function(topic, payload) {
                        chilipeppr.publish("/com-zipwhip-widget-awsmqtt/onmessage", topic, payload.toString());
                        var payloadJson = JSON.parse(payload.toString());
                        console.log(payloadJson.phone);
                        console.log('message: ' + topic + ':' + payload.toString());
                        // document.getElementById('message-div').innerHTML = '<span>' + payload.toString() + '<br>' + payloadJson.phone + '</span>';
                    };
        
                    //
                    // Install connect/reconnect event handlers.
                    //
                    mqttClient.on('connect', window.mqttClientConnectHandler);
                    mqttClient.on('reconnect', window.mqttClientReconnectHandler);
                    mqttClient.on('message', window.mqttClientMessageHandler);
        
                    //
                    // Initialize divs.
                    //
                    document.getElementById('connecting-div').style.visibility = 'visible';
                    document.getElementById('message-div').style.visibility = 'hidden';
                    document.getElementById('connecting-div').innerHTML = '<p>attempting to connect to aws iot...</p>';
        
                }, {
                    "./aws-configuration.js": 1,
                    "aws-iot-device-sdk": "aws-iot-device-sdk",
                    "aws-sdk": "aws-sdk"
                }]
            }, {}, [2]);
        
        },
        /**
         * Call this method from init to setup all the buttons when this widget
         * is first loaded. This basically attaches click events to your 
         * buttons. It also turns on all the bootstrap popovers by scanning
         * the entire DOM of the widget.
         */
        btnSetup: function() {

            // Chevron hide/show body
            var that = this;
            $('#' + this.id + ' .hidebody').click(function(evt) {
                console.log("hide/unhide body");
                if ($('#' + that.id + ' .panel-body').hasClass('hidden')) {
                    // it's hidden, unhide
                    that.showBody(evt);
                }
                else {
                    // hide
                    that.hideBody(evt);
                }
            });

            // Ask bootstrap to scan all the buttons in the widget to turn
            // on popover menus
            $('#' + this.id + ' .btn').popover({
                delay: 1000,
                animation: true,
                placement: "auto",
                trigger: "hover",
                container: 'body'
            });

            // Init Say Hello Button on Main Toolbar
            // We are inlining an anonymous method as the callback here
            // as opposed to a full callback method in the Hello Word 2
            // example further below. Notice we have to use "that" so 
            // that the this is set correctly inside the anonymous method
            $('#' + this.id + ' .btn-sayhello').click(function() {
                console.log("saying hello");
                // Make sure popover is immediately hidden
                $('#' + that.id + ' .btn-sayhello').popover("hide");
                // Show a flash msg
                chilipeppr.publish(
                    "/com-chilipeppr-elem-flashmsg/flashmsg",
                    "Hello Title",
                    "Hello World from widget " + that.id,
                    1000
                );
            });

            // Init Hello World 2 button on Tab 1. Notice the use
            // of the slick .bind(this) technique to correctly set "this"
            // when the callback is called
            $('#' + this.id + ' .btn-helloworld2').click(this.onHelloBtnClick.bind(this));

        },
        /**
         * onHelloBtnClick is an example of a button click event callback
         */
        onHelloBtnClick: function(evt) {
            console.log("saying hello 2 from btn in tab 1");
            chilipeppr.publish(
                '/com-chilipeppr-elem-flashmsg/flashmsg',
                "Hello 2 Title",
                "Hello World 2 from Tab 1 from widget " + this.id,
                2000 /* show for 2 second */
            );
        },
        /**
         * User options are available in this property for reference by your
         * methods. If any change is made on these options, please call
         * saveOptionsLocalStorage()
         */
        options: null,
        /**
         * Call this method on init to setup the UI by reading the user's
         * stored settings from localStorage and then adjust the UI to reflect
         * what the user wants.
         */
        setupUiFromLocalStorage: function() {

            // Read vals from localStorage. Make sure to use a unique
            // key specific to this widget so as not to overwrite other
            // widgets' options. By using this.id as the prefix of the
            // key we're safe that this will be unique.

            // Feel free to add your own keys inside the options 
            // object for your own items

            var options = localStorage.getItem(this.id + '-options');

            if (options) {
                options = $.parseJSON(options);
                console.log("just evaled options: ", options);
            }
            else {
                options = {
                    showBody: true,
                    tabShowing: 1,
                    customParam1: null,
                    customParam2: 1.0
                };
            }

            this.options = options;
            console.log("options:", options);

            // show/hide body
            if (options.showBody) {
                this.showBody();
            }
            else {
                this.hideBody();
            }

        },
        /**
         * When a user changes a value that is stored as an option setting, you
         * should call this method immediately so that on next load the value
         * is correctly set.
         */
        saveOptionsLocalStorage: function() {
            // You can add your own values to this.options to store them
            // along with some of the normal stuff like showBody
            var options = this.options;

            var optionsStr = JSON.stringify(options);
            console.log("saving options:", options, "json.stringify:", optionsStr);
            // store settings to localStorage
            localStorage.setItem(this.id + '-options', optionsStr);
        },
        /**
         * Show the body of the panel.
         * @param {jquery_event} evt - If you pass the event parameter in, we 
         * know it was clicked by the user and thus we store it for the next 
         * load so we can reset the user's preference. If you don't pass this 
         * value in we don't store the preference because it was likely code 
         * that sent in the param.
         */
        showBody: function(evt) {
            $('#' + this.id + ' .panel-body').removeClass('hidden');
            $('#' + this.id + ' .panel-footer').removeClass('hidden');
            $('#' + this.id + ' .hidebody span').addClass('glyphicon-chevron-up');
            $('#' + this.id + ' .hidebody span').removeClass('glyphicon-chevron-down');
            if (!(evt == null)) {
                this.options.showBody = true;
                this.saveOptionsLocalStorage();
            }
        },
        /**
         * Hide the body of the panel.
         * @param {jquery_event} evt - If you pass the event parameter in, we 
         * know it was clicked by the user and thus we store it for the next 
         * load so we can reset the user's preference. If you don't pass this 
         * value in we don't store the preference because it was likely code 
         * that sent in the param.
         */
        hideBody: function(evt) {
            $('#' + this.id + ' .panel-body').addClass('hidden');
            $('#' + this.id + ' .panel-footer').addClass('hidden');
            $('#' + this.id + ' .hidebody span').removeClass('glyphicon-chevron-up');
            $('#' + this.id + ' .hidebody span').addClass('glyphicon-chevron-down');
            if (!(evt == null)) {
                this.options.showBody = false;
                this.saveOptionsLocalStorage();
            }
        },
        /**
         * This method loads the pubsubviewer widget which attaches to our 
         * upper right corner triangle menu and generates 3 menu items like
         * Pubsub Viewer, View Standalone, and Fork Widget. It also enables
         * the modal dialog that shows the documentation for this widget.
         * 
         * By using chilipeppr.load() we can ensure that the pubsubviewer widget
         * is only loaded and inlined once into the final ChiliPeppr workspace.
         * We are given back a reference to the instantiated singleton so its
         * not instantiated more than once. Then we call it's attachTo method
         * which creates the full pulldown menu for us and attaches the click
         * events.
         */
        forkSetup: function() {
            var topCssSelector = '#' + this.id;

            $(topCssSelector + ' .panel-title').popover({
                title: this.name,
                content: this.desc,
                html: true,
                delay: 1000,
                animation: true,
                trigger: 'hover',
                placement: 'auto'
            });

            var that = this;
            chilipeppr.load("http://fiddle.jshell.net/chilipeppr/zMbL9/show/light/", function() {
                require(['inline:com-chilipeppr-elem-pubsubviewer'], function(pubsubviewer) {
                    pubsubviewer.attachTo($(topCssSelector + ' .panel-heading .dropdown-menu'), that);
                });
            });

        },
    }
});