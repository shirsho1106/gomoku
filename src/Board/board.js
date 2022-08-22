import React, { useState } from 'react';
import './board.css';
import { comMove } from '../ComMove';

const Board = () => {

	const row_count = 10;
	const col_count = 10;
	const win_count = 5;
	
	const [turn, setTurn] = useState('b');
	const [cells, setCells] = useState(Array(row_count*col_count).fill(''));
	const [winner, setWinner] = useState('');

	

	const checkForWinner = (squares) => {

		let redrow = 0;
		let blackrow = 0;
		let redcol = 0;
		let blackcol = 0;
		let reddg = 0;
		let blackdg = 0;

		for(var i = 0 ; i < row_count ; i++){
			for(var j = 0 ; j < col_count ; j++){
				if(squares[i*col_count+j]==='r') redrow++;
				else if(squares[i*col_count+j]==='b') blackrow++;
				else {
					redrow = 0;
					blackrow = 0;
				}
				if(squares[j*row_count+i]==='r') redcol++;
				else if(squares[j*row_count+i]==='b') blackcol++;
				else {
					redcol = 0;
					blackcol = 0;
				}
				// console.log(i+" ind"+(i*10+j)+"red"+red+"black"+black);
				if(redrow===win_count || redcol===win_count){
					setWinner('r');
					break;
				}
				else if(blackrow===win_count || blackcol===win_count){
					setWinner('b');
					break;
				}
			}
			redrow = 0; blackrow = 0;
			redcol = 0; blackcol = 0;
			if(winner!=='') break;
		}

		for (var k = 0; k <= 2 * (row_count - 1); ++k) {
			
			for (var y = col_count - 1; y >= 0; --y) {
				var x = k - y;
				if (x >= 0 && x < row_count) {
					// console.log(y*10+x);
					if(squares[y*col_count+x]==='r') reddg++;
					else if(squares[y*col_count+x]==='b') blackdg++;
					else {
						reddg = 0;
						blackdg = 0;
					}
					if(reddg===win_count || reddg===win_count){
						setWinner('r');
						break;
					}
					else if(blackdg===win_count || blackdg===win_count){
						setWinner('b');
						break;
					}
				}
			}
			reddg = 0; blackdg = 0;
			if(winner!=='') break;
		}

		reddg = 0; blackdg = 0;

		for (k = 0; k <= 2 * (row_count - 1); ++k) {
			for (y = col_count - 1; y >= 0; --y) {
				x = k - (col_count - y);
				if (x >= 0 && x < row_count) {
					if(squares[y*col_count+x]==='r') reddg++;
					else if(squares[y*col_count+x]==='b') blackdg++;
					else {
						reddg = 0;
						blackdg = 0;
					}
					if(reddg===win_count || reddg===win_count){
						setWinner('r');
						break;
					}
					else if(blackdg===win_count || blackdg===win_count){
						setWinner('b');
						break;
					}
				}
			}
		}
	};

	const handleClick = (num) => {
		if (cells[num] !== '') {
			alert('already clicked');
			return;
		}

		let squares = [...cells];

		if (turn === 'b') {
			squares[num] = 'b';
			setCells(squares)
			setTurn('r');
			comMove(squares);
			setTurn('b');
		} else {
			squares[num] = 'r';
			setTurn('b');
		}

		checkForWinner(squares);
		setCells(squares);
	};

	const handleRestart = () => {
		setWinner('');
		setCells(Array(row_count*col_count).fill(''));
		setTurn('b');
	};

	const Cell = ({ num }) => {
		return <td onClick={() => handleClick(num)}><span className={cells[num]} /></td>;
	};

    var t = 0;

	return (
		<div className='container'>
			<table>
				{turn}
				<tbody>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
				</tbody>
			</table>
			{winner && (
				<>
					<p>{winner} is the winner!</p>
					<button onClick={() => handleRestart()}>Play Again</button>
				</>
			)}
		</div>
	);
};

export default Board;