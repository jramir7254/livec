import styles from './Table.module.css';

export const Table = ({ children }) => {
	return (
		<table className={styles.table}>
			{children}
		</table>
	);
};


export const TableHeader = ({ headers = [] }) => {
	return (
		<thead>
			<tr className={styles['table-row']}>
				{headers.map((heading, index) => (
					<th
						key={heading.text + index}
						style={heading.width ? { width: heading.width } : {}}
					>
						{heading.text}
					</th>
				))}
			</tr>
		</thead>
	);
};


export const TableBody = ({ data = [], headers = [] }) => {
	return (
		<tbody>
			{data.map((row, rowIndex) => (
				<TableRow key={rowIndex} row={row} headers={headers} />
			))}
		</tbody>
	);
};


export const TableRow = ({ row, headers }) => {
	return (
		<tr className={styles['table-row']}>
			{headers.map((header, index) => (
				<td key={index}>{row[header.key]}</td>
			))}
		</tr>
	);
};
