import React from 'react';
import PropTypes from 'prop-types';
import Papa from 'papaparse';
import Button from '@material-ui/core/Button';

export default function UploadButton({ setSamples }) {
  function parseCSV(event) {
    const newFile = event.target.files[0];
    Papa.parse(newFile, {
      header: true,
      dynamicTyping: true,
      delimiter: ',',
      complete: (results) => {
        setSamples(results.data);
      },
    });
  }

  return (
    <label htmlFor="contained-button-file" id="upload-samples">
      <input
        accept=".csv"
        id="contained-button-file"
        type="file"
        hidden
        value=""
        onChange={parseCSV}
      />
      <Button variant="contained" component="span" color="primary">
        Upload Samples
      </Button>
    </label>
  );
}

UploadButton.propTypes = {
  setSamples: PropTypes.func.isRequired,
};
