import React from 'react'
import { UserContext } from '@context/UserProvider';
import { useContext, useState, useEffect } from 'react';

export default function ProfileView() {
	const { user } = useContext(UserContext);

	return (
		<div>
			<pre>
				{JSON.stringify(user, null, 4)}
			</pre>
		</div>
	)
}
