import React, { useEffect } from 'react';
const { PDFNet } = require('@pdftron/pdfnet-node');

function PDFConversion() {
  useEffect(() => {
    const convertToPDF = async () => {
      // Access the Core object from the global scope
      const { Core, PDFNet } = window;
      Core.setWorkerPath('../core');
      const licenseKey = 'demo:1684117218449:7daeec5f0300000000b410c2b2824e02d7e6f8d95281e6b48e2ea17c44';
      await PDFNet.initialize(licenseKey);

      // Perform the conversion with no optional parameters
      const buf = await Core.office2PDFBuffer('/path/to/file.docx', { l: licenseKey });

      // Optionally save the blob to a file or upload to a server
      const blob = new Blob([buf], { type: 'application/pdf' });

      // Additional code for handling the PDF blob if needed
    };

    convertToPDF();
  }, []);

  return null; // or render some UI elements if necessary
}

export default PDFConversion;