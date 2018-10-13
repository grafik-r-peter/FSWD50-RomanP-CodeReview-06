// PARENT CLASS // 
class Place {
    constructor(type, name, city, zip, adress, img, created) {
        this.type = type;
        this.name = name;
        this.city = city;
        this.zip = zip;
        this.adress = adress;
        this.img = img;
        this.created = created;
        this.type = type,
            this.name = name,
            this.city = city,
            this.zip = zip,
            this.adress = adress,
            this.img = img,
            this.created = created;
    }
    output() {
        return document.querySelector("#places-container").innerHTML += `
						<div class="plc-item col-12 col-md-6 col-lg-3 col-xl-3">
							<img class="d-none d-sm-block img-fluid img-places" src="${this.img}" alt="${this.name}">
							<div class="caption-category category-${this.type}"> 
								<span class="">${this.created} in ${this.type}</span>	
							</div>							
							<div class="pt-2 place-content">
								<h3 class="place-title">${this.name}</h3>
		    					<p>
			    					${this.zip}, ${this.city} <br>
			    					${this.adress}
		    					</p>
		    				</div>
    					</div>`;
    }
}
// CHILD CLASSES //
class Restaurants extends Place {
    constructor(type, name, city, zip, adress, img, created, tel, cuisine, url) {
        super(type, name, city, zip, adress, img, created);
        this.tel = tel;
        this.cuisine = cuisine;
        this.url = url;
    }
    output() {
        return document.querySelector("#places-container").innerHTML += `
						<div class="plc-item col-12 col-md-6 col-lg-3 col-xl-3">
							<img class="d-none d-sm-block img-fluid img-places" src="${this.img}" alt="${this.name}">
							<div class="caption-category category-${this.type}"> 
								<span class="">${this.created} in ${this.type}</span>	
							</div>							
							<div class="pt-2 place-content">
								<h3 class="place-title">${this.name}</h3>
		    					<p>
			    					${this.zip}, ${this.city} <br>
			    					${this.adress}
		    					</p>
		    					<p class="add-info">Cuisine: ${this.cuisine}</p>
			    					<p class="add-info">
			    						${this.tel}<br>
			    						${this.url}
			    					</p>
		    				</div>
    					</div>`;
    }
}
class Concerts extends Place {
    constructor(type, name, city, zip, adress, img, created, eventDate, eventTime, price) {
        super(type, name, city, zip, adress, img, created);
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.price = price;
    }
    output() {
        return document.querySelector("#places-container").innerHTML += `
						<div class="plc-item col-12 col-md-6 col-lg-3 col-xl-3">
							<img class="d-none d-sm-block img-fluid img-places" src="${this.img}" alt="${this.name}">
							<div class="caption-category category-${this.type}"> 
								<span class="">${this.created} in ${this.type}</span>	
							</div>							
							<div class="pt-2 place-content">
								<h3 class="place-title">${this.name}</h3>
		    					<p>
			    					${this.zip}, ${this.city} <br>
			    					${this.adress}
		    					</p>
		    					<p class="add-info">
		    						${this.eventDate}, ${this.eventTime}<br>
		    						${this.price} Euro
		    					</p>
		    				</div>
    					</div>`;
    }
}
// CONTENT ARRAYS //
let places = new Array();
places.push(new Place("Trip", "St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/charles_church.jpg", "24. 03. 2018, 12:45"));
places.push(new Place("Trip", "Zoo Vienna", "Vienna", 1130, "Maxingstraße 13b", "img/schoenbrunn.jpg", "29. 05. 2018, 11:10"));
places.push(new Restaurants("Restaurants", "Lemon Leaf Thai Restaurant", "Vienna", 1050, "Kettenbrückengasse 1", "img/lemon-leaf.png", "08. 01. 2018, 12:03", "+43(1)5812308", "Thai kitchen", "http://www.lemonleaf.at"));
places.push(new Restaurants("Restaurants", "SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "img/sixta.png", "11. 05. 2018, 20:14", "+4315852856 <br> +4315852856", "Viennese", "http://www.sixta-restaurant.at"));
places.push(new Concerts("Concerts", "Kris Kristofferson", "Vienna", 1150, "Wiener Stadthalle, Halle F", "img/kristofferson.jpg", "16. 11. 2018, 23:00", "15. 11. 2018", "20:00", 58.50));
places.push(new Concerts("Concerts", "Lenny Kravitz", "Vienna", 1150, "Wiener Stadthalle - Halle D", "img/kravitz.jpg", "09. 12. 2018, 23:45", "9. 12. 2019", "19:30", 47.80));
// PRINT CONTENT //
function printPlaces() {
    for (let item in places) {
        places[item].output();
    }
}
printPlaces();
