
const loginPanel = document.getElementById("login-panel");
const adminPanel = document.getElementById("admin-panel");
const loginForm = document.getElementById("login-form");
const offerForm = document.getElementById("offer-form");
const offersList = document.getElementById("offers-list");
const logoutButton = document.getElementById("logout-button");
const statusElement = document.getElementById("status");

function showStatus(message) {
    statusElement.textContent = message;
}

async function loadOffers() {
    const { data, error } = await supabaseClient
        .from("weekend_offers")
        .select("*")
        .eq("active", true)
        .order("sort_order");

    if (error) {
        showStatus("Nem sikerült betölteni az ajánlatokat.");
        return;
    }

    offersList.replaceChildren();

    data.forEach((offer) => {
        const card = document.createElement("div");
        card.className = "offer";

        const name = document.createElement("strong");
        name.textContent = offer.name;

        const price = document.createElement("p");
        price.textContent = offer.price;

        const actions = document.createElement("div");
        actions.className = "offer-actions";

        const editButton = document.createElement("button");
        editButton.textContent = "Szerkesztés";

        editButton.addEventListener("click", async () => {
            const newName = prompt("Új ételnév:", offer.name);
            if (newName === null) return;

            const newPrice = prompt("Új ár:", offer.price);
            if (newPrice === null) return;

            if (!newName.trim() || !newPrice.trim()) {
                showStatus("Az étel neve és ára nem lehet üres.");
                return;
            }

            const { error } = await supabaseClient
                .from("weekend_offers")
                .update({
                    name: newName.trim(),
                    price: newPrice.trim()
                })
                .eq("id", offer.id);

            if (error) {
                showStatus("Nem sikerült módosítani az ajánlatot.");
                return;
            }

            showStatus("Ajánlat sikeresen módosítva.");
            await loadOffers();
        });

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Törlés";

        deleteButton.addEventListener("click", async () => {
            if (!confirm("Biztosan törlöd ezt az ajánlatot?")) return;

            const { error } = await supabaseClient
                .from("weekend_offers")
                .delete()
                .eq("id", offer.id);

            if (error) {
                showStatus("Nem sikerült törölni az ajánlatot.");
                return;
            }

            showStatus("Ajánlat törölve.");
            await loadOffers();
        });

        actions.append(editButton, deleteButton);
        card.append(name, price, actions);
        offersList.appendChild(card);
    });
}

async function updateInterface() {
    const { data } = await supabaseClient.auth.getSession();

    const loggedIn = Boolean(data.session);

    loginPanel.style.display = loggedIn ? "none" : "block";
    adminPanel.style.display = loggedIn ? "block" : "none";
    logoutButton.style.display = loggedIn ? "block" : "none";

    if (loggedIn) {
        await loadOffers();
    }
}

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { error } = await supabaseClient.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        showStatus("Sikertelen bejelentkezés. Ellenőrizd az adatokat.");
        return;
    }

    loginForm.reset();
    showStatus("Sikeres bejelentkezés!");
    await updateInterface();
});

offerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("offer-name").value.trim();
    const price = document.getElementById("offer-price").value.trim();

    const { error } = await supabaseClient
        .from("weekend_offers")
        .insert({
            name,
            price,
            active: true
        });

    if (error) {
        showStatus("Nem sikerült hozzáadni az ajánlatot.");
        return;
    }

    offerForm.reset();
    showStatus("Az ajánlat sikeresen hozzáadva!");
    await loadOffers();
});

logoutButton.addEventListener("click", async () => {
    await supabaseClient.auth.signOut();
    showStatus("Kijelentkeztél.");
    await updateInterface();
});

updateInterface();
