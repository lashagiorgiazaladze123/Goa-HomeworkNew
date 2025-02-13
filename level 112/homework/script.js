// მშობელი კლასი - წიგნი
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    // გეთერ მეთოდი
    get details() {
        return `${this.title} - ${this.author}, ${this.pages} გვერდი`;
    }

    // ჩვეულებრივი მეთოდი
    readBook() {
        console.log(`თქვენ კითხულობთ "${this.title}"`);
    }

    // ჩვეულებრივი მეთოდი
    summary() {
        console.log(`${this.title} დაწერა ${this.author}-მა და აქვს ${this.pages} გვერდი.`);
    }
}

// სათავგადასავლო წიგნის კლასი
class AdventureBook extends Book {
    constructor(title, author, pages, difficulty, setting) {
        super(title, author, pages);
        this.difficulty = difficulty;
        this.setting = setting;
    }

    // მშობლის მეთოდის სრული შეცვლა
    readBook() {
        console.log(`თქვენ იწყებთ საინტერესო სათავგადასავლო მოგზაურობას "${this.title}" წიგნით!`);
    }

    // მშობლის მეთოდზე დაშენებული მეთოდი
    summary() {
        super.summary();
        console.log(`ეს წიგნი არის ${this.difficulty} სირთულის და მდებარეობა: ${this.setting}`);
    }

    // უნიკალური მეთოდი
    exploreWorld() {
        console.log(`თქვენ მიემგზავრებით "${this.setting}"-ში დაუვიწყარი თავგადასავლებისთვის!`);
    }
}

// სატირული წიგნის კლასი
class SatireBook extends Book {
    constructor(title, author, pages, humorType, target) {
        super(title, author, pages);
        this.humorType = humorType;
        this.target = target;
    }

    // მშობლის მეთოდის სრული შეცვლა
    readBook() {
        console.log(`"${this.title}" არის მკვეთრი სატირა ${this.target}-ზე.`);
    }

    // მშობლის მეთოდზე დაშენებული მეთოდი
    summary() {
        super.summary();
        console.log(`ეს წიგნი შეიცავს ${this.humorType} ტიპის იუმორს.`);
    }

    // უნიკალური მეთოდი
    laugh() {
        console.log(`თქვენ იცინით "${this.title}"-ის გონებამახვილურ სატირაზე!`);
    }
}

// ფანტასტიკის წიგნის კლასი
class FantasyBook extends Book {
    constructor(title, author, pages, magicSystem, mainCreature) {
        super(title, author, pages);
        this.magicSystem = magicSystem;
        this.mainCreature = mainCreature;
    }

    // მშობლის მეთოდის სრული შეცვლა
    readBook() {
        console.log(`თქვენ შედიხართ ჯადოსნურ სამყაროში "${this.title}"-თან ერთად!`);
    }

    // მშობლის მეთოდზე დაშენებული მეთოდი
    summary() {
        super.summary();
        console.log(`ამ სამყაროში მაგიის სისტემა: ${this.magicSystem}, მთავარი არსება: ${this.mainCreature}`);
    }

    // უნიკალური მეთოდი
    castSpell() {
        console.log(`თქვენ იყენებთ "${this.magicSystem}"-ს მაგიის სამყაროში!`);
    }
}

// ტესტირება
const book1 = new AdventureBook("ინდიანა ჯონსი", "ჯორჯ ლუკასი", 350, "საშუალო", "ძველი ტაძრები");
book1.readBook();
book1.summary();
book1.exploreWorld();

const book2 = new SatireBook("დიდი გაბრაზება", "ჯონ სმიტი", 200, "ირონიული", "პოლიტიკა");
book2.readBook();
book2.summary();
book2.laugh();

const book3 = new FantasyBook("მაგიის სამყარო", "რიჩარდ მორგანი", 500, "ელემენტალური", "დრაკონი");
book3.readBook();
book3.summary();
book3.castSpell();
