import React from "react";
import { InformationBox } from "./style";
import Button from "../../../../components/Button/Button";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function Information() {
  return (
    <InformationBox>
      <div className="container">
        <img
          src="https://en.idei.club/uploads/posts/2023-03/1679012450_en-idei-club-p-high-tech-furniture-dizain-1.jpg"
          alt="Furniture"
          className="information-img"
        />
        <div className="information-box">
          <div className="information-left">
            <h2 className="information-name">Interyer dizayn</h2>
            <p className="information-text">
              Interyer dizayn — binolarning ichki qismiga qaratilgan,
              atrof-muhit va insonlarning o'rtasida qulaylikni ta'minlaydigan
              dizayn sohasi. Bu soha bilan shug'ullanadiganlar esa interyer
              dizaynerlar deb atalib, binolarning ichki dizaynini qanday
              bo'lishini oldindan tayyorlab beradigan kasb egalari. Kurs
              davomida 3Ds Max, Vray, Corona programmalari bilan ishlashni
              o'rganasiz. Shuningdek, boshlang’ich bilimlar va loyihalarni
              tayyorlash ham o’rgatiladi. 1 oylik offline amaliyotda esa bir
              nechta interyer loyihalarini o'quvchilarimiz yasab o'z
              portfoliolarini to'ldirishadi.
            </p>
          </div>
          <div className="information-card">
            <div className="information-right">
              <span>
                <p>Darslar soni</p>
                <b>16</b>
              </span>
              <span>
                <p>Umumiy davomiyligi</p>
                <b>19 soat</b>
              </span>
              <span>
                <p>Narx</p>
                <h3>1,500,000 UZS</h3>
              </span>
              <Button
                title="Sotib olish"
                style={{
                  width: "100%",
                  backgroundColor: "#00bafc",
                  color: "#fff",
                  borderRadius: "12px",
                }}
              />
            </div>
          </div>
        </div>
        <h2 className="information-name">Bizning bepul video darsliklarimiz</h2>
        <VideoPlayer />
      </div>
    </InformationBox>
  );
}

export default Information;
