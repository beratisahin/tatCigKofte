import "./hakkımızda.css";
import React from "react";
import useDocumentTitle from "../../useDocumentTitle.js";

function Hakkimizda() {
  useDocumentTitle("Hakkımızda - Vezirköprü Tat Çiğ Köfte");
  return (
    <div className="col-12">
      <div
        className="card m-4"
        style={{
          align: "center",
          backgroundColor: "#f8f7fb",
          borderRadius: "5px",
        }}
      >
        <div className="card-body col-12" style={{ padding: "3rem" }}>
          <br />

          <p class="hizmetyazi">
            Adıyaman yöresinde eski bir medeniyetin kralı olan Kral Nemrut, Hz.
            İbrahim’i tek tanrıya inandığı için yakmaya karar verir. Halkına
            verdiği emir ile krallıktaki bütün ağaç ve odun parçalarını büyük
            bir meydanda toplatır. Evlerde yemek pişirmek için odun parçası
            kalmamıştır ve ateş yakılmasını yasaklamıştır. Hz. İbrahim’i yakmak
            için meydana toplanan ağaç ve odun parçaları yakılacak tek ateştir.
            Halk kralın emriyle günlerce tahta parçalarını meydanda toplamıştır.
            Dağda avlandığı için bu emirden habersiz olan bir avcı, avladığı
            geyiği evine getirerek eşinden pişirmesini ister. Eş kralın ateş
            yakma yasağını anlatır. Avcı da çaresiz emre itaat eder. Avcı
            geyiğin sağ arka budunu ayırır, ince ince taşla döverek ezer.
            Bulgur, biber ve tuz katarak, ezdiği et ile bunları iyice yoğurur.
            Çiğ köftenin ilk kez bu avcı ve ailesi tarafından yapıldığı rivayet
            edilir. Hz. İbrahim’in ateşe atıldığı yaklaşık 4 bin yıl önce ortaya
            çıkan çiğ köfte, bir yemek çeşidi olarak o günden günümüze kadar
            gelir.
          </p>

          <p class="hizmetyazi">
            Çiğ köfte; bulgur, isot kıyılmış et, salça, soğan, maydanoz ve
            çeşitli baharatların yoğurulup karıştırılması ile hazırlanan, ısıl
            işlem görmeden (pişirilmeden) tüketilen, güneydoğu mutfağının
            dünyaya armağanı olan bir yiyecektir. Adıyaman’nın dışında başta
            Şanlıurfa’da, Adana,Gaziantep, Diyarbakır, Malatya, Elazığ, Mardin
            gibi illerde de çiğ köfteler yapılır. Hatta Şanlıurfa’da ‘yımırtalı
            küfte’ adını verdikleri çiğ köfte çeşidini de yaparlar. Genellikle
            ince ve uzun (sıkma) köfte parçaları şeklinde ve marul yaprağı ile
            servis edilir. Şanlıurfa’da açık ekmek bazı yörelerde de lavaş
            ekmeği ile tüketilir. Çiğ köfte Şanlıurfa’nın mı, Adıyaman’ın mı
            yıllardır tartışılır. Güneydoğu coğrafyasının olduğu kesin. İsotsuz
            çiğ köfte olmayacağına göre, isotun anavatanı Urfa olduğuna göre,
            başka söze gerek yok!
          </p>

          <p class="hizmetyazi">
            <b>
              <br />
              Çiğ Köftenin Faydaları Nelerdir?
            </b>
            <br /> Çiğ köfte; hem lezzetli hem de bütçe dostu olması nedeniyle
            herkesin vazgeçilmez bir yemeği haline geldi. Anadolu’nun önemli
            lezzetlerinin başında gelen çiğ köfte, tadının yanı sıra önemli
            faydaları da bulunmaktadır. Çiğ köfteye olan sevdamızı iki katına
            çıkaracak faydaları şunlardır; <br />
            <b>Kanserden korur</b>
            <br /> İçinde bulunan isot sayesinde kansere karşı kalkan oluyor.
            İsotta bulunan likopen ve kapsaisin bileşeni; bağırsak, prostat
            kanserine karşı koruma sağlıyor. Kapsaisin maddesi ise prostat
            tümörleri ile savaşır. <br />
            <b>Kolesterolü düşürür</b>
            <br /> Yine buradaki asıl görevi isot üstleniyor. Baharatın içinde
            bulunan C ve E vitaminleri kötü kolesterolü düşürmede son derece
            etkili. Eğer çiğ köftenin içinde bir de ceviz varsa kötü kolesterole
            karşı çifte meydan okunmuş oluyor. Ceviz, iyi kolesterol oranını
            yükseltiyor ve damar tıkanıklığının önüne geçiyor. <br />
            <b>Kilo vermeye yardımcı olur</b>
            <br /> Çiğ köfte içinde yer alan malzemeler, lifli yapıları
            sayesinde uzun süre tok tutarak kilo verme sürecini hızlandırabilir.
            Vücuttaki toksinlerin atılmasına yardımcı olur. Kalori oranı da
            düşük olduğu için lavaş tüketmeden öğünlerinizde tercih
            edebilirsiniz. <br />
            <b>Bağışıklık sistemini güçlendirir</b>
            <br /> İçinde bulunan baharatlar sayesinde bağışıklık sistemini
            güçlendirir A vitamini yönünden zengin olan isot, hastalıkların
            önüne geçer. <br />
            <b>Beyin gelişimini destekler</b>
            <br /> Ceviz içinde bulunan Omega-3, beyin gelişimine katkı sağlayan
            doğal bir kaynaktır. Omega-3 yağ oranı düşük olan çocuklarda öğrenim
            ve davranış bozukluğu gözlenebilir. Eğer çocuğunuza ceviz
            yediremiyorsanız onun yerine cevizle hazırlanan çiğ köfteyi
            yedirebilirsiniz.
            <br />
            <b>Folik asit bakımından güçlüdür</b>
            <br /> Çiğ köftenin ana malzemesi olan bulgur, folik asit bakımından
            zengindir.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hakkimizda;
