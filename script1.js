//selecting dom elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factslist = document.querySelector(".facts-list");

//clearing screen and creating dom elements
factslist.innerHTML = "";
loadfacts();
async function loadfacts() {
  const res = await fetch(
    "https://kpdtduhsxctzdbhriklf.supabase.co/rest/v1/facts/",
    {
      Headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwZHRkdWhzeGN0emRiaHJpa2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNTA3ODcsImV4cCI6MTk4OTgyNjc4N30.7XhMT1IrBN8JxdahZYrKIY0lGqrUJg5ejoeqqhrpplI",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwZHRkdWhzeGN0emRiaHJpa2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNTA3ODcsImV4cCI6MTk4OTgyNjc4N30.7XhMT1IrBN8JxdahZYrKIY0lGqrUJg5ejoeqqhrpplI",
      },
    }
  );
  const data = await res.json();
  console.log(data);
}

//hide form
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
