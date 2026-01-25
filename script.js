document.getElementById("bookingForm").addEventListener("submit", function(e) {
e.preventDefault();

const name = document.getElementById("name").value;
const activity = document.getElementById("activity").value;
const time = document.getElementById("time").value;

const code = "NC-" + Math.floor(Math.random() * 999999);

const ticket = document.getElementById("ticket");
ticket.classList.remove("hidden");
ticket.innerHTML = `
<h3>🎟️ NIMBLE CREATIONS VOUCHER</h3>
Name: ${name}<br>
Activity: ${activity}<br>
Time Slot: ${time}<br>
Voucher Code: <strong>${code}</strong><br><br>
Present this voucher at the check-in table.
`;
});
