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

    if (this.checkCanBurst(sameColorConnectedCandyCells)) {
      for (let cell of sameColorConnectedCandyCells) {
        grid[cell[0]][cell[1]] = {};
      }
    } else {
      console.log('Cant burst');
    }
    grid = this.slideCandyDown(grid);

    this.setState({ grid: grid });
  }

  checkCanBurst(arr) {
    let i = 0;
    let countX = 0,
      countY = 0,
      dictX = {},
      dictY = {};
    while (countX <= 2 && countY <= 2 && i < arr.length) {
      if (arr[i][0] in dictX) {
        dictX[arr[i][0]] += 1;
        countX = Math.max(countX, dictX[arr[i][0]]);
      } else {
        dictX[arr[i][0]] = 1;
      }

      if (arr[i][1] in dictY) {
        dictY[arr[i][1]] += 1;
        countY = Math.max(countY, dictY[arr[i][1]]);
      } else {
        dictY[arr[i][1]] = 1;
      }

      i++;
    }

    return countX > 2 || countY > 2 ? true : false;
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

  slideCandyDown(g) {
    for (let j = 0; j < g.length; j++) {
      for (let i = g.length - 1; i >= 0; i--) {
        let cell = g[i][j];
        if (!('candyColor' in cell)) {
          let k = i;
          while (k > -1 && !('candyColor' in g[k][j])) {
            console.log(k);
            k--;
          }

          if (k > -1) {
            g[i][j] = Object.assign({}, g[k][j]);
            g[k][j] = {};
          }
        }
      }
    }
    return g;
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
