<template>
  <footer :class="[`footer`, className || ``]">
    <div class="frame-743">
      <div class="logoname heading24px-bold">FILMZ</div>
      <div class="frame-713">
        <div class="support title20px-medium">Support</div>
        <div class="frame-712 title16px-regular">
          <div class="location">Braga, Portugal</div>
          <div class="email">exclusive@gmail.com</div>
          <div class="number-8">+88015-88888-9999</div>
        </div>
      </div>
      <div class="frame-709">
        <div class="quick-link title20px-medium">Quick Link</div>
        <div class="frame-708 title16px-regular">
          <div class="privacy-policy">Privacy Policy</div>
          <div class="terms-of-use">Terms Of Use</div>
          <div class="faq">FAQ</div>
          <div class="place-4">Contact</div>
        </div>
      </div>
    </div>
    <img
      class="line-1"
      src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/line-1.svg"
      alt="Line 1"
    />
    <p class="copyright-2025-all-right-reserved title16px-regular">Copyright 2025. All right reserved</p>
  </footer>
</template>

<script>
export default {
  name: "XFooter",
  props: ["className"],
};
</script>

<style>
.footer {
  align-items: center;
  background-color: var(--licorice);
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  height: auto;
  justify-content: flex-start;
  margin-top: 405px;
  min-height: 440px;
  padding: 26px 0;
  width: 1540px;
  z-index: 2;
}

.frame-743 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  height: 196px;
  margin-left: 121px;
  margin-top: 64px;
  min-width: 576px;
}

.logoname {
  color: var(--text);
  font-weight: 700;
  line-height: 24px;
  margin-top: -1px;
  min-width: 76px;
  white-space: nowrap;
}

.frame-713 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-left: 129px;
  min-height: 156px;
  width: 175px;
}

.support,
.quick-link {
  color: var(--text);
  font-weight: 500;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}

.frame-712 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 104px;
  width: 175px;
}

.location {
  color: var(--text);
  font-weight: 400;
  line-height: 24px;
  margin-top: -1px;
  width: 175px;
}

.email,
.number-8,
.terms-of-use,
.faq,
.place-4 {
  color: var(--text);
  font-weight: 400;
  line-height: 24px;
  white-space: nowrap;
}

.frame-709 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-left: 87px;
  min-height: 196px;
  width: 109px;
}

.frame-708 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 144px;
  width: 109px;
}

.privacy-policy {
  color: var(--text);
  font-weight: 400;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.line-1 {
  height: 1px;
  margin-top: 88px;
  object-fit: cover;
  width: 1440px;
}

.copyright-2025-all-right-reserved {
  color: var(--primary);
  font-weight: 400;
  line-height: 24px;
  margin-top: 15px;
  min-width: 264px;
  white-space: nowrap;
}

.footer.footer-1 {
  margin-top: 2170px;
  z-index: 4;
}

.footer.footer-2 {
  margin-top: unset;
  z-index: unset;
}

.footer.footer-3 {
  margin-top: 594px;
  z-index: 8;
}
</style>
