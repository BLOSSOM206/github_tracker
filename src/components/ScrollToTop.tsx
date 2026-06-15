import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
/**
 * Resets the window scroll position to the top
 * whenever the route pathname changes.
 */
function ScrollToTop() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    },[location.pathname]);

    return null;
}
export default ScrollToTop;