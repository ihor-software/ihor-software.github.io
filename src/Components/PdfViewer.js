import React from 'react';

const PDFViewer = () => {
    const googleDrivePDFUrl = "https://drive.google.com/file/d/1o5bhyXWbD0RPL3hS0jkt1Fbd84hGBdkw/preview";

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#white",
        }}>
            <iframe
                src={googleDrivePDFUrl}
                width="80%" 
                height="90%" 
                title="PDF Viewer"
                style={{
                    border: "1px solid #ccc", 
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
                    borderRadius: "8px" 
                }}
                allow="autoplay"
            />
        </div>
    );
};

export default PDFViewer;