module.exports = {
  pdf_options: {
    format: 'A4',
    orientation: 'potrait',
    margin: {
      top: '0.3in',
      bottom: '0.3in',
      left: '0.3in',
      right: '0.3in'
    }
  },
  stylesheet: `
    @page { 
      size: A4 potrait; 
    }
    table { 
      font-size: 9px; 
      width: 100%; 
      border-collapse: collapse;
    }
    th, td { 
      padding: 3px; 
      border: 1px solid #ddd; 
      word-wrap: break-word;
    }
    th {
      background-color: #f5f5f5;
      font-weight: bold;
    }
  `
}