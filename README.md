# com-zipwhip-widget-texterator
A widget for controlling the Zipwhip Texterator.

![alt text](screenshot.png "Screenshot")

## ChiliPeppr Widget / Texterator

All ChiliPeppr widgets/elements are defined using cpdefine() which is a method
that mimics require.js. Each defined object must have a unique ID so it does
not conflict with other ChiliPeppr widgets.

| Item                  | Value           |
| -------------         | ------------- | 
| ID                    | com-zipwhip-widget-texterator |
| Name                  | Widget / Texterator |
| Description           | A widget for controlling the Zipwhip Texterator. |
| chilipeppr.load() URL | http://raw.githubusercontent.com/chilipeppr/widget-awsmqtt/master/auto-generated-widget.html |
| Edit URL              | http://ide.c9.io/chilipeppr/awsmqtt |
| Github URL            | http://github.com/chilipeppr/widget-awsmqtt |
| Test URL              | https://preview.c9users.io/chilipeppr/awsmqtt/widget.html |

## Example Code for chilipeppr.load() Statement

You can use the code below as a starting point for instantiating this widget 
inside a workspace or from another widget. The key is that you need to load 
your widget inlined into a div so the DOM can parse your HTML, CSS, and 
Javascript. Then you use cprequire() to find your widget's Javascript and get 
back the instance of it.

```javascript
// Inject new div to contain widget or use an existing div with an ID
$("body").append('<' + 'div id="myDivComZipwhipWidgetTexterator"><' + '/div>');

chilipeppr.load(
  "#myDivComZipwhipWidgetTexterator",
  "http://raw.githubusercontent.com/chilipeppr/widget-awsmqtt/master/auto-generated-widget.html",
  function() {
    // Callback after widget loaded into #myDivComZipwhipWidgetTexterator
    // Now use require.js to get reference to instantiated widget
    cprequire(
      ["inline:com-zipwhip-widget-texterator"], // the id you gave your widget
      function(myObjComZipwhipWidgetTexterator) {
        // Callback that is passed reference to the newly loaded widget
        console.log("Widget / Texterator just got loaded.", myObjComZipwhipWidgetTexterator);
        myObjComZipwhipWidgetTexterator.init();
      }
    );
  }
);

```

## Publish

This widget/element publishes the following signals. These signals are owned by this widget/element and are published to all objects inside the ChiliPeppr environment that listen to them via the 
chilipeppr.subscribe(signal, callback) method. 
To better understand how ChiliPeppr's subscribe() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-pub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr><td colspan="2">(No signals defined in this widget/element)</td></tr>    
      </tbody>
  </table>

## Subscribe

This widget/element subscribes to the following signals. These signals are owned by this widget/element. Other objects inside the ChiliPeppr environment can publish to these signals via the chilipeppr.publish(signal, data) method. 
To better understand how ChiliPeppr's publish() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-sub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr><td colspan="2">(No signals defined in this widget/element)</td></tr>    
      </tbody>
  </table>

## Foreign Publish

This widget/element publishes to the following signals that are owned by other objects. 
To better understand how ChiliPeppr's subscribe() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-foreignpub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr valign="top"><td>/com-zipwhip-widget-texterator/com-chilipeppr-widget-3dviewer/request3dObject</td><td>This gives us back the 3d object from the 3d viewer so we can add Three.js objects to it.</td></tr><tr valign="top"><td>/com-zipwhip-widget-texterator/com-chilipeppr-widget-recvtext/send</td><td>We send texts via this publish. The payload is like {body: "my text msg body", to: "313-555-1212"}</td></tr>    
      </tbody>
  </table>

## Foreign Subscribe

This widget/element publishes to the following signals that are owned by other objects.
To better understand how ChiliPeppr's publish() method works see amplify.js's documentation at http://amplifyjs.com/api/pubsub/

  <table id="com-chilipeppr-elem-pubsubviewer-foreignsub" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Signal</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr valign="top"><td>/com-zipwhip-widget-texterator/com-chilipeppr-widget-3dviewer/recv3dObject</td><td>By subscribing to this we get the callback when we /request3dObject and thus we can grab the reference to the 3d object from the 3d viewer and do things like addScene() to it with our Three.js objects.</td></tr><tr valign="top"><td>/com-zipwhip-widget-texterator/com-chilipeppr-widget-recvtext/recv</td><td>We watch for incoming texts so we can trigger the Texterator.</td></tr>    
      </tbody>
  </table>

## Methods / Properties

The table below shows, in order, the methods and properties inside the widget/element.

  <table id="com-chilipeppr-elem-methodsprops" class="table table-bordered table-striped">
      <thead>
          <tr>
              <th style="">Method / Property</th>
              <th>Type</th>
              <th style="">Description</th>
          </tr>
      </thead>
      <tbody>
      <tr valign="top"><td>id</td><td>string</td><td>"com-zipwhip-widget-texterator"<br><br>The ID of the widget. You must define this and make it unique.</td></tr><tr valign="top"><td>name</td><td>string</td><td>"Widget / Texterator"</td></tr><tr valign="top"><td>desc</td><td>string</td><td>"A widget for controlling the Zipwhip Texterator."</td></tr><tr valign="top"><td>url</td><td>string</td><td>"http://raw.githubusercontent.com/chilipeppr/widget-awsmqtt/master/auto-generated-widget.html"</td></tr><tr valign="top"><td>fiddleurl</td><td>string</td><td>"http://ide.c9.io/chilipeppr/awsmqtt"</td></tr><tr valign="top"><td>githuburl</td><td>string</td><td>"http://github.com/chilipeppr/widget-awsmqtt"</td></tr><tr valign="top"><td>testurl</td><td>string</td><td>"http://awsmqtt-chilipeppr.c9users.io/widget.html"</td></tr><tr valign="top"><td>publish</td><td>object</td><td>Please see docs above.<br><br>Define the publish signals that this widget/element owns or defines so that
other widgets know how to subscribe to them and what they do.</td></tr><tr valign="top"><td>subscribe</td><td>object</td><td>Please see docs above.<br><br>Define the subscribe signals that this widget/element owns or defines so that
other widgets know how to subscribe to them and what they do.</td></tr><tr valign="top"><td>foreignPublish</td><td>object</td><td>Please see docs above.<br><br>Document the foreign publish signals, i.e. signals owned by other widgets
or elements, that this widget/element publishes to.</td></tr><tr valign="top"><td>foreignSubscribe</td><td>object</td><td>Please see docs above.<br><br>Document the foreign subscribe signals, i.e. signals owned by other widgets
or elements, that this widget/element subscribes to.</td></tr><tr valign="top"><td>comPort</td><td>string</td><td>"com3"<br><br>Make sure to update the serial port that the arduino/nodemcu device is on that takes commands.</td></tr><tr valign="top"><td>init</td><td>function</td><td>function (opts) <br><br>All widgets should have an init method. It should be run by the
instantiating code like a workspace or a different widget.</td></tr><tr valign="top"><td>setupSerialPortSetupModal</td><td>function</td><td>function () </td></tr><tr valign="top"><td>setupScreenSaver</td><td>function</td><td>function () </td></tr><tr valign="top"><td>onScreenSaverClose</td><td>function</td><td>function () </td></tr><tr valign="top"><td>screenSaverShow</td><td>function</td><td>function () </td></tr><tr valign="top"><td>cancelAnim</td><td>boolean</td><td></td></tr><tr valign="top"><td>screenSaverAnim</td><td>function</td><td>function () </td></tr><tr valign="top"><td>localMediaStream</td><td>object</td><td></td></tr><tr valign="top"><td>stopAfterCanPlay</td><td>boolean</td><td></td></tr><tr valign="top"><td>setupCam</td><td>function</td><td>function () <br><br>Webcam snapshot methods</td></tr><tr valign="top"><td>camError</td><td>function</td><td>function (err) </td></tr><tr valign="top"><td>isActiveOnCupPickupSnapPhoto</td><td>boolean</td><td></td></tr><tr valign="top"><td>camOnCupPickupSnapPhotoUpdateScreensaverAndSendMms</td><td>function</td><td>function (phone) </td></tr><tr valign="top"><td>camTakePicture</td><td>function</td><td>function () </td></tr><tr valign="top"><td>camPrePhotoCallback</td><td>object</td><td></td></tr><tr valign="top"><td>camPostPhotoCallback</td><td>object</td><td></td></tr><tr valign="top"><td>camOnCanPlay</td><td>function</td><td>function (ev) </td></tr><tr valign="top"><td>camImmediatelySnapPhoto</td><td>function</td><td>function () </td></tr><tr valign="top"><td>camStop</td><td>function</td><td>function () </td></tr><tr valign="top"><td>sendTestMMS</td><td>function</td><td>function () </td></tr><tr valign="top"><td>formatPhone</td><td>function</td><td>function (phone) </td></tr><tr valign="top"><td>e164verify</td><td>function</td><td>function (phone) <br><br>Pass in a phone number and it verifies it is in e164 format</td></tr><tr valign="top"><td>sendMmsMessage</td><td>function</td><td>function (imageDataUrl, toPhone, msg) </td></tr><tr valign="top"><td>uploadImage</td><td>function</td><td>function () </td></tr><tr valign="top"><td>sendImage</td><td>function</td><td>function () </td></tr><tr valign="top"><td>setupMachineBtns</td><td>function</td><td>function () <br><br>Machine. Lazy Susan</td></tr><tr valign="top"><td>advanceLazySusan</td><td>function</td><td>function () </td></tr><tr valign="top"><td>sendPourBeerCmd</td><td>function</td><td>function () </td></tr><tr valign="top"><td>sendLaserDoneCmd</td><td>function</td><td>function () </td></tr><tr valign="top"><td>sendTableLockOffCmd</td><td>function</td><td>function () </td></tr><tr valign="top"><td>sendTableLockOnCmd</td><td>function</td><td>function () </td></tr><tr valign="top"><td>setupLaserBtns</td><td>function</td><td>function () <br><br>Setup butons related to laser control.</td></tr><tr valign="top"><td>laserIt</td><td>function</td><td>function () </td></tr><tr valign="top"><td>sendGcodeToWorkspace</td><td>function</td><td>function (gcodetxt) </td></tr><tr valign="top"><td>laserHome</td><td>function</td><td>function () </td></tr><tr valign="top"><td>watchIncomingLinesFromTinyG</td><td>function</td><td>function (data) </td></tr><tr valign="top"><td>sendGcode</td><td>function</td><td>function (gcode) <br><br>This method sends Gcode to the TinyG. This is not to be confused with sendSerial which
sends to the alternate serial device like the Arduino controlling the Texterator.</td></tr><tr valign="top"><td>generateGcodeCallback</td><td>object</td><td></td></tr><tr valign="top"><td>generateGcode</td><td>function</td><td>function (txt, callback) </td></tr><tr valign="top"><td>gcodePreamble</td><td>string</td><td>"\n(Auto generated)\nG28.3 X0 Y45 Z0\nG1 F2000 Y30\n"</td></tr><tr valign="top"><td>gcodePostamble</td><td>string</td><td>"\n(Go to home)\nG0 X0\nG1 Y45\n"</td></tr><tr valign="top"><td>getFontGcodeCallback</td><td>function</td><td>function (payload) </td></tr><tr valign="top"><td>setupTextListener</td><td>function</td><td>function () <br><br>Listen for incoming texts so we can trigger the Texterator as well
as send responses back, keep stats, etc.</td></tr><tr valign="top"><td>onIncomingText</td><td>function</td><td>function (msg) <br><br>This method is called when an incoming text comes in via pubsub from the
Zipwhip Receive Text widget. So make sure that widget is loaded.</td></tr><tr valign="top"><td>sendText</td><td>function</td><td>function (to, body) </td></tr><tr valign="top"><td>serialCtr</td><td>number</td><td>Serial commands for Arduino controlling Texterator</td></tr><tr valign="top"><td>sendSerial</td><td>function</td><td>function (cmd) </td></tr><tr valign="top"><td>setupSerialPubSub</td><td>function</td><td>function () </td></tr><tr valign="top"><td>lastSerialData</td><td>string</td><td></td></tr><tr valign="top"><td>onRecvSerial</td><td>function</td><td>function (data) </td></tr><tr valign="top"><td>processSerialDataRaw</td><td>function</td><td>function () <br><br>Data does not come in line by line, so we have to queue the incoming characters and
then split on newline to generate individual lines for easy processing.</td></tr><tr valign="top"><td>lastIncomingLine</td><td>object</td><td></td></tr><tr valign="top"><td>onSerialIncomingLine</td><td>function</td><td>function (line) <br><br>This method is called for each line that comes in on the serial port.</td></tr><tr valign="top"><td>statusItems</td><td>object</td><td></td></tr><tr valign="top"><td>statusUpdated</td><td>function</td><td>function (sr) <br><br>This method is called if the status is updated from incoming serial data so that we
can trigger stuff off of it like re-checking the queue.</td></tr><tr valign="top"><td>lastTableIndex</td><td>number</td><td></td></tr><tr valign="top"><td>onTableIndexChange</td><td>function</td><td>function (newindex) </td></tr><tr valign="top"><td>lastSlots</td><td>object</td><td></td></tr><tr valign="top"><td>slotState</td><td>object</td><td>Initial default states for slots</td></tr><tr valign="top"><td>advanceForwardSlots</td><td>function</td><td>function () </td></tr><tr valign="top"><td>onSlotStatusChange</td><td>function</td><td>function (newslots) </td></tr><tr valign="top"><td>refreshSlotStatus</td><td>function</td><td>function () </td></tr><tr valign="top"><td>onCupPickedUp</td><td>function</td><td>function (obj, slotIndex) <br><br>We get this call when the slot status changes from beer/marked to nocup
We may get a bunch of these at the same time, so debounce cuz the 10 sec process
to snap a photo can only really happen for the first person and the rest will just
have to get ignored.</td></tr><tr valign="top"><td>updateQueueToAdvanceSlotsForActiveItems</td><td>function</td><td>function () </td></tr><tr valign="top"><td>updateQueueToAdvanceSlotsForActiveItemsCallback</td><td>function</td><td>function () </td></tr><tr valign="top"><td>sr</td><td>object</td><td></td></tr><tr valign="top"><td>laserSr</td><td>object</td><td>NOT USED. The status of the laser. Auto-updates based on Gcode execution on TinyG</td></tr><tr valign="top"><td>isQueueTriggering</td><td>boolean</td><td></td></tr><tr valign="top"><td>triggerQueue</td><td>function</td><td>function () <br><br>In this method we look at the queue and see if there is something to do like send a
serial command to start the beer vending process.</td></tr><tr valign="top"><td>triggerQueueCallback</td><td>function</td><td>function () <br><br>This is called when the triggerQueue is done grabbing all queues that need to get worked.</td></tr><tr valign="top"><td>activeQueueIdVendingBeer</td><td>object</td><td></td></tr><tr valign="top"><td>vendBeer</td><td>function</td><td>function (queueId) <br><br>Advances lazy susan once and vends beer</td></tr><tr valign="top"><td>onDoneVendBeer</td><td>function</td><td>function () <br><br>Called when we see the done beerpour (waitingforlaser) cmd come back in over serial.</td></tr><tr valign="top"><td>activeQueueIdLasering</td><td>object</td><td></td></tr><tr valign="top"><td>triggerLasering</td><td>function</td><td>function (queueId) </td></tr><tr valign="top"><td>onLaseringDone</td><td>function</td><td>function () <br><br>We get this callback when the lasering Gcode is done running on the TinyG</td></tr><tr valign="top"><td>onPickedUpCup</td><td>function</td><td>function (phone) <br><br>If user picked up cup, then run this code here to send them a text.</td></tr><tr valign="top"><td>tryToStartBeerVendForQueueItem</td><td>function</td><td>function (queueId) <br><br>You can send us a queue ID that you'd like to have us attempt to start a beer vend for.
What we look for is whether slot 0 has a cup in it, which would mean sr.slots[0] = 1.
If it does then we can send the serial command of "moveFwdSlot"</td></tr><tr valign="top"><td>genGcodeForUserAndLoadIntoChiliPeppr</td><td>function</td><td>function (qrecord) </td></tr><tr valign="top"><td>setupWatchGcodeDonePubSub</td><td>function</td><td>function () </td></tr><tr valign="top"><td>onGcodeDonePlaying</td><td>function</td><td>function (payload) </td></tr><tr valign="top"><td>injectUserIntoBeerQueue</td><td>function</td><td>function (phone) <br><br>We add the user to the beer queue, but that does nothing more than write to the db. It is
up to the independent queue consumption trigerring to pull the queue and see what to do next.</td></tr><tr valign="top"><td>userUpdateOrAddThenGet</td><td>function</td><td>function (msg, callback) </td></tr><tr valign="top"><td>setupQueueButtons</td><td>function</td><td>function () </td></tr><tr valign="top"><td>onWipeQueue</td><td>function</td><td>function () </td></tr><tr valign="top"><td>isQueueRefreshing</td><td>boolean</td><td></td></tr><tr valign="top"><td>refreshQueueView</td><td>function</td><td>function () </td></tr><tr valign="top"><td>refreshUserView</td><td>function</td><td>function () </td></tr><tr valign="top"><td>phoneFormat</td><td>function</td><td>function (phone) </td></tr><tr valign="top"><td>prettyCount</td><td>function</td><td>function (count) </td></tr><tr valign="top"><td>prettyDateDiff</td><td>function</td><td>function (timeNew, timeOld) </td></tr><tr valign="top"><td>queueBeer</td><td>function</td><td>function (msg) </td></tr><tr valign="top"><td>db</td><td>object</td><td></td></tr><tr valign="top"><td>DB_NAME</td><td>string</td><td>"texterator"</td></tr><tr valign="top"><td>DB_VERSION</td><td>number</td><td></td></tr><tr valign="top"><td>DB_STORE_NAME</td><td>string</td><td>"users"</td></tr><tr valign="top"><td>DB_STORE_NAME_QUEUE</td><td>string</td><td>"queue"</td></tr><tr valign="top"><td>openDb</td><td>function</td><td>function (callback) </td></tr><tr valign="top"><td>getObjectStore</td><td>function</td><td>function (store_name, mode) <br><br><br><br><b>store_name</b> ({string}) 
<br><br><b>mode</b> ({string})  either "readonly" or "readwrite"</td></tr><tr valign="top"><td>addQueue</td><td>function</td><td>function (phone, beerNum, callback) </td></tr><tr valign="top"><td>updateQueue</td><td>function</td><td>function (record, callback) </td></tr><tr valign="top"><td>getQueue</td><td>function</td><td>function (id, callback) </td></tr><tr valign="top"><td>wipeQueue</td><td>function</td><td>function (callback) </td></tr><tr valign="top"><td>addUser</td><td>function</td><td>function (phone, beers, lastBeer, prevBeer, callback) <br><br><br><br><b>phone</b> ({string}) 
<br><br><b>beers</b> ({integer}) 
<br><br><b>lastBeer</b> ({date}) 
<br><br><b>prevBeer</b> ({date}) </td></tr><tr valign="top"><td>updateUser</td><td>function</td><td>function (record, callback) </td></tr><tr valign="top"><td>getUser</td><td>function</td><td>function (phone, callback) </td></tr><tr valign="top"><td>init3d</td><td>function</td><td>function () <br><br>Try to get a reference to the 3D viewer.</td></tr><tr valign="top"><td>drawtexterator</td><td>function</td><td>function () </td></tr><tr valign="top"><td>onInit3dSuccess</td><td>function</td><td>function () </td></tr><tr valign="top"><td>obj3d</td><td>object</td><td></td></tr><tr valign="top"><td>obj3dmeta</td><td>object</td><td></td></tr><tr valign="top"><td>userCallbackForGet3dObj</td><td>object</td><td></td></tr><tr valign="top"><td>get3dObj</td><td>function</td><td>function (callback) </td></tr><tr valign="top"><td>get3dObjCallback</td><td>function</td><td>function (data, meta) </td></tr><tr valign="top"><td>is3dViewerReady</td><td>boolean</td><td></td></tr><tr valign="top"><td>clear3dViewer</td><td>function</td><td>function () </td></tr><tr valign="top"><td>mySceneGroup</td><td>object</td><td></td></tr><tr valign="top"><td>sceneReAddMySceneGroup</td><td>function</td><td>function () </td></tr><tr valign="top"><td>sceneRemoveMySceneGroup</td><td>function</td><td>function () </td></tr><tr valign="top"><td>btnSetup</td><td>function</td><td>function () <br><br>Call this method from init to setup all the buttons when this widget
is first loaded. This basically attaches click events to your 
buttons. It also turns on all the bootstrap popovers by scanning
the entire DOM of the widget.</td></tr><tr valign="top"><td>onHelloBtnClick</td><td>function</td><td>function (evt) <br><br>onHelloBtnClick is an example of a button click event callback</td></tr><tr valign="top"><td>options</td><td>object</td><td>User options are available in this property for reference by your
methods. If any change is made on these options, please call
saveOptionsLocalStorage()</td></tr><tr valign="top"><td>setupUiFromLocalStorage</td><td>function</td><td>function () <br><br>Call this method on init to setup the UI by reading the user's
stored settings from localStorage and then adjust the UI to reflect
what the user wants.</td></tr><tr valign="top"><td>saveOptionsLocalStorage</td><td>function</td><td>function () <br><br>When a user changes a value that is stored as an option setting, you
should call this method immediately so that on next load the value
is correctly set.</td></tr><tr valign="top"><td>showBody</td><td>function</td><td>function (evt) <br><br>Show the body of the panel.
<br><br><b>evt</b> ({jquery_event})  - If you pass the event parameter in, we 
know it was clicked by the user and thus we store it for the next 
load so we can reset the user's preference. If you don't pass this 
value in we don't store the preference because it was likely code 
that sent in the param.</td></tr><tr valign="top"><td>hideBody</td><td>function</td><td>function (evt) <br><br>Hide the body of the panel.
<br><br><b>evt</b> ({jquery_event})  - If you pass the event parameter in, we 
know it was clicked by the user and thus we store it for the next 
load so we can reset the user's preference. If you don't pass this 
value in we don't store the preference because it was likely code 
that sent in the param.</td></tr><tr valign="top"><td>forkSetup</td><td>function</td><td>function () <br><br>This method loads the pubsubviewer widget which attaches to our 
upper right corner triangle menu and generates 3 menu items like
Pubsub Viewer, View Standalone, and Fork Widget. It also enables
the modal dialog that shows the documentation for this widget.<br><br>By using chilipeppr.load() we can ensure that the pubsubviewer widget
is only loaded and inlined once into the final ChiliPeppr workspace.
We are given back a reference to the instantiated singleton so its
not instantiated more than once. Then we call it's attachTo method
which creates the full pulldown menu for us and attaches the click
events.</td></tr><tr valign="top"><td>gcodeZipwhipLogo</td><td>string</td><td>"\n(Gcode generated by ChiliPeppr Svg2Gcode Widget)\nG21 (mm)\nG0 X-13.361 Y33.000\nM3 (laser on)\nG1 X-27.986 Y33.000\nG1 X-27.986 Y32.995\nG1 X-28.404 Y32.995\nG1 X-28.836 Y32.996\nG1 X-29.282 Y32.997\nG1 X-29.739 Y32.997\nG1 X-30.209 Y32.998\nG1 X-30.691 Y32.998\nG1 X-31.183 Y32.999\nG1 X-31.686 Y32.999\nG1 X-32.198 Y33.000\nG1 X-32.720 Y33.000\nG1 X-33.251 Y33.000\nG1 X-33.790 Y33.000\nG1 X-35.192 Y32.916\nG1 X-36.500 Y32.673\nG1 X-37.714 Y32.281\nG1 X-38.834 Y31.754\nG1 X-39.858 Y31.102\nG1 X-40.787 Y30.338\nG1 X-41.621 Y29.473\nG1 X-42.358 Y28.520\nG1 X-42.998 Y27.490\nG1 X-43.541 Y26.395\nG1 X-43.986 Y25.246\nG1 X-44.332 Y24.057\nG1 X-44.538 Y23.216\nG1 X-44.735 Y22.401\nG1 X-44.937 Y21.561\nG1 X-45.159 Y20.644\nG1 X-45.415 Y19.600\nG1 X-45.717 Y18.376\nG1 X-46.079 Y16.922\nG1 X-46.516 Y15.187\nG1 X-47.042 Y13.119\nG1 X-47.669 Y10.668\nG1 X-48.412 Y7.781\nG1 X-49.284 Y4.408\nG1 X-49.287 Y4.396\nG1 X-49.289 Y4.384\nG1 X-49.292 Y4.372\nG1 X-49.295 Y4.359\nG1 X-49.298 Y4.347\nG1 X-49.302 Y4.334\nG1 X-49.305 Y4.322\nG1 X-49.308 Y4.310\nG1 X-49.311 Y4.298\nG1 X-49.315 Y4.287\nG1 X-49.318 Y4.275\nG1 X-49.321 Y4.265\nG1 X-49.325 Y4.249\nG1 X-49.328 Y4.233\nG1 X-49.331 Y4.217\nG1 X-49.334 Y4.201\nG1 X-49.337 Y4.185\nG1 X-49.340 Y4.170\nG1 X-49.342 Y4.154\nG1 X-49.345 Y4.138\nG1 X-49.347 Y4.123\nG1 X-49.350 Y4.108\nG1 X-49.352 Y4.092\nG1 X-49.355 Y4.077\nG1 X-52.949 Y-9.844\nG1 X-52.962 Y-9.924\nG1 X-52.988 Y-10.137\nG1 X-53.000 Y-10.444\nG1 X-52.975 Y-10.804\nG1 X-52.889 Y-11.176\nG1 X-52.717 Y-11.523\nG1 X-52.436 Y-11.802\nG1 X-52.020 Y-11.974\nG1 X-51.446 Y-12.000\nG1 X-50.689 Y-11.839\nG1 X-49.724 Y-11.450\nG1 X-48.529 Y-10.795\nG1 X-47.854 Y-10.384\nG1 X-47.124 Y-9.941\nG1 X-46.349 Y-9.470\nG1 X-45.535 Y-8.976\nG1 X-44.690 Y-8.464\nG1 X-43.823 Y-7.938\nG1 X-42.941 Y-7.404\nG1 X-42.051 Y-6.865\nG1 X-41.163 Y-6.327\nG1 X-40.283 Y-5.794\nG1 X-39.420 Y-5.272\nG1 X-38.581 Y-4.765\nG1 X-28.009 Y-4.765\nG1 X-28.009 Y-4.763\nG1 X-27.592 Y-4.764\nG1 X-27.161 Y-4.764\nG1 X-26.717 Y-4.764\nG1 X-26.259 Y-4.764\nG1 X-25.789 Y-4.764\nG1 X-25.308 Y-4.764\nG1 X-24.815 Y-4.765\nG1 X-24.312 Y-4.765\nG1 X-23.799 Y-4.765\nG1 X-23.276 Y-4.765\nG1 X-22.745 Y-4.765\nG1 X-22.206 Y-4.765\nG1 X-20.801 Y-4.681\nG1 X-19.491 Y-4.437\nG1 X-18.275 Y-4.044\nG1 X-17.154 Y-3.516\nG1 X-16.128 Y-2.862\nG1 X-15.198 Y-2.097\nG1 X-14.364 Y-1.230\nG1 X-13.627 Y-0.275\nG1 X-12.987 Y0.758\nG1 X-12.444 Y1.856\nG1 X-12.000 Y3.007\nG1 X-11.653 Y4.200\nG1 X-11.595 Y4.433\nG1 X-11.435 Y5.070\nG1 X-11.184 Y6.067\nG1 X-10.854 Y7.380\nG1 X-10.455 Y8.966\nG1 X-9.999 Y10.782\nG1 X-9.495 Y12.783\nG1 X-8.956 Y14.927\nG1 X-8.391 Y17.170\nG1 X-7.813 Y19.468\nG1 X-7.231 Y21.778\nG1 X-6.657 Y24.057\nG1 X-6.399 Y25.441\nG1 X-6.297 Y26.717\nG1 X-6.350 Y27.881\nG1 X-6.556 Y28.932\nG1 X-6.910 Y29.868\nG1 X-7.411 Y30.686\nG1 X-8.057 Y31.384\nG1 X-8.844 Y31.960\nG1 X-9.771 Y32.412\nG1 X-10.834 Y32.737\nG1 X-12.031 Y32.934\nG1 X-13.361 Y33.000\nM5 (laser off)\nG0 X-14.441 Y22.613\nM3 (laser on)\nG1 X-14.441 Y22.613\nG1 X-14.435 Y23.259\nG1 X-14.514 Y23.876\nG1 X-14.674 Y24.460\nG1 X-14.910 Y25.004\nG1 X-15.215 Y25.504\nG1 X-15.584 Y25.954\nG1 X-16.013 Y26.350\nG1 X-16.496 Y26.685\nG1 X-17.027 Y26.955\nG1 X-17.601 Y27.155\nG1 X-18.214 Y27.278\nG1 X-18.859 Y27.320\nG1 X-35.238 Y27.320\nG1 X-37.014 Y20.603\nG1 X-25.242 Y20.603\nG1 X-40.206 Y8.933\nG1 X-40.396 Y8.749\nG1 X-40.574 Y8.558\nG1 X-40.737 Y8.360\nG1 X-40.888 Y8.150\nG1 X-41.024 Y7.928\nG1 X-41.147 Y7.691\nG1 X-41.256 Y7.438\nG1 X-41.351 Y7.165\nG1 X-41.431 Y6.871\nG1 X-41.498 Y6.553\nG1 X-41.549 Y6.210\nG1 X-41.586 Y5.839\nG1 X-41.593 Y5.191\nG1 X-41.513 Y4.569\nG1 X-41.354 Y3.978\nG1 X-41.119 Y3.425\nG1 X-40.815 Y2.916\nG1 X-40.447 Y2.455\nG1 X-40.019 Y2.050\nG1 X-39.537 Y1.705\nG1 X-39.007 Y1.427\nG1 X-38.433 Y1.221\nG1 X-37.821 Y1.093\nG1 X-37.176 Y1.049\nG1 X-36.513 Y1.049\nG1 X-35.613 Y1.049\nG1 X-34.508 Y1.050\nG1 X-33.232 Y1.050\nG1 X-31.817 Y1.050\nG1 X-30.296 Y1.050\nG1 X-28.702 Y1.050\nG1 X-27.066 Y1.050\nG1 X-25.423 Y1.050\nG1 X-23.804 Y1.050\nG1 X-22.243 Y1.051\nG1 X-20.772 Y1.051\nG1 X-18.895 Y8.040\nG1 X-30.415 Y8.040\nG1 X-16.168 Y19.177\nG1 X-15.934 Y19.394\nG1 X-15.714 Y19.613\nG1 X-15.509 Y19.837\nG1 X-15.320 Y20.070\nG1 X-15.148 Y20.314\nG1 X-14.992 Y20.573\nG1 X-14.854 Y20.850\nG1 X-14.733 Y21.148\nG1 X-14.631 Y21.470\nG1 X-14.548 Y21.819\nG1 X-14.484 Y22.199\nG1 X-14.441 Y22.613\nM5 (laser off)\n"</td></tr>
      </tbody>
  </table>


## About ChiliPeppr

[ChiliPeppr](http://chilipeppr.com) is a hardware fiddle, meaning it is a 
website that lets you easily
create a workspace to fiddle with your hardware from software. ChiliPeppr provides
a [Serial Port JSON Server](https://github.com/johnlauer/serial-port-json-server) 
that you run locally on your computer, or remotely on another computer, to connect to 
the serial port of your hardware like an Arduino or other microcontroller.

You then create a workspace at ChiliPeppr.com that connects to your hardware 
by starting from scratch or forking somebody else's
workspace that is close to what you are after. Then you write widgets in
Javascript that interact with your hardware by forking the base template 
widget or forking another widget that
is similar to what you are trying to build.

ChiliPeppr is massively capable such that the workspaces for 
[TinyG](http://chilipeppr.com/tinyg) and [Grbl](http://chilipeppr.com/grbl) CNC 
controllers have become full-fledged CNC machine management software used by
tens of thousands.

ChiliPeppr has inspired many people in the hardware/software world to use the
browser and Javascript as the foundation for interacting with hardware. The
Arduino team in Italy caught wind of ChiliPeppr and now
ChiliPeppr's Serial Port JSON Server is the basis for the 
[Arduino's new web IDE](https://create.arduino.cc/). If the Arduino team is excited about building on top
of ChiliPeppr, what
will you build on top of it?

