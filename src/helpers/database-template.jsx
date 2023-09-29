const databaseHelper = async (params, getData, id) => {
	try {
		await fetch(
			`https://snarto-bf3e3-default-rtdb.europe-west1.firebasedatabase.app/tasks/${id}.json`,
			{
				...params,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		getData();
	} catch (err) {
		console.log('error');
	}
};
export default databaseHelper;
