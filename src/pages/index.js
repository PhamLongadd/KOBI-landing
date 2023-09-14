import styles from "./index.module.css";
import DefaultLayout from "@/components/layouts/defaultLayout";
import Contact from "@/components/contact";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCartShopping,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

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
      name: "Gia Vị Vùng Miền",
      imageSrc: "giavi.jpg",
      description:
        "Những gia vị đặc sản vùng miền tại chúng tôi là bí quyết để tạo ra những món ăn ngon đậm đà và độc đáo. Chúng được lựa chọn tỉ mỉ từ nguồn gốc chất lượng cao và là điểm nhấn không thể thiếu trong bếp của bạn.",
    },
    {
      id: 3,
      name: "Hoa Quả Sạch",
      imageSrc: "hoaqua.jpg",
      description:
        "Hoa quả sạch tại chúng tôi là sự kết hợp hoàn hảo giữa hương vị tươi ngon và nguồn cung cấp uy tín. Chúng tôi cam kết đem đến cho bạn những sản phẩm tươi ngon nhất, đảm bảo chất lượng từ nguồn gốc đáng tin cậy.",
    },
    {
      id: 4,
      name: "Thực Phẩm Chế Biến",
      imageSrc: "chebien.png",
      description:
        "Sản phẩm chế biến của chúng tôi đảm bảo sự an toàn, sạch sẽ và tiện ích tối đa cho bạn. Chúng là lựa chọn hoàn hảo để tận hưởng ẩm thực mà không cần lo lắng về chất lượng và sự tiện lợi.",
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
      <Head>
        <title>KOBI Food</title>
      </Head>
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
              <div className={styles.wrapperBtn}>
                <button className={styles.btn}>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className={styles.iconBtn}
                  />
                  <span>Đặt Hàng</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.allProduct}>
          <button className={styles.allProductBtn}>
            <span>
              Xem tất cả <h4>Sản Phẩm</h4>
              <FontAwesomeIcon
                icon={faCircleChevronRight}
                className={styles.iconBtn}
              />
            </span>
          </button>
        </div>
      </div>
      <Contact />
    </div>
  );
}
Home.Layout = DefaultLayout;
