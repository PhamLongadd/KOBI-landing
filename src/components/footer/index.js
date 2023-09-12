import styles from "./index.module.css";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src="Asset 1.png" alt="icon" />
      </div>
      <div className={styles.title}>
        <div className={styles.contactInfor}>
          <h3>Thông tin liên hệ</h3>
          <p>
            MST: 0316625505
            <br />
            Ngày cấp: 12/09/2023
            <br />
            Nơi cấp: Sở kế hoạch và đầu tư Hà Nội.
            <br />
            Địa chỉ: Chung cư Hope Recidence - Phúc Đồng - Long Biên - Hà Nội.
            <br />
            Hotline: 18008888
            <br />
            Email: cskh@kobifood.vn
          </p>
        </div>
        <div className={styles.introduce}>
          <h3>Giới Thiệu</h3>
          <p>
            Tại KOBI FOOD, chúng tôi luôn đặt tiêu chí phục vụ “TƯƠI NGON – AN
            TOÀN – TIỆN ÍCH” để đem đến sự hài lòng nhất cho khách hàng
          </p>
        </div>
        <div className={styles.wrapperInfor}>
          <div className={styles.chanelInfor}>
            <h3>Theo dõi chúng tôi</h3>
            <div className={styles.imgChanel}>
              <img
                src="https://theme.hstatic.net/200000528965/1001037678/14/fb_ico.png?v=250"
                alt="facebook"
              />
              <img
                src="https://theme.hstatic.net/200000528965/1001037678/14/tw_ico.png?v=250"
                alt="zalo"
              />
              <img
                src="https://theme.hstatic.net/200000528965/1001037678/14/insta_ico.png?v=250"
                alt="instagram"
              />
              <img
                src="https://theme.hstatic.net/200000528965/1001037678/14/gp_ico.png?v=250"
                alt="tiktok"
              />
            </div>
          </div>
          <div className={styles.payment}>
            <h3>Phương Thức Thanh Toán</h3>
            <img
              src="https://theme.hstatic.net/200000356473/1001087963/14/product_trustbadge.jpg?v=30"
              alt="pay"
            />
          </div>
          <img
            className={styles.accuracy}
            src="https://theme.hstatic.net/200000356473/1001087963/14/logo_bct.png?v=30"
            alt="bo"
          />
        </div>
      </div>
    </div>
  );
}
