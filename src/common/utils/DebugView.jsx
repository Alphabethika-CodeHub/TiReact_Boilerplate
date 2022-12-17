export class DebugComponents {
  constructor(componentName) {
    this.componentName = componentName;
  }

  showLabelTest() {
    return (
      <>
        <p>Test Component [{this.componentName}]</p>
      </>
    );
  }
}
