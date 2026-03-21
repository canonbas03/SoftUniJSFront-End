function solve(percentage) {
  const loadingBar = renderLoadingBar(percentage);

  const loadingStatus = getLoadingStatus(percentage);

  printLoading(percentage, loadingBar, loadingStatus);

  function renderLoadingBar(percentage) {
    const loadedSteps = "%".repeat(percentage / 10);
    const stepsToBeLoaded = ".".repeat((100 - percentage) / 10);

    let fullRenderedRow;

    if (percentage < 100) {
      fullRenderedRow = `${percentage}% [${loadedSteps}${stepsToBeLoaded}]`;
    } else {
      fullRenderedRow = `[${loadedSteps}${stepsToBeLoaded}]`;
    }

    return fullRenderedRow;
  }

  function getLoadingStatus(percentage) {
    if (percentage < 100) {
      return "Still loading...";
    }

    return "100% Complete!";
  }

  function printLoading(percentage, loadingBar, loadingStatus) {
    if (percentage < 100) {
      console.log(loadingBar);
      console.log(loadingStatus);
    } else {
      console.log(loadingStatus);
      console.log(loadingBar);
    }
  }
}

solve(100);
