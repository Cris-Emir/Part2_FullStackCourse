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
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <tbody>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>Good</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{good}</td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>Neutral</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{neutral}</td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>Bad</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{bad}</td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>All</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{allComments}</td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>Average</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{finalAverage}</td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '8px' }}>Positive</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{positive.toFixed(2)} %</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Statistics;