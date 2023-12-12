import { LightningElement, track } from "lwc";

export default class SimpleCalculator extends LightningElement {
  @track currentResult;
  @track showPreviousResults = false;
  @track previousResults = [];
  firstNumber;
  secondNumber;

  numberChangeHandler(event) {
    const inputBoxName = event.target.name;
    console.log("inputBoxName" + inputBoxName);
    if (inputBoxName === "firstNumber") {
      console.log("firstNumber" + event.target.value);
      this.firstNumber = event.target.value;
    } else if (inputBoxName === "secondNumber") {
      console.log("secondNumber" + event.target.value);
      this.secondNumber = event.target.value;
    }
  }

  addHandler() {
    const firstN = parseInt(this.firstNumber);
    const secondN = parseInt(this.secondNumber);
    this.currentResult = `Result of ${firstN}+${secondN} is ${
      firstN + secondN
    }`;
    this.previousResults.push(this.currentResult);
    console.log("currentResult" + this.currentResult);
    console.log("previousResults" + this.previousResults);
  }

  subHandler() {
    const firstN = parseInt(this.firstNumber);
    const secondN = parseInt(this.secondNumber);
    this.currentResult = `Result of ${firstN}-${secondN} is ${
      firstN - secondN
    }`;
    this.previousResults.push(this.currentResult);
    console.log("currentResult" + this.currentResult);
    console.log("previousResults" + this.previousResults);
  }

  multiplyHandler() {
    const firstN = parseInt(this.firstNumber);
    const secondN = parseInt(this.secondNumber);
    this.currentResult = `Result of ${firstN}*${secondN} is ${
      firstN * secondN
    }`;
    this.previousResults.push(this.currentResult);
    console.log("currentResult" + this.currentResult);
    console.log("previousResults" + this.previousResults);
  }

  divisionHandler() {
    const firstN = parseInt(this.firstNumber);
    const secondN = parseInt(this.secondNumber);
    this.currentResult = `Result of ${firstN}/${secondN} is ${
      firstN / secondN
    }`;
    this.previousResults.push(this.currentResult);
    console.log("currentResult" + this.currentResult);
    console.log("previousResults" + this.previousResults);
  }

  showPreviousResultToggle(event) {
    console.log("event" + event.target.checked);
    this.showPreviousResults = event.target.checked;
  }
}
