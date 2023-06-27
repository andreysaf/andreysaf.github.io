import { useEffect, useRef } from 'react';

const Viewer = ({ document, officeEditing }) => {
    const viewerRef = useRef(null);

    useEffect(() => {
        import('@pdftron/webviewer').then(() => {
            WebViewer(
                {
                    path: '/webviewer/public/',
                    licenseKey: 'demo:1687732534149:7d97928b0300000000704667b142787731373a2268a2cc2c7ed74480cc',
                    initialDoc: document,
                    enableOfficeEditing: officeEditing
                },
                viewerRef.current
            ).then((instance) => {
                const { docViewer } = instance;
                // you can now call WebViewer APIs here...
            });
        });
    }, []);

    return (
        <div className="webviewer" ref={viewerRef} style={{ height: "100vh" }}></div>
    );
};

export default Viewer;