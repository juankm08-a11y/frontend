const { Html5QrcodeScanner } = require("html5-qrcode");
const { useEffect } = require("react");

function Scanner() {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: 250 },
      false,
    );

    scanner.render((decodedText) => {
      console.log("QR detectado: ", decodedText);

      window.location.href = decodedText;
    });
  }, []);

  return <div id="reader"></div>;
}

export default Scanner;
