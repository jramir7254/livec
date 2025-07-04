import React, { useEffect, useState, useMemo, useContext } from 'react'
import { buildDefaultValues } from './utils/build-form';
import EditorProvider from './EditorContext';
import { EditorContext } from './EditorContext';
import ModalProvider from '../Overlays/ModalContext';


export function EditorGroup({ children }) {
	const defaultValues = useMemo(() => buildDefaultValues(children), [children])

	if (!children || !children.length) return <p>No Children</p>

	return (
		<EditorProvider defaultValues={defaultValues}>
			{children}
		</EditorProvider>
	)
}

import { ModalContext } from '../Overlays/ModalContext';



export const SubmitButton = ({ children, onSubmit = () => {} }) => {
  const { formData } = useContext(EditorContext);
  const hasModal = React.Children.count(children) > 0;

  if (hasModal) {
    return (
      <ModalProvider onSubmit={() => onSubmit(formData)}>
        <SubmitButtonWithModal>{children}</SubmitButtonWithModal>
      </ModalProvider>
    );
  }

  return (
    <button type="button" onClick={() => onSubmit(formData)}>
      Submit
    </button>
  );
};



function SubmitButtonWithModal({ children }) {
  const { open } = useContext(ModalContext);

  return (
    <>
      <button type="button" onClick={open}>
        Submit
      </button>
      {children}
    </>
  );
}











const Parent = ({ children }) => {
	const Child = React.Children.toArray(children)[0]
	return (
		<Child childProp={'setByParent'} />
	)
}

{/* <Context>
    <Parent>
        <Child val={{ foo: 'bar' }} />
        <Child val={{ baz: 'qux' }} />
    </Parent>
</Context> */}