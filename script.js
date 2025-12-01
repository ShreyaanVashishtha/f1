const API = "https://api.openf1.org/v1";

async function loadDrivers() {
  const res = await fetch(`${API}/drivers?year=2024`);
  const data = await res.json();
  const container = document.getElementById("drivers");

  data.slice(0, 20).forEach(d => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<strong>${d.full_name}</strong><br>Country: ${d.country}`;
    container.appendChild(div);
  });
}

async function loadSessions() {
  const res = await fetch(`${API}/sessions?season=2024`);
  const data = await res.json();
  const container = document.getElementById("sessions");

  data.forEach(s => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<strong>${s.session_name}</strong> — ${s.circuit_short_name}`;
    container.appendChild(div);
  });
}

loadDrivers();
loadSessions();
