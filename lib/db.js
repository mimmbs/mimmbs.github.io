class dbr {

    // = "{ date: """& A1 &""", item: """ & B1 & """, amount: " & C1 & ", unit: """ & D1 & """, unitcost: " & E1 & " },"

    constructor(lang) {
        this.lang = lang;
    }

    LanguagePack() {
        if (this.lang == "tr-TR") {
            return {
                anc_lbl_abo: "Cariler",
                anc_lbl_hom: "Hareketler",
                btn_txt_cnc: "İptal",
                btn_txt_del: "Sil",
                btn_txt_new: "Ekle",
                btn_txt_prt: "Yazdır",
                btn_txt_sav: "Kaydet",
                lbl_chk_str: "Başlangıç",
                lbl_chk_end: "Bitiş",
                lbl_itm_per: "Sayfa başına kayıt",
                lbl_gto_pge: "Sayfaya git",
                lbl_tip_del: "Sil",
                lbl_tip_edt: "Düzenle",
                lbl_cus_nam: "Cari Adı",
                lbl_cus_phn: "Telefon",
                lbl_cus_adr: "Adres",
                tbl_hdr_act: "",
                tbl_hdr_amn: "Miktar",
                tbl_hdr_dat: "Tarih",
                tbl_hdr_itm: "Açıklama",
                tbl_hdr_pay: "Ödeme",
                tbl_hdr_sel: "Satış",
                tbl_hdr_tpa: "Toplam Alacak",
                tbl_hdr_tse: "Toplam Borç",
                tbl_hdr_ucs: "Birim Fiyat",
                tbl_hdr_unt: "Birim",
                txt_cmb_tit: "Cari Hesap Seçimi",
                txt_con_del: "Kayıt silinsin mi?",
                txt_del_inf: "",
                txt_edt_itm: "İşlem Kaydı Düzenle",
                txt_new_itm: "Yeni İşlem Kaydı Ekle",
                txt_non_tra: "Bu cari hesap için işlem kaydı yok.",
                txt_req_cus: "Cari Hesap Seçin",
                txt_req_err: "Beklenmeyen bir hata meydana geldi!",
                txt_req_suc: "İşlem başarılı bir şekilde tamamlandı.",
                txt_amn_tpd: "Devir Eden Borç",
                txt_tip_req: "Gerekli!",
                txt_tip_amn: "Satış değil ise 0 (sıfır) olmalıdır.",
                txt_tip_sep: "Ondalık ayracı (.) noktadır."
            }
        }
        // DEFAULTS (en-EN)
        return {}
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
        await this.LogTransaction('E', null, null, edited, null);
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
                amount: element.amount,
                date: element.date,
                item: element.item.trim(),
                unit: element.unit.trim(),
                unitcost: element.unitcost,
                sell: element.amount > 0 ? element.unitcost * element.amount : "",
                pay: element.amount > 0 ? "" : element.unitcost,
                cumsell: net > 0 ? net : "",
                cumpay: net > 0 ? "" : Math.abs(net)
            });
        });
        return { details: transactionsTable, totalSell: sells, totalPay: pays, net: net * -1, ld: Math.sign(net) };
    }

    async UpdateOrInsert(customer, editedIndex, editedItem) {
        await this.LogTransaction((editedIndex > -1 ? 'U' : 'C'), customer, editedIndex, editedItem, null);
        editedItem.amount = parseFloat(editedItem.amount);
        editedItem.unitcost = parseFloat(editedItem.unitcost);
        if (editedIndex > -1) {
            Object.assign(this.transactions[customer][editedIndex], editedItem);
        } else {
            this.transactions[customer].push(editedItem);
        }
        await new Promise(resolve => (setTimeout(resolve, 400)));
    }

    async Delete(customer, editedIndex, editedItem) {
        await this.LogTransaction('D', customer, editedIndex, editedItem, null);
        await new Promise(resolve => (setTimeout(resolve, 400)));
        this.transactions[customer].splice(editedIndex, 1);

    }

    async LogTransaction(crud, customer, editedIndex, editedItem, user) {
        const now = new Date().toISOString().split('T');
        const log = { crud: crud, date: `${now[0]} ${now[1].substring(0, 5)}`, customer: customer, editedIndex: editedIndex, editedItem: editedItem, user: user };
        await dbr.Post("savelog", log);
    }
}
