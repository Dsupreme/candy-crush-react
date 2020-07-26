import React, { Component } from 'react';
import './Game.css';

export default class Game extends Component {
  constructor() {
    super();

    this.candyTypes = [
      {
        candyColor: 'red',
        icon: 'r',
      },
      {
        candyColor: 'green',
        icon: 'g',
      },
      {
        candyColor: 'blue',
        icon: 'b',
      },
      {
        candyColor: 'yellow',
        icon: 'y',
      },
    ];

    this.state = {
      candyTypes: this.candyTypes,
      grid: this.createGrid(),
    };

    this.leftClick = this.leftClick.bind(this);
  }

  createGrid() {
    return Array.from(Array(10), () => Array.from(Array(10), () => Object.assign({}, this.createCell())));
  }

  createCell() {
    return Object.assign({}, this.candyTypes[Math.floor(Math.random() * 3)]);
  }

  leftClick(i, j) {
    let grid = this.state.grid;
    let sameColorConnectedCandyCells = [];

    let loop = 0;
    sameColorConnectedCandyCells.push([i, j]);

    while (loop < sameColorConnectedCandyCells.length) {
      sameColorConnectedCandyCells = sameColorConnectedCandyCells.concat(
        this.findConnectedCandyCells(
          grid,
          grid[i][j],
          sameColorConnectedCandyCells[loop][0],
          sameColorConnectedCandyCells[loop][1]
        )
      );

      let stringArray = sameColorConnectedCandyCells.map(JSON.stringify);
      let uniqueStringArray = new Set(stringArray);
      sameColorConnectedCandyCells = Array.from(uniqueStringArray, JSON.parse);

      loop++;
    }

    for (let cell of sameColorConnectedCandyCells) {
      grid[cell[0]][cell[1]] = {};
    }

    this.setState({ grid: grid });
  }

  findConnectedCandyCells(g, c, i, j) {
    let arr = [];
    let p, q;
    p = i;
    q = j;
    // Check North
    if (p - 1 >= 0 && g[p - 1][q].candyColor === c.candyColor) {
      arr.push([p - 1, q]);
    }
    // Check South
    if (p + 1 < g.length && g[p + 1][q].candyColor === c.candyColor) {
      arr.push([p + 1, q]);
    }
    // Check West
    if (q - 1 >= 0 && g[p][q - 1].candyColor === c.candyColor) {
      arr.push([p, q - 1]);
    }
    // Check East
    if (q + 1 < g.length && g[p][q + 1].candyColor === c.candyColor) {
      arr.push([p, q + 1]);
    }

    return arr;
  }

  render() {
    return (
      <div className="grid">
        {this.state.grid.map((row, i) => {
          return (
            <div className="row" key={i}>
              {row.map((cell, j) => {
                let button;
                if (cell.icon) {
                  button = (
                    <span>
                      {i},{j},{cell.icon}
                    </span>
                  );
                }

                let btnClass = ['cell', cell.candyColor];
                btnClass = btnClass.join(' ');
                return (
                  <div className={btnClass} key={j} onClick={this.leftClick.bind(this, i, j)}>
                    {button}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
