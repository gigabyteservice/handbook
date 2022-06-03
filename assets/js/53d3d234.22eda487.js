"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,g=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"dev-guide-iframe-events",title:"Events"},s=void 0,c={unversionedId:"dev-guide/dev-guide-iframe-events",id:"dev-guide/dev-guide-iframe-events",title:"Events",description:"The JitsiMeetExternalAPI object implements the [EventEmitter] API for emitting and listening for events.",source:"@site/docs/dev-guide/iframe-events.md",sourceDirName:"dev-guide",slug:"/dev-guide/dev-guide-iframe-events",permalink:"/handbook/docs/dev-guide/dev-guide-iframe-events",editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/iframe-events.md",tags:[],version:"current",lastUpdatedAt:1654235675,formattedLastUpdatedAt:"6/3/2022",frontMatter:{id:"dev-guide-iframe-events",title:"Events"},sidebar:"docs",previous:{title:"Commands",permalink:"/handbook/docs/dev-guide/dev-guide-iframe-commands"},next:{title:"Configuration",permalink:"/handbook/docs/dev-guide/dev-guide-configuration"}},d={},p=[{value:"cameraError",id:"cameraerror",level:3},{value:"avatarChanged",id:"avatarchanged",level:3},{value:"audioAvailabilityChanged",id:"audioavailabilitychanged",level:3},{value:"audioMuteStatusChanged",id:"audiomutestatuschanged",level:3},{value:"browserSupport",id:"browsersupport",level:3},{value:"contentSharingParticipantsChanged",id:"contentsharingparticipantschanged",level:3},{value:"dataChannelOpened",id:"datachannelopened",level:3},{value:"endpointTextMessageReceived",id:"endpointtextmessagereceived",level:3},{value:"faceLandmarkDetected",id:"facelandmarkdetected",level:3},{value:"errorOccurred",id:"erroroccurred",level:3},{value:"knockingParticipant",id:"knockingparticipant",level:3},{value:"largeVideoChanged",id:"largevideochanged",level:3},{value:"log",id:"log",level:3},{value:"micError",id:"micerror",level:3},{value:"screenSharingStatusChanged",id:"screensharingstatuschanged",level:3},{value:"dominantSpeakerChanged",id:"dominantspeakerchanged",level:3},{value:"raiseHandUpdated",id:"raisehandupdated",level:3},{value:"tileViewChanged",id:"tileviewchanged",level:3},{value:"chatUpdated",id:"chatupdated",level:3},{value:"incomingMessage",id:"incomingmessage",level:3},{value:"mouseEnter",id:"mouseenter",level:3},{value:"mouseLeave",id:"mouseleave",level:3},{value:"mouseMove",id:"mousemove",level:3},{value:"toolbarButtonClicked",id:"toolbarbuttonclicked",level:3},{value:"outgoingMessage",id:"outgoingmessage",level:3},{value:"displayNameChange",id:"displaynamechange",level:3},{value:"deviceListChanged",id:"devicelistchanged",level:3},{value:"emailChange",id:"emailchange",level:3},{value:"feedbackSubmitted",id:"feedbacksubmitted",level:3},{value:"filmstripDisplayChanged",id:"filmstripdisplaychanged",level:3},{value:"moderationStatusChanged",id:"moderationstatuschanged",level:3},{value:"moderationParticipantApproved",id:"moderationparticipantapproved",level:3},{value:"moderationParticipantRejected",id:"moderationparticipantrejected",level:3},{value:"participantJoined",id:"participantjoined",level:3},{value:"participantKickedOut",id:"participantkickedout",level:3},{value:"participantLeft",id:"participantleft",level:3},{value:"participantRoleChanged",id:"participantrolechanged",level:3},{value:"passwordRequired",id:"passwordrequired",level:3},{value:"videoConferenceJoined",id:"videoconferencejoined",level:3},{value:"videoConferenceLeft",id:"videoconferenceleft",level:3},{value:"videoAvailabilityChanged",id:"videoavailabilitychanged",level:3},{value:"videoMuteStatusChanged",id:"videomutestatuschanged",level:3},{value:"videoQualityChanged",id:"videoqualitychanged",level:3},{value:"readyToClose",id:"readytoclose",level:3},{value:"recordingLinkAvailable",id:"recordinglinkavailable",level:3},{value:"recordingStatusChanged",id:"recordingstatuschanged",level:3},{value:"subjectChange",id:"subjectchange",level:3},{value:"suspendDetected",id:"suspenddetected",level:3}],u={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"JitsiMeetExternalAPI")," object implements the ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/events.html"},"EventEmitter")," API for emitting and listening for events."),(0,r.kt)("p",null,"You can add event listeners to the embedded Jitsi Meet using the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"addListener"))," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.addListener(event, listener);\n")),(0,r.kt)("p",null,"If you want to remove a listener you can use the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"removeListener"))," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.removeListener(event, listener);\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"event"))," parameter is a string object with the name of the event."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"listener"))," parameter is a function object with one argument that creates a notification when the event occurs along with related event data."),(0,r.kt)("p",null,"The following events are currently supported:"),(0,r.kt)("h3",{id:"cameraerror"},"cameraError"),(0,r.kt)("p",null,"Provides event notifications about Jitsi Meet having failed to access the meeting camera."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    type: string, // A constant representing the overall type of the error.\n    message: string // Additional information about the error.\n}\n")),(0,r.kt)("h3",{id:"avatarchanged"},"avatarChanged"),(0,r.kt)("p",null,"Provides event notifications about changes to a participant's avatar."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    id: string, // the id of the participant that changed his avatar.\n    avatarURL: string // the new avatar URL.\n}\n")),(0,r.kt)("h3",{id:"audioavailabilitychanged"},"audioAvailabilityChanged"),(0,r.kt)("p",null,"Provides event notifications about changes to audio availability status."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    available: boolean // new available status - boolean\n}\n")),(0,r.kt)("h3",{id:"audiomutestatuschanged"},"audioMuteStatusChanged"),(0,r.kt)("p",null,"Provides event notifications about changes to audio mute status."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    muted: boolean // new muted status - boolean\n}\n")),(0,r.kt)("h3",{id:"browsersupport"},"browserSupport"),(0,r.kt)("p",null,"Provides event notifications about the current browser support."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    supported: boolean\n}\n")),(0,r.kt)("h3",{id:"contentsharingparticipantschanged"},"contentSharingParticipantsChanged"),(0,r.kt)("p",null,"Provides real-time list of currently screen sharing participant ID's."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    data: ["particId1", "particId2", ...]\n}\n')),(0,r.kt)("h3",{id:"datachannelopened"},"dataChannelOpened"),(0,r.kt)("p",null,"Indicates the data channel is open and thus messages can be sent over it."),(0,r.kt)("h3",{id:"endpointtextmessagereceived"},"endpointTextMessageReceived"),(0,r.kt)("p",null,"Provides event notifications about a text messages received through data channels."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    senderInfo: {\n        jid: string, // the jid of the sender\n        id: string // the participant id of the sender\n    },\n    eventData: {\n        name: string, // the name of the datachannel event: `endpoint-text-message`\n        text: string // the received text from the sender\n    }\n}\n")),(0,r.kt)("h3",{id:"facelandmarkdetected"},"faceLandmarkDetected"),(0,r.kt)("p",null,"Provides event notifications when a face landmark is detected"),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    faceBox: {\n        left: number, // face bounding box distance as percentage from the left video edge\n        right: number // face bounding box distance as percentage from the right video edge\n        width: number // face bounding box width as percentage of the total video width\n    }, // this might be undefined if config.faceLandmarks.faceCenteringThreshold is not passed\n    faceExpression: string // check https://github.com/jitsi/jitsi-meet/blob/master/react/features/face-landmarks/constants.js#L3 for available values\n}\n")),(0,r.kt)("h3",{id:"erroroccurred"},"errorOccurred"),(0,r.kt)("p",null,"Provides event notifications about an error which has occurred."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    details: Object?, // additional error details\n    message: string?, // the error message\n    name: string, // the coded name of the error\n    type: string, // error type/source, one of : 'CONFIG', 'CONNECTION', 'CONFERENCE'\n    isFatal: boolean // whether this is a fatal error which triggered a reconnect overlay or not\n}\n")),(0,r.kt)("h3",{id:"knockingparticipant"},"knockingParticipant"),(0,r.kt)("p",null,"Provides event notifications about a knocking participant in the lobby."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    participant: {\n        // the id and name of the participant that is currently knocking in the lobby\n        id: string,\n        name: string\n    }\n}\n")),(0,r.kt)("h3",{id:"largevideochanged"},"largeVideoChanged"),(0,r.kt)("p",null,"Provides event notifications about changes in the large video display."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    id: string // id of the participant that is now on large video in the stage view.\n}\n")),(0,r.kt)("h3",{id:"log"},"log"),(0,r.kt)("p",null,"Provides log event notifications with the log level being one of the values specified in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/config.js"},"config.js")," file in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"apiLogLevels"))," property (if not specified the event does not fire)."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    logLevel: string, // A constant representing the log type (info, error, debug, warn).\n    args: string // Additional log information.\n}\n")),(0,r.kt)("h3",{id:"micerror"},"micError"),(0,r.kt)("p",null,"Provides event notifications about Jitsi Meet issues with mic access."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    type: string, // A constant representing the overall type of the error.\n    message: string // Additional information about the error.\n}\n")),(0,r.kt)("h3",{id:"screensharingstatuschanged"},"screenSharingStatusChanged"),(0,r.kt)("p",null,"Provides event notifications about either turning on or off local user screen sharing."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    on: boolean, //whether screen sharing is on\n    details: {\n\n        // From where the screen sharing is capturing, if known. Values which are\n        // passed include 'window', 'screen', 'proxy', 'device'. The value undefined\n        // will be passed if the source type is unknown or screen share is off.\n        sourceType: string|undefined\n    }\n}\n")),(0,r.kt)("h3",{id:"dominantspeakerchanged"},"dominantSpeakerChanged"),(0,r.kt)("p",null,"Provides event notifications about dominant speaker changes."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    id: string //participantId of the new dominant speaker\n}\n")),(0,r.kt)("h3",{id:"raisehandupdated"},"raiseHandUpdated"),(0,r.kt)("p",null,"Provides event notifications about the participant raising/lowering the hand."),(0,r.kt)("p",null,"The listener will receive an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    id: string,         // participantId of the user who raises/lowers the hand\n    handRaised: number  // 0 when hand is lowered and the hand raised timestamp when raised.\n}\n")),(0,r.kt)("h3",{id:"tileviewchanged"},"tileViewChanged"),(0,r.kt)("p",null,"Provides event notifications about entrance or exit from the tile view layout mode."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    enabled: boolean, // whether tile view is not displayed or not\n}\n")),(0,r.kt)("h3",{id:"chatupdated"},"chatUpdated"),(0,r.kt)("p",null,"Provides event notifications about chat state being updated."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    isOpen: boolean, // Whether the chat panel is open or not\n    unreadCount: number // The unread messages counter\n}\n")),(0,r.kt)("h3",{id:"incomingmessage"},"incomingMessage"),(0,r.kt)("p",null,"Provides event notifications about incoming chat messages."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    from: string, // The id of the user that sent the message\n    nick: string, // the nickname of the user that sent the message\n    privateMessage: boolean, // whether this is a private or group message\n    message: string // the text of the message\n}\n")),(0,r.kt)("h3",{id:"mouseenter"},"mouseEnter"),(0,r.kt)("p",null,"Provides event notifications when mouse enters the iframe.\nThe listener receives an object with the following structure based on ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent"},"MouseEvent"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    event: {\n        clientX,\n        clientY,\n        movementX,\n        movementY,\n        offsetX,\n        offsetY,\n        pageX,\n        pageY,\n        x,\n        y,\n        screenX,\n        screenY\n    }\n}\n")),(0,r.kt)("h3",{id:"mouseleave"},"mouseLeave"),(0,r.kt)("p",null,"Provides event notifications when mouse leaves the iframe.\nThe listener receives an object with the following structure based on ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent"},"MouseEvent"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    event: {\n        clientX,\n        clientY,\n        movementX,\n        movementY,\n        offsetX,\n        offsetY,\n        pageX,\n        pageY,\n        x,\n        y,\n        screenX,\n        screenY\n    }\n}\n")),(0,r.kt)("h3",{id:"mousemove"},"mouseMove"),(0,r.kt)("p",null,"Provides event notifications when mouse moves inside the iframe.\nTis event is triggered on an interval which can be configured by overriding the config.js mouseMoveCallbackInterval property."),(0,r.kt)("p",null,"The listener receives an object with the following structure based on ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent"},"MouseEvent"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    event: {\n        clientX,\n        clientY,\n        movementX,\n        movementY,\n        offsetX,\n        offsetY,\n        pageX,\n        pageY,\n        x,\n        y,\n        screenX,\n        screenY\n    }\n}\n")),(0,r.kt)("h3",{id:"toolbarbuttonclicked"},"toolbarButtonClicked"),(0,r.kt)("p",null,"Provides event notifications about a toolbar button being clicked and whether the click routine was executed or not.\nFor overriding a button's click, please use the following config overwrite:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/042a2cb447bd9ff39ab3904e493952787bd30924/config.js#L547"},"https://github.com/jitsi/jitsi-meet/blob/042a2cb447bd9ff39ab3904e493952787bd30924/config.js#L547")),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    key: string, // the pressed button's key. The key is as defined in `toolbarButtons` config,\n    preventExecution: boolean // whether the click routine execution was prevented or not.\n}\n")),(0,r.kt)("h3",{id:"outgoingmessage"},"outgoingMessage"),(0,r.kt)("p",null,"Provides event notifications about outgoing chat messages."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    message: string, // the text of the message\n    privateMessage: boolean // whether this is a private or group message\n}\n")),(0,r.kt)("h3",{id:"displaynamechange"},"displayNameChange"),(0,r.kt)("p",null,"Provides event notifications about display name changes."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    id: string, // the id of the participant that changed their display name\n    displayname: string // the new display name\n}\n")),(0,r.kt)("h3",{id:"devicelistchanged"},"deviceListChanged"),(0,r.kt)("p",null,"Provides event notifications about device list changes."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    devices: Object // the new list of available devices.\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"device"))," object has the same format as the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"getAvailableDevices"))," result format."),(0,r.kt)("h3",{id:"emailchange"},"emailChange"),(0,r.kt)("p",null,"Provides event notifications about email changes."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    id: string, // the id of the participant that changed his email\n    email: string // the new email\n}\n")),(0,r.kt)("h3",{id:"feedbacksubmitted"},"feedbackSubmitted"),(0,r.kt)("p",null,"Provides event notifications about conference feedback submissions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    error: string // The error which occurred during submission, if any.\n}\n")),(0,r.kt)("h3",{id:"filmstripdisplaychanged"},"filmstripDisplayChanged"),(0,r.kt)("p",null,"Provides event visibility notifications for the filmstrip that is being updated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    visible: boolean // Whether or not the filmstrip is displayed or hidden.\n}\n")),(0,r.kt)("h3",{id:"moderationstatuschanged"},"moderationStatusChanged"),(0,r.kt)("p",null,"Provides event notifications about changes to moderation status."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    mediaType: string, // The media type for which moderation changed.\n    enabled: boolean // Whether or not moderation changed to enabled.\n}\n")),(0,r.kt)("h3",{id:"moderationparticipantapproved"},"moderationParticipantApproved"),(0,r.kt)("p",null,"Provides event notifications about participants approvals for moderation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    id: string, // The ID of the participant that got approved.\n    mediaType: string // The media type for which the participant was approved.\n}\n")),(0,r.kt)("h3",{id:"moderationparticipantrejected"},"moderationParticipantRejected"),(0,r.kt)("p",null,"Provides event notifications about participants rejections for moderation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    id: string, // The ID of the participant that got rejected.\n    mediaType: string // The media type for which the participant was rejected.\n}\n")),(0,r.kt)("h3",{id:"participantjoined"},"participantJoined"),(0,r.kt)("p",null,"Provides event notifications about new participants who join the room."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    id: string, // the id of the participant\n    displayName: string // the display name of the participant\n}\n")),(0,r.kt)("h3",{id:"participantkickedout"},"participantKickedOut"),(0,r.kt)("p",null,"Provides event notifications about participants being removed from the room."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    kicked: {\n        id: string, // the id of the participant removed from the room\n        local: boolean // whether or not the participant is the local particiapnt\n    },\n    kicker: {\n        id: string // the id of the participant who kicked out the other participant\n    }\n}\n")),(0,r.kt)("h3",{id:"participantleft"},"participantLeft"),(0,r.kt)("p",null,"Provides event notifications about participants that leave the meeting room."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    id: string // the id of the participant\n}\n")),(0,r.kt)("h3",{id:"participantrolechanged"},"participantRoleChanged"),(0,r.kt)("p",null,"Provides event notifications that fire when the local user role has changed (e.g., none, moderator, participant)."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    id: string // the id of the participant\n    role: string // the new role of the participant\n}\n")),(0,r.kt)("h3",{id:"passwordrequired"},"passwordRequired"),(0,r.kt)("p",null,"Provides event notifications that fire when participants fail to join a password protected room."),(0,r.kt)("h3",{id:"videoconferencejoined"},"videoConferenceJoined"),(0,r.kt)("p",null,"Provides event notifications that fire when the local user has joined the video conference."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    roomName: string, // the room name of the conference\n    id: string, // the id of the local participant\n    displayName: string, // the display name of the local participant\n    avatarURL: string, // the avatar URL of the local participant\n    breakoutRoom: boolean // whether the current room is a breakout room\n}\n")),(0,r.kt)("h3",{id:"videoconferenceleft"},"videoConferenceLeft"),(0,r.kt)("p",null,"Provides event notifications that fire when the local user has left the video conference."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    roomName: string // the room name of the conference\n}\n")),(0,r.kt)("h3",{id:"videoavailabilitychanged"},"videoAvailabilityChanged"),(0,r.kt)("p",null,"Provides event notifications about video availability status changes."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    available: boolean // new available status - boolean\n}\n")),(0,r.kt)("h3",{id:"videomutestatuschanged"},"videoMuteStatusChanged"),(0,r.kt)("p",null,"Provides event notifications about video mute status changes."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    muted: boolean // new muted status - boolean\n}\n")),(0,r.kt)("h3",{id:"videoqualitychanged"},"videoQualityChanged"),(0,r.kt)("p",null,"Provides event notifications about changes to video quality settings."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    videoQuality: number // the height of the resolution related to the new video quality setting.\n}\n")),(0,r.kt)("h3",{id:"readytoclose"},"readyToClose"),(0,r.kt)("p",null,"Provides event notifications that fire when Jitsi Meet is ready to be closed (i.e., hangup operations are completed)."),(0,r.kt)("h3",{id:"recordinglinkavailable"},"recordingLinkAvailable"),(0,r.kt)("p",null,"Provides event notifications about recording link becoming available."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    link: string, // the recording link\n    ttl: number // the time to live of the recording link\n}\n")),(0,r.kt)("h3",{id:"recordingstatuschanged"},"recordingStatusChanged"),(0,r.kt)("p",null,"Provides event notifications about recording status changes."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    on: boolean // new recording status - boolean,\n    mode: string // recording mode, `stream` or `file`,\n    error: string | undefined // error type if recording fails, undefined otherwise\n}\n")),(0,r.kt)("h3",{id:"subjectchange"},"subjectChange"),(0,r.kt)("p",null,"Provides event notifications regarding the change of subject for a conference."),(0,r.kt)("p",null,"The listener receives an object with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    subject: string // the new subject\n}\n")),(0,r.kt)("h3",{id:"suspenddetected"},"suspendDetected"),(0,r.kt)("p",null,"Provides notifications about detecting suspended events in the host computer."))}h.isMDXComponent=!0}}]);