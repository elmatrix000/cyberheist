document.getElementById("bookingForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const activity = document.getElementById("activity").value;
  const time = document.getElementById("time").value;
  const code = "NC-" + Math.floor(Math.random() * 900000 + 100000);

  const ticket = document.getElementById("ticket");
  ticket.classList.remove("hidden");

  ticket.innerHTML = `
    <h3>🎟️ Digital Voucher</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Activity:</strong> ${activity}</p>
    <p><strong>Time Slot:</strong> ${time}</p>
    <p><strong>Voucher Code:</strong> ${code}</p>
    <div id="qrcode"></div>
  `;

  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), {
    text: code,
    width: 120,
    height: 120
  });
});
