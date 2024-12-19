import React from 'react';

const PDFViewer = () => {
    return (
        <div style={{ height: "100vh" }}>
            <iframe src="/Ihor_Resume.pdf" width="100%" height="100%" />
        </div>
    );
};
export default PDFViewer;