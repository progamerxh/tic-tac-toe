import React, { Component } from 'react';

function Move(props) {
  const { y, x } = props.step.checked;
  const { jumpTo, index } = props;
  const order = x && y ?
    `Move (${y}, ${x})` :
    'Game start';

  return (
    <li>
      <div onClick={() => jumpTo(index)}>{order}</div>
    </li>
  );
}

class MoveList extends Component {
  render() {
    const { history, jumpTo, isAscending } = this.props;
    if (isAscending) {
      return (
        <ol>
          {history.map((step, index) => (
            <Move
              key={index}
              step={step}
              index={index}
              jumpTo={jumpTo} />
          ))}
        </ol>
      );
    }
    else return (
      <ol>
        {history.map((step, index) => (
          <Move
            key={index}
            step={step}
            index={index}
            jumpTo={jumpTo} />
        )).reverse()}
      </ol>
    );

  }
}

export default MoveList;