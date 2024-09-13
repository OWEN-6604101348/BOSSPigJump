import { useState } from "react";

export default function Gallery() {
  const [level, setLevel] = useState(1);

  const pigImage = level > 199 
    ? "https://image.fluxpro.ai/custom/f80ea3e8-63ea-43f3-95cb-8893ba128be4.jpg" // แทนที่ด้วย URL รูปภาพใหม่
    : "https://www.khaosod.co.th/wpapp/uploads/2024/09/Nong-Moo-Deng4548-5.jpg";

  return (
    <>
      <h1>หมูเด้ง เจ้าชายองค์สุดท้ายเเห่งนครฮิปโป</h1>
      <h1>ภัยพิบัติ ระดับ อาจารย์ DATABASE</h1>
      <h1>ระดับ {level} </h1>
      <img
        src={pigImage}
        alt="หมูเด้ง" />
      <div className="food">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgsEz8s5qDhAgRQvfHQbcCZwaDH-vYKnAwvg&s"
          alt="แตงโม"
          onClick={() => setLevel(level + 20)} /> 
        <img
          src="https://www.dzd.co.uk/wp-content/uploads/2020/05/36051.jpg"
          alt="ฟักทอง"
          onClick={() => setLevel(level + 10)} /> 
        <img
          src="https://www.luckyworm.net/wp-content/uploads/2023/02/%E0%B8%AB%E0%B8%8D%E0%B9%89%E0%B8%B2%E0%B8%84%E0%B8%B2.jpg"
          alt="เหญ่า"
          onClick={() => setLevel(level + 1)} />
      </div>
    </>
  );
}
