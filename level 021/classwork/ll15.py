# ასაკის და შესყიდვის თანხის შეყვანა
age = int(input("შეიყვანეთ თქვენი ასაკი: "))
total_purchase = float(input("შეიყვანეთ შესყიდვის მთლიანი თანხა: "))

# დარწმუნდით, რომ ასაკი და შესყიდვის თანხა არის დადებითი
if age < 0 or total_purchase < 0:
    print("ასაკი და შესყიდვის თანხა უნდა იყოს დადებითი რიცხვები.")
else:
    # ფასდაკლების წესები
    discount = 0
    if age > 60:
        discount += 0.10  # 10% ფასდაკლება ასაკისთვის
    if total_purchase >= 100:
        discount += 0.05  # 5% ფასდაკლება შესყიდვის თანხისთვის
    if age > 60 and total_purchase >= 100:
        discount += 0.05  # დამატებითი 5% ფასდაკლება ორივე კრიტერიუმის შესრულებისთვის

    # ფასდაკლების თანხის გამოთვლა
    discount_amount = total_purchase * discount
    final_price = total_purchase - discount_amount

    # შედეგის ჩვენება
    if discount > 0:
        print(f"თქვენ გაქვთ ფასდაკლების უფლება. ფასდაკლება არის {discount * 100}%.")
        print(f"ფასდაკლების თანხაა: ${discount_amount:.2f}. საბოლოო ფასი არის: ${final_price:.2f}.")
    else:
        print("თქვენ არ გაქვთ ფასდაკლების უფლება.")
