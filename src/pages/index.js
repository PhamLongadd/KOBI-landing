import styles from "./index.module.css";
import DefaultLayout from "@/components/layouts/defaultLayout";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageList = ["anh1.png", "anh2.png", "anh4.png"];
  const intervalRef = useRef(null);

  const productList = [
    {
      id: 1,
      name: "Hải Sản",
      imageSrc: "haisan.jpg",
      description:
        "Hải sản tươi sống được ngư dân đánh bắt và được bảo tồn hương vị tự nhiên thông qua công nghệ cấp đông hiện đại tại nguồn gốc, giúp bạn thưởng thức hương vị biển ngay tại nhà.",
    },
    {
      id: 2,
      name: "Thịt Trâu Gác Bếp",
      imageSrc: "gacbep.png",
      description:
        "Hải sản tươi sống được ngư dân đánh bắt và được bảo tồn hương vị tự nhiên thông qua công nghệ cấp đông hiện đại tại nguồn gốc, giúp bạn thưởng thức hương vị biển ngay tại nhà.",
    },
    {
      id: 3,
      name: "Hoa Quả",
      imageSrc: "hoaqua.jpg",
      description:
        "Hải sản tươi sống được ngư dân đánh bắt và được bảo tồn hương vị tự nhiên thông qua công nghệ cấp đông hiện đại tại nguồn gốc, giúp bạn thưởng thức hương vị biển ngay tại nhà.",
    },
    {
      id: 4,
      name: "Thực Phẩm Chế Biến",
      imageSrc: "chebien.png",
      description:
        "Hải sản tươi sống được ngư dân đánh bắt và được bảo tồn hương vị tự nhiên thông qua công nghệ cấp đông hiện đại tại nguồn gốc, giúp bạn thưởng thức hương vị biển ngay tại nhà.",
    },
  ];

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(changeImage, 6000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.thumbnail}>
        <div
          className={styles.fadeContainer}
          style={{
            backgroundImage: `url(${imageList[currentImageIndex]})`,
          }}
        >
          <div className={styles.owlDotContainer}>
            {imageList.map((image, index) => (
              <button
                key={index}
                role="button"
                className={`${styles.owlDot} ${
                  index === currentImageIndex ? styles.activeDot : ""
                }`}
                onClick={() => handleClick(index)}
              >
                <FontAwesomeIcon icon={faCircle} />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.aboutUs}>
        <div className={styles.wraperTitle}>
          <div className={styles.avatart}>
            <img src="avatar.png" alt="avatar" />
          </div>
          <div className={styles.title}>
            <span>
              <h1>KOBI FOOD </h1> -<h3>Nơi Trái Tim Vùng Miền Việt Nam</h3>
            </span>
            <div className={styles.content}>
              <p>
                Chào mừng bạn đến với KOBI FOOD <br /> Điểm đến đặc biệt dành
                riêng cho những người yêu thực phẩm độc đáo và hải sản tươi ngon
                của vùng miền Việt Nam. <br />
                Chúng tôi tự hào mang đến cho bạn những sản phẩm chất lượng tốt
                nhất, được đóng gói và cấp đông tại nguồn gốc để bảo tồn hương
                vị tự nhiên và dinh dưỡng tối ưu.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapperProduct}>
        <h1>SẢN PHẨM NỔI BẬT VÀ ĐỘC QUYỀN</h1>
        <div className={styles.listProduct}>
          {productList.map((product) => (
            <div className={styles.product} key={product.id}>
              <div className={styles.productInfo}>
                <img src={product.imageSrc} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </div>
              <div className={styles.btn}>
                <button>
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span>Đặt Hàng</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
Home.Layout = DefaultLayout;
