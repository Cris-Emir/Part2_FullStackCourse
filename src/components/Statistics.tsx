import React from 'react';

type StatisticsProps = {
  good: number;
  neutral: number;
  bad: number;
  allComments: number;
  finalAverage: number;
  positive: number;
};

const Statistics = ({ good, neutral, bad, allComments, finalAverage, positive }: StatisticsProps) => {
    if (allComments === 0) {
        return <div>No feedback given</div>;
    }

    return (
        <table>
            <tbody>
                <tr>
                    <td>Good</td>
                    <td>{good}</td>
                </tr>
                <tr>
                    <td>Neutral</td>
                    <td>{neutral}</td>
                </tr>
                <tr>
                    <td>Bad</td>
                    <td>{bad}</td>
                </tr>
                <tr>
                    <td>All</td>
                    <td>{allComments}</td>
                </tr>
                <tr>
                    <td>Average</td>
                    <td>{finalAverage}</td>
                </tr>
                <tr>
                    <td>Positive</td>
                    <td>{positive.toFixed(2)} %</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Statistics;