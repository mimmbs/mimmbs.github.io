class dbr {

    // = "{ date: """& A1 &""", item: """ & B1 & """, amount: " & C1 & ", unit: """ & D1 & """, unitcost: " & E1 & " },"

    constructor(lang) {
        this.lang = lang;
        this.user = null;
    }

    async Login(user) {
        this.user = user;
        const response = await dbr.Post("login", user);
        const stream = await response.body?.getReader().read();
        const dbUser = new TextDecoder("utf-8").decode(stream?.value);
        if (JSON.parse(dbUser).login) {
            return this.user;
        }
        return { username: null, password: null }
    }

    async LanguagePack() {
        return await dbr.Get(this.lang);
    }

    static ServerUrl = "https://huge-dolphin-84.deno.dev";


    static async Get(path) {
        const response = await fetch(`${dbr.ServerUrl}/${path}`);
        return JSON.parse(await response.text());
    }

    static async Post(path, data) {
        const request = await fetch(`${dbr.ServerUrl}/${path}`, {
            method: 'POST',
            body: JSON.stringify(data)
        });
        return request;
    }

    async Server() {
        return await dbr.Get("info");
    }

    async Customers() {
        return (await dbr.Get("customers")).sort((a, b) => a.name.localeCompare(b.name));
    }

    async SaveCustomers(edited) {
        await this.LogTransaction('E', null, edited);
        await dbr.Post('savecustomers', edited);
    }

    async Transactions(customer) {
        const transactionsTable = [];
        let sells = 0;
        let pays = 0;
        let net = 0;
        let rank = 0;
        const response = await dbr.Post("transactions", customer);
        const stream = await response.body?.getReader().read();
        const transactions = new TextDecoder("utf-8").decode(stream?.value);
        JSON.parse(transactions).forEach(element => {
            if (element.amount > 0) {
                sells += element.unitcost * element.amount;
            } else {
                pays += element.unitcost;
            }
            net = sells - pays;
            transactionsTable.push({
                rank: ++rank,
                date: element.date,
                amount: element.amount,
                item: element.item.trim(),
                unit: element.unit.trim(),
                unitcost: element.unitcost,
                sell: element.amount > 0 ? element.unitcost * element.amount : "",
                pay: element.amount > 0 ? "" : element.unitcost,
                cumsell: net > 0 ? net : "",
                cumpay: net == 0 ? 0.000001 : (net > 0 ? "" : Math.abs(net))
            });
        });
        return { details: transactionsTable, totalSell: sells, totalPay: pays, net: net * -1, ld: Math.sign(net) };
    }

    async SaveTransactions(customer, transactions, crud) {
        const saveTransactions = [];
        transactions.forEach((element) => {
            saveTransactions.push({
                date: element.date,
                item: element.item,
                unit: element.unit,
                amount: element.amount,
                unitcost: element.unitcost
            });
        })
        await this.LogTransaction(crud, customer, saveTransactions);
        await dbr.Post("savetransactions", { customer: customer, transactions: saveTransactions });
    }

    async LogTransaction(crud, customer, editedItem) {
        const now = new Date().toISOString().split('T');
        const log = { crud: crud, date: `${now[0]} ${now[1].substring(0, 5)}`, customer: customer, editedItem: editedItem, user: this.user };
        await dbr.Post("savelog", log);
    }
}
