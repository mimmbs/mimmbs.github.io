class dbr {

    // = "{ date: """& A1 &""", item: """ & B1 & """, amount: " & C1 & ", unit: """ & D1 & """, unitcost: " & E1 & " },"

    constructor(lang) {
        this.lang = lang;
        this.customers = [
            { id: 1694346647284, name: "Hasan AKSU", phone: "0532 607 3239", address: "Edirne" },
            { id: 1693861667285, name: " E.K.F  TURİZM İNŞ. MLZ. PAZ. VE İNŞ. TAAHÜT TİC.", phone: "", address: "Edirne" },
            { id: 1693861667286, name: "Şaban KUTLU", phone: "", address: "Edirne" },
            { id: 1693861667287, name: "FEN ELEKTRİK LTD. ŞTİ.", phone: "", address: "Edirne" },
            { id: 1693861667288, name: "Emrah ÖZDEMİR", phone: "0544 539 0914", address: "Edirne" },
        ];
        this.transactions = {
            1694346647284: [
                { date: "2023-07-14", item: "SAPLI KÜREK", amount: 1, unit: "ADET", unitcost: 170 },		
                { date: "2023-07-15", item: "ÇİVİ", amount: 50, unit: "KG", unitcost: 35 },
                { date: "2023-07-17", item: "15M MEBRAN", amount: 6, unit: "TOP", unitcost: 700 },
                { date: "2023-07-19", item: "TAVLI TEL", amount: 26, unit: "KG", unitcost: 40 },
                { date: "2023-07-24", item: "BETON ÇİVİSİ", amount: 1, unit: "PAKET", unitcost: 45 },
                { date: "2023-07-29", item: "BETON ÇİVİSİ", amount: 2, unit: "PAKET", unitcost: 45 },
                { date: "2023-07-31", item: "BETON ÇİVİSİ", amount: 2, unit: "PAKET", unitcost: 45 },
                { date: "2023-08-10", item: "ÇİVİ", amount: 25, unit: "KG", unitcost: 35 },
                { date: "2023-08-10", item: "NAKİT TAHSİLAT", amount: 0, unit: "", unitcost: 5000 }
            ],
            1693861667285: [
                { date: "2023-05-15", item: "ÇİVİ", amount: 29, unit: "KG", unitcost: 33 },
                { date: "2023-05-16", item: "ÇİVİ", amount: 50, unit: "KG", unitcost: 33 },
                { date: "2023-05-20", item: "ÇİMENTO 25 KG", amount: 250, unit: "TRB", unitcost: 60 },
                { date: "2023-05-24", item: "BEYAZ ÇİMENTO 25 KG.", amount: 2, unit: "TRB", unitcost: 140 },
                { date: "2023-05-24", item: "BEYAZ MOZAYİK", amount: 6, unit: "TRB", unitcost: 50 },
                { date: "2023-05-29", item: "ÇİMENTO 25 KG.", amount: 250, unit: "TRB", unitcost: 60 },
                { date: "2023-06-02", item: "BEYAZ ÇİMENTO 25 KG.", amount: 1, unit: "TRB", unitcost: 140 },
                { date: "2023-06-09", item: "TAHSİLAT EFT", amount: 0, unit: "", unitcost: 33327 },
                { date: "2023-06-09", item: "ÇİMENTO 25 KG.", amount: 40, unit: "TRB", unitcost: 60 },
                { date: "2023-06-10", item: "ÇİMENTO 25 KG.", amount: 250, unit: "TRB", unitcost: 60 },
                { date: "2023-06-16", item: "BEYAZ ÇİMENTO 25 KG.", amount: 2, unit: "TRB", unitcost: 140 },
                { date: "2023-06-16", item: "BEYAZ MOZAYİK", amount: 2, unit: "TRB", unitcost: 50 },
                { date: "2023-06-19", item: "ÇİMENTO 25 KG.", amount: 360, unit: "TRB", unitcost: 60 },
                { date: "2023-07-07", item: "TAHSİLAT EFT", amount: 0, unit: "", unitcost: 39380 },
                { date: "2023-07-06", item: "ÇİVİ", amount: 100, unit: "KG", unitcost: 35 },
                { date: "2023-07-18", item: "TAVLI TEL", amount: 50, unit: "KG", unitcost: 39.92 },
                { date: "2023-07-19", item: "ÇİMENTO 25 KG.", amount: 200, unit: "TRB", unitcost: 63 },
                { date: "2023-07-22", item: "ÇİMENTO 25 KG.", amount: 40, unit: "TRB", unitcost: 63 },
                { date: "2023-07-22", item: "ÇİMENTO 25 KG.", amount: 280, unit: "TRB", unitcost: 63 },
                { date: "2023-07-26", item: "ÇİMENTO 25 KG.", amount: 200, unit: "TRB", unitcost: 63 },
                { date: "2023-08-02", item: "ÇİMENTO 25 KG.", amount: 360, unit: "TRB", unitcost: 63 },
                { date: "2023-08-09", item: "ÇİVİ", amount: 50, unit: "KG", unitcost: 36 },
                { date: "2023-08-12", item: "ÇİMENTO 25 KG.", amount: 200, unit: "TRB", unitcost: 63 },
                { date: "2023-08-14", item: "TAHSİLAT EFT", amount: 0, unit: "", unitcost: 73530 },
                { date: "2023-08-19", item: "ÇİMENTO 25 KG.", amount: 150, unit: "TRB", unitcost: 63 }
            ],
            1693861667286: [
                { date: "2023-03-01", item: "DEVİR BORÇ", amount: 1, unit: "", unitcost: 7497 },
                { date: "2023-03-14", item: "SIVA ALÇISI", amount: 10, unit: "TRB", unitcost: 80 },
                { date: "2023-04-15", item: "NAKİT TAHSİLAT", amount: 0, unit: "", unitcost: 5000 },
                { date: "2023-05-04", item: "ÇİMENTO 25 KG", amount: 5, unit: "TRB", unitcost: 63 },
                { date: "2023-05-04", item: "KİREÇ", amount: 1, unit: "TRB", unitcost: 80 },
                { date: "2023-05-04", item: "ELDİVEN", amount: 2, unit: "ADET", unitcost: 15 },
                { date: "2023-05-04", item: "ÇİMENTO 25 KG", amount: 50, unit: "TRB", unitcost: 63 },
                { date: "2023-05-04", item: "KİREÇ", amount: 10, unit: "TRB", unitcost: 80 },
                { date: "2023-05-04", item: "SATEN ALÇI", amount: 1, unit: "TRB", unitcost: 100 },
                { date: "2023-05-05", item: "EL ARABASI  DUBLEKS", amount: 1, unit: "ADET", unitcost: 900 },
                { date: "2023-05-12", item: "ÇİMENTO 25 KG", amount: 9, unit: "TRB", unitcost: 63 },
                { date: "2023-05-12", item: "KİREÇ", amount: 3, unit: "TRB", unitcost: 80 },
                { date: "2023-05-15", item: "ÇİMENTO 25 KG", amount: 10, unit: "TRB", unitcost: 63 },
                { date: "2023-05-15", item: "KİREÇ", amount: 3, unit: "TRB", unitcost: 80 },
                { date: "2023-05-15", item: "ELDİVEN", amount: 1, unit: "ADET", unitcost: 15 },
                { date: "2023-05-16", item: "ÇİMENTO 25 KG", amount: 10, unit: "TRB", unitcost: 63 },
                { date: "2023-05-16", item: "KİREÇ", amount: 3, unit: "TRB", unitcost: 80 },
                { date: "2023-05-20", item: "SIVA FİLESİ", amount: 1, unit: "TOP", unitcost: 500 },
                { date: "2023-05-20", item: "STRAFOR 10 DNS.", amount: 1, unit: "PAKET", unitcost: 200 },
                { date: "2023-05-23", item: "SIVA FİLESİ", amount: 1, unit: "TOP", unitcost: 500 },
                { date: "2023-05-26", item: "NAKİT TAHSİLAT", amount: 0, unit: "", unitcost: 7000 },
                { date: "2023-05-26", item: "ÇİMENTO 25 KG", amount: 20, unit: "TRB", unitcost: 63 },
                { date: "2023-05-26", item: "KİREÇ", amount: 10, unit: "TRB", unitcost: 80 },
                { date: "2023-05-29", item: "MANTOLAMA YAPIŞTIRICI", amount: 10, unit: "TRB", unitcost: 90 },
                { date: "2023-05-29", item: "ELDİVEN", amount: 2, unit: "ADET", unitcost: 15 },
                { date: "2023-06-02", item: "SIVA ALÇISI", amount: 12, unit: "TRB", unitcost: 80 },
                { date: "2023-06-05", item: "SIVA ALÇISI", amount: 6, unit: "TRB", unitcost: 80 },
                { date: "2023-06-05", item: "ELDİVEN", amount: 1, unit: "ADET", unitcost: 15 },
                { date: "2023-06-06", item: "SIVA ALÇISI", amount: 15, unit: "TRB", unitcost: 80 },
                { date: "2023-06-07", item: "SATEN ALÇI", amount: 1, unit: "TRB", unitcost: 100 },
                { date: "2023-06-07", item: "SIVA ALÇISI", amount: 2, unit: "TRB", unitcost: 80 },
            ],
            1693861667287: [
                { date: "2023-01-14", item: "NAKİT TAHSİLAT", amount: 0, unit: "", unitcost: 12000 },
                { date: "2023-01-18", item: "ÇİMENTO 25 KĞ", amount: 60, unit: "TRB", unitcost: 60 },
                { date: "2023-04-24", item: "ÇİMENTO 25 KĞ", amount: 50, unit: "TRB", unitcost: 60 },
                { date: "2023-04-25", item: "SIVA ALÇISI", amount: 2, unit: "TRB", unitcost: 75 },
                { date: "2023-04-26", item: "SIVA ALÇISI", amount: 2, unit: "TRB", unitcost: 75 },
                { date: "2023-04-26", item: "TAHSİLAT SİFTAH İÇİN", amount: 0, unit: "", unitcost: 15 },
                { date: "2023-04-26", item: "ÇİMENTO 25 KĞ", amount: 50, unit: "TRB", unitcost: 60 },
                { date: "2023-04-27", item: "SIVA ALÇISI", amount: 4, unit: "TRB", unitcost: 75 },
                { date: "2023-04-28", item: "ÇİMENTO 25 KĞ", amount: 50, unit: "TRB", unitcost: 60 },
                { date: "2023-05-01", item: "ÇİMENTO 25 KĞ", amount: 50, unit: "TRB", unitcost: 60 },
                { date: "2023-05-02", item: "SIVA ALÇISI", amount: 4, unit: "TRB", unitcost: 75 },
                { date: "2023-05-03", item: "TAHSİLAT NAKİT", amount: 0, unit: "", unitcost: 10000 },
                { date: "2023-05-03", item: "ÇİMENTO 25 KĞ", amount: 50, unit: "TRB", unitcost: 60 },
                { date: "2023-05-05", item: "ÇİMENTO 25 KĞ", amount: 50, unit: "TRB", unitcost: 60 },
                { date: "2023-05-08", item: "ÇİMENTO 25 KĞ", amount: 10, unit: "TRB", unitcost: 60 },
                { date: "2023-05-09", item: "ÇİMENTO 25 KĞ", amount: 15, unit: "TRB", unitcost: 60 },
                { date: "2023-05-11", item: "ÇİMENTO 25 KĞ", amount: 15, unit: "TRB", unitcost: 60 },
                { date: "2023-05-11", item: "ÇİMENTO 25 KĞ", amount: 15, unit: "TRB", unitcost: 60 },
                { date: "2023-05-12", item: "ÇİMENTO 25 KĞ", amount: 10, unit: "TRB", unitcost: 60 },
                { date: "2023-05-12", item: "TAHSİLAT NAKİT", amount: 0, unit: "", unitcost: 5000 },
            ],
            1693861667288: [
                { date: "2023-05-26", item: "KARTONPİYER ALÇI", amount: 2, unit: "TRB", unitcost: 75 },
                { date: "2023-07-14", item: "ÇİMENTO", amount: 50, unit: "TRB", unitcost: 65 },
                { date: "2023-07-14", item: "NAKLİYE HAMALİYE", amount: 1, unit: "SEFER", unitcost: 250 },
                { date: "2023-07-19", item: "MANTOLAMA SIVASI", amount: 30, unit: "TRB", unitcost: 115 },
                { date: "2023-07-19", item: "NAKLİYE HAMALİYE", amount: 1, unit: "SEFER", unitcost: 250 },
                { date: "2023-07-21", item: "MANTOLAMA SIVASI", amount: 35, unit: "TRB", unitcost: 115 },
                { date: "2023-07-21", item: "MANTOLAMA YAPIŞTIRICI", amount: 10, unit: "TRB", unitcost: 110 },
                { date: "2023-07-21", item: "ÇİMENTO", amount: 40, unit: "TRB", unitcost: 65 },
                { date: "2023-07-21", item: "NAKLİYE HAMALİYE", amount: 1, unit: "SEFER", unitcost: 350 },
                { date: "2023-07-26", item: "DEKORATİF SIVA", amount: 6, unit: "TRB", unitcost: 140 },
                { date: "2023-07-26", item: "TAHSİLAT EFT", amount: 0, unit: "", unitcost: 10000 },
                { date: "2023-07-28", item: "ÇİMENTO", amount: 40, unit: "TRB", unitcost: 65 },
                { date: "2023-07-28", item: "NAKLİYE HAMALİYE", amount: 1, unit: "SEFER", unitcost: 250 },
                { date: "2023-08-03", item: "MANTOLAMA YAPIŞTIRICI", amount: 2, unit: "TRB", unitcost: 110 },
                { date: "2023-08-03", item: "TAHSİLAT EFT", amount: 0, unit: "", unitcost: 7000 },
                { date: "2023-08-04", item: "SIVA ALÇISI", amount: 150, unit: "TRB", unitcost: 85 },
                { date: "2023-08-04", item: "SATEN ALÇISI", amount: 10, unit: "TRB", unitcost: 115 },
                { date: "2023-08-04", item: "ALÇI KÖŞEBENT", amount: 200, unit: "ADET", unitcost: 13 },
                { date: "2023-08-04", item: "NAKLİYE HAMALİYE", amount: 1, unit: "SEFER", unitcost: 450 },
                { date: "2023-08-15", item: "SIVA ALÇISI", amount: 150, unit: "TRB", unitcost: 85 },
                { date: "2023-08-15", item: "SATEN ALÇISI", amount: 10, unit: "TRB", unitcost: 115 },
                { date: "2023-08-15", item: "NAKLİYE HAMALİYE", amount: 1, unit: "SEFER", unitcost: 450 },
                { date: "2023-08-15", item: "KALEKİM", amount: 1, unit: "TRB", unitcost: 150 },
                { date: "2023-08-17", item: "TAHSİLAT EFT", amount: 0, unit: "", unitcost: 15000 },
                { date: "2023-08-22", item: "ALÇI KÖŞEBENT", amount: 50, unit: "ADET", unitcost: 13 },
                { date: "2023-08-23", item: "SIVA ALÇISI", amount: 100, unit: "TRB", unitcost: 85 },
                { date: "2023-08-23", item: "ALÇI KÖŞEBENT", amount: 100, unit: "ADET", unitcost: 13 },
                { date: "2023-08-23", item: "NAKLİYE HAMALİYE", amount: 1, unit: "SEFER", unitcost: 400 },
            ]
        };
    }

    static async Server() {
        await new Promise(resolve => (setTimeout(resolve, 400)));
        return { calendar: { date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString().slice(0, 5) }, forecast: { icon: "sunny", event: "Edirne: Güneşli" , heat: 28 }, currency: { eur: 28.79, usd: 26.85 }};
    }   

    Customers() {
        return this.customers;
    }

    LanguagePack() {
        if (this.lang == "tr-TR") {
            return {
                anc_lbl_abo: "Cari Hesaplar",
                anc_lbl_hom: "Hesap Hareketleri",
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
                txt_rep_tit: "Marmara İnşaat Malzemeleri",
                txt_req_cus: "Cari Hesap Seçin",
                txt_amn_tpd: "Devir Eden Borç",
                txt_tip_req: "Gerekli!",
                txt_tip_amn: "Satış değil ise 0 (sıfır) olmalıdır.",
                txt_tip_sep: "Ondalık ayracı (.) noktadır." 
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

        this.transactions[customer].forEach(element => {            
            if(element.amount > 0) {
                sells += element.unitcost * element.amount;
            } else {
                pays += element.unitcost;
            }
            net = sells - pays;              
            transactionsTable.push({ 
                rank: ++rank,
                amount: element.amount,
                date: element.date,
                item: element.item,
                unit: element.unit,
                unitcost: element.unitcost,
                sell: element.amount > 0 ? element.unitcost * element.amount : "",
                pay: element.amount > 0 ? "" : element.unitcost,
                cumsell: net > 0 ? net : "",
                cumpay: net > 0 ? "" : Math.abs(net)                    
            });            
        });

        return { details: transactionsTable, totalSell: sells, totalPay: pays, net: net, ld: Math.sign(net) };
    }

    async UpdateOrInsert(customer, editedIndex, editedItem) {  
        editedItem.amount = parseFloat(editedItem.amount);
        editedItem.unitcost = parseFloat(editedItem.unitcost);
        if (editedIndex > -1) {
            Object.assign(this.transactions[customer][editedIndex], editedItem);
        } else {
            this.transactions[customer].push(editedItem);
        }
        this.LogTransaction(customer, editedIndex, editedItem, null);
        await new Promise(resolve => (setTimeout(resolve, 400)));
    }

    async Delete(customer, editedIndex) {
        this.LogTransaction(customer, editedIndex, null, null);
        await new Promise(resolve => (setTimeout(resolve, 400)));
        this.transactions[customer].splice(editedIndex, 1);
        
    }

    async LogTransaction(customer, editedIndex, editedItem, user) {
        await new Promise(resolve => (setTimeout(resolve, 600)));
        console.log(new Date(), customer, editedIndex, editedItem, user);
    }
}
