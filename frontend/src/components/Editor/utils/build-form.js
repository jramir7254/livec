import React from 'react'

export const buildDefaultValues = (children) => {
    React.Children.toArray(children).reduce((acc, child) => {
        const val = child.props.val;

        if (val && typeof val === "object") {
            const entries = Object.entries(val);
            if (entries.length === 1) {
                const [key, value] = entries[0];
                acc[key] = value;
            }
        }

        return acc;
    }, {});
}
