import React from "react";
import Dizayn from "../../../../assets/img/dizayn.webp";
import { Link } from "react-router-dom";
import { CategoryBox } from "./style";

function Category() {
  return (
    <CategoryBox>
      <div className="container">
        <h3 className="category-name">Bizning kurslarimiz</h3>
        <div className="category-list">
          <div className="category-item">
            <img src={Dizayn} alt="" className="category-img" />
            <h4 className="category-subname">Interyer dizayn</h4>
            <p className="category-text">
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
            <Link to="/category" className="category-link">
              Kursni sotib olish
            </Link>
          </div>
          <div className="category-item">
            <img src={Dizayn} alt="" className="category-img" />
            <h4 className="category-subname">Interyer dizayn</h4>
            <p className="category-text">
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
            <Link to="/category" className="category-link">
              Kursni sotib olish
            </Link>
          </div>
          <div className="category-item">
            <img src={Dizayn} alt="" className="category-img" />
            <h4 className="category-subname">Interyer dizayn</h4>
            <p className="category-text">
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
            <Link to="/category" className="category-link">
              Kursni sotib olish
            </Link>
          </div>
        </div>
      </div>
    </CategoryBox>
  );
}

export default Category;
