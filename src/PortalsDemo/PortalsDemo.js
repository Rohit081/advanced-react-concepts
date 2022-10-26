import React from 'react';
import ReactDom from 'react-dom';

const PortalsDemo = () => {
    //used to render children node in DOM node outside DOM hierarchy of parent component
    return ReactDom.createPortal(
        <div>
            <h1>Hello World</h1>
        </div>,
        document.getElementById('portals-demo'))
}

export default PortalsDemo;
