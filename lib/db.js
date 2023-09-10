class dbr {

    // = "{ id:" & A1 & ", date: """& B1 &""", item: """ & C1 & """, amount: " & D1 & ", unit: """ & E1 & """, unitcost: " & F1 & " },"

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
                { id: 1694346647284, date: "14.07.2023", item: "SAPLI KÜREK", amount: 1, unit: "ADET", unitcost: 170 },		
                { id: 1694346647285, date: "15.07.2023", item: "ÇİVİ", amount: 50, unit: "KG", unitcost: 35 },
                { id: 1694346647286, date: "17.07.2023", item: "15M MEBRAN", amount: 6, unit: "TOP", unitcost: 700 },
                { id: 1694346647287, date: "19.07.2023", item: "TAVLI TEL", amount: 26, unit: "KG", unitcost: 40 },
                { id: 1694346647288, date: "24.07.2023", item: "BETON ÇİVİSİ", amount: 1, unit: "PAKET", unitcost: 45 },
                { id: 1694346647289, date: "29.07.2023", item: "BETON ÇİVİSİ", amount: 2, unit: "PAKET", unitcost: 45 },
                { id: 1694346647290, date: "31.07.2023", item: "BETON ÇİVİSİ", amount: 2, unit: "PAKET", unitcost: 45 },
                { id: 1694346647291, date: "10.08.2023", item: "ÇİVİ", amount: 25, unit: "KG", unitcost: 35 },
                { id: 1694346647292, date: "10.08.2023", item: "NAKİT TAHSİLAT", amount: 0, unit: "", unitcost: 5000}
            ],
            1693861667285: [
                { id:1693861667285, date: "15.05.2023", item: "ÇİVİ", amount: 29, unit: "KG", unitcost: 33 },
                { id:1693861667285, date: "16.05.2023", item: "ÇİVİ", amount: 50, unit: "KG", unitcost: 33 },
                { id:1693861667285, date: "20.05.2023", item: "ÇİMENTO 25 KG", amount: 250, unit: "TRB", unitcost: 60 },
                { id:1693861667285, date: "24.05.2023", item: "BEYAZ ÇİMENTO 25 KG.", amount: 2, unit: "TRB", unitcost: 140 },
                { id:1693861667285, date: "24.05.2023", item: "BEYAZ MOZAYİK", amount: 6, unit: "TRB", unitcost: 50 },
                { id:1693861667285, date: "29.05.2023", item: "ÇİMENTO 25 KG.", amount: 250, unit: "TRB", unitcost: 60 },
                { id:1693861667285, date: "02.06.2023", item: "BEYAZ ÇİMENTO 25 KG.", amount: 1, unit: "TRB", unitcost: 140 },
                { id:1693861667285, date: "09.06.2023", item: "TAHSİLAT EFT", amount: 0, unit: "", unitcost: 33327 },
                { id:1693861667285, date: "09.06.2023", item: "ÇİMENTO 25 KG.", amount: 40, unit: "TRB", unitcost: 60 },
                { id:1693861667285, date: "10.06.2023", item: "ÇİMENTO 25 KG.", amount: 250, unit: "TRB", unitcost: 60 },
                { id:1693861667285, date: "16.06.2023", item: "BEYAZ ÇİMENTO 25 KG.", amount: 2, unit: "TRB", unitcost: 140 },
                { id:1693861667285, date: "16.06.2023", item: "BEYAZ MOZAYİK", amount: 2, unit: "TRB", unitcost: 50 },
                { id:1693861667285, date: "19.06.2023", item: "ÇİMENTO 25 KG.", amount: 360, unit: "TRB", unitcost: 60 },
                { id:1693861667285, date: "07.07.2023", item: "TAHSİLAT EFT", amount: 0, unit: "", unitcost: 39380 },
                { id:1693861667285, date: "06.07.2023", item: "ÇİVİ", amount: 100, unit: "KG", unitcost: 35 },
                { id:1693861667285, date: "18.07.2023", item: "TAVLI TEL", amount: 50, unit: "KG", unitcost: 39.92 },
                { id:1693861667285, date: "19.07.2023", item: "ÇİMENTO 25 KG.", amount: 200, unit: "TRB", unitcost: 63 },
                { id:1693861667285, date: "22.07.2023", item: "ÇİMENTO 25 KG.", amount: 40, unit: "TRB", unitcost: 63 },
                { id:1693861667285, date: "22.07.2023", item: "ÇİMENTO 25 KG.", amount: 280, unit: "TRB", unitcost: 63 },
                { id:1693861667285, date: "26.07.2023", item: "ÇİMENTO 25 KG.", amount: 200, unit: "TRB", unitcost: 63 },
                { id:1693861667285, date: "02.08.2023", item: "ÇİMENTO 25 KG.", amount: 360, unit: "TRB", unitcost: 63 },
                { id:1693861667285, date: "09.08.2023", item: "ÇİVİ", amount: 50, unit: "KG", unitcost: 36 },
                { id:1693861667285, date: "12.08.2023", item: "ÇİMENTO 25 KG.", amount: 200, unit: "TRB", unitcost: 63 },
                { id:1693861667285, date: "14.08.2023", item: "TAHSİLAT EFT", amount: 0, unit: "", unitcost: 73530 },
                { id:1693861667285, date: "19.08.2023", item: "ÇİMENTO 25 KG.", amount: 150, unit: "TRB", unitcost: 63 }
            ],
            1693861667286: [
                { id:1693861667286, date: "01.03.2023", item: "DEVİR BORÇ", amount: 1, unit: "", unitcost: 7497 },
                { id:1693861667286, date: "14.03.2023", item: "SIVA ALÇISI", amount: 10, unit: "TRB", unitcost: 80 },
                { id:1693861667286, date: "15.04.2023", item: "NAKİT TAHSİLAT", amount: 0, unit: "", unitcost: 5000 },
                { id:1693861667286, date: "04.05.2023", item: "ÇİMENTO 25 KG", amount: 5, unit: "TRB", unitcost: 63 },
                { id:1693861667286, date: "04.05.2023", item: "KİREÇ", amount: 1, unit: "TRB", unitcost: 80 },
                { id:1693861667286, date: "04.05.2023", item: "ELDİVEN", amount: 2, unit: "ADET", unitcost: 15 },
                { id:1693861667286, date: "04.05.2023", item: "ÇİMENTO 25 KG", amount: 50, unit: "TRB", unitcost: 63 },
                { id:1693861667286, date: "04.05.2023", item: "KİREÇ", amount: 10, unit: "TRB", unitcost: 80 },
                { id:1693861667286, date: "04.05.2023", item: "SATEN ALÇI", amount: 1, unit: "TRB", unitcost: 100 },
                { id:1693861667286, date: "05.05.2023", item: "EL ARABASI  DUBLEKS", amount: 1, unit: "ADET", unitcost: 900 },
                { id:1693861667286, date: "12.05.2023", item: "ÇİMENTO 25 KG", amount: 9, unit: "TRB", unitcost: 63 },
                { id:1693861667286, date: "12.05.2023", item: "KİREÇ", amount: 3, unit: "TRB", unitcost: 80 },
                { id:1693861667286, date: "15.05.2023", item: "ÇİMENTO 25 KG", amount: 10, unit: "TRB", unitcost: 63 },
                { id:1693861667286, date: "15.05.2023", item: "KİREÇ", amount: 3, unit: "TRB", unitcost: 80 },
                { id:1693861667286, date: "15.05.2023", item: "ELDİVEN", amount: 1, unit: "ADET", unitcost: 15 },
                { id:1693861667286, date: "16.05.2023", item: "ÇİMENTO 25 KG", amount: 10, unit: "TRB", unitcost: 63 },
                { id:1693861667286, date: "16.05.2023", item: "KİREÇ", amount: 3, unit: "TRB", unitcost: 80 },
                { id:1693861667286, date: "20.05.2023", item: "SIVA FİLESİ", amount: 1, unit: "TOP", unitcost: 500 },
                { id:1693861667286, date: "20.05.2023", item: "STRAFOR 10 DNS.", amount: 1, unit: "PAKET", unitcost: 200 },
                { id:1693861667286, date: "23.05.2023", item: "SIVA FİLESİ", amount: 1, unit: "TOP", unitcost: 500 },
                { id:1693861667286, date: "26.05.2023", item: "NAKİT TAHSİLAT", amount: 0, unit: "", unitcost: 7000 },
                { id:1693861667286, date: "26.05.2023", item: "ÇİMENTO 25 KG", amount: 20, unit: "TRB", unitcost: 63 },
                { id:1693861667286, date: "26.05.2023", item: "KİREÇ", amount: 10, unit: "TRB", unitcost: 80 },
                { id:1693861667286, date: "29.05.2023", item: "MANTOLAMA YAPIŞTIRICI", amount: 10, unit: "TRB", unitcost: 90 },
                { id:1693861667286, date: "29.05.2023", item: "ELDİVEN", amount: 2, unit: "ADET", unitcost: 15 },
                { id:1693861667286, date: "02.06.2023", item: "SIVA ALÇISI", amount: 12, unit: "TRB", unitcost: 80 },
                { id:1693861667286, date: "05.06.2023", item: "SIVA ALÇISI", amount: 6, unit: "TRB", unitcost: 80 },
                { id:1693861667286, date: "05.06.2023", item: "ELDİVEN", amount: 1, unit: "ADET", unitcost: 15 },
                { id:1693861667286, date: "06.06.2023", item: "SIVA ALÇISI", amount: 15, unit: "TRB", unitcost: 80 },
                { id:1693861667286, date: "07.06.2023", item: "SATEN ALÇI", amount: 1, unit: "TRB", unitcost: 100 },
                { id:1693861667286, date: "07.06.2023", item: "SIVA ALÇISI", amount: 2, unit: "TRB", unitcost: 80 },
            ],
            1693861667287: [
                { id:1693861667287, date: "14.01.2023", item: "NAKİT TAHSİLAT", amount: 0, unit: "", unitcost: 12000 },
                { id:1693861667287, date: "18.01.2023", item: "ÇİMENTO 25 KĞ", amount: 60, unit: "TRB", unitcost: 60 },
                { id:1693861667287, date: "24.04.2023", item: "ÇİMENTO 25 KĞ", amount: 50, unit: "TRB", unitcost: 60 },
                { id:1693861667287, date: "25.04.2023", item: "SIVA ALÇISI", amount: 2, unit: "TRB", unitcost: 75 },
                { id:1693861667287, date: "26.04.2023", item: "SIVA ALÇISI", amount: 2, unit: "TRB", unitcost: 75 },
                { id:1693861667287, date: "26.04.2023", item: "TAHSİLAT SİFTAH İÇİN", amount: 0, unit: "", unitcost: 15 },
                { id:1693861667287, date: "26.04.2023", item: "ÇİMENTO 25 KĞ", amount: 50, unit: "TRB", unitcost: 60 },
                { id:1693861667287, date: "27.04.2023", item: "SIVA ALÇISI", amount: 4, unit: "TRB", unitcost: 75 },
                { id:1693861667287, date: "28.04.2023", item: "ÇİMENTO 25 KĞ", amount: 50, unit: "TRB", unitcost: 60 },
                { id:1693861667287, date: "01.05.2023", item: "ÇİMENTO 25 KĞ", amount: 50, unit: "TRB", unitcost: 60 },
                { id:1693861667287, date: "02.05.2023", item: "SIVA ALÇISI", amount: 4, unit: "TRB", unitcost: 75 },
                { id:1693861667287, date: "03.05.2023", item: "TAHSİLAT NAKİT", amount: 0, unit: "", unitcost: 10000 },
                { id:1693861667287, date: "03.05.2023", item: "ÇİMENTO 25 KĞ", amount: 50, unit: "TRB", unitcost: 60 },
                { id:1693861667287, date: "05.05.2023", item: "ÇİMENTO 25 KĞ", amount: 50, unit: "TRB", unitcost: 60 },
                { id:1693861667287, date: "08.05.2023", item: "ÇİMENTO 25 KĞ", amount: 10, unit: "TRB", unitcost: 60 },
                { id:1693861667287, date: "09.05.2023", item: "ÇİMENTO 25 KĞ", amount: 15, unit: "TRB", unitcost: 60 },
                { id:1693861667287, date: "11.05.2023", item: "ÇİMENTO 25 KĞ", amount: 15, unit: "TRB", unitcost: 60 },
                { id:1693861667287, date: "11.05.2023", item: "ÇİMENTO 25 KĞ", amount: 15, unit: "TRB", unitcost: 60 },
                { id:1693861667287, date: "12.05.2023", item: "ÇİMENTO 25 KĞ", amount: 10, unit: "TRB", unitcost: 60 },
                { id:1693861667287, date: "12.05.2023", item: "TAHSİLAT NAKİT", amount: 0, unit: "", unitcost: 5000 },
            ],
            1693861667288: [
                { id:1693861667288, date: "26.05.2023", item: "KARTONPİYER ALÇI", amount: 2, unit: "TRB", unitcost: 75 },
                { id:1693861667288, date: "14.07.2023", item: "ÇİMENTO", amount: 50, unit: "TRB", unitcost: 65 },
                { id:1693861667288, date: "14.07.2023", item: "NAKLİYE HAMALİYE", amount: 1, unit: "SEFER", unitcost: 250 },
                { id:1693861667288, date: "19.07.2023", item: "MANTOLAMA SIVASI", amount: 30, unit: "TRB", unitcost: 115 },
                { id:1693861667288, date: "19.07.2023", item: "NAKLİYE HAMALİYE", amount: 1, unit: "SEFER", unitcost: 250 },
                { id:1693861667288, date: "21.07.2023", item: "MANTOLAMA SIVASI", amount: 35, unit: "TRB", unitcost: 115 },
                { id:1693861667288, date: "21.07.2023", item: "MANTOLAMA YAPIŞTIRICI", amount: 10, unit: "TRB", unitcost: 110 },
                { id:1693861667288, date: "21.07.2023", item: "ÇİMENTO", amount: 40, unit: "TRB", unitcost: 65 },
                { id:1693861667288, date: "21.07.2023", item: "NAKLİYE HAMALİYE", amount: 1, unit: "SEFER", unitcost: 350 },
                { id:1693861667288, date: "26.07.2023", item: "DEKORATİF SIVA", amount: 6, unit: "TRB", unitcost: 140 },
                { id:1693861667288, date: "26.07.2023", item: "TAHSİLAT EFT", amount: 0, unit: "", unitcost: 10000 },
                { id:1693861667288, date: "28.07.2023", item: "ÇİMENTO", amount: 40, unit: "TRB", unitcost: 65 },
                { id:1693861667288, date: "28.07.2023", item: "NAKLİYE HAMALİYE", amount: 1, unit: "SEFER", unitcost: 250 },
                { id:1693861667288, date: "03.08.2023", item: "MANTOLAMA YAPIŞTIRICI", amount: 2, unit: "TRB", unitcost: 110 },
                { id:1693861667288, date: "03.08.2023", item: "TAHSİLAT EFT", amount: 0, unit: "", unitcost: 7000 },
                { id:1693861667288, date: "04.08.2023", item: "SIVA ALÇISI", amount: 150, unit: "TRB", unitcost: 85 },
                { id:1693861667288, date: "04.08.2023", item: "SATEN ALÇISI", amount: 10, unit: "TRB", unitcost: 115 },
                { id:1693861667288, date: "04.08.2023", item: "ALÇI KÖŞEBENT", amount: 200, unit: "ADET", unitcost: 13 },
                { id:1693861667288, date: "04.08.2023", item: "NAKLİYE HAMALİYE", amount: 1, unit: "SEFER", unitcost: 450 },
                { id:1693861667288, date: "15.08.2023", item: "SIVA ALÇISI", amount: 150, unit: "TRB", unitcost: 85 },
                { id:1693861667288, date: "15.08.2023", item: "SATEN ALÇISI", amount: 10, unit: "TRB", unitcost: 115 },
                { id:1693861667288, date: "15.08.2023", item: "NAKLİYE HAMALİYE", amount: 1, unit: "SEFER", unitcost: 450 },
                { id:1693861667288, date: "15.08.2023", item: "KALEKİM", amount: 1, unit: "TRB", unitcost: 150 },
                { id:1693861667288, date: "17.08.2023", item: "TAHSİLAT EFT", amount: 0, unit: "", unitcost: 15000 },
                { id:1693861667288, date: "22.08.2023", item: "ALÇI KÖŞEBENT", amount: 50, unit: "ADET", unitcost: 13 },
                { id:1693861667288, date: "23.08.2023", item: "SIVA ALÇISI", amount: 100, unit: "TRB", unitcost: 85 },
                { id:1693861667288, date: "23.08.2023", item: "ALÇI KÖŞEBENT", amount: 100, unit: "ADET", unitcost: 13 },
                { id:1693861667288, date: "23.08.2023", item: "NAKLİYE HAMALİYE", amount: 1, unit: "SEFER", unitcost: 400 },
            ]
        };
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
                txt_rep_tit: "Marmara İnşaat Malzemeleri Satış - Ödeme Raporu",
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

        this.transactions[customer].forEach(element => {            
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
        });

        return { details: transactionsTable, totalSell: this.FormatCurr(sells), totalPay: this.FormatCurr(pays), net: this.FormatCurr(net), ld: Math.sign(net) };
    }
}
