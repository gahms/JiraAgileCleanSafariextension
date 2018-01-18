function cleanJiraBoard() {
  hideElementsWithClass("ghx-sprint-info");
  hideElementsWithClass("ghx-sprint-goal");
  hideElementsWithClass("ghx-controls-plan");
  hideElementsWithClass("iic-trigger");
  hideElementsWithClass("aui-item");
  hideElementsWithClass("ghx-linked aui-item");
  hideElementsWithClass("ghx-classification-menu-column");
}

function hideElementsWithClass(className) {
  console.log('hideElementsWithClass("' + className + '")');
  var x = document.getElementsByClassName(className);
  console.log("Found " + x.length);
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].classList.toggle("miracleTmpHidden");
  }
}

function eventHandler(messageEvent) {
    if (messageEvent.name === "cleanJiraBoard") {
        cleanJiraBoard();
    }
}

safari.self.addEventListener("message", eventHandler, false);
