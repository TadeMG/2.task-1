import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const isValueValid = value.length >= 3
	const isListEmpty = list.length === 0

	const onInputButtonClick = () =>  {
		const promptValue = prompt()

		if (promptValue === null) {
			return
		}

		if (promptValue.length < 3) {
			setError("Введенное значение должно содержать минимум 3 символа")
		} else {
			setError("")
			setValue(promptValue)
		}
	}

	const onAddButtonClick = () => {
		setList(list => [...list, {id: Date.now(), value,}])
		setError("")
		setValue("")
	}

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>: "
				<output className={styles.currentValue}>{value}</output>"
			</p>
			<div className={styles.error}>
				{error}
			</div>
			<div className={styles.buttonsContainer}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button className={styles.button} onClick={onAddButtonClick} disabled={!isValueValid}>
					Добавить в список
				</button>
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>
				<p className={styles.noMarginText} hidden={!isListEmpty}>Нет добавленных элементов</p>
				<ul className={styles.list}>
					{
						list.map(({id, value}) => <li className={styles.listItem} key={id}>{value}</li>)
					}
				</ul>
			</div>
		</div>
	);
};
