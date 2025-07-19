function validateForm() {
  const ID = document.getElementById("id").value.trim();
  if (ID.length !== 13 || !/^\d{13}$/.test(ID)) {
    alert("กรุณากรอกเลขบัตรประชาชนให้ครบ 13 หลัก (ตัวเลขเท่านั้น)");
    return false;
  }

  const title = document.getElementById("title").value;
  if (title == "00") {
    alert("กรุณาเลือกคำนำหน้า");
    return false;
  }

  const fname = document.getElementById("fname").value.trim();
  if (fname.length < 2 || fname.length > 20) {
    alert("ชื่อ ควรมีความยาว 2-20 ตัวอักษร");
    return false;
  }

  const lname = document.getElementById("lname").value.trim();
  if (lname.length < 2 || lname.length > 30) {
    alert("นามสกุล ควรมีความยาว 2-30 ตัวอักษร");
    return false;
  }

  const address = document.getElementById("address").value.trim();
  if (address.length < 15) {
    alert("ที่อยู่ควรมีความยาวอย่างน้อย 15 ตัวอักษร");
    return false;
  }

  const tumbon = document.getElementById("tumbon").value.trim();
  if (tumbon.length < 2) {
    alert("ตำบล/แขวง ควรมีความยาวอย่างน้อย 2 ตัวอักษร");
    return false;
  }

  const amphur = document.getElementById("amphur").value.trim();
  if (amphur.length < 2) {
    alert("อำเภอ/เขต ควรมีความยาวอย่างน้อย 2 ตัวอักษร");
    return false;
  }

  const province = document.getElementById("province").value;
  if (province == "00") {
    alert("กรุณาเลือกจังหวัด");
    return false;
  }

  const postcode = document.getElementById("postcode").value.trim();
  if (postcode.length !== 5 || !/^\d{5}$/.test(postcode)) {
    alert("รหัสไปรษณีย์ควรเป็นตัวเลข 5 หลัก");
    return false;
  }

  alert("Submit");
  return true;
}