import { useState, useEffect } from 'react';
import useAsyncError from './useAsyncError';

const API_URL = "/api";

export default function useCrud(path) {
	const [error, setError] = useState('');
	const [items, setItems] = useState([]);
	const throwError = useAsyncError();
	useEffect(() => {
		fetchApi(`${path}`)
			.then((items) => {
				setItems(items);
			})
			.catch((err) => {
				throwError(err);
			});
	}, []);
	const fetchApi = (path, method, body) => {
		return fetch(`${API_URL}${path}`, {
			method,
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(body),
		}).then((resp) => {
			// resp.status(404)
			// {message:"Page not Found"}
			if (!resp.ok) {
				return resp.json().then((json) => {
					console.log(resp.status);
					const error = new Error(json.message);
					error.status = resp.status;
					throw error;
				});
			}
			return resp.json();
		});
	};
	const handleAddItem = (newItem) => {
		fetchApi(`${path}`, 'POST', { newItem })
			.then((item) => {
				setItems([...items, item]);
			})
			.catch((err) => setError(err.message));
	};
	const handleDeleteItem = (itemId) => {
		fetchApi(`${path}${itemId}`, 'DELETE')
			.then((deletedItem) => {
				setItems((items) =>
                items.filter((item) => deletedItem.id !== item.id)
				);
			})
			.catch((err) => setError(err.message));
	};
	const handleUpdate = (itemId, newData) => {
		console.log(newData);
		fetchApi(`${path}${itemId}`, 'PUT', { newData })
			.then((updatedItem) => {
				setItems((items) =>
					items.map((item) => {
						if (item.id === updatedItem.id) {
							return updatedItem;
						}
						return item;
					})
				);
			})
			.catch((err) => setError(err.message));
	};

	return {
		error,
		items,
		onAdd: handleAddItem,
		onDelete: (itemId) => handleDeleteItem(itemId),
		onUpdate: (itemId, newData) => handleUpdate(itemId, newData),
	};
}