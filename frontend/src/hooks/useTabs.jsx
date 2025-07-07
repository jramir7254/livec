import { useState } from 'react'

const EmptyComponent = () => <>Empty Component</>

export default function useTabs(components, defaultView) {

    const DefaultView = defaultView || <EmptyComponent/>

    const [CurrentView, setCurrentView] = useState(DefaultView)
    const [currentKey, setCurrentKey] = useState(null)

    const setView = (key) => {
        const view = components[key] || DefaultView
        if (key === currentKey) {
            setCurrentView(DefaultView)
            setCurrentKey(null)
        } else {
            setCurrentView(view)
            setCurrentKey(key in components ? key : null)
        }
    }

    return { setView, CurrentView, currentKey }
}

