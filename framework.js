window.Framework = {
    config: {
        name: "minsait",
        clientIds: { "mypurecloud.com": "459745a4-e2cb-41e7-b383-1bdb31c95cc9"},
        settings: {},
        helpLinks: {},
        customInteractionAttributes: [],
      getUserLanguage: function (callback) {
        callback("es-US");
    },
    initialSetup: function (),
    screenPop: function (searchString, interaction),
    processCallLog: function (callLog, interaction, eventName, onSuccess, onFailure),
    openCallLog: function (callLog),
    contactSearch: function (searchValue, onSuccess, onFailure)
}
