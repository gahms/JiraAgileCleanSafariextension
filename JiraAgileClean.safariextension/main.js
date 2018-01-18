safari.application.addEventListener("command", commandHandler, false);

function commandHandler(event) {
  console.log("commandHandler: " + event.command);
  if (event.command == "cleanJiraBoard") {
    safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("cleanJiraBoard");
  }
}
