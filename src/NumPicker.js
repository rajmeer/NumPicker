import React from "react";

function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;
    if (num >= 5) {
      msg = (
        <div>
          <h2>CONGRATS YOU WIN!</h2>
          <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
        </div>
      );
    } else {
      msg = <p>Sorry You Lose!</p>;
    }
    return (
      <div>
        <h1>Your number is: {num} </h1>
        {msg}
      </div>
    );
  }
}

export default NumPicker;
