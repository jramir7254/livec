export const toTitleCase = (constant = '') => {
    return constant.split('-')
        .map(item => item.charAt(0).toUpperCase() + item.substring(1))
        .join(' ');
};


export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(new Date(date));
}


export const flattenSections = (sections, parentPath = []) => {
	let result = [];

	for (const section of sections) {
		const path = [...parentPath, section.title];

		result.push({
			id: section.id || "none",
			title: section.title,
			page: section.page,
			path: path
		});

		if (section.units && section.units.length > 0) {
			const children = flattenSections(section.units, path);
			result = result.concat(children);
		}
	}

	return result;
}

