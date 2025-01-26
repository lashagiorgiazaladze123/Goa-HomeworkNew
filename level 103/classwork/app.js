function printKeyValues(objects) {
    objects.forEach(obj => {
      for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
      }
    });
  }
  
  // მაგალითი
  const emails = [
    { subject: "მოგზაურობა", content: "ნუ დაგავიწყდებათ თქვენი ბილეთები", receivedDate: "2024-12-15" },
    { subject: "მოხსენება", content: "გთხოვთ, წაიკითხოთ ბოლო ანგარიში", receivedDate: "2024-12-12" },
    { subject: "მოგზაურობა", content: "ძალიან კარგი შეთავაზება მაქვს", receivedDate: "2024-12-13" },
    { subject: "გაცნობიერება", content: "შესაძლებელია მცირე შეცდომები", receivedDate: "2024-12-10" }
  ];
  

  printKeyValues(emails);
  