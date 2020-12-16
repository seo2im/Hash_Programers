const solution = (phoneBook) => {
	let hash = phoneBook.reduce((acc, cur) => {
		acc[cur] = 1;
		return acc;
	}, {});

	for (let i = 0; i < phoneBook.length; i++) {
		for (let j = 1; j < phoneBook[i].length; j++) {
			const key = phoneBook[i].slice(0, j);
			if (hash[key] && key !== phoneBook[i])
				return false;
		}
	}

	return true;
}