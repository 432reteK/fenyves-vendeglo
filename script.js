
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

if (menuToggle && mainNav) {
  function closeMenu() {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Navigáció megnyitása");
  }

  function toggleMenu() {
    const isOpen = mainNav.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Navigáció bezárása" : "Navigáció megnyitása"
    );
  }

  menuToggle.addEventListener("click", toggleMenu);

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      mainNav.classList.contains("is-open") &&
      !mainNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
}

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


const menuData = [
    {
        id: "eloetelek",
        title: "Előételek",
        items: [
            ["Hagymás velő", "2490 Ft"],
            ["Csípős bundás csirkemell BBQ-öntettel", "2390 Ft"],
            ["Baconös tócsni fokhagymás tejföllel és sajttal", "2390 Ft"]
        ]
    },
    {
        id: "levesek",
        title: "Levesek",
        items: [
            ["Legényfogó tyúkhúsleves", "1790 Ft"],
            ["Orjaleves májgombóccal", "1790 Ft"],
            ["Húsleves csészében tésztával", "1490 Ft"],
            ["Fokhagymakrémleves", "1990 Ft"],
            ["Jókai-bableves", "2590 Ft"],
            ["Babgulyás", "2590 Ft"],
            ["Bográcsgulyás", "2590 Ft"]
        ]
    },
    {
        id: "vega",
        title: "Vegetáriánus ételek",
        items: [
            ["Rántott trappista sajt hasábburgonyával, tartárral", "3490 Ft"],
            ["Rántott gombafejek rizzsel, tartárral", "3290 Ft"],
            ["Rántott camembert áfonyamártással, kroketttel", "3690 Ft"],
            ["Grillezett zöldségek sajttal", "2690 Ft"],
            ["Szezonális rántott zöldség", "3490 Ft"]
        ]
    },
    {
        id: "szarnyas",
        title: "Szárnyas ételek",
        items: [
            ["Borzas csirkemell tejföllel, fokhagymával, steakburgonyával", "4290 Ft"],
            ["Kijevi csirkemell hasábburgonyával", "4290 Ft"],
            ["Sajttal töltött, baconba göngyölt csirkemell burgonyapürével", "4290 Ft"],
            ["Őszibarackkal, camemberttel grillezett csirkemell", "4290 Ft"],
            ["Roston sült csirkemell tejszínes, baconös laskagombával, tócsnival", "4290 Ft"],
            ["Rántott csirkeszárnyak amerikai káposztasalátával", "3890 Ft"],
            ["Fenyves saláta csirkemellcsíkokkal", "2690 Ft"],
            ["Cézársaláta csirkemellel", "2490 Ft"]
        ]
    },
    {
        id: "sertes1",
        title: "Sertéshúsételek",
        items: [
            ["Mustáros rántott sertésszelet majonézes burgonyával", "4390 Ft"],
            ["Cigánypecsenye steakburgonyával", "4390 Ft"],
            ["Cordon bleu hasábburgonyával", "4290 Ft"],
            ["Velővel töltött sertésszelet petrezselymes burgonyával", "4390 Ft"],
            ["Bakonyi sertésszelet galuskával", "4290 Ft"],
            ["Brassói aprópecsenye sertésszűzből", "4390 Ft"],
            ["Gyulai karaj csemege uborkával, sajttal és kolbásszal töltve, hasábburgonyával", "4390 Ft"]
        ]
    },
    {
        id: "sertes2",
        title: "Csülök és sertéskülönlegességek",
        items: [
            ["Csülök pékné módra sült burgonyával", "4290 Ft"],
            ["Sült csülök juhtúrós galuskával", "4290 Ft"],
            ["Csülökpörkölt főtt burgonyával", "3890 Ft"],
            ["Rántott velő rizzsel", "3990 Ft"],
            ["BBQ oldalas héjában sült burgonyával, amerikai káposztasalátával", "4290 Ft"],
            ["Tejszínes, gombás szűzérmék jázmin rizzsel", "4390 Ft"]
        ]
    },
    {
        id: "marha",
        title: "Marhahúsételek",
        items: [
            ["Vörösboros laskás marharagu rösztivel", "4590 Ft"],
            ["Marhapörkölt galuskával", "4590 Ft"],
            ["Pacalpörkölt", "3890 Ft"],
            ["Velős pacalpörkölt", "3990 Ft"],
            ["Csülkös pacalpörkölt", "3990 Ft"],
            ["Birkapörkölt", "4590 Ft"]
        ]
    },
    {
        id: "talak",
        title: "Kétszemélyes tálak",
        items: [
            ["Fenyves tál – sajttal töltött sertésszelet, párizsi csirke, fokhagymás flekken, fűszeres csirkemell, rizs, petrezselymes burgonya, káposztasaláta", "11990 Ft"],
            ["Csülök tál – sült csülök, hagymás tört burgonya, káposztasaláta", "8990 Ft"],
            ["Húsimádók tálja – baconbe göngyölt szűz, BBQ oldalas, velővel töltött borda, borzas csirkemell, steakburgonya, rizs, savanyúság", "11990 Ft"],
            ["Menyecske tál – grillezett csirke, csípős bundás csirkemell, rántott gomba és sajt, rizs, hasábburgonya, mártások", "10990 Ft"],
            ["Bundás tál – kijevi csirke, cordon bleu, pankóbundás szűz, rántott sajt, rizs, hasábburgonya, uborkasaláta, tartármártás", "11990 Ft"]
        ]
    },
    {
        id: "hal",
        title: "Halételek",
        items: [
            ["Harcsa rántva steakburgonyával, moszkva mártással", "4690 Ft"],
            ["Harcsapaprikás juhtúrós galuskával", "4690 Ft"],
            ["Pisztráng roston petrezselymes burgonyával", "4290 Ft"]
        ]
    },
    {
        id: "salatak",
        title: "Saláták és savanyúságok",
        items: [
            ["Friss paradicsom balzsamecettel, olívaolajjal", "990 Ft"],
            ["Házi káposztasaláta", "990 Ft"],
            ["Csalamádéval töltött almapaprika", "990 Ft"],
            ["Uborkasaláta", "990 Ft"],
            ["Vegyes friss saláta", "990 Ft"],
            ["Csemege- vagy kovászos uborka", "990 Ft"],
            ["Almapaprika", "990 Ft"],
            ["Amerikai csípős káposztasaláta", "1190 Ft"]
        ]
    },
    {
        id: "koretek",
        title: "Köretek",
        items: [
            ["Köret nélkül", "−400 Ft"],
            ["Vegyes köret", "990 Ft"],
            ["Hasábburgonya", "800 Ft"],
            ["Jázmin rizs", "890 Ft"],
            ["Burgonyapüré", "890 Ft"],
            ["Burgonyakrokett", "990 Ft"],
            ["Házi steakburgonya", "800 Ft"],
            ["Édesburgonya hasáb", "1290 Ft"],
            ["Kenyér", "200 Ft"]
        ]
    },
    {
        id: "desszertek",
        title: "Desszertek",
        items: [
            ["Palacsinta (2 db) – ízes vagy kakaós", "1190 Ft"],
            ["Áfonyás, túrós palacsinta csokiöntettel", "1690 Ft"],
            ["Barackos, túrós palacsinta vaníliaöntettel", "1690 Ft"],
            ["Óházi palacsinta – gesztenyés, csokoládés", "1690 Ft"],
            ["Gesztenyepüré tejszínhabbal", "1490 Ft"],
            ["Brownie vaníliafagyival", "1890 Ft"],
            ["Aktuális piteajánlat", "1890 Ft"]
        ]
    },
    {
        id: "martasok",
        title: "Mártások",
        items: [
            ["Tartármártás", "690 Ft"],
            ["Dijoni öntet balzsamecettel", "690 Ft"],
            ["Ketchup / mustár / majonéz / tejföl", "490 Ft"],
            ["Pikáns mártás", "690 Ft"],
            ["BBQ-öntet", "690 Ft"]
        ]
    },
    {
        id: "italok",
        title: "Italok",
        items: [
            ["Schweppes narancs / citrus / tonic (0,25 l)", "650 Ft"],
            ["Lipton Ice Tea barack / citrom / zöld (0,25 l)", "650 Ft"],
            ["Gyümölcslé alma / őszibarack / körte / narancs (0,25 l)", "650 Ft"],
            ["Pepsi / Pepsi Max (0,25 l)", "650 Ft"],
            ["Canada Dry (0,25 l)", "650 Ft"],
            ["Szentkirályi ásványvíz mentes / savas (0,33 l)", "550 Ft"],
            ["Szóda", "200 Ft / dl"],
            ["Minőségi borok – fehér / rosé / vörös", "500 Ft / dl"],
            ["Limonádé – bodzás / citrusos", "200 Ft / dl"]
        ]
    },
    {
        id: "sorok",
        title: "Sörök, röviditalok, pálinkák és koktélok",
        items: [
            ["Csapolt Gösser (0,3 / 0,5 l)", "550 / 850 Ft"],
            ["Csapolt meggysör (0,25 / 0,4 l)", "900 / 1200 Ft"],
            ["Krusovice", "850 Ft"],
            ["Üveges Heineken (0,3 l)", "750 Ft"],
            ["Üveges citromos Gösser, alkoholmentes (0,3 l)", "750 Ft"],
            ["Üveges Heineken, alkoholmentes (0,3 l)", "750 Ft"],
            ["Dry Gin", "730 Ft"],
            ["JW Red Label (2 / 4 cl)", "470 / 940 Ft"],
            ["Ballantine's (2 / 4 cl)", "470 / 940 Ft"],
            ["Martini", "1290 Ft"],
            ["Zwack Unicum (2 / 4 cl)", "470 / 800 Ft"],
            ["Zwack Unicum Szilva (2 / 4 cl)", "470 / 800 Ft"],
            ["Bailey's", "940 Ft"],
            ["Jägermeister (2 / 4 cl)", "470 / 800 Ft"],
            ["Tequila (2 / 4 cl)", "470 / 800 Ft"],
            ["Finlandia Vodka (2 / 4 cl)", "470 / 800 Ft"],
            ["Prémium pálinkák (2 / 4 cl)", "750 / 1490 Ft"],
            ["Gin tonic", "1650 Ft"],
            ["Whiskey-Cola", "1750 Ft"],
            ["Narancs vodka", "1450 Ft"],
            ["Vodka szóda", "1250 Ft"]
        ]
    },
    {
        id: "kavek",
        title: "Kávék",
        items: [
            ["Eszpresszó", "650 Ft"],
            ["Dupla presszó", "1300 Ft"],
            ["Hosszúkávé", "650 Ft"],
            ["Coffee latte", "890 Ft"],
            ["Melange", "990 Ft"],
            ["Jegeskávé", "1250 Ft"],
            ["Cappuccino", "890 Ft"]
        ]
    }
];

const menuContainer = document.getElementById("menuCategories");

if (menuContainer) {
    menuData.forEach((category) => {
        const section = document.createElement("article");
        section.className = "menu-category";
        section.dataset.category = category.id;

        const heading = document.createElement("h3");
        heading.textContent = category.title;
        section.appendChild(heading);

        category.items.forEach(([name, price]) => {
            const item = document.createElement("div");
            item.className = "menu-item";

            const info = document.createElement("div");
            info.className = "menu-item-info";

            const title = document.createElement("h4");
            title.textContent = name;

            const priceElement = document.createElement("span");
            priceElement.className = "menu-price";
            priceElement.textContent = price;

            info.appendChild(title);
            item.appendChild(info);
            item.appendChild(priceElement);
            section.appendChild(item);
        });

        menuContainer.appendChild(section);
    });

    const filters = document.querySelectorAll(".menu-filter");
    const categories = menuContainer.querySelectorAll(".menu-category");

    filters.forEach((button) => {
        button.addEventListener("click", () => {
            const selected = button.dataset.filter;

            filters.forEach((filter) => {
                const active = filter === button;
                filter.classList.toggle("active", active);
                filter.setAttribute("aria-pressed", String(active));
            });

            categories.forEach((category) => {
                category.hidden =
                    selected !== "all" &&
                    category.dataset.category !== selected;
            });
        });
    });
}
