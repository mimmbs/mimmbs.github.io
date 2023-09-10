class dbr {

    constructor(lang) {
        this.lang = lang;
        this.customers = [
            { id: 1693861667283, name: "Firm A", owner: "Axx Axxxx", tax: "VD 22-A00-00000", phone: "0500 100 2030", address: "Edirne / TR" },
            { id: 1693861667285, name: "Firm B", owner: "Bxx Bxxxx", tax: "VD 22-B00-00000", phone: "0049 500 100 2030", address: "Edirne / TR" },
            { id: 1693861667287, name: "Firm C", owner: "Cxx Cxxxx", tax: "VD 22-C00-00000", phone: "00 90 0500 100 2030", address: "Edirne / TR" }
        ];
        this.transactions = [
            {
                id: 1693946279766,
                customerid: 1693861667283,
                active: 1,
                amount: 0,
                date: '04.09.2023',
                item: 'Geçmiş dönemden devir',
                unit: "",
                unitcost: -1000
            },
            {
                id: 1693946279767,
                customerid: 1693861667283,
                active: 1,
                amount: 150,
                date: '04.09.2023',
                item: 'A Test Ürün Test Açıklama Test Ürün Test Açıklama',
                unit: "adet",
                unitcost: 190.6
            },
            {
                id: 1693946279768,
                customerid: 1693861667283,
                active: 1,
                amount: 0,
                date: '05.09.2023',
                item: 'A Test Ödeme',
                unit: "",
                unitcost: 12500
            }
        ];
    }

    static async Server() {
        await new Promise(resolve => (setTimeout(resolve, 400)));
        return { calendar: { date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString().slice(0, 5) }, forecast: { icon: "sunny", event: "Edirne: Güneşli" , heat: 28 }, currency: { eur: 28.79, usd: 26.85 }};
    }

    FormatCurr(cost) {
        return `${cost.toLocaleString(this.lang, {
            style: 'currency',
            currency: 'USD',
        }).replace('$', '')}`;
    }

    Customers() {
        return this.customers;
    }

    LanguagePack() {
        if (this.lang == "tr-TR") {
            return {
                anc_lbl_abo: "Hesaplar",
                anc_lbl_hom: "Hareketler",
                btn_txt_cnc: "İptal",
                btn_txt_del: "Sil",
                btn_txt_new: "Kayıt Ekle",
                btn_txt_prt: "Yazdır",
                btn_txt_sav: "Kaydet",
                lbl_chk_str: "Başlangıç",
                lbl_chk_end: "Bitiş",
                lbl_itm_per: "Sayfa başına kayıt",
                lbl_gto_pge: "Sayfaya git",
                lbl_tip_del: "Sil",
                lbl_tip_edt: "Düzenle",
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
                txt_req_cus: "Cari Hesap Seçin"         
            }
        }

        return {
           // DEFAULTS (en-EN)
        }
    }

    async Transactions(customer) {    
        await new Promise(resolve => (setTimeout(resolve, 400)));
        
        const transactionsTable = [];
        let sells = 0;
        let pays = 0;
        let net = 0;
        let rank = 0;

        this.transactions.forEach(element => {
            if(element.customerid == customer && element.active == 1) {  
                if(element.amount > 0) {
                    sells += element.unitcost * element.amount;
                } else {
                    pays += element.unitcost;
                }
                net = sells - pays;              
                transactionsTable.push({ 
                    id: element.id,
                    amount: element.amount > 0 ? element.amount : "",
                    date: `<b>${++rank}</b>. ${element.date}`,
                    item: element.item,
                    unit: element.unit,
                    unitcost: element.amount > 0 ? this.FormatCurr(element.unitcost) : "",
                    sell: element.amount > 0 ? this.FormatCurr(element.unitcost * element.amount) : "",
                    pay: element.amount > 0 ? "" : this.FormatCurr(element.unitcost),
                    cumsell: net > 0 ? this.FormatCurr(net) : "",
                    cumpay: net > 0 ? "" : this.FormatCurr(Math.abs(net))                    
                });

            }
        });

        return { details: transactionsTable, totalSell: this.FormatCurr(sells), totalPay: this.FormatCurr(pays), net: this.FormatCurr(net), ld: Math.sign(net) };
    }
}