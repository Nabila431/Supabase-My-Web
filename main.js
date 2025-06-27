
const tableBody = document.querySelector("#data-table tbody");

async function fetchData() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/Activity%20User?select=*`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`
    }
  });
  const data = await res.json();
  data.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.email || '-'}</td>
      <td>${item.action || '-'}</td>
      <td>${JSON.stringify(item.data) || '-'}</td>
      <td>${item.created_at || '-'}</td>
    `;
    tableBody.appendChild(row);
  });
}

fetchData();
